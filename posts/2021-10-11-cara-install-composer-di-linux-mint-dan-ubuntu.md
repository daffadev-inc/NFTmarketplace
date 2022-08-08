---
image: '/images/composer-install.jpg'
title: 'Cara Install Composer di Linux Mint'
date: '2021-10-11'
---

Composer merupakan sebuah aplikasi package manager PHP<!--more--> yang menyediakan format standar untuk mengelola dependensi dan juga library-library PHP yang diperlukan.


Dengan <b>Composer</b> ini, kita bisa dengan mudah melakukan download maupun update dependensi ataupun library PHP yang kita inginkan.

# Cara Installasi Composer pada Linux Mint atau Ubuntu
Kita langsung saja pada inti postingan kali ini. Bagi kamu yang ingin menginstall Composer pada linux-nya, silahkan ikuti langkah-langkah di bawah ini :
- Update Sistem
Pertama-tama silahkan kamu update terlebih dahulu sistem linux nya dengan menggunakan perintah :
<pre>sudo apt-get update</pre>
ketikkan perintah di atas pada terminal kemudian tekan enter dan tunggu sampai proses update selesai
- Install Dependesi yang diperlukan
Setelah selesai melakukan update, langkah selanjutnya silahkan kamu ketikkan perintah di bawah ini pada terminal linux untuk menginstall beberapa dependensi yang diperlukan oleh composer
<pre>sudo apt-get install curl php-cli php-mbstring git unzip</pre>
kemudian tekan enter dan tunggu sampai proses installasi selesai
- Download dan Install Composer

    
Setelah semua dependensi yang diperlukan sudah terinstall, selanjutnya kita download dan install composer dengan perintah di bawah ini :
<pre>curl –sS https://getcomposer.org/installer | php</pre>
tunggu sampai proses selesai. Jika sudah sekarang kita tinggal memindahkan composer.phar ke dalam folder /usr/local/bin/composer dengan menggunakan perintah di bawah ini :
<pre>sudo mv composer.phar /usr/local/bin/composer</pre>
Setelah semua proses di atas sobat lakukan dan tidak terjadi error, langkah selanjutnya silahkan sobat tes apakah Composer berhasil terinstall pada linux sobat dengan mengetikkan perintah berikut :
<pre>composer</pre>
Kemudian langsung tekan enter. Jika muncul tampilan seperti pada gambar di bawah ini, berarti composer sudah berhasil terinstall.

![composer](/images/composer.webp)

Baiklah saya rasa cukup sekian tutorial yang bisa saya bagikan kali ini, semoga dengan adanya tutorial  ini bisa membantu kamu semua yang mengalami kesulitan installasi composer pada linux-nya.
