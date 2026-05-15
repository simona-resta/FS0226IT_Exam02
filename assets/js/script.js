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

const formattaPrezzo = (prezzo) => {
  return `€ ${prezzo.toFixed(2).replace('.', ',')}`;
};

const stelline = (rating) => {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
};

const creaGestoreCarrello = () => {
  let conteggio = 0;
  const elementoCarrello = document.querySelector('.carrello-box');
  
  return () => {
    conteggio++;
    elementoCarrello.innerText = `Carrello (${conteggio})`;
  };
};

const aggiungiAlCarrello = creaGestoreCarrello();

const renderProdotti = (lista) => {
  const container = document.getElementById("prodotti");
  container.innerHTML = "";

  lista.forEach((prodotto) => {
    const card = document.createElement("article");
    card.className = "prodotto-card";

    card.innerHTML = `
      <div class="img-placeholder">${prodotto.immagine}</div>
      <div class="prodotto-content">
        <h3>${prodotto.nome}</h3>
        <div class="rating">${stelline(prodotto.rating)} <span>(${prodotto.rating}.0)</span></div>
        <p class="prezzo">${formattaPrezzo(prodotto.prezzo)}</p>
        <button type="button" class="btn-add" ${!prodotto.disponibile ? "disabled" : ""}>
          ${prodotto.disponibile ? "Aggiungi al carrello" : "Esaurito"}
        </button>
      </div>
    `;

    const btn = card.querySelector('.btn-add');
    if (prodotto.disponibile) {
      btn.addEventListener('click', aggiungiAlCarrello);
    }

    container.appendChild(card);
  });
};

renderProdotti(prodotti);