
//验证码更新模块
document.querySelector('.captcha').onclick = function(){
    console.log('dianji ');
    this.src='https://cd.abiz.com/v3validcode?t=600.6383063774861'+Math.random();
}

//输入框点击失去焦点判断为空则显示错误框
$("ul").on('blur',"li div input",function(){
    if($(this).val()){
        $(this).parent().next().css('display','block');
        $(this).parent().next().children('i').css('backgroundPosition','-16px 0px');
        $(this).parent().next().children('span').css('display','none');
        $(this).css('border','1px solid #eee');
    }else{
        $(this).parent().next().css('display','block');
        $(this).parent().next().children('i').css('backgroundPosition','-64px -32px');
        $(this).parent().next().children('span').css('display','inline-block');
        $(this).css('border','1px solid red');
    }
});
//两次密码对比
$('ul').on('blur','.passwordAgain',function(){
    // 当两次密码不一致时
    if($(this).val() != $('.password').val()){
        $(this).parent().next().css('display','block');
        $(this).parent().next().children('i').css('backgroundPosition','-64px -32px');
        $(this).parent().next().children('span').html('两次密码不一致!');
        $(this).parent().next().children('span').css('display','inline-block');
        $(this).css('border','1px solid red');
    }
    if(!$(this).val()){
        //密码为空则将内容改为 '请再次填写密码'
        $(this).parent().next().children('span').html('请再次填写密码');
    }
});
$('ul').on('blur','.password',function(){
    // 当两次密码不一致时
    console.log($(this).val().length);
    if(($(this).val().length<6)||($('.password').val().length>21)){
        $(this).parent().next().css('display','block');
        $(this).parent().next().children('i').css('backgroundPosition','-64px -32px');
        $(this).parent().next().children('span').html('请输入6-20位字母或数字');
        $(this).parent().next().children('span').css('display','inline-block');
        $(this).css('border','1px solid red');
    }else{
        if($(this).val() != $('.passwordAgain').val()){
            $('.passwordAgain').parent().next().css('display','block');
            $('.passwordAgain').parent().next().children('i').css('backgroundPosition','-64px -32px');
            $('.passwordAgain').parent().next().children('span').html('两次密码不一致!');
            $('.passwordAgain').parent().next().children('span').css('display','inline-block');
            $('.passwordAgain').css('border','1px solid red');
        }else if($(this).val() == $('.passwordAgain').val()){
            $('.passwordAgain').parent().next().css('display','block');
            $('.passwordAgain').parent().next().children('i').css('backgroundPosition','-16px 0px');
            $('.passwordAgain').parent().next().children('span').css('display','none');
            $('.passwordAgain').css('border','1px solid #eee');
        }
    }
    
});

//同意协议
$('#agree').click(function(){
    if($(this).attr('checked')){
        $('.register').css("background","linear-gradient(#f13b40 0,#d6343a 100%)");
        $('.register').attr('disabled', false);
    }else{
        $('.register').css("background","#DEDEDE");
        $('.register').attr('disabled', true);
    }
});

//点击注册事件
var register = document.querySelector('.register');
var inputs = document.querySelectorAll('.registerBox input');
register.onclick = function(){
    var flag = true;//为true则表示输入框全部正确
    for(var i=0;i<inputs.length;i++){
        if(i!=4&&i!=5&&i!=11){
            if(!inputs[i].value){
                inputs[i].parentNode.nextElementSibling.style.display = 'block';
                inputs[i].style.border = '1px solid red';
                flag = false;
            }
        }
    }
    if(($('.password').val().length<6)||($('.password').val().length>21)){
        flag = false;
        $('.password').parent().next().css('display','block');
        $('.password').parent().next().children('i').css('backgroundPosition','-64px -32px');
        $('.password').parent().next().children('span').html('请输入6-20位字母或数字');
        $('.password').parent().next().children('span').css('display','inline-block');
        $('.password').css('border','1px solid red');
    }
    if(flag){
        if($('.password').val() == $('.passwordAgain').val()){
            var account = JSON.parse(localStorage.getItem('account'));
            if(account){
                account.push({'username':$('.username').val(),'password':$('.password').val()});
                localStorage.setItem('account',JSON.stringify(account));
            }else{
                localStorage.setItem('account',JSON.stringify([{'username':$('.username').val(),'password':$('.password').val()}])  );
            }
            alert('注册成功');
            window.location.href='login.html';
        }else{
            $('.passwordAgain').parent().next().css('display','block');
            $('.passwordAgain').parent().next().children('i').css('backgroundPosition','-64px -32px');
            $('.passwordAgain').parent().next().children('span').html('两次密码不一致!');
            $('.passwordAgain').parent().next().children('span').css('display','inline-block');
            $('.passwordAgain').css('border','1px solid red');
        }
    }
    
}
