var squares = document.getElementsByClassName("squares");
var soundsButtons = document.getElementsByClassName("soundsMode");
var muteButtons = document.getElementsByClassName("muteMode");

var drumsData = {
    u: {
        sound: new Howl({
				src: ['drumSounds/prac-kick.wav']
			})
    },
    i: {
        sound: new Howl({
				src: ['drumSounds/prac-perc-1.wav']
			})
    },
    o: {
        sound: new Howl({
				src: ['drumSounds/prac-hat-3.wav']
			})
    },
    h: {
        sound: new Howl({
				src: ['drumSounds/crispydinner.wav']
			})
    },
    j: {
        sound: new Howl({
				src: ['drumSounds/prac-ride-bell-loud.wav']
			})
    },
    k: {
        sound: new Howl({
				src: ['drumSounds/prac-sidestick-2.wav']
			})
    },
    b: {
        sound: new Howl({
				src: ['drumSounds/prac-snare-2.wav']
			})
    },
    n: {
        sound: new Howl({
				src: ['drumSounds/prac-snare-rimshot.wav']
			})
    },
    m: {
        sound: new Howl({
				src: ['drumSounds/prac-tom.wav']
			})
    },
}

var weirdoData = {
    u: {
        sound: new Howl({
				src: ['manSounds/cjipie.wav']
			})
    },
    i: {
        sound: new Howl({
				src: ['manSounds/eh.wav']
			})
    },
    o: {
        sound: new Howl({
				src: ['manSounds/houb.wav']
			})
    },
    h: {
        sound: new Howl({
				src: ['manSounds/hruuhb.wav']
			})
    },
    j: {
        sound: new Howl({
				src: ['manSounds/jah.wav']
			})
    },
    k: {
        sound: new Howl({
				src: ['manSounds/oa-h.wav']
			})
    },
    b: {
        sound: new Howl({
				src: ['manSounds/uhraa.wav']
			})
    },
    n: {
        sound: new Howl({
				src: ['manSounds/uoh.wav']
			})
    },
    m: {
        sound: new Howl({
				src: ['manSounds/uueh.wav']
			})
    },
}

//keyEvents
window.addEventListener("keydown", keysSounds, false);
window.addEventListener("keyup", backgroundBlue, false);

//squares click events
for (var i = 0; i < squares.length; i++) {   
    squares[i].addEventListener("click", clickSounds, false);
}

//on click change selected button (drums / weirdo)
for (var i = 0; i < soundsButtons.length; i++) {
    soundsButtons[i].addEventListener("click", function(){
        soundsButtons[0].classList.remove ("selected");
        soundsButtons[1].classList.remove ("selected");
        this.classList.add ("selected");        
    });
}

//on click change selected mute button (on / off)
for (var i = 0; i < muteButtons.length; i++) {
    muteButtons[i].addEventListener("click", function(){
        muteButtons[0].classList.remove ("selected");
        muteButtons[1].classList.remove ("selected");
        this.classList.add ("selected"); 
        checkMuteMode();  
    });
}

//select between drums / weirdo sounds and play correct sound for targeted element
function clickSounds(e) {
    var target, prop, index;
    target = e.target;
    for (var i = 0; i < soundsButtons.length; i++) {
        if (soundsButtons[0].classList.contains("selected")) {
            prop = Object.values(drumsData);
        } else {
        prop = Object.values(weirdoData);
        }
    }
    index = Array.prototype.indexOf.call(squares, target);
    prop[index].sound.play();
}

//select between drums / weirdo sounds for keyEvents & switch between pressed keys
function keysSounds (e) {
    var prop;
    e.preventDefault();    
    for (var i = 0; i < soundsButtons.length; i++) {
        if (soundsButtons[0].classList.contains("selected")) {
            prop = Object.values(drumsData);
        } else {
        prop = Object.values(weirdoData);
        }
    }    
    switch(e.code) {
        case "KeyU":
        prop[0].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[0].style.background = "red";
        } else {
            squares[0].style.background = "green";
        }        
        break;
        case "KeyI":
        prop[1].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[1].style.background = "red";
        } else {
            squares[1].style.background = "green";
        }
        break;
        case "KeyO":
        prop[2].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[2].style.background = "red";
        } else {
            squares[2].style.background = "green";
        }
        break;
        case "KeyH":
        prop[3].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[3].style.background = "red";
        } else {
            squares[3].style.background = "green";
        }
        break;
        case "KeyJ":
        prop[4].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[4].style.background = "red";
        } else {
            squares[4].style.background = "green";
        }
        break;
        case "KeyK":
        prop[5].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[5].style.background = "red";
        } else {
            squares[5].style.background = "green";
        }
        break;
        case "KeyB":
        prop[6].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[6].style.background = "red";
        } else {
            squares[6].style.background = "green";
        }
        break;
        case "KeyN":
        prop[7].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[7].style.background = "red";
        } else {
            squares[7].style.background = "green";
        }
        break;
        case "KeyM":
        prop[8].sound.play();
        if (muteButtons[0].classList.contains("selected")) {
            squares[8].style.background = "red";
        } else {
            squares[8].style.background = "green";
        }
        break;       
    }
}

//check if mute off button is selected and mute all sound with global method
function checkMuteMode () {
    if (muteButtons[0].classList.contains("selected")) {
        muteFalse();
        clickBackgroundRed();               
    } else {
        muteTrue();
        clickBackgroundGreen();        
    }
    backgroundBlue();                 
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

function backgroundBlue() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = "blue";
        squares[i].addEventListener("mouseup", function(){
            this.style.background = "blue";
        });    
    }
}

function clickBackgroundRed() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mousedown", function(){
            this.style.background = "red";
        });
    }
}

function clickBackgroundGreen() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mousedown", function(){
            this.style.background = "green";
        });
    }
}


// mute keydown to green (mogoce se nekako loop skozi switch); check for [0] to work without loop;