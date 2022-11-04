const express=require('express');
const router= express.Router();

router.use ((req,res,next)=>{
    console.log('Time: ', Date.now())
    next()
});

router.get('/', (req,res)=>{
    res.send('<h1>ABOUT PAGE ;)</h1> <img src="data:image/jpeg;base64,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">')
});

router.get('/me', (req,res)=>{
    res.send([
        {
            "id": "me",
            "name": "Nai",
            "message": "hi",
        },{
            "id": "meee",
            "name": "Nai",
        },
    ]);
});

module.exports=router;