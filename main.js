// 1. 當頁面捲動時，為導航列加上陰影與動態樣式
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    // 使用 pageYOffset 作為 scrollY 的備用，確保在極少數舊瀏覽器也能正常運作
    const scrollPosition = window.scrollY !== undefined ? window.scrollY : window.pageYOffset;
    
    if (scrollPosition > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 2. 平滑捲動優化 (排除純「#」連結，避免造成頁面出錯)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // 如果連結只是純 "#"（例如點擊 Logo 回到頂部），就滾動到頁面最上方
        if (targetId === '#') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        // 確保目標元素真的存在於頁面上，避免 JS 報錯中斷
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
