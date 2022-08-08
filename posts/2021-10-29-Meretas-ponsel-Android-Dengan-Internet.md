---
image: '/images/metasploit.jpg'
title: 'Peretasan Android Melalui internet'
date: '2021-10-29'
---

Jadi bagaimana jika kita ingin membuat peretasan bekerja di<!--more--> mana saja di dunia. Apa yang dapat kita lakukan untuk membuat peretasan global sehingga kita dapat meretas siapa pun melalui internet tanpa membeli server yang mahal?

Postingan ini lanjutan dari [- Hack ponsel Android dari jarak jauh](https://daffadev.my.id/Meretas-ponsel-Android-dari-jarak-jauh-menggunakan-Metasploit), Wajib baca dahulu postingan awal, sebelum melanjutkan langkah-langkah dibawah.
<br/>
## Langkah 1:
Kita membutuhkan router yang dapat melakukan fitur port forwarding. Ini adalah suatu keharusan untuk meretas internet dengan Metasploit.

<br/>
## Langkah 2: 
Selanjutnya, kita memerlukan IP dinamis untuk msfvenom dan Metasploit agar dapat bekerja melalui internet, jadi buka [noip.com](https://noip.com) dan daftar.

![kali](https://myhackingworld.com/wp-content/uploads/2019/08/Screenshot-256-min-1024x341.jpg)


Klik Add Host dan masukkan nama apa saja untuk host tersebut. Klik simpan host.


![kali-linix](https://myhackingworld.com/wp-content/uploads/2019/08/Screenshot-263-min-1024x460.jpg)

<br />
## Langkah 3: 
Sekarang Unduh DUC dari situs web resmi atau [klik di sini](https://www.noip.com/download). Instal klien DUC dan masuk ke akun Anda. Setelah Anda melakukan alamat IP untuk sistem Anda secara otomatis akan diperbarui dalam DNS. Jika ini tidak terjadi, Anda dapat mengkonfigurasi DNS secara manual.

![noip](https://myhackingworld.com/wp-content/uploads/2019/08/Screenshot-262-min.jpg)

<br/>
## Langkah 4: 
Klik tambahkan host pada klien DUC seperti yang ditunjukkan. Jika dilakukan dengan benar, Anda akan mendapatkan ketiga centang hijau.

![noip](https://myhackingworld.com/wp-content/uploads/2019/08/Screenshot-257-min.jpg)


Set host yang sebenarnya.

![noip](https://myhackingworld.com/wp-content/uploads/2019/08/Screenshot-258-min.jpg)

Semua pengaturan sudah diatur.

![noip](https://myhackingworld.com/wp-content/uploads/2019/08/Screenshot-259-min.jpg)

<br/>
## Langkah 5: 
Sekarang, kita memerlukan IP gateway untuk port forward dari pengaturan router kita. Jadi ketik <b>"ifconfig"</b> di command prompt, dan Anda akan mendapatkan IP gateway.

<br/>
## Langkah 6: 
Sekarang buka browser apa pun yang Anda miliki dan rekatkan IP gateway di sana. Ini akan meminta halaman login. Masukkan nama pengguna dan kata sandi router Anda (secara default keduanya adalah admin untuk sebagian besar router).

## Langkah 8: 
Sekarang arahkan ke opsi penerusan porta. Tergantung pada merek router, halaman mungkin berada di lokasi yang berbeda, tetapi prinsip dasarnya sama.

![noip](https://myhackingworld.com/wp-content/uploads/2019/06/Screenshot-46.png)

<br/>
## Langkah 9: 
Klik Add Port dan beri nilai Add port 2222 lagi dan simpan. Anda dapat memasukkan nomor port yang Anda inginkan.

<br/>
## Langkah 10: 
Sekarang, saat mengatur dua perintah alih-alih IP lokal saya, gunakan ddns yang baru saja Anda buat tanpa IP.


Jadi dalam kasus saya, itu akan menjadi nightfury007.dns.net bukannya 192.168.78.129


![noip](https://myhackingworld.com/wp-content/uploads/2019/06/m1.jpg)

Kamu juga akan menemukan beberapa perintah jaringan termasuk portfwd dan route
![noip](https://myhackingworld.com/wp-content/uploads/2019/06/m5.jpg)

<br/>
## Langkah 11: 
Sekarang, sisa metodenya sama. Anda harus menggunakan rekayasa sosial untuk membuat korban menginstal APK di perangkat mereka. Bagian ini adalah sesuatu yang harus Anda lakukan sendiri. Terserah kreativitas Anda.

<br/>
## Langkah 12: 
Anda telah berhasil meretas ponsel korban segera setelah mereka menginstal dan membukanya.

<br/>
## Langkah 13: 
Anda tidak perlu menggunakan NOIP sebagai ganti alamat IP publik Anda saat membuat apk dan menyiapkan Metasploit. Namun masalahnya adalah alamat IP publik yang kadang-kadang berubah, sehingga penggunaan IP publik akan menjadi solusi sementara.

### Cari di google "whatsmyIP" untuk menemukan alamat IP publik Anda

![noip](https://myhackingworld.com/wp-content/uploads/2019/08/Screenshot-291.jpg)


<br/>
## Langkah 14: 
Jika Anda mengalami masalah dengan klien tanpa IP. Jangan gunakan sebaliknya, langsung gunakan IP publik Anda. Penerusan port diperlukan secara default pada semua metode peretasan melalui internet.


<br/>
### Pertanyaan umum tentang peretasan dengan Metasploit dan msfvenom.

### Q.1 Apakah alat peretasan Metasploit dan msfvenom ini legal?
<b>Tidak.</b> Ini tidak dimaksudkan untuk meretas orang. Ini adalah alat yang dimaksudkan untuk <b>pentesting WhiteHat</b> saja dan harus digunakan dengan maksud yang sama. Kami([DaffaDev](https://daffadev.my.id/)) tidak bertanggung jawab apapun yang Anda lakukan atas penggunaan ilegal.

### Q.2 Tidak berfungsi apa yang harus saya lakukan?
Nonaktifkan firewall dan antivirus dan kemudian semua langkah lagi. Pastikan Anda tidak membuat kesalahan pengetikan saat mengetik perintah.

### Q.3 Antivirus saya mendeteksinya sebagai virus apakah aman?
File apk yang dibuat oleh msfvenom adalah virus yang dibuat oleh Anda jadi jelas kecuali Anda menggunakan aplikasi seperti kerangka cadar itu akan terdeteksi sebagai virus.

### Q.4 Saya ingin meretas ponsel pacar saya bagaimana caranya?
Kami tidak mendukung peretasan <b>BlackHat</b>, dan kami tidak membalas dan menanggapi permintaan tersebut. Artikel ini dimaksudkan hanya untuk tujuan pendidikan.

### Q.5 Dapatkah saya menggunakan kali Linux dengan di ponsel saya untuk menggunakan hack ini?
<b>Ya</b>, Anda dapat menggunakan aplikasi termux, atau Anda dapat menggunakan nethunter kali Linux untuk meretas perangkat android dengan Metasploit dan msfvenom.

### Q.6 Saya tidak ingin menggunakan NOIP?
Anda dapat langsung menggunakan alamat IP publik Anda.

### Q.7 Apa perbedaan antara alamat IP publik dan lokal?
IP publik adalah alamat yang Anda miliki di internet. Anda bisa google whatsmyIP untuk mengetahui IP publik Anda. IP lokal Anda adalah alamat IP sistem Anda di jaringan lokal. Gunakan ifconfig untuk Linux dan ipconfig untuk windows untuk mengetahui IP Anda.
