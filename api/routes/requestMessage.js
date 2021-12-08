const express =  require('express')
const router  = express.Router()
const admin = require('../../firebase-config')
 

router.post('/',(req,res)=>{
    const myToken =  req.body.myToken
   const  message = {
        notification:{
            title:req.body.sender,
            body:req.body.message,
        },
        tokens:req.body.tokens-myToken
    }

    admin.messaging().sendMulticast(message).then(res=>{
        console.log(res)
    }).catch(err=>{console.log(err)})
})

module.exports = router