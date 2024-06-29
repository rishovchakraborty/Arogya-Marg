import React,{useState} from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const [adhar,setAdhar]=useState('');
    const handleChange_adhar = event => {
    setAdhar(event.target.value);
};
    const state={
        adhar,handleChange_adhar
    }
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;