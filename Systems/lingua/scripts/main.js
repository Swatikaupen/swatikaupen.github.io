"use strict";

function clearActive() {
    if (oddcount == true) {
        oddcount = false;
        for (var a in elements) for (var b in elements[a].classList)  elements[a].classList.remove("odd");
    } else {
        oddcount = true;
        for (var a in elements) for (var b in elements[a].classList)  elements[a].classList.add("odd");
    }
    for (var a in elements) for (var b in elements[a].classList) "active" === elements[a].classList[b] && elements[a].classList.remove("active");
}

function addActive(a) {
    elements[a].classList.add("active");
}

function printSequence(a) {
    for (var b = sequence[a], c = 0; c < b.length; c++) "1" === b[c] && addActive(c);
}

function stepSequence() {
    clearActive();
    counter >= sequence.length && (counter = 0);
    printSequence(counter);
    document.getElementById("display").innerHTML = sequence[counter];
    counter++;
    setTimeout(stepSequence, frequency);
}
var oddcount=false;
var legend = {
"a": "00000000100",
"b": "00000001000",
"c": "00000010000",
"d": "00000100000",
"e": "00010000000",
"f": "01000000000",
"g": "00001000000",
"h": "00100000000",
"i": "10000000000",
"j": "00000001100",
"k": "00000010100",
"l": "00000011000",
"m": "00000011100",
"n": "00010100000",
"o": "01000100000",
"p": "01010000000",
"q": "01010100000",
"r": "00101000000",
"s": "10001000000",
"t": "10100000000",
"u": "10101000000",
"v": "00010000100",
"w": "10000000100",
"x": "10010000000",
"y": "10010000100",
"z": "00011010000",
".": "00000000010",
",": "00000000001",
" ": "00000000011"
};
var frequency=2e3, elements = document.getElementById("shape").getElementsByTagName("*"), counter = 0, sequence=[];

window.onload = function() {
  var input = "This is my message..";
  input = input.toLowerCase();
  for (var i=0; i<input.length; i++) sequence.push(legend[input[i]]);
  console.log(sequence);
  stepSequence();
};
