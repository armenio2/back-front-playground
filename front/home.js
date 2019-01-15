window.onload = function () {

    getCss();
    console.log("dentro do onload")
};

document.addEventListener('DOMContentLoaded', function () {
    console.log("antes de carregar a page")
}, false);



function getCss() {

    //const axios = require('axios');

    // Make a request for a user with a given ID
    axios.get('http://127.0.0.1:5000/css')
        .then(function (response) {
            // handle success
            console.log(response);
            console.log("send response to change Css")
            changeCss(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    //console.log(response)
}

function changeCss(json) {

    document.getElementById("idAzul").style.background = json.header;
    document.getElementById("idVermelho").style.background = json.body;
    document.getElementById("idAmarelo").style.background = json.footer;
    console.log("Dentro do change css")
    console.log(json)
}