// phần js này e k hiểu lắm nên thấy số k chạy, thử cái connect success cũng chưa được :v 
$(window).scroll(function () {
    let oTop = $('.section-2').Offset().top - window.innerHeight; if ($(window).scrollTop() > otop) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
})
let nCount = selector => {
    $(selector).each(function () {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000, 
            easing: "swing",
            step: function (value) {
                $(this).text(Math.ceil(value))
            }
        })
    })
}
                let position = 0; $(window).scroll(function () {
                    let oTop = $('.numbers').offset().top - window.innerHeight
                     if (position == 0 && $(window).scrollTop() >= otop) {
                        position++; nCount(".rect > h1");
                    }
                })

