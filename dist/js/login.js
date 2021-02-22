
//切换登录方式模块
var swich = document.querySelector('.swich');
var qrCode = document.querySelector('.qrCode');
var swichFlag = true;//为true则表示二维码当前隐藏

swich.onclick = function(){
    if(swichFlag){
        qrCode.style.display = 'block';
        $('.swich').animate({backgroundPositionX:'60px',backgroundPositionY:'60px'},200);
        swichFlag = false;
    }else{
        qrCode.style.display = 'none';
        $('.swich').animate({backgroundPositionX:'0',backgroundPositionY:'0'},200);
        swichFlag = true;
    }
}


//登录检查模块
//测试账号
// localStorage.setItem('account',JSON.stringify([{'username':'test1','password':123456},{'username':'test2','password':123456}]));


var remoberUser = document.querySelector('#remoberUser');
var login = document.querySelector('.login');
var username = document.querySelector('.user');
var password = document.querySelector('.psw');
var warning = document.querySelector('.warning');
var loginFlag = false;//为false则表示账号或密码错误
login.onclick = function(){
    user = username.value;//输入框内的账号
    psw = password.value;//输入框内的密码
    if(!user&&!psw){
        warning.style.display = 'block';
    }else{
        //若记住账号勾选，则将输入框内的账号密码添加到本地储存
        if(remoberUser.checked){
            localStorage.setItem('remuser',JSON.stringify({'username':user}));
        }else{
            localStorage.removeItem('remuser');
        }
        var account = JSON.parse(localStorage.getItem('account'));
        // 验证账号密码
        $.each(account,function(index,item){
            if((item.username == user)&&(item.password == psw)){
                loginFlag = true;
                console.log(true);
                return false;//结束遍历
            }else{
                loginFlag = false;
                console.log(false);
            }
        });
        if(loginFlag){
            window.location.href='index.html';
        }else{
            warning.style.display = 'block';
        }
    }
}

//检查是否需要自动填充账号及勾选记住账号
function check(){
    var remuser = JSON.parse(localStorage.getItem('remuser'));
    if(remuser){
        username.value = remuser.username;
        remoberUser.checked = true;
    }
}
check();