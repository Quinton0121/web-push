var push = require('web-push')

let vapidKey = { publicKey:
    'BE6iwXsLJDeQhxBF9I6eeckBetUIRwAsf7-6YvZsxOsZ6klEjpe_YEi_JZ7zuBRQ0z77zY11rozJKeW-xrRVWsk',
   privateKey: 'GzlTYAZUO6VqMOs9mLK-FH5efBPHQKal_gmSYpZX5qQ' }

push.setVapidDetails('mialto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)


let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/dU8My47N8S4:APA91bEQ_dzOQiVnF9VbcO9qLYIBTCvTesoHGJ93rJVGROhioPHHCOQATHtsohyz1MOys4AtJFmJN0NE0OMSZUn5D81_mDPJlAL-UpNwmFkzprLc6jkc0-I6fLEqmtbAn_LYta0tmiFo","expirationTime":null,"keys":{"p256dh":"BHe-Cz6QrRf2KXvw639lSWJjAD1E8VxROCSugNaXAKUlVUYmxs4di-VmgUBGtJXXdbiph7ITaOpC8mW-rZM2PG0","auth":"iou2_bZhrxy8MOmy6wu3Rw"}};
push.sendNotification(sub,'test message')