// Importação da base de dados e das funções
import { database } from "./database.js";
import { getProdId, loadProducts } from "./functions.js";

// -------- Variáveis do projeto ------------------------
const sectionNovidades = document.querySelector("#section-1 .carrousel");
const sectionMaisVendidos = document.querySelector("#section-2 .carrousel");
const sectionPromocoes = document.querySelector("#section-3 .carrousel");

// Filtros
let filtroCategoriaNovidades = database.filter(produto => produto.classificacaoProduto === "Novidades" && produto.exibirHome == true);
let filtroMaisVendidos = database.filter(produto => produto.classificacaoProduto === "Mais_Vendidos" && produto.exibirHome == true);
let filtroPromocoes = database.filter(produto => produto.classificacaoProduto === "Promocoes" && produto.exibirHome == true);

// Funções com parâmetros
loadProducts(filtroCategoriaNovidades, sectionNovidades);
loadProducts(filtroMaisVendidos, sectionMaisVendidos);
loadProducts(filtroPromocoes, sectionPromocoes);
getProdId();

// ------- Carrousel de produtos (Seção Novidades) -------------------
const productCarousel = document.querySelector('#section-1 .carrousel');
const prevBtn = document.querySelector('#section-1 .prev');
const nextBtn = document.querySelector('#section-1 .next');

let scrollAmount = 0;
const cardWidth = 270; // Ajuste para a largura do card

nextBtn.addEventListener('click', () => {
  scrollAmount += cardWidth; // Avança um card
  if (scrollAmount > productCarousel.scrollWidth - productCarousel.parentElement.offsetWidth) {
    scrollAmount = productCarousel.scrollWidth - productCarousel.parentElement.offsetWidth;
  }
  productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
  scrollAmount -= cardWidth; // Retrocede um card
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
  productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
});

// Slide automático (caso queira implementar para a seção de Novidades)
let currentSlide = 0;
const slides = document.querySelectorAll('.banner img');
const totalSlides = slides.length;

function showSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  const offset = -currentSlide * 100;
  document.querySelector('.banner').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

// Slide automático a cada 3 segundos
setInterval(() => {
  moveSlide(1);
}, 3000);
