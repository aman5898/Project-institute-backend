const route = require('express').Router()
const teachers = require('../../data').teachers


// route.get('/', (req, res) => {
//   res.send(teachers)
// })

route.get('/',(req,res)=>{
    res.send(teachers);
})

route.post('/', (req, res) => {
    let teacher={
            name:req.body.name,
            username:req.body.username,
            password:req.body.password,
            contact:req.body.contact,
            school:req.body.school,
            degree:req.body.degree,
            college:req.body.college,
            email:req.body.email
          }
          teachers.push(teacher);
          res.send("success");
})

module.exports = route