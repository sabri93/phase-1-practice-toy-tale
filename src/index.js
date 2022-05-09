let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

document.querySelector('.submit').addEventListener('submit',
handleSubmit)

function handleSubmit(e){
  e.preventDefault();
  
  let toyObj = {
  name: e.target.input-text.value,
  image: e.target.submit.value
  
  }
  renderCaracters(toyObj)
  addToys(toyObj)
}
function renderCaracters(toy){
let card = document.createElement('div')
  card.className = 'card'
  card.innerHTML = 
     ` <h2>${toy.name}</h2>
      <img src= ${toy.image} class="toy-avatar" />
      
      <P> ${toy.likes} Likes </p>
      <button class="like-btn" id= ${toy.id}>Like</button>
      `
    card.querySelector('.like-btn').addEventListener('click',() => {
      toy.likes+= 1
      card.querySelector('p').textContent = toy.likes
    } )
      document.querySelector('#toy-collection').appendChild(card)
}

function getAllToys(){
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(toyData => toyData.forEach(toy => renderCaracters(toy) ))

}
function addToys(toyObj){
  fetch('http://localhost:3000/toys',{
    method: 'POST',
    headers: 
    {
      "Content-Type": "application/json",
      
    },
    body:JSON.stringify(toyObj)
  })
  .then(res => res.json())
  .then(toy => console.log(toy))
}


  getAllToys()


