var _CONTENT = [
    "Pursuing B-Tech CS-CYS",
    "A Front-End Developer",
    "A Python Programmer",
    "A Gamer and Youtuber"
  ];

var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;

var _ELEMENT = document.querySelector("#text");
var _CURSOR = document.querySelector("#cursor");

function Type() {

  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;
  if (text === _CONTENT[_PART]) {

    _CURSOR.style.display = 'none';

    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 50);
    }, 1000);
  }
}

function Delete() {
  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  if (text === '') {
    clearInterval(_INTERVAL_VAL);

    if (_PART == (_CONTENT.length - 1))
      _PART = 0;
    else
      _PART++;

    _PART_INDEX = 0;

    setTimeout(function () {
      _CURSOR.style.display = 'inline-block';
      _INTERVAL_VAL = setInterval(Type, 100);
    }, 200);
  }
}

_INTERVAL_VAL = setInterval(Type, 100);


function myJourney() {
  document.getElementById("about-content").innerHTML = "HI"
}
