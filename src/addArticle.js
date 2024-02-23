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
constructor(name,price,quantity,image,category){
    this.name=name;
    this.price=price;
    this.quantity=quantity;
    this.image = image;
    this.category=category;
    
}
}

function initArticles(){
    
    listArticles.push(new Article ("Naruto et Luffy", 25, 5,"assets/lufy_naruto.jpeg","manga"));
    listArticles.push(new Article ("Minecraft", 40, 10, "assets/minecraft.jpeg","jeux-vidéos"));
    listArticles.push(new Article ("Rick et Morty", 60, 20, "assets/rickMorty.jpeg","dessins animés"));
    listArticles.push(new Article ("Jurassik Park", 100, 3, "assets/JurassikPark.jpeg","films"));


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
        <p>Quantité: ${a.quantity}</p>
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
            <p>Quantité: ${article.quantity}</p>
        `;
        articles.appendChild(articleElement);
    });
}

let cart = [];

//ajouter un article au panier 

function addToCart (article){
    cart.push(article);
    displayCart();
}
//création du panier
function displayCart() {
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";

    cartElement.innerHTML += `
    <nav class="bg-sky-950 text-white w-96">
        <div class="container mx-auto flex justify-between items-center">
            <p class="text-2xl font-bold">Votre panier</p>
        </div>
    </nav>
`;
    
    cart.forEach(article => {
        const articleElement = document.createElement("li");
        articleElement.classList.add("panier","bg-sky-50", "shadow-md", "rounded-md", "p-6");
        articleElement.innerHTML =  `
        <div class="mt-4">
        <p class="text-gray-600">${article.name}</p>
        <p class="text-gray-600">Prix: ${article.price}€</p>
        <p class="text-gray-600">Quantité: ${article.quantity}</p>
        <button onclick="removeFromCart('${article.name}')" class="text-grey-500 mt-4">Supprimer</button>
        <button onclick="validate('${article.name}')" class="text-grey-500 mt-4  mr-8">Valider</button>
    </div>
`;

        cartElement.appendChild(articleElement);
    });
}

function removeFromCart (articleName){
    const index = cart.findIndex (article => article.name === articleName);
    if (index !== -1){
        cart.splice(index,1);
    }
    displayCart();
}
displayArticlesByCategory();
initArticles();
displayArticle();
displayCart();





