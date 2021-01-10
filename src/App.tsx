import React, {useState} from 'react';
import Axios from "axios";
import './App.css';

function App() {

    const [movieName, setMovieName] = useState<string>('');
    const [review, setReview] = useState<string>('');
    console.log(movieName);


    const submitReview = () => {
        Axios && Axios.post("http://localhost:3001/api/insert", {
            movieName: movieName,
            movieReview: review
        }).then(() => {
            alert('successful insert')
        })
    };


    return (


        <div className="App">
            <h1>CRUD APP</h1>

            <div className="form">
                <label>Movie name:</label>
                <input type="text" name='movieName' onChange={(e) => {
                    setMovieName(e.currentTarget.value)
                }}/>
                <label>Review:</label>
                <input type="text" name='review' onChange={(e) => {
                    setReview(e.currentTarget.value)
                }}/>
                <button onClick={submitReview}>submit</button>
            </div>

        </div>
    );
}

export default App;
