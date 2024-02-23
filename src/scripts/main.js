const articlesSection = document.getElementById("articlesSelection");
const article = articlesSection.querySelectorAll(".tableau");

//créer la classe article : 

class Article {
    constructor (name,price,category,quantity){
        this.name = name;
        this.price = price;
        this.category= category;
        this.quantity = quantity;
    }
    //test si ça s'affiche bien
    displayDetails(){
        console.log(`${this.name} - ${this.price}€ - ${this.category} - ${this.quantity}`);
    }
}

    

    //créer les articles 

    const newArticles = [
        {name: "Luffy et Naruto", price :25, category : "Manga", quantity: 3},
        {name: "Minecraft", price : 40, category : "Jeux vidéos", quantity : 5},
        {name: "Rick et Morty", price : 60, category : "Dessins Animés", quantity : 10},
        {name: "Jurassik Park", price : 100, category : "Films", quantity :5}

   
    ];
       

    //création dynamiques des articles 
const articles= newArticles.map(data =>{
    return new Article(data.name, data.price, data.category, data.quantity);

})
    
    
 //créer la liste des articles 

    articles.forEach(article => {
        article.displayDetails();
    });





//créer une classe article
//créer une classe catégorie
// Quand on clique sur une catégorie ça affiche les articles correspondants
//	L’utilisateur doit pouvoir constituer un panier en ajoutant et supprimant des articles - créer une classe panier
//Il peut passer commande avec demande de confirmation
//Une fois qu’il a validé le panier est vidé. 

