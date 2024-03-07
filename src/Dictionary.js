import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"

export default function Dictionary(props){

    const [keywork, setKeywork] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);

    

    function handleResponse(response){
        setResults(response.data);
    }

    function search(){

    let apiKey = "9tc2ca054b9644af4a7a4ffo0b15b933";
    let word = `${keywork}`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word= ${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    }


    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywork(event){
    setKeywork(event.target.value);
    } 

    function load(){
        setLoaded(true);
        search();
    }

    if(loaded){
       return(
        <div className="Dictionary">
        <section>
            <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywork}/>
        </form>
        <div className="hint">
            suggested words: sunset, hope, kite, ocean...
        </div>
        </section>
        <Results results={results}/>
        </div>
    );  
    } else{
        load();
        return "Loading";

    }


}