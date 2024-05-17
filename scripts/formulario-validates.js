document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener('submit', validateData);
})

const validateData = (e) => {

    e.preventDefault();
    //Expresiones regulares para validar datos
    const regex = /^[a-zA-Z\s]*$/;
    const regexEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
    const regexTel = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
    //Variables que contienen el valor de inputs
    const nameValue = document.getElementById('name');
    const name = nameValue.value.trim();

    const nameAnimal = document.getElementById('animal');
    const animal = nameAnimal.value.trim();

    const emailValue = document.getElementById('email');
    const email = emailValue.value.trim();

    const telValue = document.getElementById('telefono');
    const tel = telValue.value.trim();

    const fileInput = document.getElementById('img');
    const file = fileInput.files && fileInput.files[0];

    //Funcion para validar datos y mostrar mensaje de error
    if (!regex.test(name) || !regex.test(animal) || !regexEmail.test(email) || !regexTel.test(tel)) {
        const errorMessage = document.getElementById('errorMessage')
        errorMessage.style.display = "block"
        return;
    } else {
        errorMessage.style.display = "none";
    }
    //Funcion para leer el archivo ingresado
    if (file) {
        const readFile = new FileReader();
        readFile.onload = (e) => {
            const dataNewAnimal = {
                name: name,
                animalName: animal,
                email: email,
                file: e.target.result
            }
            let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
            formDataArray.push(dataNewAnimal);
            localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
            console.log('Data saved');
        }
        readFile.readAsDataURL(file);
    } else {
        alert('Insert a file valid')
    }
    window.location.reload();
}