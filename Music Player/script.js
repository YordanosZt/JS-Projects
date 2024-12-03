const progress = document.getElementById("progress"),
    playPauseBtn = document.querySelector(".play-pause-btn"),
    music = document.getElementById("music");

music.onloadedmetadata = function () {
    progress.setAttribute("max", music.duration);
    progress.value = music.currentTime;
    music.pause();
};

playPauseBtn.addEventListener("click", () => {
    if (playPauseBtn.classList.contains("fa-play")) {
        playPauseBtn.classList.remove("fa-play");
        playPauseBtn.classList.add("fa-pause");
        music.play();
    } else {
        playPauseBtn.classList.add("fa-play");
        playPauseBtn.classList.remove("fa-pause");
        music.pause();
    }
});

progress.onchange = function () {
    music.currentTime = progress.value;
};

if (music.play()) {
    setInterval(() => {
        progress.value = music.currentTime;
    }, 500);
}
