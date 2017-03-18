$(document).ready(function(){

    $("[data-toggle='popover']").popover(); //팝오버 실행

    $('.color-item').click(function() {
        var html = $(this).children(".hex-number").text(); //자손에 있는 코드값
        $('.color-picker').attr('data-content',html+' 복사됨'); //팝오버에 띄울 data-content 값 변경

        $('#clipboard').css('display', 'block').val(html).select(); //클립보드에 변수 html값 지정하고 선택
        document.execCommand("copy"); //위에서 선택한것 복사
        $('#clipboard').css('display', 'none'); //클립보드를 안보이게


        setTimeout(function (){  //0.7초 후 팝오버 감추기
            $("[data-toggle='popover']").popover('hide');
        } ,700);


    });
});