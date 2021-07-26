const api = "http://www.omdbapi.com/?i=tt3896198&apikey=be41af31"
const searchbox = document.querySelector(".Search-box");
searchbox.addEventListener('keypress',setQuery);  // can omit for original
const button = document.querySelector(".button");
button.addEventListener('click',setQuery);

function setQuery(evt) {
    getResults(searchbox.value);
}

function getResults(q) {
     fetch(`${api}&s=${q}`)
    .then(movie =>{
        return movie.json();
    }).then((movie)=>{
        // console.log(movie.Search.length);
        
            var content = document.querySelector("#content"); 
            
            var box = content.lastElementChild;  
            while (box) { 
                content.removeChild(box); 
                box = content.lastElementChild; 
            } 

            for(var a=0;a<movie.Search.length;a++){
                let box = document.createElement("div");
                box.setAttribute("class","box");
                let content =document.getElementById("content");

                content.appendChild(box);

                box.innerHTML = `<div class="title">${movie.Search[a].Title} (${movie.Search[a].Year})</div>
                <div class="type">${movie.Search[a].Type}</div>
                <div class="poster"><img src="${movie.Search[a].Poster}"></img></div>
                <a href="https://www.imdb.com/title/${movie.Search[a].imdbID}" target="_blank">More Details</a>`;
            }
    })
} 