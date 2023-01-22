import { MdDeleteForever } from 'react-icons/md'

import './Note.css'
const Note = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id)
  }
    return (
      <div className="note">
        <h2 className='note__title'>{props.title}</h2>
        <p className='note__text'>{props.text}</p>
        <div className="note__footer">
            <small>{props.date}</small>
            <MdDeleteForever className="note__delete" size="1.3em" onClick={deleteHandler}/>
        </div>
      </div>
    );
  }
  
  export default Note;
  