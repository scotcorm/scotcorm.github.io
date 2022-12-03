const posts = [
  {title: 'Post1', body: 'This is post 1'}, 
  {title: 'Post2', body: 'This is post 2'}
  
];

// function createPost(post){
//   setTimeout(function(){
//     posts.push(post);
//   }, 2000);

// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post3', body: 'This is post 3'});

// getPosts();  // this way, server gets the new post 3 before the output was created.  This is synchronous


function createPost(post, callback){
  setTimeout(function(){
    posts.push(post);
    callback();
  }, 2000);

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

createPost({title: 'Post3', body: 'This is post 3'}, getPosts);
//asychronous with a callback function- function passed into another function then called from within that function