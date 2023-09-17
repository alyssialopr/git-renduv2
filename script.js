// faire apparaitre et disparaître la 1ere partie du site
const aly = document.getElementById("prez1");

const btnaly = document.getElementById("aly");

const leo = document.getElementById("prez2");

const btnleo = document.getElementById("leo");


btnaly.onclick = function () {
  aly.style.display = "block";
  leo.style.display = "none";
};

btnleo.onclick = function () {
  leo.style.display = "block";
  aly.style.display = "none";
};

