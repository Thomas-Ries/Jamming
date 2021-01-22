// Toggle register et login sur la page index.html
$('.message a').click(function(){
    $('form').animate({
        height: "toggle",
        opcaity: "toggle"
    }, "slow");
});


// Récupérer les infos sur la page index.html dans le DOM
const getRegisterInfo = e => {
    let formData = {
        identifiant: document.getElementById("identifiant").value,
        mail: document.getElementById("mail").value,
        password: document.getElementById("password").value
    }

    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
}

const getLoginInfo = e => {
    let loginData = {
        identifiant: document.getElementById("identifiant").value,
        password: document.getElementById("password").value
    }

    localStorage.setItem("loginData", JSON.stringify(loginData));
    console.log(localStorage.getItem('loginData'));
}


