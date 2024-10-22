function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => Response.json())
    .then(data => console.log(data))
}


function myUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => otherUsers(data))
}

function otherUsers(data){
    for( const dat of data){
        console.log(dat.innerHtml)
    }
}