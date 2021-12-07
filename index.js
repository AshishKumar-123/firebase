const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())
var admin = require('firebase-admin')


admin.initializeApp({
    credential:admin.credential.cert({
        "type": process.env.FIREBASE_TYPE,
        "project_id": process.env.FIREBASE_PROJECT_ID,
        "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
        "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        "client_email": process.env.FIREBASE_CLIENT_EMAIL,
        "client_id": process.env.FIREBASE_CLIENT_ID,
        "auth_uri": process.env.FIREBASE_AUTH_URI,
        "token_uri": process.env.FIREBASE_TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
    }),
    databaseURL:process.env.FIREBASE_DATABASE_URL
})


const port = process.env.PORT || 3000


app.post('/firebase/notification',(req,res)=>{

    const message =  {
        notification:{
            title:req.body.sender,
            body:req.body.message,
            sound:'default'
        },
        tokens:req.body.tokens,  
    }

    admin.messaging().sendMulticast(message).then(res=>{
        console.log('sent message')
    }).catch((err)=>{
        console.log(err)
    })

})

app.listen(port,()=>{
    console.log('listening to port ',port)
})