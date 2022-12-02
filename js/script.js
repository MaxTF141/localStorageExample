let people = [];
//Submit
let submit = document.querySelector('#submit');
let display = document.querySelector('#display');

//Add event Listener
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    let firstName = document.querySelector('#firstname').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;

    //Push an object into an array 
    people.push(
        {
            firstName,
            surname,
            email
        }
    )
    //Local Storage
    localStorage.setItem('data', JSON.stringify(people));

})
// Add event Listener for display
display.addEventListener('click', (e)=>{
    e.preventDefault();
    console.table(
        JSON.parse(localStorage.getItem('data'))
    )
})