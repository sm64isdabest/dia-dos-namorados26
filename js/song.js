
const playpause_btn = document.querySelector('.playpause-track');
const seek_slider = document.querySelector('.seek_slider');
const curr_time = document.querySelector('.current-time');
const total_duration = document.querySelector('.total-duration');
const curr_track = document.createElement('audio');

curr_track.src = 'music/fernanda.mp3';
curr_track.preload = 'auto';
document.body.appendChild(curr_track);

let isPlaying = false;

function updatePlayButton() {
    playpause_btn.classList.remove('fa-circle-play', 'fa-circle-pause');
    playpause_btn.classList.add(isPlaying ? 'fa-circle-pause' : 'fa-circle-play');
}

function togglePlayback() {
    if (isPlaying) {
        curr_track.pause();
        isPlaying = false;
    } else {
        curr_track.play().catch((error) => {
            console.error('Não foi possível iniciar a música:', error);
        });
        isPlaying = true;
    }

    updatePlayButton();
}

function updateProgress() {
    if (!Number.isFinite(curr_track.duration) || curr_track.duration === 0) return;

    const seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    const currentMinutes = Math.floor(curr_track.currentTime / 60);
    const currentSeconds = Math.floor(curr_track.currentTime % 60);
    const durationMinutes = Math.floor(curr_track.duration / 60);
    const durationSeconds = Math.floor(curr_track.duration % 60);

    curr_time.textContent = `${String(currentMinutes).padStart(2, '0')}:${String(currentSeconds).padStart(2, '0')}`;
    total_duration.textContent = `${String(durationMinutes).padStart(2, '0')}:${String(durationSeconds).padStart(2, '0')}`;
}

curr_track.addEventListener('play', () => {
    isPlaying = true;
    updatePlayButton();
});

curr_track.addEventListener('pause', () => {
    isPlaying = false;
    updatePlayButton();
});

curr_track.addEventListener('timeupdate', updateProgress);

if (playpause_btn) {
    playpause_btn.addEventListener('click', togglePlayback);
}

updatePlayButton();
