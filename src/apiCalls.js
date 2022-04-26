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
      }
    }

export default apiCall
