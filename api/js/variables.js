let mass = [];
let ratings = [];
let sortRating = [];
let cardLink;
const SHOWS_URL = 'http://api.tvmaze.com/shows/';
const SEARCH_URL = 'http://api.tvmaze.com/search/shows?q=';
const SHOWS_URL_EPISOD = '/episodes?specials=';
const REPLACE_TEXT = /(?!(\<br\>|\<br\s\/\>))<\/?[^>]+>/g;
// var pl = [];
const setLocal = (name, value) => {
    return localStorage.setItem(name, value);
}
const findLocal = () => {
    return localStorage.find;
}
    let sortFav =[];
