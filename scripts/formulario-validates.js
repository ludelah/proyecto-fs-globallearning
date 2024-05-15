document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener('submit', createNewCard);
})

const createNewCard = (e) => {

    e.preventDefault();

    const regex = /^[a-zA-Z\s]*$/;
    const regexEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
    const regexTel = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;

    const nameValue = document.getElementById('name');
    const name = nameValue.value.trim();
    console.log(name);

    const nameAnimal = document.getElementById('animal');
    const animal = nameAnimal.value.trim();
    console.log(animal);

    const emailValue = document.getElementById('email');
    const email = emailValue.value.trim();
    console.log(email);

    const telValue = document.getElementById('telefono');
    const tel = telValue.value.trim();
    console.log(tel);

    if (!regex.test(name) || !regex.test(animal) || !regexEmail.test(email) || !regexTel.test(tel)) {
        const errorMessage = document.getElementById('errorMessage')
        errorMessage.style.display = "block"
        return;
    } else {
        errorMessage.style.display = "none";
    }
    this.submit();
}
