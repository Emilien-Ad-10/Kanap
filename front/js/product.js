fetch("http://localhost:3000/api/products")
.then(async (response) => {//console.log(response);
    try{
        let data = await response.json();
        console.log(data);
        data.forEach(objets => {
            console.log(objets);
            //Selection de la div class "item__img":
            let imageItems = document.getElementsByClassName("item__img");

            //Creation d'une balise "img" + attributs:
            let baliseImage = document.createElement("img");
            baliseImage.setAttribute("src", "");
            baliseImage.setAttribute("alt", "");

            //Ajout de la balise "img" à la "div" "class item__img":
            imageItems[0].appendChild(baliseImage);

            //Controles:
            // console.log(imageItems);
            // console.log(baliseImage);         
        });
    }catch{(erreur) => console.log(erreur)};
}).catch(erreur => console.log(erreur));
