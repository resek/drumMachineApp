var squares = document.getElementsByClassName("squares");
var soundsButtons = document.getElementsByClassName("soundsMode");
var muteButtons = document.getElementsByClassName("muteMode");
var volumeInput = document.querySelector("input");
var screen = document.querySelector("#screen");
var volumeNum;

checkMuteMode();

//key events
window.addEventListener("keydown", keysSounds, false);
window.addEventListener("keyup", backgroundOrange, false);

//click events
for (var i = 0; i < squares.length; i++) {   
    squares[i].addEventListener("click", clickSounds, false);
    squares[i].addEventListener("mousedown", function(e){ e.preventDefault(); }, false);
}

//prevent from selecting text with clicks
screen.addEventListener("mousedown", function(e){ e.preventDefault(); }, false);

//volume input listeners
volumeInput.addEventListener("change", volumeChange, false);

//on click change selected button (drums / weirdo)
for (var i = 0; i < soundsButtons.length; i++) {
    soundsButtons[i].addEventListener("click", function(){
        soundsButtons[0].classList.remove ("selected");
        soundsButtons[1].classList.remove ("selected");
        this.classList.add ("selected");
        screen.textContent = "";        
    });
}

//on click change selected button (on / off)
for (var i = 0; i < muteButtons.length; i++) {
    muteButtons[i].addEventListener("click", function(){
        muteButtons[0].classList.remove ("selected");
        muteButtons[1].classList.remove ("selected");
        this.classList.add ("selected"); 
        checkMuteMode();  
    });
}

//select between drums / weirdo sounds and play correct sound for clicked element
function clickSounds(e) {
    var target, prop, index, options;
    target = e.target;    
    if (soundsButtons[0].classList.contains("selected")) {
        prop = Object.values(drumsData);
    } else {
    prop = Object.values(weirdoData);
    }
    index = Array.prototype.indexOf.call(squares, target);
    prop[index].sound.play();
    if (muteButtons[0].classList.contains("selected")) {
        options = prop[index].sound._src.substring(11);
        screen.textContent = options.substring(0, options.length - 4);
    } else {
        screen.textContent = "";
    }    
}

//select between drums / weirdo sounds for keyEvents & switch between pressed keys
function keysSounds (e) {
    var prop;
    e.preventDefault();    
    if (soundsButtons[0].classList.contains("selected")) {
        prop = Object.values(drumsData);
    } else {
    prop = Object.values(weirdoData);
    }        
    switch(e.code) {
        case "KeyU":
        prop[0].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[0].style.background = "#b70303";
            options = prop[0].sound._src.substring(11);
            screen.textContent = options.substring(0, options.length - 4);
        } else {
            squares[0].style.background = "#0f5e15";
            screen.textContent = "";
        }        
        break;
        case "KeyI":
        prop[1].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[1].style.background = "#b70303";
            options = prop[1].sound._src.substring(11);
            screen.textContent = options.substring(0, options.length - 4);           
        } else {
            squares[1].style.background = "#0f5e15";
            screen.textContent = "";
        }
        break;
        case "KeyO":
        prop[2].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[2].style.background = "#b70303";
            options = prop[2].sound._src.substring(11);
            screen.textContent = options.substring(0, options.length - 4);
        } else {
            squares[2].style.background = "#0f5e15";
            screen.textContent = "";
        }
        break;
        case "KeyH":
        prop[3].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[3].style.background = "#b70303";
            options = prop[3].sound._src.substring(11);
            screen.textContent = options.substring(0, options.length - 4);
        } else {
            squares[3].style.background = "#0f5e15";
            screen.textContent = "";
        }
        break;
        case "KeyJ":
        prop[4].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[4].style.background = "#b70303";
            options = prop[4].sound._src.substring(11);
            screen.textContent = options.substring(0, options.length - 4);
        } else {
            squares[4].style.background = "#0f5e15";
            screen.textContent = "";
        }
        break;
        case "KeyK":
        prop[5].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[5].style.background = "#b70303";
            options = prop[5].sound._src.substring(11);
            screen.textContent = options.substring(0, options.length - 4);
        } else {
            squares[5].style.background = "#0f5e15";
            screen.textContent = "";
        }
        break;
        case "KeyB":
        prop[6].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[6].style.background = "#b70303";
            options = prop[6].sound._src.substring(11);
            screen.textContent = options.substring(0, options.length - 4);
        } else {
            squares[6].style.background = "#0f5e15";
            screen.textContent = "";
        }
        break;
        case "KeyN":
        prop[7].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[7].style.background = "#b70303";
            options = prop[7].sound._src.substring(11);
            screen.textContent = options.substring(0, options.length - 4);
        } else {
            squares[7].style.background = "#0f5e15";
            screen.textContent = "";
        }
        break;
        case "KeyM":
        prop[8].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[8].style.background = "#b70303";
            options = prop[8].sound._src.substring(11);
            screen.textContent = options.substring(0, options.length - 4);
        } else {
            squares[8].style.background = "#0f5e15";
            screen.textContent = "";
        }
        break;       
    }
}

//check if mute off button is selected and mute all sound with global method
function checkMuteMode () {
    if (muteButtons[0].classList.contains("selected")) {
        muteFalse();
        clickBackgroundRed();
        screen.textContent = "Volume: " + Math.round(volumeInput.value * 100) + "%";              
    } else {
        muteTrue();
        clickBackgroundGreen();
        screen.textContent = "";                 
    }
    backgroundOrange();                 
}

function muteFalse() {
    for (var key in drumsData) {
        if (drumsData.hasOwnProperty(key)) {                
            drumsData[key].sound.mute(false);                    
        }
    }
    for (var key in weirdoData) {
        if (weirdoData.hasOwnProperty(key)) {               
            weirdoData[key].sound.mute(false);                   
        }
    } 
}

function muteTrue() {
    for (var key in drumsData) {
        if (drumsData.hasOwnProperty(key)) {
            drumsData[key].sound.mute(true);
        }
    }
    for (var key in weirdoData) {
        if (weirdoData.hasOwnProperty(key)) { 
            weirdoData[key].sound.mute(true);       
        }
    }
}

function backgroundOrange() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = "#f9ba3e";
        squares[i].addEventListener("mouseup", function(){
            this.style.background = "#f9ba3e"; 
        });    
    }
}

function clickBackgroundRed() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mousedown", function(){
            this.style.background = "#b70303";
        });
    }
}

function clickBackgroundGreen() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mousedown", function(){
            this.style.background = "#0f5e15";
        });
    }
}

function volumeChange(e) {
    volumeNum = volumeInput.value;
    for (var key in drumsData) { 
        if (drumsData.hasOwnProperty(key)) {
            drumsData[key].sound.volume(volumeNum);
        } 
    }    
    for (var key in weirdoData) { 
        if (weirdoData.hasOwnProperty(key)) {
            weirdoData[key].sound.volume(volumeNum);
        } 
    }
    showVolume(e);
}

function showVolume(e) {
    var target, sum;
    target = e.target;
    sum = Math.round(target.value * 100);
    screen.textContent = "Volume: " + sum + "%";
}