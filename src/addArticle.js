let listCat = [];

class Category {
    constructor(name){
        this.name=name;
    }
}


function initCategories() {
    listCat.push( new Category ("manga"));
    listCat.push(new Category ("jeux-vidéos"));
    listCat.push(new Category ("films"));
    listCat.push(new Category ("dessins animés"));
    

}



function displayCategories(){

    console.log(listCat);

    const cat = document.getElementById("categories");
    listCat.forEach(c => {
        cat.innerHTML += `<a href="#" onclick="displayArticlesByCategory('${c.name}')">${c.name}</a>`;
    }
        )
}


initCategories();
displayCategories();


let listArticles =[];

class Article{
constructor(name,price,image,category){
    this.name=name;
    this.price=price;
    this.image = image;
    this.category=category;
    this.quantity = 1; 
    
}
}

function initArticles(){
    
    listArticles.push(new Article ("Naruto et Luffy", 25,"assets/lufy_naruto.jpeg","manga"));
    listArticles.push(new Article ("Minecraft", 40, "assets/minecraft.jpeg","jeux-vidéos"));
    listArticles.push(new Article ("Rick et Morty", 60, "assets/rickMorty.jpeg","dessins animés"));
    listArticles.push(new Article ("Jurassik Park", 100, "assets/JurassikPark.jpeg","films"));


}
function displayArticle (){
    console.log(listArticles);

    const art= document.getElementById("articles");

    listArticles.forEach(a => {
        const articleElement = document.createElement("div");
        articleElement.innerHTML = `
        <img src="${a.image}" alt="${a.name}">
        <p>${a.name}</p>
        <p>Prix: ${a.price}€</p>
    
    `;

    articleElement.addEventListener('click', () => addToCart(a));
    
    art.appendChild(articleElement);
    }
    )
}
//associe un article à une catégorie
function displayArticlesByCategory(category) {
    const articleElement = document.getElementById("articles");
    articles.innerHTML = ''; 
    //filtre les articles en fonction de la catégorie qui lui est associée
    const filteredArticles = listArticles.filter(article => article.category === category);
    //affiche les articles associé à la catégorie
    filteredArticles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.name}">
            <p>${article.name}</p>
            <p>Prix: ${article.price}€</p>
           
        `;
        articleElement.addEventListener('click', () => addToCart(article));
        articles.appendChild(articleElement);
    });
}

let cart = [];

//ajouter un article au panier 

function addToCart (article){

    const existArticle = cart.find(item => item.name === article.name);

    if (existArticle){
        existArticle.quantity++;
    }else {
        cart.push(article);
    }
    
    displayCart();
}


//afficher formulaire dés validation du panier
function displayValidation() {
    console.log("Affichage du formulaire de validation");
    const validationForm = document.getElementById('validation');
    validationForm.classList.remove('hidden');
 }
 function validate (){
    displayValidation();
}


//création du panier
function displayCart() {
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";

    let totalPrice = 0;

    cartElement.innerHTML += `
    <nav class="bg-sky-950 text-white w-96">
        <div class="container mx-auto flex justify-between items-center">
            <p class="text-2xl">Votre panier</p>
        </div>
    </nav>
`;
    
    cart.forEach(article => {
        const articleElement = document.createElement("p");
        articleElement.classList.add("panier","bg-white-50", "shadow-md", "rounded-md", "p-6");
        articleElement.innerHTML =  `
        <div class="mt-4">
        <p class="text-gray-600">${article.name}</p>
        <p class="text-gray-600">Prix: ${article.price}€</p>
        <p class="text-gray-600">Quantité: ${article.quantity}</p>
        <button onclick="removeFromCart('${article.name}')" class=" border-4 border-sky-800 border-l-sky-500  text-gray-500 px-4 py-2 rounded-md mt-4">Supprimer</button>
        <button onclick="validate()" class=" border-4 border-sky-800 border-l-sky-500 text-grey-500 px-4 py-2 rounded-md  mt-4 ">Valider</button>
    </div>
`;

        cartElement.appendChild(articleElement);
        totalPrice += article.price * article.quantity;
    });

    const totalElement = document.createElement("div");
    totalElement.innerHTML = `<p class="text-gray-600 font-bold">Prix total: ${totalPrice}€</p>`;
    cartElement.appendChild(totalElement);
}

function removeFromCart (articleName){
    const index = cart.findIndex (article => article.name === articleName);
    if (index !== -1){
        const article = cart[index];
        if (article.quantity > 1){
            article.quantity--;
        }else {
        cart.splice(index,1);
        }
    }
    displayCart();
}

function clearCart() {
    cart = [];
    displayCart();
}

document.addEventListener("DOMContentLoaded", function() {
    const validationForm = document.getElementById('validation');

    validationForm.addEventListener("submit",function(e){
        e.preventDefault();

        if(formIsNotEmpty()){
            alert("merci pour votre commande, à bientôt chez NerdyArtisan ! ")
            validationForm.classList.add("hidden");
            clearCart();
        }else{
            alert("veuillez remplir tous les champs du formulaire, jeune padawan !")
        }
       
    });
    
});
 
function formIsNotEmpty() {
    const name = document.getElementById('idName').value;
    const prenom = document.getElementById('idPrenom').value;
    const email = document.getElementById('idEmail').value;
    const tel = document.getElementById('idTel').value;
    const address = document.getElementById('idAddress').value;

    if (name && prenom && email && tel && address){
        return true;
    }else {
        return false;
    }
}
displayArticlesByCategory();
initCategories();
initArticles();
displayArticle();
displayCart();





