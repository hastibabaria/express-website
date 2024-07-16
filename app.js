const express = require('express')
const app = express()
const port = 3000

app.use(express.statis('public'))

app.get('/', (req, res) => {
 res.sendFile(__dirname+'Hello World!')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/home.html')
  })

  app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/about.html')
  })

  app.get('/contect', (req, res) => {
    res.sendFile(__dirname+'contect.html')
  })

  app.get('/cake', (req, res) => {
    res.sendFile(__dirname+'Hello cake!')
  })

  app.get('/cake/ahd', (req, res) => {
    res.sendFile(__dirname+'Hello ahd cake!')
  })

  app.get('/cake/surat', (req, res) => {
    res.sendFile(__dirname+'Hello surat cake!')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})