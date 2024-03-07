import React, {useState} from "react";
import axios from "axios";

export default function Dictionary(){

    const [keywork, setKeywork] = useState("");

    function handleResponse(response){
        console.log(response);
    }


    function handleSubmit(event){
        event.preventDefault();
       alert(`Searching ${keywork}`);

    let apiKey = "9tc2ca054b9644af4a7a4ffo0b15b933";
    let word = `${keywork}`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word= ${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

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