// Modules Importing Tutorial
// // COMMON.JS
// // const person = require('./mymodule1');
// // ES2015
// // individually: (note destructuring only needed if the export wasn't DEFAULT)
// // import { person, hello } from './mymodule2';
// // all 
// import * as mod from './mymodule2';

// mod.hello();

// imports
import { http } from './http';
import { ui } from './ui';

// globals
const postTitle = document.querySelector('#title');

// app intializer
function init() {
  // highlighting main text area 
  postTitle.focus();
  
  // get posts on DOM loading
  document.addEventListener('DOMContentLoaded', getPosts);
  
  // listen for adding post
  document.querySelector('.post-submit').addEventListener('click', submitPost);
  
}

// get posts from DB
async function getPosts() {
  let posts = [];
  try {
    posts = await http.get('http://localhost:3000/posts');
  } catch (e) {
    console.error(e);
  }
 
  
  ui.showPosts(posts);

}

// submit Posts
function submitPost() {
  const body = document.querySelector('#body').value;
  const title = postTitle.value;
  const data = {
    title, // title: title
    body // body: body
  }

  // create post 
  http.post('http://localhost:3000/posts', data)
    .then(data => {
      getPosts(); // call it again to reload the posts which will include the new post
    })
    .catch(err => console.error(err));

}



// init app
init();


