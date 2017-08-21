var squares = document.getElementsByClassName("squares");
var e = document.getElementById("e");   
var r = document.getElementById("r");   
var t = document.getElementById("t");   
var d = document.getElementById("d");   
var f = document.getElementById("f");   
var g = document.getElementById("g");   
var c = document.getElementById("c");   
var v = document.getElementById("v");   
var b = document.getElementById("b");   

var data = {
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

e.addEventListener("click", function(){data.e.sound.play();}, false);
r.addEventListener("click", function(){data.r.sound.play();}, false);
t.addEventListener("click", function(){data.t.sound.play();}, false);
d.addEventListener("click", function(){data.d.sound.play();}, false);
f.addEventListener("click", function(){data.f.sound.play();}, false);
g.addEventListener("click", function(){data.g.sound.play();}, false);
c.addEventListener("click", function(){data.c.sound.play();}, false);
v.addEventListener("click", function(){data.v.sound.play();}, false);
b.addEventListener("click", function(){data.b.sound.play();}, false);

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










