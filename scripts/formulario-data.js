document.addEventListener('DOMContentLoaded', (event)=>{
    let dataJSON = localStorage.getItem('dataNewAnimal');
    if(dataJSON){
        data = JSON.parse(dataJSON);
        console.log(data);
    }else{
        data = [];
    }
    let newCard = document.getElementsByClassName("animal-container");
    if (newCard) {
        data.forEach((data,index) => {
            let card = document.createElement("div");
            card.className = "wrap-container";
            if (data.file) {
                let imgContainer = document.createElement("div");
                imgContainer.className = "img-container";

                let imgAnimal = document.createElement("img");
                imgAnimal.src = dato.file;
                imgAnimal.alt = `Imangeb de ${data.animalName}`;
                imgContainer.appendChild(imgAnimal);
                card.appendChild(imgContainer);
            }
            let nameAnimal = document.createElement("h3");
            nameAnimal.className = "animal-name";
            nameAnimal.textContent = `${data.animalName}`;
            card.appendChild(nameAnimal);

            let dataAnimal = document.createElement("p");
            dataAnimal.className = "animal-data";
            dataAnimal.textContent = `${data.dataAnimal}`;
            card.appendChild(dataAnimal);

            let nameUser = document - createElement("h3");
            nameUser.className = "user-name";
            nameUser.textContent = `${nameUser}`;
            card.appendChild(nameUser);

            let dataUser = document.createElement("p");
            dataUser.className = "user-data";
            dataUser.textContent = `Contactame - Telefono:${tel} - Email: ${email}`;
            card.appendChild(dataUser);

            newCard.appendChild(card);
        });
    }
})