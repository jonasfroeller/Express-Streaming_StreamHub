let xhttp = new XMLHttpRequest();
let object;

function multiRespond(password) {

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let dataString = this.responseText;
            object = JSON.parse(dataString);
            console.log(object);

            for (let i = 0; i < object.list.length; i++) {
                console.log("Video " + (i + 1) + ": " + object.list[i].src);

                document.getElementById('videos').innerHTML +=
                    `<div class="video-wrapper">
                    <param value="${object.list[i].cathegory}"></param>
                    <video id="video${i}" class="invert video" controls muted="muted">
                        <source src="${object.list[i].src}" type="video/mp4"/>
                    </video>
                    <div class="video-info-head"> 
                    <p>Name: ${object.list[i].name}</p>
                    <p>Kategorie: ${object.list[i].cathegory}</p>
                    <p>Quelle: ${object.list[i].source}</p>
                    </div>
                    </div>`;
            }
            playVideo();
        }
    };
    xhttp.open("GET", `http://localhost:8000/getVideos/` + password, true);

    xhttp.send();
}

function playVideo() {
    for (let index = 0; index < document.getElementsByClassName('video').length; index++) {
        let video = document.getElementById(`video${index}`);
        video.addEventListener('mouseover', function () { this.play() });
        video.addEventListener('mouseleave', function () { this.pause() });
    }
}

function resetTime(thisElement) {
    thisElement.currentTime() = 0;
}

function changeTheme() {
    const body = document.getElementsByTagName('body')[0];
    const invert = document.getElementsByClassName('invert');
    if (body.style.filter == "invert(100%)") {
        body.style.filter = "invert(0%)";
        for (let i = 0; i < invert.length; i++) {
            invert[i].style.filter = "invert(0%)";
        }
    } else if (body.style.filter == "invert(0%)") {
        body.style.filter = "invert(100%)";
        for (let i = 0; i < invert.length; i++) {
            invert[i].style.filter = "invert(100%)";
        }
    }
}

login("nope");
function login(passes) {
    document.getElementById('loginFields').style.display = "flex";
    document.getElementById('videos').style = "filter: blur(1.5rem);";

    if (passes == "approved") {
        document.getElementById('x').style.display = "block";
        document.getElementById('x').addEventListener("click", closeLogin);
        document.getElementById('loginText').innerHTML = "Would you like to switch to another Account?";
    }
}

function closeLogin() {
    document.getElementById('loginFields').style.display = "none";
    document.getElementById('videos').style = "filter: blur(0px);";
}

document.onkeydown = listenKeyboard;

function listenKeyboard(key) {
    if (key.keyCode == 13) {
        sendPassword();
    }
}

document.getElementById('sendLoginData').addEventListener('click', sendPassword);

let users = ["jonas", "tobias"];
function sendPassword() {
    let password = document.getElementById('passwortInput').value;
    let name = document.getElementById('nameInput').value;
    for (let i = 0; i < users.length; i++) {
        if (name != users[i]) {
            document.getElementById('passwortInput').style.backgroundColor = "rgba(255, 204, 207, 1)";
            document.getElementById('nameInput').style.backgroundColor = "rgba(255, 204, 207, 1)";
        }
    }
    if (password == "" || name == "") {
        document.getElementById('passwortInput').style.backgroundColor = "rgba(255, 204, 207, 1)";
        document.getElementById('nameInput').style.backgroundColor = "rgba(255, 204, 207, 1)";
    } else if (password != "") {
        for (let i = 0; i < users.length; i++) {
            if (name == users[i]) {
                document.getElementById('loginFields').style.display = "none";
                document.getElementById('videos').style = "filter: blur(0px);";
                console.log("logging  " + name + " in");
                respond(password);
            }
            else if (name != users[i]) {
                if (i == users.length) {
                    alert("user not found");
                }
            }
        }
    } else {
        document.getElementById('passwortInput').style.backgroundColor = "rgba(255, 204, 207, 1)";
        document.getElementById('nameInput').style.backgroundColor = "rgba(255, 204, 207, 1)";
    }
}

function respond(password) {
    if (document.getElementById('videos')) {
        document.getElementById('videos').innerHTML = "";
        multiRespond(password);
    }
}

function settings() {
    document.getElementById('settings').style.display = "flex";
}

function showCathegory(searched) {
    searchForMe(searched);
}

function searchForMe(searched) {
    if (searched == "getInputValue") {
        searched = document.getElementById('searchedInput').value;
    }

    console.log("searched " + searched);
    for (let i = 0; i < document.getElementsByClassName('video-wrapper').length; i++) {
        document.getElementsByClassName('video-wrapper')[i].style.display = "flex";
    }

    if (searched != "all") {
        for (let i = 0; i < document.getElementsByClassName('video-wrapper').length; i++) {
            console.log("value: " + i);
            console.log(document.getElementsByTagName('param')[i].value);
            if (document.getElementsByTagName('param')[i].value != searched) {
                document.getElementsByClassName('video-wrapper')[i].style.display = "none";
            }
        }
    }
}

function showMore() {
    if (document.getElementById('showMore').style.display == "flex") {
        document.getElementById('showMore').style.display = "none";
    } else {
        document.getElementById('showMore').style.display = "flex";
    }
}

