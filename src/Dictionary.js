import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"
import Photos from "./Photos";


export default function Dictionary(props){

    const [keywork, setKeywork] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    

    function handleResponse(response){
        setResults(response.data);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){

    let apiKey = "9tc2ca054b9644af4a7a4ffo0b15b933";
    let word = `${keywork}`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word= ${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = "6DClGAffMnZgD4XG0xzrzQ6SWrYytfXIkqFNFXkWXpkgLzcrcf29YT8m";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
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
        <Photos photos={photos}/>
        </div>
    );  
    } else{
        load();
        return "Loading";

    }


}