jQuery(document).ready(function($) {

    $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
    
    $(window).scroll(function() {
    // 스크롤 이벤트 처리 코드 작성
    });
    
    });


//메뉴 클릭시 자연스러운 스크롤 이동
