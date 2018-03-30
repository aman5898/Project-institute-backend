const route = require('express').Router()
const teachers = require('../data').teachers

route.get('/', (req, res) => {
  res.render('home')
})

// var teacher=teachers[0]
// console.log(teachers);


route.get('/login', (req, res) => {
  res.render('login_inside',{
    teachers
  });
})


route.get('/attendance', (req, res) => {
  res.render('attendance');
})

route.get('/record',(req,res)=>{
  res.render('record')
})


module.exports = route