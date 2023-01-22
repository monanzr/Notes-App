import Note from './Note';
import { nanoid } from 'nanoid';
import AddNote from './AddNote';

import './NotesLists.css'
const NotesLists = (props) => {
  const saveNoteDataHandler = (enteredNoteData) => {
    const noteData = {
      id: nanoid(),
        ...enteredNoteData
    }
    props.onAddNote(noteData)
  }

    return (
      <div className='note-lists'>
        {props.notes.map((note) => <Note key={note.id} id={note.id} title={note.title} text={note.text} date={note.date} onDelete={props.onDeleteNote} />)}
        <AddNote onSaveNoteData={saveNoteDataHandler} />
      </div>
    );
  }
  
  export default NotesLists;
  