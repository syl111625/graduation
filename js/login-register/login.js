	window.onload=function(){
//用户名校验，不能为空

function getId(id){
	var id=document.getElementById("id");
	return id;
}
var writeTures=document.getElementsByClassName('writeTure');
getId(username); getId(usernameTip);

getId(password);getId(passwordTip);
username.onblur=function(){
	if(this.value==""){
	
		usernameTip.style.display="block";
//		username.focus();
		username.style.border="1px solid #00DDDD";
	}
	else if(this.value!=""){
		writeTures[0].style.display="block";
		usernameTip.style.display="none";
		username.style.border="";
	}
}
password.onblur=function(){
//	var temp=/^(\w){6,16}$/;
	if(this.value==""){
	
		passwordTip.style.display="block";
//		password.focus();
		password.style.border="1px solid #00DDDD";
	}
//	else if(!temp.test(this.value)){      //校验密码：只能输入6-20个字母、数字、下划线
//		alert(1);
//	}
	else{
		writeTures[1].style.display="block";
		passwordTip.style.display="none";
		password.style.border="";
	}
}
}