---
image: '/images/on-linux.jpg'
title: 'Cara Install Wine di Kali Linux'
date: '2021-10-09'
---

Banyak komentar "pake linux kok masih pengen pake aplikasi windows" dan<!--more--> komentar-komentar sejenis. Hmm.. saya sendiri gak tau apa tujuan kamu mau install Wine, tapi yang jelas gak semua yang install Wine itu bertujuan biar bisa ngejalanin aplikasi Windows di Linux.

Saya sendiri jujur masih butuh Wine karena tools pembuat backdoor seperti Veil-Evasion dll membutuhkan wine dan wine32 untuk membuat backdoor yang bisa dijalankan di Windows.

Pertama, jalankan perintah
<pre>
sudo apt-get install wine
</pre>

Sampai disini wine sudah terinstall. Namun masih ada dependensi yang kurang yaitu wine32.

install wine32 nya sebagai berikut:

<pre>sudo dpkg --add-architecture i386 && sudo apt-get update && sudo apt-get install wine32</pre>

Lalu tunggu sampai proses install selesai. Lama tidaknya proses instalasi tergantung dari koneksi kalian.

Untuk menjalankan wine cukup ketik command

<pre>wine</pre>
<br/>

![wine](/images/wine.webp)

Kemudian setting Wine dengan Perintah 
<pre>winecfg</pre>
![wine](/images/setwine.webp)

Mari kita coba instal menjalankan aplikasi Windows Notepad ++ menggunakan Wine di Kali Linux.

[Download Notepad ++](https://github.com/notepad-plus-plus/notepad-plus-plus/releases/) dan simpan di disk local kamu.
lalu ketikan perintah 
<pre>cd ~/Downloads<br/>
wget https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.1.9/npp.8.1.9.Installer.exe</pre>
Kemudian jalankan aplikasi penginstal, sesuaikan saja nama paketnya.
<pre>$ wine ./npp.8.1.9.Installer.exe</pre>
<br/>
![](/images/intallwine.webp)
Klik <b>OK</b>, kemudian lanjutkan penginstallan tampilan akan sama seperti di windows.
![](/images/notpad.webp)
<br/> 
![](/images/notpadd.webp)
Tunggu hingga selesai...

![](/images/notepad++.webp)

Dan selesai. Mudah bukan..
