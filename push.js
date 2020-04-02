var push = require('web-push')

let vapidKey = { publicKey:
    'BE6iwXsLJDeQhxBF9I6eeckBetUIRwAsf7-6YvZsxOsZ6klEjpe_YEi_JZ7zuBRQ0z77zY11rozJKeW-xrRVWsk',
   privateKey: 'GzlTYAZUO6VqMOs9mLK-FH5efBPHQKal_gmSYpZX5qQ' }

push.setVapidDetails('mialto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)


let sub={};
push.sendNotification(sub,'test message')