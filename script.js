document
  .getElementById("formParkir")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nomorKendaraan = document.getElementById("nomorKendaraan").value;
    const jumlahJam = parseInt(document.getElementById("jumlahJam").value);
    const tarifParkir = parseInt(document.getElementById("tarifParkir").value);

    const totalBiaya = jumlahJam * tarifParkir;

    const hasilDiv = document.getElementById("hasil");
    hasilDiv.innerHTML = `<p>Nomor Kendaraan: ${nomorKendaraan}</p>
                          <p>Jumlah Jam Parkir: ${jumlahJam}</p>
                          <p>Total Biaya Parkir: Rp ${totalBiaya}</p>`;
  });
