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
        $(this).css({'backgroundColor':'#F4382D',"border":'1px solid #F4382D'});
        $(this).children('a').css({'color':'#fff','background':'url(./img/index/double11_icon.png) no-repeat','backgroundPosition':'78px -23px'});
        $(this).children('div').css('display','none');
    }
});
//头部悬浮显示菜单结束


// 搜索框左边产品悬浮显示开始
$('.chanpin').mouseenter(function(){
    $(this).children('div').stop().slideDown();
    $(this).children('p').css({'background':'url(./img/index/common_ico.gif no-repeat)','backgroundPosition':'60px -34px'});
});
$('.chanpin').mouseleave(function(){
    $(this).children('div').stop().slideUp();
    $(this).children('p').css({'background':'url(./img/index/common_ico.gif no-repeat)','backgroundPosition':'60px -10px'});
});
// 搜索框左边产品悬浮显示开始结束


//头部导航栏菜单下横条悬浮显示开始
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
//头部导航栏菜单下横条悬浮显示结束


// main轮播图部分开始
var mainNum = 0;
var mainTimer;
function showImg(){
    $('.bannerMain img').eq(mainNum).siblings('img').css('opacity','0');
    $('.bannerMain img').eq(mainNum).animate({'opacity':'1'},200);
    $('.bannerMain div span').eq(mainNum).addClass('showSpan').siblings('span').removeClass();
    
}
// 自动启动定时器
mainTimer = setInterval(function(){
    mainNum++;
    if(mainNum ==5){
        mainNum = 0;
    }
    showImg();
},2000);

// 左按钮点击
$('.bmLeftImg').click(function(){
    if(mainNum == 0){
        mainNum = 4
    }else{
        mainNum--;
    }
    showImg();
});

$('.bmLeftImg').mouseenter(function(){
    $(this).css({'background':'#E92336'});
});
$('.bmLeftImg').mouseleave(function(){
    $(this).css({'background':'rgba(0, 0, 0, .3)'});
});
// 右按钮点击
$('.bmRightImg').click(function(){
    console.log(mainNum)
    if(mainNum == 4){
        mainNum = 0;
    }else{
        mainNum++;
    }
    showImg();
});

$('.bmRightImg').mouseenter(function(){
    $(this).css({'background':'#E92336'});
});
$('.bmRightImg').mouseleave(function(){
    $(this).css({'background':'rgba(0, 0, 0, .3)'});
});
//鼠标悬浮图片之上
$('.bannerMain').mouseenter(function(){
    clearInterval(mainTimer);
    $(this).children('p').css('display','block');
});
$('.bannerMain').mouseleave(function(){
    mainTimer = setInterval(function(){
        mainNum++;
        if(mainNum ==5){
            mainNum = 0;
        }
        showImg();
    },2000);
    $(this).children('p').css('display','none');
});

// span标签点击
$('.bannerMain div span').click(function(){
    mainNum = $(this).index();
    showImg();
});
// main轮播图部分结束


// 买卖家切换开始
$('.buyers').mouseenter(function(){
    $(this).addClass('menuShow');
    $(this).children('i').css({'display':'block'});
    $(this).siblings('.menuBuyers').css('display','block');
    $('.seller').removeClass('menuShow');
    $('.seller').children('i').css({'display':'none'});
    $('.seller').siblings('.menuSeller').css('display','none');
});
$('.seller').mouseenter(function(){
    $(this).addClass('menuShow');
    $(this).children('i').css({'display':'block'});
    $(this).siblings('.menuSeller').css('display','block');
    $('.buyers').removeClass('menuShow');
    $('.buyers').children('i').css({'display':'none'});
    $('.buyers').siblings('.menuBuyers').css('display','none');
});
// 买卖家切换结束


// 品牌浮动动画开始
$('.brand>div').mouseenter(function(){
    $(this).children('div').eq(1).stop().animate({'top':"0px"},300,function(){console.log('动画执行')});
});
$('.brand>div').mouseleave(function(){
    $(this).children('div').eq(1).stop().animate({'top':"91px"},300,function(){console.log('动画执行')});
});
// 品牌浮动动画结束


// 热门采购滚动数据生成开始
(function(){
    var str = '';
    $.get('./data/purchaseContent.json',{},function(result){
        for(var i = 0;i<result.length;i++){
            str += "<li><div><p>"+result[i].name+"</p><a href='#'>"+result[i].a+"</a></div><div><p>"+result[i].number+"</p><h3>"+result[i].days+"</h3></div><div><a herf='#'>"+result[i].company+"</a></div></li>";
        }
        str+=str;
        $('.purchaseContent ul').html(str);
    },'json');
})();
// 热门采购滚动数据生成结束

// 热门采购轮播开始
var hotCarouselTimer;
hotCarouselTimer = setInterval(hotCarousel,50);
function hotCarousel(){
    // 调用一次此函数srcollTop值自增1
    $('.purchaseContent').scrollTop($('.purchaseContent').scrollTop()+1);
    if($('.purchaseContent').scrollTop()>912){
        $('.purchaseContent').scrollTop(0);
    }
};
$('.purchaseContent').mouseenter(()=>{
    clearInterval(hotCarouselTimer);
});
$('.purchaseContent').mouseleave(()=>{
    clearInterval(hotCarouselTimer);
    hotCarouselTimer = setInterval(hotCarousel,50);
});
// 热门采购轮播结束


