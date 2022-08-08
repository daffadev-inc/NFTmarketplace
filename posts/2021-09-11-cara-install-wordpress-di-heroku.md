---
image: '/images/wp-and-heroku.jpg'
title: 'Install Wordpress Di Heroku'
date: '2021-09-11'
---

Memindahkan semua situs web Wordpress yang saya hosting ke Heroku<!--more--> dan sekarang saya menghabiskan $0 sebulan, dengan senang hati menghemat lebih dari $300 setahun untuk biaya hosting dan Sertifikat SSL! Saya telah menyusun panduan ini untuk siapa saja yang mengelola situs Wordpress yang dihosting sendiri dan tidak memngeluarkan uang sepeser pun (selain dari biaya domain tahunan).


<b>Penafian:</b> kamu akan terbatas pada database 5MB, yang lebih dari cukup untuk kebanyakan orang, kecuali kamu berencana untuk memiliki lebih dari 1.000 posting dan/atau plugin yang menghasilkan baris baru kapan pun kamu menerbitkan posting baru (tidak umum). Bagi siapa saja yang mungkin tidak mengetahui hal ini: gambar, kode, dll. tidak disimpan dalam database, mereka hanya direferensikan. Saya akan membagikan alat yang harus kamu gunakan untuk mengelola ukuran basis data kamu nanti dalam panduan ini. kamu juga tidak akan dapat memperbarui versi Wordpress atau menambahkan plugin/tema baru dari Dasbor Admin WP. kamu harus memperbarui nomor versi Wordpress di file Composer.json kami, dan secara manual menambahkan tema/plugin ke dalam repo Wordpress lokal kami sebelum push ke heroku. Ini mungkin terdengar memakan waktu, tetapi hanya membutuhkan tambahan 1-2 menit setiap kali kamu perlu membuat versi Wordpress, tema, atau pembaruan plugin.


# Langkah
-  Daftar akun [Heroku](https://shortlink.biz/205334) untuk situs kamu masing-masing. Pilih "PHP" untuk bahasa pengembangan utama. Menambahkan informasi kartu kredit diperlukan bagi kita untuk menginstal Wordpress. Ini juga akan meningkatkan paket gratis kita dengan meningkatkan 500 jam dyno gratis kita menjadi 1000. Jika kamu ingin mempelajari lebih lanjut tentang jam kerja dyno, saya sangat merekomendasikan membaca posting blog Andrey Azimov . Instalasi Wordpress saya tidak akan selesai tanpa menambahkan CC. Saya tidak pernah ditagih dan situs saya sangat aktif. kamu dapat memeriksa penggunaan kamu di sini . Coba juga untuk membuat akun heroku terpisah untuk setiap situs web, kecuali jika kamu tidak mengharapkan banyak lalu lintas.

- Klik tombol [Deploy to Heroku](https://shortlink.biz/205335) di repositories [ini](https://shortlink.biz/205337). Saya telah menguji beberapa instalasi Heroku atau Wordpress yang berbeda dan sejauh ini yang terbaik.

- Kunjungi aplikasi baru kamu dari [dasbor](https://dashboard.heroku.com/apps/) heroku kamu dan buka pengaturannya. Kloning URL Heroku git ke komputer kamu.

- Klon [wordpress-heroku](https://shortlink.biz/205338) ke komputer kamu. Setelah itu, pindahkan konten wordpress-heroku ke dalam repo aplikasi kosong kamu. CD ke dalam aplikasi kamu, git add, commit, dan push. kamu sekarang dapat menghapus folder wordpress-heroku yang kosong dari komputer kamu.

- Daftarkan akun Cloudflare. Cloudflare akan memberikan instruksi yang sesuai untuk memperbarui server nama kamu. yaitu Masuk ke GoDaddy, edit pengaturan DNS, perbarui server nama.


Contoh server nama:<br/>
NS aldo.ns.cloudflare.com<br/>
NS josephine.ns.cloudflare.com
<p/><br/>
kamu sekarang dapat memeriksa cloudflare untuk melihat apakah server nama kamu mengarah ke Cloudflare. Saya sarankan menunggu setidaknya 5-10 menit untuk memperbaruinya.

- Langkah ini opsional tetapi sangat dianjurkan. Klik tab "Aturan Halaman" di Cloudflare dan masukkan tiga aturan halaman berikut:

1. *YOURDOMAIN.com/*
Selalu Gunakan HTTPS<br/>
2. www.YOURDOMAIN.com/*
URL Penerusan - 301 Pengalihan Permanen
https://YOURDOMAIN.com/$1
3. DOMAIN kamu.com/*
• Perkecil otomatis Html, Css, Js
• Pemuat Roket Aktif
• TTL Tembolok Peramban - 1 bulan

- Buka tab baru dan kunjungi pengaturan aplikasi heroku kamu lagi. Klik "Tambah Domain" dan masukkan nama domain kamu tanpa "www" atau "https". Salin target DNS. Buka dasbor Cloudflare kamu dan klik tab DNS. Kita hanya membutuhkan dua baris berikut. kamu dapat menghapus baris lain jika kamu mau.

![DNS](https://res.cloudinary.com/practicaldev/image/fetch/s--iZ6PSbu6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/r54ezmx6pp6hipoovhqg.png)
<b>Catatan:</b> Target DNS kamu kemungkinan besar akan berbeda dari yang disediakan di tangkapan layar.
<b>Selamat kamu sekarang dapat mengunjungi situs Wordpress baru kamu!</b>
<br/>Contoh Wordpress Heroku [daffadev.herokuapp.com](https://shortlink.biz/205340)<br/>Contoh WooCommerce di Wordpress Heroku [as-syariahbordir.herokuapp.com](https://shortlink.biz/205352)
