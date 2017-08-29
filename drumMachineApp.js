var squares = document.getElementsByClassName("squares");
var soundsButtons = document.getElementsByClassName("soundsMode");

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

//nodelist elements click events
for (var i = 0; i < squares.length; i++) {   
    squares[i].addEventListener("click", clickSounds, false);
}

//change background color & back on mouse click
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mousedown", function(){
        this.style.background = "red";
    });
}
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseup", function(){
        this.style.background = "blue";
    });
}

//on click change selected button (drums / weirdo)
for (var i = 0; i < soundsButtons.length; i++) {
    soundsButtons[i].addEventListener("click", function(){
        soundsButtons[0].classList.remove ("selected");
        soundsButtons[1].classList.remove ("selected");
        this.classList.add ("selected");        
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
        squares[0].style.background = "red";
        break;
        case "KeyI":
        prop[1].sound.play();
        squares[1].style.background = "red";
        break;
        case "KeyO":
        prop[2].sound.play();
        squares[2].style.background = "red";
        break;
        case "KeyH":
        prop[3].sound.play();
        squares[3].style.background = "red";
        break;
        case "KeyJ":
        prop[4].sound.play();
        squares[4].style.background = "red";
        break;
        case "KeyK":
        prop[5].sound.play();
        squares[5].style.background = "red";
        break;
        case "KeyB":
        prop[6].sound.play();
        squares[6].style.background = "red";
        break;
        case "KeyN":
        prop[7].sound.play();
        squares[7].style.background = "red";
        break;
        case "KeyM":
        prop[8].sound.play();
        squares[8].style.background = "red";
        break;       
    }
}

function backgroundBlue() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = "blue";
    }
}