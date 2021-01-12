import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store, {StateReducersType} from "./redux/redux-store";


let rerenderEntireTree = (state: StateReducersType) => {
    ReactDOM.render(
        <App store={store}/>
        ,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(()=> {
    let state = store.getState();
    rerenderEntireTree(state)
})
