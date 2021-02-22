//头部悬浮显示菜单开始
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
        $(this).css({'backgroundColor':'#f4f4f4',"border":'1px solid #f4f4f4'});
        $(this).children('a').css({'color':'#333','background':'url(../img/index/common_ico.gif) no-repeat','backgroundPosition':'78px -20px'});
        $(this).children('div').css('display','none');
    }
});
//头部悬浮显示菜单结束

// 右侧固定菜单开始
//改变右边固定菜单高度
function setFixedMenuHeight(){
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
// 右侧固定菜单结束


// 导航栏悬浮开始
$('.headNav ul li').mouseenter(function(){
    console.log($(this).index());
    if(($(this).index()==1)||($(this).index()==3)){
        $(this).children('div').css({display:'block'});
        $(this).children('i').css({backgroundPosition:'7px -7px'});
    }
    $(this).css({'background':'#FFE7E5','color':'#E4294a'});
});
$('.headNav ul li').mouseleave(function(){
    if(($(this).index()==1)||($(this).index()==3)){
        $(this).children('div').css({display:'none'});
        $(this).children('i').css({backgroundPosition:'0px 0px'});
    }
    $(this).css({'background':'#f6676b','color':'#fff'});
});
// 导航栏悬浮结束