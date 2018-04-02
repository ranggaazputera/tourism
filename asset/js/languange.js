var btnasli = document.getElementById("btn-asli");
var btnpalsu = document.getElementById("btn-palsu");
var btngantibahasa = document.getElementById("btn-gantibahasa");
var btnasli2 = document.getElementById("btn-asli2");
var btnpalsu2 = document.getElementById("btn-palsu2");
var btngantibahasa2 = document.getElementById("btn-gantibahasa2");

function muncul(){
	btngantibahasa.style.display = "block";
	btnpalsu.style.display = "block";
	btnasli.style.display = "none";
}

function gakmuncul(){
	btngantibahasa.style.display = "none";
	btnpalsu.style.display = "none";
	btnasli.style.display = "block";
}

function muncul2(){
	btngantibahasa2.style.display = "block";
	btnpalsu2.style.display = "block";
	btnasli2.style.display = "none";
}

function gakmuncul2(){
	btngantibahasa2.style.display = "none";
	btnpalsu2.style.display = "none";
	btnasli2.style.display = "block";
}