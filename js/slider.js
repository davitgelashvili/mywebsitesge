function MainPageSliderFunction(){
    const MainSlider = $('.slider');
    MainSlider && new Splide( '.slider-js', {
        type: 'slide',
        perPage: 1,
        autoplay: true,
        arrows: false,
        pagination: false,
        breakpoints: {
            1024: {
                pagination: false,
            },
        }
    }).mount();

  

}