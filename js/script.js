let people = [];
//Submit
let submit = document.querySelector('button');

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
    console.table(people)
    

})