---
image: '/images/the-url.webp'
title: 'Cara Download Video dengan Blob URL'
date: '2022-06-02'
---

Mengunduh video bisa jadi menyebalkan, terutama ketika situs<!--more--> web yang kita gunakan tidak ingin membuatnya mudah. Untuk mencegah orang mengunduh video mereka, beberapa situs web bahkan menggunakan Objek Besar Biner, atau "blob", untuk mengenkripsinya. Blob digunakan untuk menyimpan jenis informasi tertentu, seperti gambar dan file multimedia. Mereka juga biasanya membutuhkan lebih banyak ruang daripada jenis data lainnya.

URL blob berisi protokol semu yang dapat membuat URL sementara ke file audio dan video. Jenis URL ini pada dasarnya bertindak sebagai sumber palsu untuk media di situs web, sehingga Anda tidak dapat mengunduhnya secara langsung.

Sebagai gantinya, Anda harus menggunakan alat konversi pihak ketiga. Namun, pertama-tama, Anda harus menemukan URL gumpalan itu sendiri. Berikut panduan lengkap tentang cara kerja proses ini:

### Bagaimana Saya Dapat Mengunduh Video Dari blob:http ?

Sebelum kita masuk ke perangkat lunak mana yang dapat Anda gunakan untuk mengonversi URL blob menjadi video dan mengunduhnya di perangkat Anda, Anda harus tahu cara menemukan alamat URL blob itu sendiri.

Anda harus mengakses DevTools di halaman web yang berisi video yang ingin Anda unduh. Berikut langkah-langkahnya:

- Klik kanan pada halaman web dan klik "Inspect" di menu.

<img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/1-copy-33.png?resize=768%2C520&ssl=1" alt="inspect" />

- Saat panel DevTools terbuka, klik pada tiga titik vertikal di sudut kanan atas dan pilih "Undock into a separate window."

<img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/2-copy-29.png?resize=768%2C517&ssl=1" alt="Undock into a separate window." />

- Tekan Ctrl + F pada Windows atau Cmd + F pada perangkat Mac untuk menemukan URL blob.

<img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/3-copy-32.png?resize=768%2C518&ssl=1" alt="Ctrl + F" />

- Masukkan "blob:HTTP" di kotak pencarian untuk menemukan tautan video.

<img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/4-copy-28.png?resize=768%2C518&ssl=1" alt="blob:HTTP" />

- Sekarang klik pada tab "Network" di dock DevTools.

<img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/5-copy-19.png?resize=768%2C519&ssl=1" alt="network" />

- Cari "m3u8" (yang merupakan ekstensi video yang Anda butuhkan).

<img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/6-copy-8.png?resize=768%2C519&ssl=1" alt="m3u8" />

- Klik tautan dan pastikan untuk menyalin URL Permintaan dari halaman.

<img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/7-copy-7.png?resize=768%2C518&ssl=1" alt="salin" />

Ingatlah bahwa Anda tidak dapat membuka tautan <b>blob:http</b> ini dari browser web karena halaman sumber tidak ada. Untuk mendapatkan video, Anda harus menggunakan <b>konverter.</b>

## VLC Media Player

Pemutar media ini mungkin bukan perangkat lunak video paling populer saat ini, tetapi masih memiliki fitur luar biasa yang berguna.

Misalnya, itu dapat mengonversi URL blob menjadi file MP4, yang dapat Anda simpan ke komputer Anda. Jadi, pastikan untuk menginstal VLC player versi terbaru, lalu ikuti langkah-langkah ini:

Buka terlebih dahulu media player VLC di komputer Anda. Jika belum ada, download dulu >>[DISINI](https://www.videolan.org/vlc/)<< pilih sesuai dengan OS komputer kalian.

- Klik "Media" pada bilah alat di bagian atas.

<img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/2-copy-30.png?resize=768%2C497&ssl=1" alt="vlc" />

- Dari menu drop-down, pilih "Open Network Stream".

<img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/3-copy-33.png?resize=768%2C495&ssl=1" alt="vlc" />

- Saat jendela baru terbuka, tempel URL blob yang disalin di ruang di bawah "Please enter a network URL".

<img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/4-copy-29.png?resize=768%2C494&ssl=1" alt="vlc"/>

- Klik panah yang mengarah ke bawah di sebelah tombol "Play".

<img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/8-copy-4.png?resize=768%2C497&ssl=1" alt="vlc"/>

- Dari menu drop-down, pilih "Convert".

<img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/5-copy-20.png?resize=768%2C498&ssl=1" alt="vlc"/>

- Ketika jendela konversi muncul, pilih kualitas output dan folder tujuan untuk file tersebut.

- Terakhir, klik tombol "Start".

<img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/7-copy-8.png?resize=768%2C494&ssl=1" alt="vlc"/>

- Dan, tunggu hingga konversi blob:https://xxxxxx-xxxxxx-xxxxxx selesai.

<img src="/images/vlc.jpg" alt="vlc"/>

Saat media player VLC mengonversi URL blob ke MP4, Anda dapat menemukan video di folder tujuan.


















