import React, { useState } from 'react';

const UrlForm = ({ sendData }) => {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('')

  const handleTitleChange = e => {
    setTitle(e.target.value);
  }

  const handleUrlChange = e => {
    setUrlToShorten(e.target.value);
  }

  const clearInputs = () => {
    setTitle('');
    setUrlToShorten('');
  }

  const submitUrlData = (e) => {
    e.preventDefault();
    const newUrl = {
      long_url: urlToShorten,
      title: title
    }
    sendData(newUrl);
    clearInputs();
  }

    return (
      <form>
        <input
          className='title-input'
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          onChange={e => handleTitleChange(e)}
        />

        <input
          className='url-input'
          type='text'
          placeholder='URL to Shorten...'
          name='title'
          value={urlToShorten}
          onChange={e => handleUrlChange(e)}
        />

        <button className='submit-button' onClick={e => submitUrlData(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }

export default UrlForm;
