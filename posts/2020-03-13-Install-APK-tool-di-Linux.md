---
image: '/images/apktool.jpeg'
title: 'Install APK tool di Linux'
date: '2020-03-13'
---

Cara install APKtool di linux mint, buka terminal lalu Copy Paste Kode<!--more--> dibawah.
## Download apktool versi terbaru di [iBotPeaches](https://bitbucket.org/iBotPeaches/apktool/downloads)
<pre>
export apktool_version=2.3.1

sudo -E sh -c 'wget https://bitbucket.org/iBotPeaches/apktool/downloads/apktool_$apktool_version.jar -O /usr/local/bin/apktool.jar'

sudo chmod +r /usr/local/bin/apktool.jar

sudo sh -c 'wget https://raw.githubusercontent.com/iBotPeaches/Apktool/master/scripts/linux/apktool -O /usr/local/bin/apktool'

sudo chmod +x /usr/local/bin/apktool
</pre>

## Cara menggunakannya:
<pre>
apktool d TelephonyProvider.apk -o TelephonyProvider
</pre>
<br/>
