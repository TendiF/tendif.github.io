var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BBzQCmtOV3_2y3_jv6r1Xo7LD-MShdGT2aVToGvSKz1qMFay22JfBgjatbeI95uIRjo7wEscSUpmvlAyb9O6JCk",
   "privateKey": "GY2hv4rtBI9AueSa6UogPggufxaGmZ77gmHnJAYfVD4"
};
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": " https://fcm.googleapis.com/fcm/send/f7bE9Em8mIo:APA91bF0Myynp2V8rql-pSxvShmq2GE5qrhgrUE0YSEgf6XA0PVNbN1XRPxmeYZm9kx_anYm0wkFQPu7166KuWWAyAzDaW_MnIxjPYlfGJKk_z6tm4MuOgbwgbi0rxlAqBNUcmBnBzKD",
   "keys": {
       "p256dh": "BLNijwwVTpqTdXAJg94Fp+rBhLyeEr8DvpcZKLifcDxWQeHXrGTsw8k1hvBuXpLk4uRK2Ahp28vlpQvMbJDrh+s=",
       "auth": "0phBblg+73Wo0MoRCcqT1A=="
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