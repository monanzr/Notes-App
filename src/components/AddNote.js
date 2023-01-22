
import { useState } from 'react';
import './Note.css'
import './AddNote.css'

const AddNote = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredText, setEnteredText] = useState("")
    const newDate = new Date().toJSON().slice(0,10).replace(/-/g,'/')
    const characterTitleLimit = 50;
    const characterTextLimit = 200;

    const titleHandler = (event) => {
        if(characterTitleLimit - event.target.value.length >= 0) {
            setEnteredTitle(event.target.value)
        }
    }

    const textHandler = (event) => {
        if(characterTextLimit - event.target.value.length >= 0) {
            setEnteredText(event.target.value)
        }
    }

    const saveHandler = () => {
        const noteData = {
            title: enteredTitle,
            text: enteredText,
            date: newDate.toString()
        }
        if(enteredTitle.trim().length > 0 && enteredText.trim().length > 0) {
            props.onSaveNoteData(noteData)
            setEnteredTitle("")
            setEnteredText("")
        }
    }

    return (
      <div className='note'>
        <textarea className='note__title' value={enteredTitle} onChange={titleHandler} placeholder="Add Title..."></textarea>
        <textarea className='note__text' value={enteredText} onChange={textHandler} placeholder="Add Note..."></textarea>
        <div className="note__footer">
            <p>{characterTextLimit - enteredText.length} remaining</p>
            <button type='button' onClick={saveHandler} className='add-note__btn'>Save</button>
        </div>
      </div>
    );
  }
  
  export default AddNote;
  