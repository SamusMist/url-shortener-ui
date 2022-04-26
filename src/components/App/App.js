import React, { useState, useEffect } from 'react';
import './App.css';
import apiCall from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

const App = () => {
  const [linkData, setLinkData] = useState([])

  useEffect(() => getAllData(), [])

  const getAllData = () => {
    apiCall.getData('http://localhost:3001/api/v1/urls')
    .then(data => setLinkData(data.urls))
  }


  const sendData = (urlData) => {
    apiCall.postData(urlData)
    .then((data) => getAllData())
  }

    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm sendData={sendData} />
        </header>

        <UrlContainer urls={linkData}/>
      </main>
    );
  }


export default App;
