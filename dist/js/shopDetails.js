//头部悬浮显示菜单开始
$('.headRight').on('mouseenter','li',function(){
    //排除第一个li
    if($(this).index()!=0){
        $(this).css({'backgroundColor':'#fff',"border":'1px solid #fff'});
        $(this).children('a').css({'color':'#333','background':'url(./img/index/common_ico.gif) no-repeat','backgroundPosition':'78px -45px'});
        $(this).children('div').css('display','block');
    }
    
});
$('.headRight').on('mouseleave','li',function(){
    //排除第一个li
    if($(this).index()!=0){
        $(this).css({'backgroundColor':'#f4f4f4',"border":'1px solid #f4f4f4'});
        $(this).children('a').css({'color':'#333','background':'url(./img/index/common_ico.gif) no-repeat','backgroundPosition':'78px -20px'});
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
            $(this).children().eq(0).css({'background':'url(./img/index/fixedMenu.png) no-repeat','backgroundPosition':'0px -36px'});
            break;
        case 1:
            $(this).children().eq(0).css({'background':'url(./img/index/fixedMenu.png) no-repeat','backgroundPosition':'0px -108px'});
            break;
        case 2:
            $(this).children().eq(0).css({'background':'url(./img/index/fixedMenu.png) no-repeat','backgroundPosition':'0px -252px'});
            break;
        case 3:
            $(this).children().eq(0).css({'background':'url(./img/index/fixedMenu.png) no-repeat','backgroundPosition':'0px -360px'});
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
            $(this).children().eq(0).css({'background':'url(./img/index/fixedMenu.png) no-repeat','backgroundPosition':'-36px -36px'});
            break;
        case 1:
            $(this).children().eq(0).css({'background':'url(./img/index/fixedMenu.png) no-repeat','backgroundPosition':'-36px -108px'});
            break;
        case 2:
            $(this).children().eq(0).css({'background':'url(./img/index/fixedMenu.png) no-repeat','backgroundPosition':'-36px -252px'});
            break;
        case 3:
            $(this).children().eq(0).css({'background':'url(./img/index/fixedMenu.png) no-repeat','backgroundPosition':'-36px -360px'});
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
    // console.log($(this).index());
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

// 微信图标悬浮显示二维码开始
$('.mainOneLeftImg div:nth-of-type(2) p span').eq(0).mouseenter(function(){
    $(this).parent().siblings('div').css({display:'block'});
});
$('.mainOneLeftImg div:nth-of-type(2) p span').eq(0).mouseleave(function(){
    $(this).parent().siblings('div').css({display:'none'});
});
// 微信图标悬浮显示二维码结束

// 图片放大镜功能开始
var minImg = document.querySelector('.mainMinImg img');
var maxBox = document.querySelector('.mainMaxImg');
var maxImg = document.querySelector('.mainMaxImg img');
minImg.onmouseenter = function(){
    maxBox.style.display = 'block';
    this.onmousemove = function(ev){
        var e = ev||event;
        var minLeft = e.offsetX;
        var minTop = e.offsetY;
        // console.log(minLeft+','+minTop)
        if(minTop>60&&minTop<120){
            minTop -=60;
            maxImg.style.top = -minTop*2.22+'px';
        }
        if(minLeft>90&&minLeft<270){
            minLeft -= 90;
            maxImg.style.left = -minLeft*2.22+'px';
        }
    }
};
minImg.onmouseleave = function(){
    maxBox.style.display = 'none';
}
// 图片放大镜功能结束


// 修改商品数量开始
// 商品数量加减开始
var oldstr;
$('.numAdd').click(function(){
    modifyNum(true);
});
$('.numReduce').click(function(){
    modifyNum(false);
});
function modifyNum(flag){
    // 储存改变前的数量若不符合要求则改回，否则可修改
    oldstr = $('.number').val();
    if(regs(oldstr)){
        if(flag){
            oldstr++;
            $('.number').val(oldstr);
        }else{
            if(oldstr>1){
                oldstr--;
                $('.number').val(oldstr);
            }
        }
    }
}
function regs(str){
    var reg = new RegExp("^\\d+$");
    if(!reg.test(str)){
        return false;
    }else{
        if(str.substr(0,1) == 0){
            return false;
        }else{
            return true;
        }
    }
}
// 商品数量加减结束
$('.number').focus(function(){
    // 储存修改前的数量
    oldstr = $('.number').val();
});
$('.number').blur(function(){
    var str = $('.number').val();
    if(!regs(str)){
        $('.number').val(oldstr);
    }
});
// 修改商品数量结束

// 右边手动轮播图开始
// 导入轮播数据开始
(function(){
    
    $.get(
        './data/againLook.json',
        {},
        function(result){
            for(let i=0;i<result.length;i++){
                $('.mainOneRightContent div img').eq(i).attr('src',result[i].src);
                $('.mainOneRightContent div p').eq(i).text(result[i].name);
                $('.mainOneRightContent div span').eq(i).text("￥"+result[i].price);
            }
        },'json');
})();
// 导入轮播数据结束
var bannerOldIndex = 0;
// 为 true 则动画执行中，防止用户多次点击执行多次操作
var bannerFlag = true;
$('.pageUp').click(function(){
    if(bannerFlag){
        var top = $('.mainOneRightMain').scrollTop();
        if(top>0){
            top -=515;
            bannerFlag = false;
            $(this).attr('disabled',"true");
            $('.controlBox i').eq(bannerOldIndex).removeClass('showI');
            bannerOldIndex--;
            $('.controlBox i').eq(bannerOldIndex).addClass('showI');
            $('.mainOneRightMain').animate({'scrollTop':Math.ceil(top)+'px'},500,function(){bannerFlag = true});
        }
    }
});
$('.pageDown').click(function(){
    if(bannerFlag){
        var top = $('.mainOneRightMain').scrollTop();
        if(top<516){
            top +=515;
            bannerFlag = false;
            $(this).attr('disabled',"true");
            $('.controlBox i').eq(bannerOldIndex).removeClass('showI');
            bannerOldIndex++;
            $('.controlBox i').eq(bannerOldIndex).addClass('showI');
            $('.mainOneRightMain').animate({'scrollTop':Math.ceil(top)+'px'},500,function(){bannerFlag = true});
        }
    }
    
});
$('.mainOneRightContent').mouseenter(function(e){
    e.stopPropagation();
});
// 右边手动轮播图结束

// 导入商家推荐里的数据开始
(function(){
    $.get('./data/recommend.json',{},function(result){
        for(let i = 0;i<result.length;i++){
            $('.mainTwo ul li a').eq(i).children('img').attr('src',result[i].src);
            $('.mainTwo ul li p').eq(i).text(result[i].name);
            $('.mainTwo ul li span').eq(i).text("￥"+result[i].price);
        }
    })
})()
// 导入商家推荐里的数据结束




// 跳转页面
$('.addShopCart').click(function(){
    window.location.href="shopCart.html";
});