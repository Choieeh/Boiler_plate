const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
	name: {
		type: String,
		maxlength: 50
	},
	email:{
		type: String,
		trim: true,
		unique: 1
	},
	password: {
		type: String,
		minlength: 5
	},
	lastname: {
		type: String,
		maxlength: 50
	},
	role: {
		type: Number,
		default: 0
	},
	image: String,
	token: {
		type: String
	},
	tokenExp: {
		//token 유효기간 token은 유효성 검사
		type: Number
	}
})

userSchema.pre('save', function( next ){
	var user = this;
	//this는 userSchema를 가리킴
	
	if(user.isModified('password'))
		{//비밀번호 암호화
		//salt를 이용해서 비밀번호를 암호화하게 됨. saltRound는 salt가 몇글자인지.
		bcrypt.genSalt(saltRounds, function(err, salt) {
			if(err) return next(err)

			bcrypt.hash(user.password, salt, function(err, hash){
				if(err) return next(err)
				user.password = hash
				next()
			})
		});}
})

const User = mongoose.model('User', userSchema)

module.exports = {User}