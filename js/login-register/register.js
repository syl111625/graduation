window.onload=function(){
//用户名校验，不能为空

function getId(id){
	var id=document.getElementById(id);
	return id;
}
var writeTures=document.getElementsByClassName('writeTure');
getId(username); getId(usernameTip);
getId(email); getId(emailTip);
getId(password);getId(passwordTip);
getId(realpassword);getId(realpasswordTip);
getId(phone);getId(phoneTip);
getId(captcha);getId(captchaTip);
getId(samepasswordTip);

//用户名验证
username.onblur=function username(){
	var username=document.getElementById("username");
	var temp=/(?=^[0-9a-zA-Z]{4,20}$)\w*[a-zA-Z]+\w*/;
	if(this.value==""){
	
		usernameTip.style.display="block";
//		username.focus();
		username.style.border="1px solid #00DDDD";
	}
	else if(!temp.test(this.value)){
		usernameTip.innerHTML="用户名由4-20位字母和数字组成";
//		username.focus();
		usernameTip.style.display="block";
		username.style.border="1px solid #00DDDD";
	}
	else if(temp.test(this.value)){
		writeTures[0].style.display="block";
		usernameTip.style.display="none";
		username.style.border="";
	}
}
//邮箱验证
email.onblur=function email(){
	var temp=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
	var email=document.getElementById("email");
	if(this.value==""){
		emailTip.style.display="block";
//		email.focus();
		email.style.border="1px solid #00DDDD";
	}
	else if(!temp.test(this.value) ){
		emailTip.style.display="block";
		emailTip.innerHTML="邮箱格式不正确";
//		email.focus();
		email.style.border="1px solid #00DDDD";
	}
else {
		emailTip.style.display="none";
		writeTures[1].style.display="block";
		email.style.border="";
	}
}
//密码验证
password.onblur=function password(){
	var temp=/^(\w){6,16}$/;
var password=document.getElementById("password");
	if(this.value==""){
	
		passwordTip.style.display="block";
//		password.focus();
		password.style.border="1px solid #00DDDD";
	}
	else if(!temp.test(this.value)){
		passwordTip.innerHTML="密码由6-20位字母\数字\下划线组成";
		passwordTip.style.display="block";
//		password.focus();
		password.style.border="1px solid #00DDDD";
	}
	else if(temp.test(this.value)){
		writeTures[2].style.display="block";
		passwordTip.style.display="none";
		password.style.border="";
	}
}
//再次密码验证
realpassword.onblur=function realpassword(){
	var temp=/^(\w){6,16}$/;
var realpassword=document.getElementById("realpassword");
	if(this.value==""){
		samepasswordTip.style.display="none";
		realpasswordTip.style.display="block";
//		realpassword.focus();
		realpassword.style.border="1px solid #00DDDD";
	}
	else if(!temp.test(this.value)){
		realpasswordTip.innerHTML="密码由6-20位字母\数字\下划线组成";
		samepasswordTip.style.display="none";
		realpasswordTip.style.display="block";
		realpassword.style.border="1px solid #00DDDD";
	}
	else if(this.value!=password.value){
		realpasswordTip.style.display="none";
		samepasswordTip.style.display="block";
//		realpassword.focus();
		realpassword.style.border="1px solid #00DDDD";
	}
	else{
		writeTures[3].style.display="block";
		realpasswordTip.style.display="none";
		samepasswordTip.style.display="none";
		realpassword.style.border="";
	}
}
//手机号校验
phone.onblur=function phone(){
	var phone=document.getElementById("phone");
	var temp=/^1[3|4|5|8][0-9]\d{4,8}$/;
	if(this.value==""){
	
		phoneTip.style.display="block";
//		password.focus();
		phone.style.border="1px solid #00DDDD";
	}
	else if(!temp.test(this.value)){
		phoneTip.innerHTML="手机号格式不正确";
//		username.focus();
		phoneTip.style.display="block";
		phone.style.border="1px solid #00DDDD";
	}
	else if(temp.test(this.value)){
		writeTures[4].style.display="block";
		phoneTip.style.display="none";
		phone.style.border="";
	}
}
	
//验证码校验
captcha.onblur=function captcha(){
	var captcha=document.getElementById("captcha");
	if(this.value==""){
		captchaTip.style.display="block";
//		captcha.focus();
		captcha.style.border="1px solid #00DDDD";
	}
	
}


	/*function empty(id,idTip){
id.onblur=function(){

	if(this.value==""){
		idTip.style.display="block";
		id.style.border="1px dotted red";
	}else{
		idTip.style.display="none";
		id.style.border="";
	}

}
}
var registerSubmit=document.getElementById('registerSubmit');

registerSubmit.onblur=function registerSubmit(){
getId(username); getId(usernameTip);
getId(email); getId(emailTip);
getId(password);getId(passwordTip);
getId(realpassword);getId(realpasswordTip);
getId(captcha);getId(captchaTip);
getId(samepasswordTip);

empty(username,usernameTip);
empty(email);empty(emailTip);
empty(password);empty(passwordTip);
empty(realpassword);empty(realpasswordTip);
empty(captcha);empty(captchaTip);

}*/

}
