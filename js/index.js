document.addEventListener("DOMContentLoaded", () => {
  // Creating the form
  const formContainer = document.getElementById("create-monster")
  console.log(formContainer)
  const form = document.createElement("form")
  const inputN = document.createElement("input")
  inputN.id = "name"
  inputN.placeholder = "name..."
  const inputA = document.createElement("input")
  inputA.id = "age"
  inputA.placeholder = "age..."
  const inputD = document.createElement("input")
  inputD.id = "description"
  inputD.placeholder = "description..."
  const button = document.createElement("button")
  button.innerText = "create"
  form.appendChild(inputN)
  form.appendChild(inputA)
  form.appendChild(inputD)
  form.appendChild(button)
  formContainer.appendChild(form)
  
  //Fetches Monsters data and append to the DOM
  fetch("http://localhost:3000/monsters")
  .then(response => response.json())
  .then(data => {
      for(let i=0; i<50; i++){
        appendDataToDom(data[i]);
      }
  })
  
  const appendDataToDom = (data) => {
      const divContainer = document.getElementById("monster-container")
      const div = document.createElement("div")
      div.innerHTML = `<h2>${data.name}</h2>
                         <h4>${data.age}</h4>
                         <p>${data.description}</p>`
  divContainer.appendChild(div)  
  
  }
  
  
  // Post Data
  form.addEventListener('submit', (e) => {
  e.preventDefault()
  const bodyObject = {
      name : inputN.value,
      age : inputA.value,
      description : inputD.value
  }    
  
  
  fetch("http://localhost:3000/monsters",{
  method: "POST ",   
  headers :
  {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  
  body: JSON.stringify(bodyObject)
  })
  .then(response => response.json())
  .then(data =>data)
  
  })
  
  })