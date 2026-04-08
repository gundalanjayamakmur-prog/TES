// membuat peta
var map = L.map('map').setView([-6.2, 106.8], 10);

// layer peta
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// marker awal
var marker = L.marker([-6.2, 106.8]).addTo(map)
.bindPopup("Lokasi Awal")
.openPopup();

// fungsi cari lokasi
function searchLocation(){

let location = document.getElementById("searchInput").value;

fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
.then(res => res.json())
.then(data => {

if(data.length > 0){

let lat = data[0].lat;
let lon = data[0].lon;

map.setView([lat, lon], 13);

marker.setLatLng([lat, lon])
.bindPopup(location)
.openPopup();

}else{

alert("Lokasi tidak ditemukan");

}

});

}