const route = require('express').Router()
const teachers = require('../../data').teachers



route.get('/',(req,res)=>{
    var reqteacher=teachers[0];
    var count=reqteacher.batch.length;
    var batchname=[];
    for(var i=0;i<count;i++){
        batchname.push(reqteacher.batch[i].batchname);
    }
    res.send(batchname);
})

route.get('/studentlist',(req,res)=>{
    var reqteacher=teachers[0];
    console.log(reqteacher.batch);
    
    res.send(reqteacher.batch);
})

route.post('/attendancemark',(req,res)=>{
    var reqteacher=teachers[0];
    console.log(reqteacher);
    reqteacher.batch=req.body.data;
    res.send("Attendance marked")
})


module.exports = route