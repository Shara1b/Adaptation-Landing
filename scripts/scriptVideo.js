const video = document.getElementById('my_video1')
video.addEventListener('mouseenter', () => {
    video.muted = false;
    video.controls = false;
    video.play().catch(error => {
        console.log("Ошибка воспроизведения:", error);
    });
});

video.addEventListener('mouseleave', () => {
    video.pause();
    video.controls = true;
    video.muted = false;
});
video.addEventListener('click', () => {
    video.controls = true;
    video.muted = false;
});
