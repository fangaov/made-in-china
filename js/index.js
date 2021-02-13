// 右侧固定菜单
//改变右边固定菜单高度
function setFixedMenuHeight(){
    console.log('进入');
    $('.fixedMenu').css('height',window.innerHeight);
}
setFixedMenuHeight();
// 可视区变化时执行
$(window).resize(function(){
    setFixedMenuHeight();
});

//固定菜单鼠标悬浮
$('.fixedMenuMain').on('mouseenter','a',function(){
    // 用循环判断根据下标改变对应的p标签的背景图
    switch($(this).index()){
        case 0:
            $(this).children().eq(0).css({'background':'url(../img/index/fixedMenu.png) no-repeat','backgroundPosition':'0px -36px'});
            break;
        case 1:
            $(this).children().eq(0).css({'background':'url(../img/index/fixedMenu.png) no-repeat','backgroundPosition':'0px -108px'});
            break;
        case 2:
            $(this).children().eq(0).css({'background':'url(../img/index/fixedMenu.png) no-repeat','backgroundPosition':'0px -252px'});
            break;
        case 3:
            $(this).children().eq(0).css({'background':'url(../img/index/fixedMenu.png) no-repeat','backgroundPosition':'0px -360px'});
            break;
        default:
            break;
    }
    // 判断当前移入弹出文字还是图片
    if($(this).index()==2){
        $(this).children('.popupImg').css('display','block');
        $(this).children('.popupImg').animate({'width':'120px','opacity':1},200);
    }else{
        $(this).children('.popupText').css('display','block');
        $(this).children('.popupText').animate({'width':'80px'},200);
    }
    
});
$('.fixedMenuMain').on('mouseleave','a',function(){
    switch($(this).index()){
        case 0:
            $(this).children().eq(0).css({'background':'url(../img/index/fixedMenu.png) no-repeat','backgroundPosition':'-36px -36px'});
            break;
        case 1:
            $(this).children().eq(0).css({'background':'url(../img/index/fixedMenu.png) no-repeat','backgroundPosition':'-36px -108px'});
            break;
        case 2:
            $(this).children().eq(0).css({'background':'url(../img/index/fixedMenu.png) no-repeat','backgroundPosition':'-36px -252px'});
            break;
        case 3:
            $(this).children().eq(0).css({'background':'url(../img/index/fixedMenu.png) no-repeat','backgroundPosition':'-36px -360px'});
            break;
        default:
            break;
    }
    if($(this).index()==2){
        $(this).children('.popupImg').css({'display':'none','width':0,'opacity':0});
    }else{
        $(this).children('.popupText').css({'display':'none','width':0});
    }
});





//头部悬浮显示菜单
$('.headRight').on('mouseenter','li',function(){
    //排除第一个li
    if($(this).index()!=0){
        $(this).css({'backgroundColor':'#fff',"border":'1px solid #fff'});
        $(this).children('a').css({'color':'#333','background':'url(../img/index/common_ico.gif) no-repeat','backgroundPosition':'78px -45px'});
        $(this).children('div').css('display','block');
    }
    
});
$('.headRight').on('mouseleave','li',function(){
    //排除第一个li
    if($(this).index()!=0){
        $(this).css({'backgroundColor':'#F4382D',"border":'1px solid #F4382D'});
        $(this).children('a').css({'color':'#fff','background':'url(../img/index/double11_icon.png) no-repeat','backgroundPosition':'78px -23px'});
        $(this).children('div').css('display','none');
    }
});

// 搜索框左边产品悬浮显示
$('.chanpin').mouseenter(function(){
    $(this).children('div').stop().slideDown();
    $(this).children('p').css({'background':'url(../img/index/common_ico.gif no-repeat)','backgroundPosition':'60px -34px'});
});
$('.chanpin').mouseleave(function(){
    $(this).children('div').stop().slideUp();
    $(this).children('p').css({'background':'url(../img/index/common_ico.gif no-repeat)','backgroundPosition':'60px -10px'});
});


//头部导航栏菜单下横条悬浮显示
$('.headNav').on('mouseenter','li',function(){
    //排除前两个li，且第二个li的color改变
    if($(this).index()==1){
        $(this).children('a').css('color','#E92336');
    }
    if($(this).index()>1){
        $(this).children('a').css('color','#E92336');
        $(this).children('i').css('display','block');
    }
    
});
$('.headNav').on('mouseleave','li',function(){
    if($(this).index()==1){
        $(this).children('a').css('color','#fff');
    }
    if($(this).index()>1){
        $(this).children('a').css('color','#fff');
        $(this).children('i').css('display','none');
    }
    
});


