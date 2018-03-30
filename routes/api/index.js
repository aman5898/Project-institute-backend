const route = require('express').Router()

// route.use('/', require('./'))
route.use('/login', require('./login'))
route.use('/attendance', require('./attendance'))
route.use('/addbatch', require('./addbatch'))

module.exports = route