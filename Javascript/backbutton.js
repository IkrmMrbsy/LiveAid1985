
window.addEventListener('load', function () {
   
    document.getElementById('scrollToTopButton').addEventListener('click', function () {
        scrollToTop(600); 
    });

  
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { 
            document.getElementById('scrollToTopButton').style.display = 'block';
        } else {
            document.getElementById('scrollToTopButton').style.display = 'none';
        }
    });
});


function scrollToTop(duration) {
    const start = window.pageYOffset;
    const startTime = performance.now();

    function step(currentTime) {
        const elapsedTime = currentTime - startTime;
        const run = easeInOut(elapsedTime, start, -start, duration);
        window.scrollTo(0, run);
        if (elapsedTime < duration) {
            requestAnimationFrame(step);
        }
    }

    function easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(step);
}
