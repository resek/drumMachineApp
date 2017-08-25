var squares = document.getElementsByClassName("squares");
var soundsButtons = document.getElementsByClassName("soundsMode");

var drumsData = {
    e: {
        sound: new Howl({
				src: ['drumSounds/prac-kick.wav']
			})
    },
    r: {
        sound: new Howl({
				src: ['drumSounds/prac-perc-1.wav']
			})
    },
    t: {
        sound: new Howl({
				src: ['drumSounds/prac-hat-3.wav']
			})
    },
    d: {
        sound: new Howl({
				src: ['drumSounds/prac-perc-2.wav']
			})
    },
    f: {
        sound: new Howl({
				src: ['drumSounds/prac-ride-bell-loud.wav']
			})
    },
    g: {
        sound: new Howl({
				src: ['drumSounds/prac-sidestick-2.wav']
			})
    },
    c: {
        sound: new Howl({
				src: ['drumSounds/prac-snare-2.wav']
			})
    },
    v: {
        sound: new Howl({
				src: ['drumSounds/prac-snare-rimshot.wav']
			})
    },
    b: {
        sound: new Howl({
				src: ['drumSounds/prac-tom.wav']
			})
    },
}

var weirdoData = {
    e: {
        sound: new Howl({
				src: ['manSounds/cjipie.wav']
			})
    },
    r: {
        sound: new Howl({
				src: ['manSounds/eh.wav']
			})
    },
    t: {
        sound: new Howl({
				src: ['manSounds/houb.wav']
			})
    },
    d: {
        sound: new Howl({
				src: ['manSounds/hruuhb.wav']
			})
    },
    f: {
        sound: new Howl({
				src: ['manSounds/jah.wav']
			})
    },
    g: {
        sound: new Howl({
				src: ['manSounds/oa-h.wav']
			})
    },
    c: {
        sound: new Howl({
				src: ['manSounds/uhraa.wav']
			})
    },
    v: {
        sound: new Howl({
				src: ['manSounds/uoh.wav']
			})
    },
    b: {
        sound: new Howl({
				src: ['manSounds/uueh.wav']
			})
    },
}

checkSelection();

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
        checkSelection();
    });
}

//play drums sounds for specific element / node from nodeList
function drumsSounds(e) {
    var properties = Object.values(drumsData);
    var target = e.target;   
    var index = Array.prototype.indexOf.call(squares, target);
    properties[index].sound.play();
}

//play weirdo sounds for specific element / node from nodeList
function weirdoSounds(e) {
    var properties = Object.values(weirdoData);
    var target = e.target;
    var index = Array.prototype.indexOf.call(squares, target);
    properties[index].sound.play();
}

//check for selected button & add event listeners for nodes
function checkSelection () {        
    for (var i = 0; i < squares.length; i++) {
        if (soundsButtons[0].classList.contains("selected")) {                               
            //play sound on mouse click for every div
            squares[i].removeEventListener("click", weirdoSounds, false);
            squares[i].addEventListener("click", drumsSounds, false);
        } else if (soundsButtons[1].classList.contains("selected")) {
            squares[i].removeEventListener("click", drumsSounds, false);
            //play sound on mouse click for every div
            squares[i].addEventListener("click", weirdoSounds, false);            
        }
    }
}

//play sound and change background color on keydown
document.addEventListener("keydown", function(event) {
    event.preventDefault();
    if (event.keyCode === 69) {
        data.e.sound.play();
        e.style.background = "red";
    } if (event.keyCode === 82) {
        data.r.sound.play();
        r.style.background = "red";
    } if (event.keyCode === 84) {
        data.t.sound.play();
        t.style.background = "red";
    } if (event.keyCode === 68) {
        data.d.sound.play();
        d.style.background = "red";
    } if (event.keyCode === 70) {
        data.f.sound.play();
        f.style.background = "red";
    } if (event.keyCode === 71) {
        data.g.sound.play();
        g.style.background = "red";
    } if (event.keyCode === 67) {
        data.c.sound.play();
        c.style.background = "red";
    } if (event.keyCode === 86) {
        data.v.sound.play();
        v.style.background = "red";
    } if (event.keyCode === 66) {
        data.b.sound.play();
        b.style.background = "red";
    }
}, false);

//change background color back on keyup
document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 69) {    
        e.style.background = "blue";
    } if (event.keyCode === 82) {
        r.style.background = "blue";
    } if (event.keyCode === 84) {
        t.style.background = "blue";
    } if (event.keyCode === 68) {
        d.style.background = "blue";
    } if (event.keyCode === 70) {
        f.style.background = "blue";
    } if (event.keyCode === 71) {
        g.style.background = "blue";
    } if (event.keyCode === 67) {
        c.style.background = "blue";
    } if (event.keyCode === 86) {
        v.style.background = "blue";
    } if (event.keyCode === 66) {
        b.style.background = "blue"; 
    }
}, false);