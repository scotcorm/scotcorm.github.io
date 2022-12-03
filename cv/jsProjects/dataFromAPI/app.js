document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){

  const number = document.querySelector('click');
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      console.log(response.value);
      document.querySelector('.jokes').innerHTML = response.value;
    }
  }

  xhr.send();

  e.preventDefault();
}