// AFFICHER L'IDENTIFIANT sur Main PAge
function displayUserData() {
    let { identifiant } = JSON.parse(localStorage.getItem('formData'));
    document.getElementById("userName").innerHTML +=`
            <h2 id="userName">
                Bienvenu ${identifiant}
            </h2>
        `;
};
displayUserData();


const { default: axios } = require("axios");

// ============================
// ============================
// ============================
//  CALL API NASA avec Fetch
// ============================
// ============================
// ============================
const API_NASA_KEY = "zxzYwz03PbTzFAGLLN9akcgnxVGmG1Flw00WXTUH";
// const API_NASA_APOD = "https://api.nasa.gov/planetary/apod";

async function getNasaApod() {
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_NASA_KEY}`);
    let data = await response.json();
    console.log(data);
    useNasaApod(data);
};

function useNasaApod(data) {
    document.getElementById("responseHTML").innerHTML = '';

    document.getElementById("responseHTML").innerHTML += `

                <article class="unsplash">
                    <img class="unsplashImg" src="${data.hdurl}" alt="Photo APOD aléatoire" />
                    <p class="photoDescription"> Titre : ${data.title}</p>
                    <p class="photoDescription"> ${data.explanation}</p>
                    <p class="authorNasaApod"> 📷 : ${data.copyright} </p>
                    <a class="unsplashUrl" href="https://apod.nasa.gov/apod/astropix.html" target="blank">👁 : Site de la Nasa APOD</a>
                </article>`;
};


function getNasaCuriosity() {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${API_NASA_KEY}`)
        .then(function(data) {
            return data.json();
        })
        .then(function (data) {
            // console.log(data.photos);
            document.getElementById("responseHTML").innerHTML = '';
            data.photos.forEach(photo => {
                console.log(data);
                document.getElementById("responseHTML").innerHTML += `
                <article class="unsplash">
                    <img class="unsplashImg" src="${photo.img_src}" alt="Photo aléatoire" />
                </article>`;
            })
        })
    };


// ============================
// ============================
// ============================
//  CALL API UNSPLASH avec Fetch
// ============================
// ============================
// ============================
const API_UNSPLASH = 'http://api.unsplash.com/photos/random?client_id=ydQmmTHyvs5G91qJwh4B_LnBAl8gFNoPrs5txAXFD9U&count=20';

function getRandomImages() {
    fetch(API_UNSPLASH)
        .then(function(data) {
            return data.json();
        })
        .then(function (data) {
            // console.log(data);
            document.getElementById("responseHTML").innerHTML = '';

            data.forEach(photo => {
                // console.log(photo);
                document.getElementById("responseHTML").innerHTML += `

                <article class="unsplash">
                    <img class="unsplashImg" src="${photo.urls.regular}" alt="Photo aléatoire" />
                    <p class="photoDescription"> Titre : ${photo.description}</p>
                    <p class="author"> 📷 : ${photo.user.first_name} ${photo.user.last_name} </p>
                    <p class="likes"> ❤️ :  ${photo.likes} </p>
                    <a class="photoLink" href="${photo.links.html}" target="blank">Télécharger la photo sur Unsplash</a>
                    <a class="unsplashUrl" href="https://unsplash.com/" target="blank">www.unsplash.com</a>
                </article>`;
            })
        })
    };


// ============================
// ============================
// ============================
//  CALL API Cats avec Fetch
// ============================
// ============================
// ============================
async function getRandomCats() {
    fetch('http://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then((data) => {
            let catImgUrl = data[0].url;
            document.getElementById("responseHTML").innerHTML= `
            <article class="dog">
                <img class="dogImg" src="${catImgUrl}" alt="image de chat aléatoire" />
            </article>`
        });
};

// ============================
// ============================
// ============================
//  CALL API Dogs avec Fetch
// ============================
// ============================
// ============================
const API_URL = 'http://dog.ceo/api/breeds/image/random/1';

async function getRandomDogs() {
    const response = await fetch(API_URL);
    const json = await response.json();
    // console.log(json);

    json.message.forEach(dogImage => {
        document.getElementById("responseHTML").innerHTML= `
        <article class="dog">
            <img class="dogImg" src="${dogImage}" alt="image de chien aléatoire" />
        </article>`
    });
    // loadingElement.className += ' hidden';
}


// ============================
// ============================
// ============================
//  EVENT LISTENER pour btn dans main page
// ============================
// ============================
// ============================
document.getElementById("getChiens").addEventListener("click", getRandomDogs);
document.getElementById("getChats").addEventListener("click", getRandomCats);
document.getElementById("getUnsplash").addEventListener("click", getRandomImages);
document.getElementById("getNasa").addEventListener("click", getNasaApod);
document.getElementById("getNasaCuriosity").addEventListener("click", getNasaCuriosity);


// ============================
// ============================
// ============================
//  NOTIFICATIONS dans mainPage
// ============================
// ============================
// ============================

function doNotify() {
    Notification.requestPermission()
        .then(function(result){
            
            let myNotification = new Notification('Jamming', {
                "body": "Coucou toi, je suis la notif !",
                "icon": 'https://picsum.photos/id/1062/200/300'
            });

        });
}

// ============================
// ============================
// ============================
//  DARK MODE dans mainPage
// ============================
// ============================
// ============================
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
});

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}






