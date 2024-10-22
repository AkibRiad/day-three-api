function myNames(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => myNameList(data))
}

function myNameList(data){
    const newUl = document.getElementById('ul');
    for(const da of data){
        const li = document.createElement('li');
        li.classList.add('myli')
        li.innerText = da.name;
        newUl.appendChild(li)
    }
}


function myPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => myPosts(data))
}
function myPosts(data){
    const newUl = document.getElementById('div');
    for(const post of data){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h1>Post No: ${post.userId}</h1>
        <p>Title: ${post.title}</p>
        <p>Description: ${post.body}</p>`
        newUl.appendChild(div)
    }
}