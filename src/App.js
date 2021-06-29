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

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
    }

  return (
    <div>
      <Header />

      <CreateArea onAdd={addNote}/>
      <Masonry
        breakpointCols={breakpoints} // 3
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
      
      {notes.map((note, index)=> (
        // <div key={note.id}>
          <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
        // </div>
        ))}
      </Masonry>
    </div>
  );
}

export default App;