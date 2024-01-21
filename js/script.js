$(document).ready(function(){  
    //cursor.bigger
    $('.click > div').mouseenter(function(){
        $('.custom-cursor').addClass('bigger');
    }); 
    $('.click > div').mouseleave(function(){
        $('.custom-cursor').removeClass('bigger');
    });          

    //AOS
    AOS.init();

    //banner
    ScrollTrigger.create({
        animation: gsap.from(".logo",{
            y : "46vh",
            scale: 3,
            yPercent: -80,
        }),
        scrub: true,
        trigger: ".content",
        start: "top bottom",
        endTrigger: ".content",
        end: "top center",
    });


    //sec-1
    let atScroll = false;
    let parallexTitle = document.querySelectorAll(".parallax-title");

    const scrollPrograss = () => {
        atScroll = true;
    }

    const raf = () => {
        if(atScroll) {
            parallexTitle.forEach((element, index) => {
                element.style.transform = `translateX( ${ window.scrollY / 30 }%)`
            });
            atScroll = false;
        }

        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.addEventListener("scroll", scrollPrograss);



    //sec-2
    // 1.
    const blocks = document.querySelectorAll('.block');
    const front = document.querySelectorAll('.front-layer');
    const back = document.querySelectorAll('.back-layer');
    console.log(blocks); // 확인용 로그
    const sFront = 150;
    const sBack = 400;

    // document.querySelectorAll('.block')은 NodeList를 반환한다. NodeList는 배열과 비슷하지만, 배열의 메서드를 직접 사용할 수는 없다.
    // 따라서 block에 대한 addEventListener 호출은 오류를 발생시킨다.
    // 만약 여러 개의 엘리먼트에 대해 이벤트를 처리하려면 각 엘리먼트에 대해 반복문을 사용하거나, forEach 메서드를 활용할 수 있다. 

    // block.addEventListener('mousemove', e => {
    //     const x = e.clientX;
    //     // 브라우저 내에 수평좌표값
    //     const y = e.clientY;
    //     // 브라우저 내에 수직좌표값


    //     front.style.transform = `
    //     translate(
    //         ${x / sFront}%,
    //         ${y / sFront}%
    //     )`;

    //     back.style.transform = `
    //     translate(
    //         ${x / sBack}%,
    //         ${y / sBack}%
    //     )`;
    // })

    //수정코드
    // blocks.forEach(block => {
    //     block.addEventListener('mousemove', e => {
    //         const x = e.clientX;
    //         const y = e.clientY;
    
    //         front.style.transform = `
    //             translate(
    //                 ${x / sFront}%,
    //                 ${y / sFront}%
    //             )`;
    
    //         back.style.transform = `
    //             translate(
    //                 ${x / sBack}%,
    //                 ${y / sBack}%
    //             )`;
    //     });
    // });


    // 제공된 코드에서 오류가 발생하는 이유는 front 및 back 변수가 NodeList이기 때문입니다. document.querySelectorAll('.front-layer') 및 document.querySelectorAll('.back-layer')는 각각 매칭되는 엘리먼트를 포함하는 NodeList를 반환합니다. NodeList는 배열과 유사하지만, 직접적으로 배열의 메서드를 사용할 수 없습니다.
    // 따라서 front 및 back이라는 변수는 각각의 NodeList이며, block.addEventListener 내에서는 NodeList에 직접적으로 접근하는 것이 아니라 개별 엘리먼트에 접근해야 합니다.
    // 수정된 코드에서 blocks.forEach 루프를 사용하고 있습니다. 이 루프 내에서 block은 각각의 엘리먼트를 나타냅니다. 그러나 여전히 front 및 back은 NodeList이므로 개별 엘리먼트에 접근해야 합니다.
    //최종수정코드
    blocks.forEach(block => {
        const front = block.querySelector('.front-layer');
        const back = block.querySelector('.back-layer');
    
        block.addEventListener('mousemove', e => {
            const x = e.clientX;
            const y = e.clientY;
    
            front.style.transform = `
                translate(
                    ${x / sFront}%,
                    ${y / sFront}%
                )`;
    
            back.style.transform = `
                translate(
                    ${x / sBack}%,
                    ${y / sBack}%
                )`;
        });
    });




    //sec-2 bg
    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        const sec2 = $('.sec-2').offset().top;
        const sec3 = $('.sec-3').offset().top-500;
        const sec4 = $('.sec-4').offset().top-500;


        console.log(sct);

        if(sct >= 200){
            $('.nav').addClass('on');
            if(sct >= sec2 && sct < sec3){
                console.log("hh");
                $('.wrap-container').addClass('active');
                $('.wrap').addClass('on');
                $('.nav,.logo svg').addClass('color');
            }else if(sct >= sec4){
                $('.wrap-container').addClass('active');
                $('.wrap').addClass('on');
            }else{
                $('.wrap-container').removeClass('active');
                $('.wrap').removeClass('on');
                $('.nav,.logo svg').removeClass('color');    
            }
        }else if(sct < 200){
            $('.nav').removeClass('on');
        }

    });

    //horizontal scroll
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".block");

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
        trigger: ".h-container",
        pin: true,
        scrub: 0.1,
        end: "+=3000"
        }
    });

    // sec-4
    var swiper = new Swiper(".mySwiper", {
        speed:300,
        // loop:true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        initialSlide: "1",
        slidesPerView: "1.8",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: true,
        },
        // autoplay:{
        //     delay:1500,
        // },
        pagination: {
          el: ".swiper-pagination",
        },
    });
  


});