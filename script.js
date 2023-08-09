'use strict';
const apiUrl = 'https://dummyjson.com/quotes/random';
const quotes = document.getElementById('quote');
const author = document.getElementById('author');
const nextEl = document.getElementById('btn');

async function getquote(url) {
  const response = await fetch(url);
  let data = await response.json();
  quotes.innerHTML = data.quote;
  author.innerHTML = `- ${data.author}`;
}

getquote(apiUrl);

//eventlistener
nextEl.addEventListener('click', (e) => {
  e.preventDefault();
  getquote(apiUrl);
});
