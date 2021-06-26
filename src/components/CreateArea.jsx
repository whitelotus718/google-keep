import React, {useState} from 'react';

function CreateArea ({handleSubmit, onAdd}) {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(e){
        const { name, value } = e.target; //destructured

        setNote((preValue) =>{
            return {
                ...preValue,
                [name]: value,
            };
        });
    }

    function handleSubmit(e){
        onAdd(note)
        setNote({
            title: "",
            content: "",
        })
        e.prevent.default()
    }

    return (
        <div>
            <form>
                <input 
                value={note.title}
                type="text"
                placeholder="Title"
                name="title" 
                onChange={handleChange}
                />
                <p>
                    <textarea 
                    value={note.content}
                    name="content" 
                    placeholder="Take a note..."
                    onChange={handleChange}
                    ></textarea>
                </p>
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
}


export default CreateArea;