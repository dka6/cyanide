        document.addEventListener('DOMContentLoaded', () => {
            const audioSources = [
                'images/audio/Bromeo __ Always Good.mp3',
                'images/audio/why the hell is the southern tier north of the northern tier.mp3',
                'images/audio/I Wish I Could Ctrl+Alt+Del My Life.mp3',
                'images/audio/FULL THROTTLE (feat. h4rtbrkr).flac',
                'images/audio/Moe R. On.mp3',
                'images/audio/just a guy.mp3',
                'images/audio/de_cache.mp3',
                'images/audio/Burn It Down.flac',
                'images/audio/I Forgot To Take My Meds Today.flac',
            ];

            const audioPlayer = document.getElementById('audioPlayer');
            const playPauseButton = document.getElementById('playPauseButton');
            const progressBar = document.getElementById('progressBar');
            const volumeControl = document.getElementById('volumeControl');

            // Set a random audio source
            const randomIndex = Math.floor(Math.random() * audioSources.length);
            audioPlayer.src = audioSources[randomIndex];

            // event listeners for the custom controls
            playPauseButton.addEventListener('click', () => {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                    playPauseButton.textContent = 'Pause';
                } else {
                    audioPlayer.pause();
                    playPauseButton.textContent = 'Play';
                }
            });

            audioPlayer.addEventListener('timeupdate', () => {
                const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                progressBar.value = progress;
            });

            volumeControl.addEventListener('input', () => {
                audioPlayer.volume = volumeControl.value / 100;
            });

            progressBar.addEventListener('input', () => {
                const newTime = (progressBar.value / 100) * audioPlayer.duration;
                audioPlayer.currentTime = newTime;
            });
        });