// 优质货源和优质供应商联动切换开始
(function(){
    var cloneLi1;
    var cloneLi2;
    for(let i=0;i<14;i++){
        cloneLi1 = $('.goodSupplyCon ul li').eq(0).clone(true);
        cloneLi2 = $('.goodSupplierCon ul li').eq(0).clone(true);
        $('.goodSupplyCon ul').append(cloneLi1);
        $('.goodSupplierCon ul').append(cloneLi2);
    }
})();
var goodNum = 0;
var goodFlag = true;
    // 点击下一分类
$('.goodSupplierNext').click(function(){
    if(goodFlag){
        goodFlag = false;
        var reg1 = new RegExp('1');
        var reg2 = new RegExp('2');
        var oldSrc = $('.goodSupplyTit p').eq(goodNum).children('img').attr('src').replace(reg2,'1');
        $('.goodSupplyTit p').eq(goodNum).children('img').attr('src',oldSrc);
        goodNum++;
        if(goodNum>13){
            console.log(goodNum);
            $('.goodSupplyMain').animate({scrollLeft:goodNum*1190+'px'},500,function(){$(this).scrollLeft(0);goodFlag = true;});
            $('.goodSupplierMain').animate({scrollLeft:goodNum*1190+'px'},500,function(){$(this).scrollLeft(0);});
            goodNum = 0;
        }else{
            $('.goodSupplyMain').animate({scrollLeft:goodNum*1190+'px'},500,function(){goodFlag = true;});
            $('.goodSupplierMain').animate({scrollLeft:goodNum*1190+'px'},500);
        }
        var newSrc = $('.goodSupplyTit p').eq(goodNum).children('img').attr('src').replace(reg1,'2');
        $('.goodSupplyTit p').eq(goodNum).children('img').attr('src',newSrc);
        $('.goodSupplyTit p').eq(goodNum).addClass('showSupplyP');
        $('.goodSupplyTit p').eq(goodNum).siblings().removeClass('showSupplyP');
        
    }
});
    // 点击上一分类
$('.goodSupplierPre').click(function(){
    if(goodFlag){
        goodFlag = false;
        var reg1 = new RegExp('1');
        var reg2 = new RegExp('2');
        var oldSrc = $('.goodSupplyTit p').eq(goodNum).children('img').attr('src').replace(reg2,'1');
        $('.goodSupplyTit p').eq(goodNum).children('img').attr('src',oldSrc);
        goodNum--;
        if(goodNum<1){
            console.log(goodNum);
            goodNum = 14;
            $('.goodSupplyMain').scrollLeft(goodNum*1190);
            $('.goodSupplierMain').scrollLeft(goodNum*1190);
            goodNum = 13;
        }
        var newSrc = $('.goodSupplyTit p').eq(goodNum).children('img').attr('src').replace(reg1,'2');
        $('.goodSupplyTit p').eq(goodNum).children('img').attr('src',newSrc);
        $('.goodSupplyTit p').eq(goodNum).addClass('showSupplyP');
        $('.goodSupplyTit p').eq(goodNum).siblings().removeClass('showSupplyP');
        $('.goodSupplyMain').animate({scrollLeft:goodNum*1190+'px'},500,function(){goodFlag = true;})
        $('.goodSupplierMain').animate({scrollLeft:goodNum*1190+'px'},500,function(){});
    }
});
    // 悬浮字体变色
$('.goodSupplyTit p').mouseover(function(){
    if($(this).index()!=goodNum){
        $(this).children('span').css('color','#e41b2e');
    }
});
$('.goodSupplyTit p').mouseleave(function(){
    if($(this).index()!=goodNum){
        $(this).children('span').css('color','#333');
    }
});
    // 点击标题栏切换分类
$('.goodSupplyTit p').click(function(){
    if(goodFlag){
        goodFlag = false;
        var thisIndex = $(this).index();
        var reg1 = new RegExp('1');
        var reg2 = new RegExp('2');
        var oldSrc = $('.goodSupplyTit p').eq(goodNum).children('img').attr('src').replace(reg2,'1');
        $('.goodSupplyTit p').eq(goodNum).children('span').css('color',"#333");
        $('.goodSupplyTit p').eq(goodNum).children('img').attr('src',oldSrc);
            if(goodNum<thisIndex){
                $('.goodSupplyMain').scrollLeft((thisIndex-1)*1190);
                $('.goodSupplierMain').scrollLeft((thisIndex-1)*1190);
            }else if(goodNum>thisIndex){
                $('.goodSupplyMain').scrollLeft((thisIndex+1)*1190);
                $('.goodSupplierMain').scrollLeft((thisIndex+1)*1190);
            }
            goodNum = thisIndex;
            $('.goodSupplyMain').animate({scrollLeft:goodNum*1190+'px'},500,function(){goodFlag = true;});
            $('.goodSupplierMain').animate({scrollLeft:goodNum*1190+'px'},500);
        // }
        var newSrc = $('.goodSupplyTit p').eq(goodNum).children('img').attr('src').replace(reg1,'2');
        $('.goodSupplyTit p').eq(goodNum).children('img').attr('src',newSrc);
        $('.goodSupplyTit p').eq(goodNum).addClass('showSupplyP');
        $('.goodSupplyTit p').eq(goodNum).siblings().removeClass('showSupplyP');
    }
});

// 优质货源和优质供应商联动切换结束

// 点击跳转页面开始
$('.goShopDetails').click(function(){
    window.location.href='shopDetails.html';
});
// 点击跳转页面结束
