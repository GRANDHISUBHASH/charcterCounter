import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const CharacterCounterCard = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchedList, setSearchedList] = useState([])

  const inputValueChanged = event => {
    setInputValue(event.target.value)
  }

  const addButtonClicked = () => {
    const id = uuidv4()
    setSearchedList([...searchedList, {inputValue, id}])
    setInputValue('') // Clear input field after adding
  }

  return (
    <div className="fullCard">
      <div className="listCard">
        <h1>Count the Characters Like a Boss...</h1>
        <ul>
          {searchedList.length === 0 ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            </div>
          ) : (
            searchedList.map(eachItem => (
              <li key={eachItem.id}>
                <p>
                  {eachItem.inputValue}:{eachItem.inputValue.length}
                </p>
              </li>
            ))
          )}
        </ul>
      </div>
      <form className="inputCaedContainer">
        <h1>Character Counter</h1>
        <input
          type="text"
          onChange={inputValueChanged}
          value={inputValue}
          placeholder="Enter the Characters here"
        />
        <button type="button" onClick={addButtonClicked}>
          Add
        </button>
      </form>
    </div>
  )
}

export default CharacterCounterCard
