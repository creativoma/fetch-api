const API = "https://jsonplaceholder.typicode.com/posts"

fetch(API)
  .then(response => response.json())
  .then((json) =>{
    for (let i = 0; i < json.length; i++) {
      const element = json[i];
      const newElem = document.createElement('div');
      newElem.id = "card";
      const section = document.querySelector('section');
      section.appendChild(newElem).innerHTML = 
      `<h2>${element.title}</h2>
      <p>${element.body}</p>` 
    }
  })