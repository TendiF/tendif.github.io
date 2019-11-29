var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BAeGWaQrWMNBqJ2Qjigxrl4rLWNFMYLx60KKF8yy3ojggwt7rgv85iw0yBigznuQ1dVNRgb6MCcM6NJvrfFohBI",
   "privateKey": "VokXvHBGP3x2q9kIJY9UFHRZMWEyA5HmDgIHgGWdfqI"
};
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/eyMtl4m7pNU:APA91bG6vy1gSN4B2mk7_npQGLb-P08eJfCpztjbK236dyfldZO2sVYLmWvYibJoCFbNzCUfhP9VsxF7PAej86vnJUloFPI9OSAuV4YFSKs-taIQU2leec2xoYXqYJHUFvXfg4EA3TgC",
   "keys": {
       "p256dh": "BMaHZL4zd0s9MSqnAsxn8vHFTR/pdzk2G6JJzoOegvxKZJP0SI7DeUoYUPf7X8F/ofvXCgx+4h1DqsbRTMvbSMk=",
       "auth": "fGvl9ToPQOi263MHmktuRw=="
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