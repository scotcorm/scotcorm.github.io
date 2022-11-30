const posts = [
  {title: 'Post1', body: 'This is post 1'}, 
  {title: 'Post2', body: 'This is post 2'}
];


function createPost(post){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      posts.push(post);

      const error = false; 

      if(!error){
        resolve();
      }else{
        reject("Error: something went wrong!");
      }
      resolve();
    }, 2000);
  })
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post3', body: 'This is post 3'})
.then(getPosts)
.catch(function(err){
  console.log(err);
});
//ES6 promises are an alternative to callbacks, FETCH is the new standard and it returns a promise like the one here