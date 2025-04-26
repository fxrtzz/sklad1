function burger() {
    document.querySelector('.mobile-menu-btn').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('.header__scroll-down').classList.toggle('active');
    document.body.classList.toggle('scroll');
}


document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.header__menu');
    const scrollDownBtn = document.querySelector('.header__scroll-down');
    
    // Переключение мобильного меню
    // mobileMenuBtn.addEventListener('click', function() {
    //     this.classList.toggle('active');
    //     mobileMenu.classList.toggle('active');
    // });
    
    // // Закрытие меню при клике на пункт
    // const menuItems = document.querySelectorAll('.header__menu-item');
    // menuItems.forEach(item => {
    //     item.addEventListener('click', function() {
    //         if (window.innerWidth <= 768) {
    //             mobileMenuBtn.classList.remove('active');
    //             mobileMenu.classList.remove('active');
    //         }
            
    //         // Удаляем активный класс у всех пунктов
    //         menuItems.forEach(i => i.classList.remove('active'));
    //         // Добавляем активный класс текущему пункту
    //         this.classList.add('active');
    //     });
    // });
    
    // Плавная прокрутка при клике на стрелку
    scrollDownBtn.addEventListener('click', function() {
        window.scrollBy({
            top: window.innerHeight - 500,
            behavior: 'smooth'
        });
    });
    
    // Адаптация меню при ресайзе
    function handleResize() {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    }
    
    window.addEventListener('resize', handleResize);
    
    // Инициализация
    handleResize();
});

const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    // spaceBetween: 10,
    // Responsive breakpoints
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  })