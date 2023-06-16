let number;
let x;
let mark;
function getnumber(value) {
  let chackcount = document.getElementById("display").value;
  chackcount = parseFloat(chackcount.replaceAll(",", ""));
  if (chackcount.toString().length < 10) {
    let num = (document.getElementById("display").value += value);
    num = parseFloat(num.replaceAll(",", ""));
    number = num;
    document.getElementById("display").value = displayprocess(num);
  }
}

function displayprocess(num) {
  let value = num.toLocaleString("en-US");
  return value;
}

function BtnReset() {
  document.getElementById("display").value = "";
  number = 0;
  x = 0;
}

function Btndel(value) {
  let num = (document.getElementById("display").value = value
    .toString()
    .slice(0, -1));
  if (num != 0) {
    num = parseFloat(num.replaceAll(",", ""));
  }
  document.getElementById("display").value = displayprocess(num);
}


function calculate(value) {
  mark = value;
  x = number;
  document.getElementById("display").value = "";
}

function equal() {
  x = x + mark + number;
  x = eval(x);
  document.getElementById("display").value = displayprocess(x);
}

function decimal() {
  let num = (document.getElementById("display").value += ".");
  num = parseFloat(num.replaceAll(",", ""));
}

let btnTheme = document.getElementById("switch");
let slider = document.querySelector("#slider");

let ThemeNum = 1;
function switchTheme() {
  if (ThemeNum == 3) {
    ThemeNum = 1;
  } else {
    ThemeNum += 1;
  }
  switch (ThemeNum) {
    case 1:
      document.documentElement.className = "theme1";
      slider.style.marginLeft = "5px";
      break;

    case 2:
      document.documentElement.className = "theme2";
      slider.style.marginLeft = "25px";
      break;

    case 3:
      document.documentElement.className = "theme3";
      slider.style.marginLeft = "45px";
      break;

    default:
      document.documentElement.className = "theme1";
      slider.style.marginLeft = "5px";
  }
}
