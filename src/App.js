import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

import NotesLists from "./components/NotesLists";
import Search from "./components/Search";
import Header from "./components/Header";

import "./index.css";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "This Is My First Note",
      text: "First Note",
      date: "2022/10/01",
    },
    {
      id: nanoid(),
      title: "This Is My Second Note",
      text: "Second Note",
      date: "2022/11/11",
    },
    {
      id: nanoid(),
      title: "This Is My Third Note",
      text: "Third Note",
      date: "2022/12/24",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, SetDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    )

    if(savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    )
  }, [notes])

  const notesFliter = notes.filter(
    (note) =>
      note.title.toLocaleLowerCase().includes(searchText) ||
      note.text.toLocaleLowerCase().includes(searchText)
  );

  const addNoteHandler = (note) => {
    setNotes((prevNote) => {
      return [...prevNote, note];
    });
  };

  const deleteNoteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    console.log(newNotes);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header onDarkMode={SetDarkMode} />
        <Search onSearchNote={setSearchText} />
        <NotesLists
          notes={notesFliter}
          onAddNote={addNoteHandler}
          onDeleteNote={deleteNoteHandler}
        />
      </div>
    </div>
  );
};

export default App;
