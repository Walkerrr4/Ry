function downloadVideo() {
    // Ambil URL TikTok yang dimasukkan pengguna
    const url = document.getElementById("tiktokUrl").value;

    // Validasi URL
    if (url === "") {
        alert("Masukkan URL TikTok terlebih dahulu.");
        return;
    }

    // Simulasikan link download untuk demo (di dunia nyata, kamu harus menggunakan API atau scraping untuk mendapatkan URL video)
    const videoUrl = `https://tiksave.io/api/ajaxSearch=${encodeURIComponent(url)}`;

    // Menampilkan link download (biasanya disarankan untuk menggunakan API eksternal)
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = videoUrl;  // Gantilah dengan link download yang sesuai.
    downloadLink.textContent = "Klik di sini untuk mengunduh video TikTok";

    // Menampilkan bagian link download
    document.getElementById("downloadSection").style.display = "block";
}
