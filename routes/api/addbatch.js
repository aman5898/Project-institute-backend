const route = require('express').Router()
const teachers = require('../../data').teachers





route.get('/',(req,res)=>{
    res.send(teachers);
})

route.post('/', (req, res) => {
    var reqteacher=teachers[0];
     //console.log(reqteacher);
        reqteacher['batch'].push(req.body.batch)
        console.log(reqteacher);
        
        // res.send("success");
        res.redirect('/login');
})

module.exports = route