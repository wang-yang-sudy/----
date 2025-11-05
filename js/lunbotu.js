// 轮播图功能
document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    let autoPlayInterval;

    // 更新轮播图显示
    function updateCarousel() {
        // 移除所有active类
        carouselItems.forEach(item => item.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // 添加当前active类
        carouselItems[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }

    // 下一张
    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    // 上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    // 切换到指定索引
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // 自动播放
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4000); // 4秒切换一次
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // 事件监听
    nextBtn.addEventListener('click', function() {
        nextSlide();
        stopAutoPlay();
        startAutoPlay(); // 重置自动播放
    });

    prevBtn.addEventListener('click', function() {
        prevSlide();
        stopAutoPlay();
        startAutoPlay(); // 重置自动播放
    });

    // 指示器点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            goToSlide(index);
            stopAutoPlay();
            startAutoPlay(); // 重置自动播放
        });
    });

    // 鼠标悬停暂停自动播放
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);

    // 开始自动播放
    startAutoPlay();

    // 初始化显示第一张
    updateCarousel();
});

// 移动端导航菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 点击导航链接关闭菜单（移动端）
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});