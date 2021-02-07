const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require("./models/User");

const config = require('./config/key')
//key에서 config를 받아온 후 mongoURI를 연결하도록 한다.

//application url 형식
app.use(bodyParser.urlencoded({extended:true}));
//application json 형식 가져오기
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
	useNewUrlParser: true, useUnifiedTopology : true, useCreateIndex:true, useFindAndModify : false
}).then(() => console.log('MongoDB connect'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {
	//회원가입할때 필요한 정보들을 client에서 가져오면 DB에 넣어준다.
	
	const user = new User(req.body)
	//doc 에는 방금저장한 userinfo가 들어가 있음.
	user.save((err, doc) => {
		if(err) return res.json({success:false, err})
		return res.status(200).json({
			success: true
		})
	})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))