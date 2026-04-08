const harga = 15000;

// HITUNG TOTAL
document.getElementById("jumlah").addEventListener("input", hitungTotal);

function hitungTotal() {
  let jumlah = document.getElementById("jumlah").value;
  let total = jumlah * harga;
  document.getElementById("total").innerText = "Rp " + total.toLocaleString();
}


// SEARCH FILM
function cariFilm() {
  let input = document.getElementById("search").value.toLowerCase();
  let films = document.querySelectorAll(".film");

  films.forEach(film => {
    let judul = film.innerText.toLowerCase();
    film.style.display = judul.includes(input) ? "block" : "none";
  });
}


// DETAIL PEMBAYARAN
document.getElementById("pembayaran").addEventListener("change", function () {
  let metode = this.value;
  let detail = document.getElementById("detailPembayaran");

  if (metode === "ewallet") {
    detail.innerHTML = `
      <h3>E-Wallet</h3>
      <p>No: 08568147815</p>
      <p>(DANA / OVO / GOPAY /shopepay)</p>
    `;
  }

  else if (metode === "bank") {
    detail.innerHTML = `
      <h3>Transfer Bank</h3>
      <p>BCA: 1234567890</p>
      <p>a.n Bioskop Mini</p>
    `;
  }

  else if (metode === "qris") {
    detail.innerHTML = `
      <h3>QRIS</h3>
      <img src="qris.jpg">
    `;
  }

  else if (metode === "cash") {
    detail.innerHTML = `<p>Bayar langsung di lokasi</p>`;
  }

  else {
    detail.innerHTML = "";
  }
});

// BOOKING + WHATSAPP
function booking() {
  let film = document.querySelector('input[name="film"]:checked');
  let jumlah = document.getElementById("jumlah").value;
  let metode = document.getElementById("pembayaran").value;

  if (!film) {
    alert("Pilih film!");
    return;
  }

  if (!metode) {
    alert("Pilih metode pembayaran!");
    return;
  }

  let total = jumlah * harga;

  let pesan = `Halo Admin Bioskop Mini
Saya mau booking:

🎬 Film: ${film.value}
👥 Jumlah: ${jumlah} orang
💰 Total: Rp ${total}
💳 Metode: ${metode}

Saya akan kirim bukti pembayaran.`;

  let nomor = "628568147815"; // GANTI NOMOR KAMU
  let url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
}