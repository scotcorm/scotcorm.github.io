// create an event listener for the button
document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  //create an XHR Object
  const xhr = new XMLHttpRequest();

  //OPEN (TRUE makes it asynchronous)
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - used for spinners/loaders is readystate 3
  xhr.onprogress = function(){
    // console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function(){
    // new way, jumps right to 4 so we don't have to check for it
    // console.log('READYSTATE', xhr.readyState);
    if(this.status === 200){
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`

    }
  }

  // or an older way, shows state 1,2,3,4
  // xhr.onreadystatechange = function(){
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     // console.log(this.responseText);
  //   }
  // }

  // to check for errors
  xhr.onerror = function(){
    console.log('Request error...');
  }

  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request recieved
  // 3: processing request
  // 4: request finished and response is ready
  // when onload loads we are at step 4

  // some common HTTP statuses are: 
  // 200: OK
  // 403: Forbidden
  // 404: Not Found
}