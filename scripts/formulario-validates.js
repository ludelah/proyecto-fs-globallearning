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
    const nameUser = nameValue.value.trim();

    const nameAnimal = document.getElementById('animal');
    const animal = nameAnimal.value.trim();

    const emailValue = document.getElementById('email');
    const email = emailValue.value.trim();

    const telValue = document.getElementById('telefono');
    const tel = telValue.value.trim();

    const fileInput = document.getElementById('img');
    const file = fileInput.files && fileInput.files[0];

    const dataAnimalValue = document.getElementById('data');
    const dataAnimal = dataAnimalValue.value;

    //Funcion para validar datos y mostrar mensaje de error
    if (!regex.test(nameUser) || !regex.test(animal) || !regexEmail.test(email) || !regexTel.test(tel)) {
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
                nameUser: nameUser,
                animalName: animal,
                email: email,
                tel: tel,
                file: e.target.result,
                dataAnimal: dataAnimal
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
    //Funcion para crear nueva card en main
    let dataJSON = localStorage.getItem("dataNewAnimal");
    if (data) {
        data = JSON.parse(dataJSON);
    } else {
        data = [];
    }
    window.location.reload();
}
