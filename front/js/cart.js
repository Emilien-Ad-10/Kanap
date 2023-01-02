//Recuperation des produits selectionnés dans le LS:
let prodLocalStorage = localStorage.getItem("produit");
let prodLocalStorageJSON = JSON.parse(prodLocalStorage);
//console.log(prodLocalStorageJSON);

//Récupération du prix pour chaque produit présent dans le LS:
for(let i = 0; i < prodLocalStorageJSON.length; i++){
    //console.log(prodLocalStorageJSON[i]);
    let id = prodLocalStorageJSON[i].id;
    let color = prodLocalStorageJSON[i].couleur;
    //console.log();
    fetch(`http://localhost:3000/api/products/${id}`)
    .then(async (response) => {
        //console.log(response)
        try{
            let data = await response.json();
            //console.log(data);

            let sectionCartItems = document.getElementById("cart__items");

            //Creation d'une baliseArticle classe "cart__item":
            let baliseArticle = document.createElement("article");
            baliseArticle.setAttribute("class", "cart__item");
            baliseArticle.setAttribute("data-id", id);
            baliseArticle.setAttribute("data-color", color);

            //Insérer la baliseArticle dans la section "cart__items":
            sectionCartItems.appendChild(baliseArticle);

            //Creation d'une baliseDivImg classe "cart__item__img":
            let baliseDivImg = document.createElement("div");
            baliseDivImg.setAttribute("class", "cart__item__img");

            //Inserer la baliseDivImg dans la baliseArticle:
            baliseArticle.appendChild(baliseDivImg);

            //Creation d'une baliseImage + attributs:
            let baliseImage = document.createElement("img");
            baliseImage.setAttribute("src", data.imageUrl);
            baliseImage.setAttribute("alt", data.altTxt);

            //Inserer la baliseImage dans la baliseDivImg:
            baliseDivImg.appendChild(baliseImage);

            //Creation d'une div classe "cart__item__content":
            let baliseDivContent = document.createElement("div");
            baliseDivContent.setAttribute("class", "cart__item__content");

            //Inserer la div classe "cart__item__content" dans la balise article:
            baliseArticle.appendChild(baliseDivContent);

            //Creation d'une balise div classe "cart__item__content__description":
            let baliseDivContentDescription = document.createElement("div");
            baliseDivContentDescription.setAttribute("class", "cart__item__content__description");

            //Inserer la div classe "baliseDivContentDescription" dans la balise div classe "baliseDivContent":
            baliseDivContent.appendChild(baliseDivContentDescription);

            //Creation d'une balise h2 et deux balises p + attribut:
            let titreH2 = document.createElement("h2");
            titreH2.innerHTML = data.name;
            let paragrapheCouleur = document.createElement("p");
            paragrapheCouleur.setAttribute("class", "couleurProduit");
            paragrapheCouleur.innerHTML = prodLocalStorageJSON[i].couleur;
            let paragraphePrix = document.createElement("p");
            paragraphePrix.setAttribute("class", "prixProduit");
            paragraphePrix.innerHTML = `${data.price * prodLocalStorageJSON[i].quantite} €`;

            //Inserer la balise h2 et les deux paragraphes à la balise div classe "baliseDivContentDescription": 
            baliseDivContentDescription.appendChild(titreH2);
            baliseDivContentDescription.appendChild(paragrapheCouleur);
            baliseDivContentDescription.appendChild(paragraphePrix);

            //Creation d'une balise div classe "cart__item__content__settings":
            let baliseDivContentSettings = document.createElement("div");
            baliseDivContentSettings.setAttribute("class", "cart__item__content__settings");

            //Inserer la DivContentSettings dans la DivContent:
            baliseDivContent.appendChild(baliseDivContentSettings);

            //Creation d'une div classe "cart__item__content__settings__quantity":
            let baliseDivContentSettingsQuantity = document.createElement("div");
            baliseDivContentSettingsQuantity.setAttribute("class", "cart__item__content__settings__quantity");

            //Inserer la baliseDivContentSettingsQuantity dans la baliseDivContentSettings:
            baliseDivContentSettings.appendChild(baliseDivContentSettingsQuantity);

            //Création d'un paragraphe classe "produitQuantité":
            let paragrapheProduitQuantité = document.createElement("p");
            paragrapheProduitQuantité.setAttribute("class", "produitQuantité");

            //Inserer paragrapheProduitQuantité dans la baliseDivContentSettingsQuantity:
            baliseDivContentSettingsQuantity.appendChild(paragrapheProduitQuantité);

            //Creation d'un input + attributs:
            let baliseInput = document.createElement("input");
            baliseInput.setAttribute("type", "number");
            baliseInput.setAttribute("class", "itemQuantity");
            baliseInput.setAttribute("name", "itemQuantity");
            baliseInput.setAttribute("min", "1");
            baliseInput.setAttribute("max", "100");
            baliseInput.setAttribute("value", prodLocalStorageJSON[i].quantite);
            baliseInput.setAttribute("id", id);
            baliseInput.addEventListener("change", () =>{
                fetch(`http://localhost:3000/api/products/${baliseInput.id}`)
                .then(async (response) => {
                    console.log(response);
                    let data = await response.json();
                    console.log(data);
                    let price = data.price * baliseInput.value;
                    paragraphePrix.innerHTML = price + " €";

                }).catch((erreur) => console.log(erreur))
            });

            //Inserer la baliseInput dans la baliseDivContentSettingsQuantity:
            baliseDivContentSettingsQuantity.appendChild(baliseInput);

            //Creation d'une div classe "cart__item__content__settings__delete":
            let baliseDivContentSettingsDelete = document.createElement("div");
            baliseDivContentSettingsDelete.setAttribute("class", "cart__item__content__settings__delete");

            //Inserer la baliseDivContentSettingsDelete dans la baliseDivContentSettings:
            baliseDivContentSettings.appendChild(baliseDivContentSettingsDelete);

            //Creation d'un paragraphe classe "deleteItem":
            let paragrapheDeleteItem = document.createElement("p");
            paragrapheDeleteItem.setAttribute("class", "deleteItem");
            paragrapheDeleteItem.innerHTML = "Supprimer";
            //console.log(paragrapheDeleteItem);
            paragrapheDeleteItem.addEventListener("click", () => {
                //console.log(baliseArticle);
                let attributId = baliseArticle.getAttribute("data-id");
                //console.log(attributId);
                let attributColor = baliseArticle.getAttribute("data-color");
                //console.log(attributColor);

                let lS = localStorage.getItem("produit");
                let lsJSON = JSON.parse(lS);
                console.log(lsJSON);
                let lsDelete = lsJSON.filter((element) => {
                    element.id == attributId && element.couleur == attributColor
                    
                    
                });
                //console.log(lsDelete);
            });

            //Inserer le paragrapheDeleteItem dans la baliseDivContentSettingsDelete:
            baliseDivContentSettingsDelete.appendChild(paragrapheDeleteItem);

            //console.log(baliseArticle);

        }catch{(erreur) => console.log(erreur)}
}).catch ((erreur) => console.log(erreur))
}