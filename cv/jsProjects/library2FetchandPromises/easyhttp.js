/**
 * Easy HTTP Library 
 * Library for making HTTP requests (fetch, promises, arrow functions)
 * 
 * @version 2.0.0
 * @author Scott Cormier 
 * @license
 * @course Modern JavaScript from the Beginning (Brad Traversy)
 */

class easyHTTP{
  // Make an HTTP GET Request

  get(url){
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // make an HTTP POST request
  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }, 
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

    // make an HTTP PUT request
  put(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        }, 
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }
  // make an HTTP DELETE request
  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },      
      })
      .then(res => res.json())
      .then(() => resolve('resource deleted'))
      .catch(err => reject(err));
    });
  }  


}  
