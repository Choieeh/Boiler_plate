import {
	LOGIN_USER
} from '../_actions/types'

export default function (state={}, action){
	switch (action.type) {
		case LOGIN_USER:
			return {...state, loginSuccess : action.payload}
			//...은 상태를 그대로 가져오는 것 현재 비어있으므로 빈 상태를 가져옴.
			break;
		default:
			return state;
	}
}