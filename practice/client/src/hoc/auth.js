import React, { useEffect } from 'react';
import Axios from 'axios';
import {useDispatch} from 'react-redux';
import {auth} from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null){
	//null option => 아무나 출입이 가능한 페이지
	//true option => 로그인 유저만 출입이 가능
	//false option => 로그인 유저는 출입금지
	function AuthenticationCheck(props) {
		const dispatch = useDispatch();
		useEffect(() => {
			dispatch(auth())
			.then(response => {
				
			})
		})
	}
	
	return AuthenticationCheck
}