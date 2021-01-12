import React, {ChangeEvent, useState, useEffect} from 'react';
import Axios from "axios";
import './App.css';
import {RootStateType} from "./redux/redux-store";



type AppPropsType = {

    store: RootStateType
}

function App(props: AppPropsType) {

    let state = props.store.getState();



    const [movieName, setMovieName] = useState<string>('');
    const [review, setReview] = useState<string>('');


    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            console.log(response)
        })
    })


    const submitReview = () => {
        Axios && Axios.post("http://localhost:3001/api/insert", {
            movieName: movieName,
            movieReview: review
        }).then(() => {
            alert('successful insert')

        })
        setReview("")
        setMovieName("")
    };
    const setTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setMovieName(e.currentTarget.value)
    }
    const setText = (e:ChangeEvent<HTMLInputElement>) => {
        setReview(e.currentTarget.value)
    }

    let divStyle = {
        display: 'grid',
        gridTemplateColumns: "200px 200px",


    }


    return (




        <div className="App">

            <div>
                {state.reviews.reviews.map(el => {
                    return <div className="item" style={divStyle}>
                        <div >{el.movieName}</div>
                        <div >{el.movieReview}</div>
                    </div>
                })}
            </div>

            <h1>CRUD APP</h1>

            <div className="form">
                <label>Movie name:</label>
                <input type="text" value={movieName} name='movieName' onChange={setTitle}/>
                <label>Review:</label>
                <input type="text" value={review} name='review' onChange={setText}/>
                <button onClick={submitReview}>submit</button>
            </div>

        </div>
    );
}

export default App;
