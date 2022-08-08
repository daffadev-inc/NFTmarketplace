---
image: '/images/GoodDollar-ke-Metamask.jpg'
title: 'Cara Menghubungkan GoodDollar ke Metamask'
date: '2022-01-03'
---

Menghubungkan G$ ke Metamask umumnya diperlukan<!--more--> jika seseorang ingin bertransaksi di platform yang memerlukan conect wallet sehingga harus dibuka melalui browser DAPP Metamask.

Selain itu, metode ini juga berguna bagi orang yang ingin memindah G$ ke wallet pribadinya. Karena sejauh ini pihak GoodDollar belum menyediakan menu transer ke wallet external.

### 1. Persiapan
Panduan ini mengasumsikan:
1. Anda telah mendaftar GoodDollar, jika belum Anda bisa mendapatkannya disini [wallet.gooddollar.org](https://gooddollarregistration.page.link/claimeveryday)
2. Anda telah memiliki dompet metamask, jika belum silahkan buat [disini](https://metamask.io/download.html).

### 2. Salin Private Key GoodDollar
1. Login ke akun GoodDollar dan pilih menu Export Wallet.
2. Copy Private key untuk proses expor wallet ke metamask lalu simpan di tempat yang aman.

### 3. Expor kunci pribadi ke metamask
Buka aplikasi Metamask. Panduan ini mengasumsikan Anda telah memiliki sebuah akun di Metamask. Jika belum silahkan buat terlebih dulu atau masuk ke wallet Anda dengan memasukan 12 Phrase dari Trust Wallet atau Safepal.
Klik Impor Akun dan masukan Private key GoodDollar disana lalu pilih Done. Dengan begitu seharusnya wallet baru telah berhasil di Impor ke akun metamask Anda.

### 4. Pindah ke Jaringan Fuse Network
Sampai disini Anda masih belum bisa menambahkan token GoodDollar di wallet metamask karena masih berada di jaringan ETH. Silahkan ikuti step berikut untuk merubah jaringan Etherium ke FUSE Network.

1. Buka metamask dan pilih Pengaturan
2. Selanjutnya ini kolom yang muncul dengan isian berikut.
- Nama Jaringan: FUSE NETWORK
- Url RPC: https://rpc.fuse.io/
- ID Rantai: 122
- Simbol: FUSE
- URL Block Explorer: https://explorer.fuse.io/

Contoh pengisian dapat disesuaikan dengan gambar ini:
![metamask](/images/fuse.png)

Dan hasilnya akan seperti gambar dibawah.

![fusetoken](/images/fusetoken.png)

Selanjutnya masukan Contract address berikut di kolom yang muncul.

<pre>Token Contract Address:<br/>0x495d133B938596C9984d462F007B676bDc57eCEC</pre>

Contoh hasil pengisian kurang lebih seperti gambar berikut.

![gooddollar](/images/gooddollar.png)

Dengan mengikuti cara diatas kini wallet GoodDollar telah berhasil di impor ke metamask.
![gdollar](/images/G$.png)

