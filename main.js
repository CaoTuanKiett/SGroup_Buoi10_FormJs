const inputId = document.getElementById('inputId')
const inputName = document.getElementById('inputName')
const inputEmail = document.getElementById('inputEmail')
const inputSalary = document.getElementById('inputSalary')
const inputCity = document.getElementById('inputCity')
const btnSubmit = document.getElementById('btnSubmit')
const render = document.getElementById('render')

let arr = []

function Delete(x) {
    arr = arr.filter(item => x != item.Id)
    console.log(arr);

    render.innerHTML = '';

    arr.forEach((item) => {
        render.innerHTML = render.innerHTML +
        `
        <div class="userItem" >
            <p>${item.Id}</p>
            <p>${item.FullName}</p>
            <p>${item.Email}</p>
            <p>${item.Salary}</p>
            <p>${item.City}</p>

            <p><a>Edit</a>  <a onclick="Delete(${item.FullName})" >Delete</a></p>
        </div>
        `
    }) 
    
}



btnSubmit.addEventListener('click', () => {
    
    let userId = inputId.value ;
    let userName = inputName.value ;
    let userEmail = inputEmail.value ; 
    let userSalary = inputSalary.value;
    let userCity = inputCity.value;

    let userObj = {
        Id: userId,
        FullName: userName,
        Email: userEmail,
        Salary: userSalary,
        City: userCity,
        
    }

    arr.push(userObj);

    render.innerHTML = '';

    arr.forEach((item) => {
        render.innerHTML = render.innerHTML +
        `
        <div class="userItem" >
            <p>${item.Id}</p>
            <p>${item.FullName}</p>
            <p>${item.Email}</p>
            <p>${item.Salary}</p>
            <p>${item.City}</p>

            <p><a>Edit</a>  <a onclick="Delete(${item.Id})" >Delete</a></p>
        </div>
        `
    }) 
    
})





