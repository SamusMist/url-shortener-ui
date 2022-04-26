import React, { Component, useState, useEffect } from 'react';
import './App.css';
import apiCall from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

const App = () => {
const [linkData, setLinkData] = useState([])

useEffect(() => getData(), [])

const getData = () => {
  apiCall.getData('http://localhost:3001/api/v1/urls')
    .then(data => setLinkData(data.urls))
}

    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>

        <UrlContainer urls={linkData}/>
      </main>
    );
  }


export default App;
