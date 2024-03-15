import Route from "./Route.js";

// Définir ici vos routes
export const allRoutes = [
    new Route("/","Accueil", "/pages/home.html", []),
    new Route("/services", "Services du zoo","/pages/services.html", [],"js/afficher_services.js"),
    new Route("/signin", "Connexion","/pages/signin.html", ["disconnected"],"js/auth/signin.js"),
    new Route("/signup", "Creer un compte", "/pages/signup.html", [], "js/auth/signup.js"),
    new Route("/habitats", "Les habitats du zoo","/pages/habitats.html",[]),
    new Route("/contact", "Contact","/pages/contact.html", [],),
    new Route("/avis", "Avis sur le zoo","/pages/avis.html", []),
  
];

    //Le titre s'affiche comme ceci : Route.titre - websitename
export const websitename = "Zoo Arcadia";