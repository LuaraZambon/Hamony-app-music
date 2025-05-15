document.addEventListener('DOMContentLoaded', () => {
    
const artistsData = [
{ name: 'BTS', image: './images/btss.jpg' },
{ name: 'One Direction', image: './images/onedirection.jpg'},
{ name: 'One Ok Rock', image: './images/oneokrock.jpg'},
{ name: 'Ana Castela', image: './images/anacastela.jpg'},
{ name: 'Bruno Mars', image: './images/bruno.jpg'},
{ name: 'Lady Gaga', image: './images/gaga.jpg'},
{ name: 'Luan Santana', image: './images/luansantana.jpg'},
{ name: 'César Menotti e Fabiano', image: './images/menottiefabiano.jpg'},
{ name: 'Paula Fernandes', image: './images/paula.jpg'},
{ name: 'Pearl Jam', image: './images/pj.jpg'},
{ name: 'Queen', image: './images/queeen.jpg'},
{ name: 'Scorpions', image: './images/scorp.jpg'},
{ name: 'Shania Twain', image: './images/shaniatwain.jpg'}
];

const albumsData = [
    { name: 'Love Yourself', artist: 'BTS', image: './images/bts.jpg'},
    { name: 'Midnight Memories', artist: 'One Direction', image: './images/1d.jpg'},
    { name: 'Detox', artist: 'One Ok Rock', image: './images/1okrock.jpg'},
    { name: 'Boiadeira Internacional', artist: 'Ana Castela', image: './images/ana.jpg'},
    { name: 'Doo-Wops & Hooligans', artist: 'Bruno Mars', image: './images/brunomars.jpg'},
    { name: 'Joanne', artist: 'Lady Gaga', image: './images/ladygaga.jpg'},
    { name: 'City', artist: 'Luan Santana', image: './images/luan.jpg'},
    { name: 'Menottis Pop', artist: 'César Menotti e Fabiano', image: './images/menotti.jpg'},
    { name: 'Um ser de amor', artist: 'Paula Fernandes', image: './images/paulafernandes.jpg'},
    { name: 'Ten', artist: 'Pearl Jam', image: './images/pearljam.jpg'},
    { name: 'Rhapsody', artist: 'Queen', image: './images/queen.jpg'},
    { name: 'Crazy World', artist: 'Scorpions', image: './images/scorpions.jpg'},
    { name: 'Shania Twain', artist: 'Shania Twain', image: './images/shania.jpg'}
];

const artistGrid = document.querySelector('.artists-grid')
const albumGrid = document.querySelector('.albums-grid')

artistsData.forEach(artist => {
    const artistCard = document.createElement('div')
    artistCard.classList.add('artist-card')

    artistCard.innerHTML = `
    <img src="${artist.image}" alt="imagem do ${artist.name}">
    <div>
    <h3>${artist.name}</h3>
    <p>Artist</p>
    </div>
    `

    artistGrid.appendChild(artistCard)
});

albumsData.forEach(album => {
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')

    albumCard.innerHTML = `
    <img src="${album.image}" alt="imagem do ${album.name}">
    <div>
    <h3>${album.name}</h3>
    <p>${album.artist}</p>
    </div>
    `
    albumGrid.appendChild(albumCard)
});
});
