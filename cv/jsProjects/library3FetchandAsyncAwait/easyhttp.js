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

  async get(url){
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // make an HTTP POST request
  async post(url, data){
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

    //make an HTTP PUT request
  async put(url, data){
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  // make an HTTP DELETE request
  async delete(url){
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },      
    });
    const resData = await 'Resource deleted';
    return resData;
  }  
}  
