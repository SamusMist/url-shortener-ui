const apiCall = {
  getData(url) {
    return fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error("error")
          } else {
            return response.json()
          }
        })
      },
  postData(urlData) {
    return fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(urlData)
    })
  }
}

export default apiCall
