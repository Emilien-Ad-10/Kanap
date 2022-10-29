//Selection des différents ids:
let imageItems = document.getElementsByClassName("item__img"); 
let titreH1 = document.getElementById("title");
let prixProduit = document.getElementById("price");
let descriptionProduit = document.getElementById("description");
let couleurProduit = document.getElementById("colors");
let inputQuantity = document.getElementById("quantity");

//Utilisation de .get() : methode de URLSearchParams:
let parametre = new URLSearchParams(document.location.search);
let id = parametre.get("id");
//console.log(id);

//Recuperation des données sur l'API:
fetch(`http://localhost:3000/api/products/${id}`)
.then(async (response) => {//console.log(response);
    try{
        let data = await response.json();
        console.log(data);
        //Creation d'une balise "img" + attributs:
        let baliseImage = document.createElement("img");
        baliseImage.setAttribute("src", data.imageUrl);
        baliseImage.setAttribute("alt", data.altText);

        //Ajout de la balise "img" à la "div" "class item__img":
        imageItems[0].appendChild(baliseImage);

        //titre H1:
        titreH1.innerHTML = data.name;

        //prix:
        prixProduit.innerHTML = data.price;

        //description:
        descriptionProduit.innerHTML = data.description;

        //Couleur:
        data.colors.forEach(couleurs => {
            //Création d'une balise HTML "option":
            let couleurOption = document.createElement("option");
            couleurOption.setAttribute("value", `${couleurs}`);
            //Grace à la méthode forEach cette balise sera multiplier par le nombre de couleurs présentent dans data.colors.
            
            //Insérer la balise "option" dans la balise "select id=colors":
            couleurProduit.appendChild(couleurOption);
            
            //Insérer les couleurs dans les balises "options":
            couleurOption.innerHTML = `${couleurs}`;
            
            //Contrôle:
            //console.log(couleurOption);    
        });

    }catch{(erreur) => console.log(erreur)};
}).catch(erreur => console.log(erreur));

//selection de l'id du bouton d'ajout au panier:
let boutonProduct = document.getElementById("addToCart");

//Recuperation des données selectionées par l'utilisateur + id du produit:
boutonProduct.addEventListener("click", () => {
    let parametre = new URLSearchParams(document.location.search);
    let idProduit = parametre.get("id");
    let idH1 = document.getElementById("title");
    let nomKanap = idH1.innerText;
    let selectColor = couleurProduit.value; 
    console.log(selectColor);
    let selectQuantity = inputQuantity.value;
    console.log(selectQuantity);

    //Nouvelle objet:
    kanap = {
        id: idProduit,
        nom: nomKanap,
        couleur: selectColor,
        quantite: selectQuantity
    };
    
    console.log(kanap);
    
    let kanapArray;
    if(localStorage.getItem("produit") === null){
        kanapArray = [];
        kanapArray.push(kanap);
    }
    else{kanapArray = JSON.parse(localStorage.getItem("produit"))
        let flag = 0;
        kanapArray.forEach((item) =>{
            if(item.id == kanap.id && item.couleur == kanap.couleur){
                item.quantite = parseInt(item.quantite) + parseInt(kanap.quantite);
                flag = 1;
            }
        });
        
        if (flag == 0){
            kanapArray.push(kanap)
        }

    };

    localStorage.setItem("produit", JSON.stringify(kanapArray));
    
    console.log(kanapArray); 
});