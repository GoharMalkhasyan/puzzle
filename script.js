let td = document.getElementsByClassName ("t");
let text = document.getElementById ("text");
let h = "";
let b = Math.floor (Math.random () * 255);
let d = Math.floor (Math.random () * 255);
let e = Math.floor (Math.random () * 255);
for (let i = 0; i < td.length; i ++) {
	td[i].style.backgroundColor = "rgb(" + b + "," + d + "," + e + ")";
	td[i].addEventListener ("click", function () {
		td[i].style.color = "red";
		if (td[i + 1] && td[i + 1].innerHTML == "" && i != 2 && i != 5) {
			h = td[i].innerHTML;
			td[i + 1].innerHTML = h;
			td[i].innerHTML = "";
		}
		if (td[i - 1] && td[i - 1].innerHTML == "" && i != 3 && i != 6) {
			h = td[i].innerHTML;
			td[i - 1].innerHTML = h;
			td[i].innerHTML = "";
		}
		if (td[i + 3] && td[i + 3].innerHTML == "") {
			h = td[i].innerHTML;
			td[i + 3].innerHTML = h;
			td[i].innerHTML = "";
		}
		if (td[i - 3] && td[i - 3].innerHTML == "") {
			h = td[i].innerHTML;
			td[i - 3].innerHTML = h;
			td[i].innerHTML = "";
		}
		if (td[0].innerHTML == 1 && td[1].innerHTML == 2 &&
 			td[2].innerHTML == 3 && td[3].innerHTML == 4 &&
 			td[4].innerHTML == 5 && td[5].innerHTML == 6 &&
 			td[6].innerHTML == 7 && td[7].innerHTML == 8 
			) {
			td[8].innerHTML = 9;
			text.innerText = "Duq Haxteciq";
		}

	});
}
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, ""];
// for (let j = 0; j < td.length; j ++) {
// 	let a = Math.floor (Math.random () * arr.length);
// 	td[j].innerHTML = arr[a];
// 	arr.splice (a, 1);
// 	console.log (arr);
// }