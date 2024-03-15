/*
window.onload(afficher_services());
function afficher_services(){
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
fetch("http://127.0.0.1:8000/api/services", requestOptions)
  .then(response => {
    if(!response.ok) {
      throw Error("Erreur lors du chargement de l'API");
    }
    return response.json();
    })
  .then(data => {
    let service = document.getElementById('service');
    for(let i=0;i<data.length;i++){
      let nom = document.createElement('h4');
      nom.classList.toggle("nom_service");

      let image = document.createElement('img');
      image.classList.toggle("image_service");

      let description = document.createElement('p');
      description.classList.toggle("description_service");
      
      nom.textContent = data[i].nom;
      image.src ="images/"+data[i].image;
      description.textContent = data[i].description;
      
      service.appendChild(nom);
      service.appendChild(image);
      service.appendChild(description);
     } 
      
  })
  .catch(error => {
    console.error(error);
  });
}
const url = 'http://127.0.0.1:8000/api/services';
const postsList  = document.querySelector('.posts-list');
const addPostForm  = document.querySelector('.add-post-form');
const titleValue = document.getElementById('title-value');
const bodyValue = document.getElementById('body-value');
const btnSubmit = document.querySelector('.btn');
afficher_services(); 
 function afficher_services(){
  // Get - Read the post
  // Method: GET
  const requestOptions = {
    method: "GET",
    redirect: "follow"};
  
  fetch(url, requestOptions)
      .then(response => {
        if(!response.ok) {
          throw Error("Erreur lors du chargement de l'API");
        }
        return response.json();
        })

        .then(data => {
        let output = '';
        let imag="";
        for(let i=0;i<data.length;i++){
          output += `
          <div class="card mt-4 col-md6 bg-light">
              <div class="card-body">${data[i].id}
                <h5 class="card-title">${data[i].nom}</h5>
                <img class="img_services" src = "images/${data[i].image}"/>
                <p class="card-text">${data[i].description}</p>
                <a href="#" class="card-link" id="edit-post">Edit</a>
                <a href="#" class="card-link" id="delete-post">Delete</a>
              </div>
          </div>
          `;
           };
      postsList.innerHTML = output;
    
      });
     
    
 }
 */
    

 fetch('http://127.0.0.1:5000/service')
      .then(res => res.json())
      .then (res => {
          const obj = res
          console.log(obj.length)
          let la= document.getElementById("la");
         for(let i=0;i<obj.length;i++) { 
              
              la.innerHTML += (obj[i].nom + ":" +obj[i].description +  obj[i].image+"<br/><br/>");}
          })
          
      .catch(error => console.log(error));

    
     
      