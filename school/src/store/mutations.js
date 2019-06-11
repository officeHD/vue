
const ININ_USER_TYPE = 'ININ_USER_TYPE'
const ININ_OPENID = 'ININ_OPENID'


const CHANGE_NEWS_TYPE = 'CHANGE_NEWS_TYPE'


 

export default {
	[ININ_USER_TYPE](state,val){
		sessionStorage.userType=val;
		state.userType=val;
		
	},
	[ININ_OPENID](state,val){
		sessionStorage.openId=val;
		state.openId=val;
		
	},

	

	[CHANGE_NEWS_TYPE](state,obj){
		state.common.newsTypeArr[obj.index].ischeck=obj.val;
	}
	 
}