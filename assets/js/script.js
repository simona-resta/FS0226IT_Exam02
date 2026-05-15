const prodotti = [
  { nome: "Cuffie wireless", categoria: "Elettronica", prezzo: 89.99, rating: 4, immagine: "Cuffie", disponibile: true },
  { nome: "Tablet 10 pollici", categoria: "Elettronica", prezzo: 199.00, rating: 5, immagine: "Tablet", disponibile: true },
  { nome: "Il romanzo dell'anno", categoria: "Libri", prezzo: 14.90, rating: 4, immagine: "Libro", disponibile: true },
  { nome: "Zaino da viaggio", categoria: "Abbigliamento", prezzo: 49.99, rating: 4, immagine: "Zaino", disponibile: true },
  { nome: "Lampada LED", categoria: "Casa", prezzo: 29.50, rating: 3, immagine: "Lampada", disponibile: false },
  { nome: "Smartwatch GPS", categoria: "Elettronica", prezzo: 119.00, rating: 4, immagine: "Smartwatch", disponibile: true },
  { nome: "Mouse ergonomico", categoria: "Elettronica", prezzo: 24.90, rating: 4, immagine: "Mouse", disponibile: true },
  { nome: "Caffettiera moka", categoria: "Casa", prezzo: 22.00, rating: 5, immagine: "Caffettiera", disponibile: true },
  { nome: "Maglietta in cotone", categoria: "Abbigliamento", prezzo: 15.00, rating: 3, immagine: "Maglietta", disponibile: true },
  { nome: "Manuale JS", categoria: "Libri", prezzo: 35.00, rating: 5, immagine: "Libro Tech", disponibile: true },
  { nome: "Borraccia termica", categoria: "Casa", prezzo: 18.50, rating: 4, immagine: "Borraccia", disponibile: false },
  { nome: "Tastiera Meccanica", categoria: "Elettronica", prezzo: 75.00, rating: 5, immagine: "Tastiera", disponibile: true }
];

console.log("Array prodotti caricato:", prodotti);

const formattaPrezzo = (prezzo) => {
  return `€ ${prezzo.toFixed(2).replace('.', ',')}`;
};

const stelline = (rating) => {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
};

const filtraPerCategoria = (lista, categoria) => {
  return lista.filter(prodotto => prodotto.categoria === categoria);
};

const filtraDisponibiliERating = (lista) => {
  return lista.filter(prodotto => prodotto.disponibile && prodotto.rating >= 3);
};

console.log("Test Prezzo:", formattaPrezzo(89.99));
console.log("Test Stelline (Rating 3):", stelline(3));
console.log("Solo Libri:", filtraPerCategoria(prodotti, "Libri"));
console.log("Disponibili con Rating >= 3:", filtraDisponibiliERating(prodotti));