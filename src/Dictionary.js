import React, {useState} from "react";

export default function Dictionary(){

    const [keywork, setKeywork] = useState("");


    function handleSubmit(event){
        event.preventDefault();
       alert(`Searching ${keywork}`);

    }

    function handleKeywork(event){
        setKeywork(event.target.value);
    } 

    return(
        <div className="Dictionary">
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywork}/>
        </form>
        </div>
    )
}