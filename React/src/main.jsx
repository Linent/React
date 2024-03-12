import React from 'react'
import ReactDOM from 'react-dom/client';
import { App } from './HelloWordApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <CounterApp value={ 0 } />
        {/*<FirstApp title="Hola, Soy Vegeta" subTitle='Hola soy un Subtitulo' />*/}
    </React.StrictMode>
)