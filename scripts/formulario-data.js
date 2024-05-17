document.addEventListener('DOMContentLoaded', (event) => {

    let dataJSON = localStorage.getItem('formDataArray');
    if (dataJSON) {
        data = JSON.parse(dataJSON);
        console.log(data);
    } else {
        data = [];
    }
    let newCard = document.getElementById('cont-anim-perdidos');
    if(data.length > 0){
        newCard.classList.remove('hidden');
    }
    
    if (newCard) {

        data.forEach((data, index) => {
            let card = document.createElement('div');
            card.className = 'animal-container';

            let cardWrap = document.createElement('div');
            cardWrap.className = "wrap-container";
            card.appendChild(cardWrap);

            if (data.file) {
                let imgContainer = document.createElement("div");
                imgContainer.className = "img-container";

                let imgAnimal = document.createElement("img");
                imgAnimal.src = data.file;
                imgAnimal.alt = `Imangen de ${data.animalName}`;
                imgContainer.appendChild(imgAnimal);
                cardWrap.appendChild(imgContainer);
            }


            let nameAnimal = document.createElement("h3");
            nameAnimal.className = "animal-name";
            nameAnimal.textContent = `${data.animalName}`;
            cardWrap.appendChild(nameAnimal);

            let dataAnimal = document.createElement("p");
            dataAnimal.className = "animal-data";
            dataAnimal.textContent = `${data.dataAnimal}`;
            cardWrap.appendChild(dataAnimal);

            let nameUser = document.createElement("h3");
            nameUser.className = "user-name";
            nameUser.textContent = `${data.nameUser}`;
            cardWrap.appendChild(nameUser);

            let dataUser = document.createElement("p");
            dataUser.className = "user-data";
            dataUser.textContent = `Contactame - Telefono:${data.tel} - Email: ${data.email}`;
            cardWrap.appendChild(dataUser);
            newCard.appendChild(card);
        });

    }
})