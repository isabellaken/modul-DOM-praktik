const judul = document.getElementById("judul");
const sapaan = document.getElementById("sapaan");
 
console.log(judul);
console.log(sapaan);
 
judul.textContent = "Judul Sudah Diubah!";
judul.style.color = "crimson";
 
sapaan.innerHTML = "Halo, saya sedang <b>belajar DOM</b>!";
 
const hantu = document.getElementById("tidakada");
console.log(hantu);
