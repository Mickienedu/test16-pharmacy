let person = {
    name: 'Mike',
    Age: 50,
    gender: 'male'
}
let btn = document.getElementById('btn');
btn = document.addEventListener('click', ()=>{
    if (person.name != 'Teekay') {
        alert("Invalid user");
    }else{
        alert("welcome user")
    }
})