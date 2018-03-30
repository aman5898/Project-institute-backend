const express = require('express')
const path=require('path');

const app = express()

const routes = {
  pages: require('./routes/pages'),
  api: require('./routes/api')
}

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/',routes.pages);
app.use('/api',routes.api);




// app.get('/', (req, res) => {
//   res.render('home', {
    
//   })
// })

// app.get('/profile', (req, res) => {
//     res.render('profile', {
      
//     })
//   })

//   app.get('/register',(req,res)=>{
//     res.send(todos);
//   })

// app.post('/register',(req,res)=>{
//   let teacher={
//     name:req.body.name,
//     username:req.body.username,
//     password:req.body.password,
//     contact:req.body.contact,
//     school:req.body.school,
//     degree:req.body.degree,
//     college:req.body.college,
//     email:req.body.email
//   }
//   todos.push(teacher);
//   res.send("success");
// })


app.listen(3456, () => {
    console.log("Server started on http://localhost:3456")
  })