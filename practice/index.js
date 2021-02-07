const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Ehyun:asdf1234@cluster0.yqvbz.mongodb.net/Cluster0?retryWrites=true&w=majority', {
	useNewUrlParser: true, useUnifiedTopology : true, useCreateIndex:true, useFindAndModify : false
}).then(() => console.log('MongoDB connect'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))

app.post()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))