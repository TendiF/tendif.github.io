var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BJxUbzFFYNzgbHufYKkM_2VKDkhhC3BnVsGGLfXkExrPRfn7qNTDruHNnh7Cokjh1rRmro-LbhSl_Tn2TPD00PA",
   "privateKey": "ha5chCmkcsg7FPiVHLEM4Tpll1N3Nl-ttOaFj8S57Ok "
};
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/dsDRfpr2yIY:APA91bFDXQwlSbcODgXIGndglRNfGZ1XwH18_rIDiG-63tc3K5MHMwflvVZCS_ixfecjPRUs6yugVGS42hm72XUKhTUjYb0Jpjel3l6_BcTyxP1eCJ2vUPsLi7LsSaKymqXgH9DklSvF",
   "keys": {
       "p256dh": "BMXhqZQeiv1E/RJMQRZYMQ9EfhssAuOQS4zL0qvFrLyYaaIX74xeGdg2uWw1s8C+KuFQ2M/FzvcTKL3GJPhxTgU=",
       "auth": "SOmYTfJ74VfSDjtpkQfxgw=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '22401310523',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);