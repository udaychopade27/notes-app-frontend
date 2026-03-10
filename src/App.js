import React, {useState, useEffect} from "react";
import {getNotes, addNote} from "./api";

function App(){

 const [notes,setNotes] = useState([]);
 const [text,setText] = useState("");

 const load = async () => {
   const res = await getNotes();
   setNotes(res.data);
 }

 const create = async () => {
   await addNote(text);
   setText("");
   load();
 }

 useEffect(()=>{
   load();
 },[])

 return (

  <div>

   <h1>Notes App</h1>

   <input
     value={text}
     onChange={(e)=>setText(e.target.value)}
   />

   <button onClick={create}>Add</button>

   <ul>
     {notes.map(n=>(
       <li key={n.id}>{n.text}</li>
     ))}
   </ul>

  </div>
 )
}

export default App;
