const express =  require('express')
const router  = express.Router()
const admin = require('../../firebase-config')
 

router.post('/',(req,res)=>{
   const  message =  {
        notification:{
            title:req.body.title,
            body:req.body.message,
        },
        tokens:['dUB617zbQz2C8QiLg-nB1Y:APA91bEnqoo-0UMHNnNod1g2sgSeK_irHyvaUv0QJy_VNnEfbOD1qj2rkTX5Eos8M0o6Z_5ISNEty5xAJGlcEEIHRI00bS3-XqK_AHGaJihtLE_xtmptAHhLTxRJsmO2VGEvXElo2dBk']
    }

    admin.messaging().sendMulticast(message).then(res=>{
        console.log(res)
    }).catch(err=>{console.log(err)})
})

module.exports = router