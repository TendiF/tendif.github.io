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
   "endpoint": "https://fcm.googleapis.com/fcm/send/fPBsxVW19GA:APA91bGGYzhbh76PT98MUPIHG3SvGkkpAT7sJmcNo3sBPodC_p38fOxH-Ako_gzcz5sFNNAxxHCQ2BR1VrG4x_n21_sv_MdsC55XHIZNSNodClQfkAfHQr9oP3hBMnPDr6IyPJ20JMgu",
   "keys": {
       "p256dh": "BEMf/inHIr1RFdo8iD2Vhsp6sWOwISCm/G4XYCubJDHZXI3WmFDMqJDXL3wob/prBHmv4hvxpdvYPJAONuExegQ=",
       "auth": "JdLJS91ZVuIUmTzuj6JxkA=="
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