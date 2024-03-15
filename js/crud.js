/*const postsList  = document.querySelector('.posts-list');
const addPostForm  = document.querySelector('.add-post-form');
const titleValue = document.getElementById('title-value');
const bodyValue = document.getElementById('body-value');
const btnSubmit = document.querySelector('.btn')

let output = '';
const renderPosts = (posts) =>{
    posts.foreach(post => {
        output += `
        <div class="card mt-4 col-md6 bg-light">
            <div class="card-body" id=${post.id}>
            <h5 class="card-title">${post.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${post.date}</h6>
            <p class="card-text">${post.body}</p>
            <a href="#" class="card-link" id="edit-post">Edit</a>
            <a href="#" class="card-link" id="delete-post">Delete</a>
            </div>
        </div>
        `;
    });
    postsList.innerHTML = output;

}
const url = 'http://localhost:5000/api/posts';

// Get - Read the post
// Method: GET
fetch(url)
    .then(res => res.json())
    .then(data => renderPosts(data))

    postsList.addEventListener('click',(e) => {
        e.preventDefault();
        let delButttonIsPressed = e.target.id == 'delete-post';
        let editButttonIsPressed = e.target.id == 'edit-post';
        let id = e.target.parentElement.dataset.id;
        // delete - remove 
        // method: DELETE
        if(delButttonIsPressed){
            alert("del");
            fetch(`${url}/${id}`,{
                method:'DELETE',

            })
            .then(res => res.json())
            .then(() => location.reload())
        }
        if(editButttonIsPressed){
            const parent = e.target.parentElement;
            let titleContent = parent.querySelector('.card-title').textContent;
            let bodyContent = parent.querySelector('.card-text').textContent;

            titleValue.value = titleContent;
            bodyValue.value = bodyContent;

        }
        // update 
        // Method:PATCH
        btnSubmit.addEventListener('click',(e) =>{
            e.preventDefault();
            fetch(`${url}/${id}`,{
                method:'PATCH',
                headers: {'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                    title:titleValue.value,
                    body:bodyValue.value,
                }) 
            })
            .then(res => res.json())
            .then(() => location.reload())


        })

    });
// Create - Insert new post
// Method: POST
addPostForm.addEventListener('submit',(e)=> {
    e.preventDefault();
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'
    },
        body: JSON.stringify({
            title:titleValue.value,
            body:bodyValue.value
        })
})
    .then(res => res.json())
    .then(data => {
        const dataArr = [];
        dataArr.push(data);
        renderPosts(dataArr);
    })
    //reset input field to empty
    titleValue.value = '';
    bodyValue.value = '';
})
*/