import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Masonry from 'react-masonry-css'

function App(props) {
  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
    // setNotes([...notes, newNote])
  }

  function deleteNote(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }

  return (
    <div>
      <Header />

      <CreateArea onAdd={addNote}/>
      {notes.map((note, index)=> (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
        ))}
      {/* <Note /> */}
    </div>
  );
}

export default App;