const http = new easyHTTP;

// // Get Posts from server
http.get('https://jsonplaceholder.typicode.com/posts', 
function(err, posts){
  if(err){
    console.log(err);
  }else{
    console.log(posts);
  }
});

// // Get Single Posts from server
http.get('https://jsonplaceholder.typicode.com/posts/1', 
function(err, post){
  if(err){
    console.log(err);
  }else{
    console.log(post);
  }
});

// Create the Data
const data = {
  title: 'Custom Post', 
  body: 'This is a custom post'
};

// Create post and add it to the server
http.post('https://jsonplaceholder.typicode.com/posts', 
data, function(err, post){
  if(err){
    console.log(err);
  }else{
    console.log(post);
  }
});

// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
  if(err){
    console.log(err);
  }else{
    console.log(post);
  }
});

//Delete Posts
// Get Posts from server (1 is the id, it could be any number id added to url)
http.delete('https://jsonplaceholder.typicode.com/posts/1', 
function(err, response){
  if(err){
    console.log(err);
  }else{
    console.log(response);
  }
});