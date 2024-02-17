import React from 'react'
import ReactDOM from 'react-dom/client';
import { App } from './HelloWordApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ 0 } />
    </React.StrictMode>
)