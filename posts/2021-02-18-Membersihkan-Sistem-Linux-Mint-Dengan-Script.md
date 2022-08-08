---
image: '/images/linuxmint.jpg'
title: 'Membersihkan Sistem Linux'
date: '2021-02-18'
---

Merasa sistem linux kamu terasa lebih berat? Kernel yang bertumpuk<!--more--> setelah kamu meng-upgrade kernel beberapa kali saat bootloader berjalan seperti gambar di samping? Atau free space pada sistem kamu terasa lebih kecil dari seharusnya? Itu bertkamu bahwa sistem kamu masih menyimpan "sampah". Segera bersihkan sistem kamu! Bagaimana caranya?


Sebenarnya apa sih maksudnya file sampah? Maksudnya adalah file-file yang tidak digunakan dalam sistem. Beberapa aplikasi akan menyimpan data tambahan untuk digunakan kemudian atau sebagai backup. Namun jika kamu sudah merasa nyaman dengan yang ada, atau tidak menggunakannya lagi, file-file tersebut akan terus menumpuk dan memakan memory kamu atau bahkan bisa mengurangi efisiensi sistem kamu. Jika kamu seorang geek yang suka meng-install dan meng-uninstall aplikasi akan lebih banyak file sampah yang dihasilkan. Sehingga melakukan pembersihan (Cleaning) diperlukan untuk menjaga sistem kamu lebih optimal dan memperbesar free space dalam hardisk kamu.


File-file sampah tersebut dapat berupa :

-Cache dan history dari aplikasi
-File Temporary
-File backup
-File dalam Trash
-Paket orphans (tidak digunakan)
-Konfigurasi tak terpakai
-Kernel lama
Banyak pengguna linux yang merekomendasikan Bleachbit sebagai cleaning tools dalam sistem linux. Namun sayangnya Bleachbit tidak dapat menghapus paket orphans, konfigurasi tak terpakai, dan kernel lama. Terutama untuk kernel lama, bukan hanya memperbesar penggunaan hardisk saja. Kernel lama yang sudah tidak pernah kamu gunakan dapat bertumpuk pada bootloader. Ini tentu membuat bootloader terlihat kurang rapi.


Untuk konfigurasi tak terpakai bisa kamu hapus melalui perintah apt. Tapi apa kamu tahu file tersebut apa saja? Berapa banyak kernel yang kamu simpan? Mau ketik nama konfigurasi dan kernel satu persatu?


Nah! Di sini saya memberikan script sederhana untuk mengatasi masalah tersebut. Script ini berasal dari sini dan dapat menghapus cache dari apt, konfigurasi lama, dan kernel lama. Berikut script tersebut :

<pre>

#!/bin/bash


OLDCONF=$(dpkg -l|grep "^rc"|awk '{print $2}')

CURKERNEL=$(uname -r|sed 's/-*[a-z]//g'|sed 's/-386//g')

LINUXPKG="linux-(image|headers|ubuntu-modules|restricted-modules)"

METALINUXPKG="linux-(image|headers|restricted-modules)-(generic|i386|server|common|rt|xen)"

OLDKERNELS=$(dpkg -l|awk '{print $2}'|grep -E $LINUXPKG |grep -vE $METALINUXPKG|grep -v $CURKERNEL)

YELLOW="\033[1;33m"

RED="\033[0;31m"

ENDCOLOR="\033[0m"


if [ $USER != root ]; then

echo -e $RED"Error: must be root"

echo -e $YELLOW"Exiting..."$ENDCOLOR

exit 0

fi


echo -e $YELLOW"Cleaning apt cache..."$ENDCOLOR

aptitude clean


echo -e $YELLOW"Removing old config files..."$ENDCOLOR

sudo aptitude purge $OLDCONF


echo -e $YELLOW"Removing old kernels..."$ENDCOLOR

sudo aptitude purge $OLDKERNELS


echo -e $YELLOW"Emptying every trashes..."$ENDCOLOR

rm -rf /home/*/.local/share/Trash/*/** &> /dev/null

rm -rf /root/.local/share/Trash/*/** &> /dev/null


echo -e $YELLOW"Script Finished!"$ENDCOLOR

</pre>


Nah! untuk menggunakannya copy-paste script ini melalui text editor kesayangan kamu semisal Gedit, lalu simpan ke dalam home folder kamu dengan nama mintcleaner.sh (Sebenarnya nama bisa sesuka kamu, asalkan extensinya tetap .sh).


Lalu buka terminal, dan jalankan perintah

<pre>sudo chmod +x mintcleaner.sh</pre>

Sekarang script sudah siap kamu pakai! Untuk menjalankan script tersebut gunakan perintah

<pre>sudo sh mintcleaner.sh</pre>
 

Menurutku, script ini juga bisa digunakan untuk distro Ubuntu dan derivatifnya.
