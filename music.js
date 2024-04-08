const play = document.getElementById('play'),
    next = document.getElementById('next'),
    previous = document.getElementById('previous'),
    artistSong = document.getElementById('artist-song'),
    artistName = document.getElementById('artist-name'),
    currentTimeEl = document.getElementById('currentTime'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('playerProgress'),
    volume = document.getElementById('volume'),
    albumList = document.getElementById('albumList'),
    albumItem = document.getElementById('albumItem');

let files;

const nameSong = document.getElementById("nameSong");
const artist = document.getElementById("artist");

const file = document.getElementById("file");
const submit = document.getElementById("submit");

window.addEventListener('load', () => {
    if (songs.length > 0) {
        loadMusic(songs[musicIndex]);
        criaMenu();
    }
});

file.addEventListener("change", (event) => {
    files = event.target.files[0];
});

submit.addEventListener('click', () => {
    const fileObject = {
        displayName: nameSong.value,
        artist: artist.value,
        path: `src/${files.name}`,
    };

    // Verifica se a música já existe na lista
    const existingSong = songs.find(song => song.displayName === fileObject.displayName && song.artist === fileObject.artist);

    // Se a música já existir, exibe uma mensagem
    if (existingSong) {
        console.log('Essa música já está na lista.');
    } else {
        // Se a música não existir, adicione-a à lista
        songs.push(fileObject);

        // Atualiza o armazenamento local com a lista atualizada de músicas
        localStorage.setItem('songs', JSON.stringify(songs));

        // Recarrega o menu com a nova música adicionada
        criaMenu();

        const update = document.createTextNode("Updated");
        const novaDiv = document.getElementById("div1");
        novaDiv.append(update);
    }
});

let songs = JSON.parse(localStorage.getItem('songs')) || [];


const music = new Audio();

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function pauseMusic() {
    isPlaying = false;
    play.classList.replace('bx-pause', 'bx-play');
    music.pause();
}

function playMusic() {
    isPlaying = true;
    play.classList.replace('bx-play', 'bx-pause')
    music.play();

}

function loadMusic(song) {

    music.src = song.path;
    artistSong.textContent = song.displayName;
    artistName.textContent = song.artist;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

function setVolume() {
    const volVolume = volume.value;
    music.volume = volVolume;
}

function criaMenu() {
    // Limpa o menu removendo todos os elementos filhos
    albumList.innerHTML = '';

    // Define um conjunto para rastrear as músicas já adicionadas ao menu
    const addedSongs = new Set();

    // Itera sobre as músicas na lista songs
    songs.forEach(song => {

        const chaveUnica = `${song.displayName} - ${song.artist}`
        // Verifica se a música já foi adicionada ao menu
        if (!addedSongs.has(chaveUnica)) {
            // Se a música não foi adicionada, cria uma nova <li> para ela
            const el = document.createElement('li');
            el.className = 'albumItem';
            el.innerHTML = `
                <i class="bx bxs-music"></i>
                <div class="infoItem">
                    <p>${song.displayName}</p>
                    <p>${song.artist}</p>
                </div>
            `;
            // Adiciona a música ao conjunto de músicas adicionadas
            addedSongs.add(chaveUnica);
            // Adiciona a <li> ao menu
            albumList.appendChild(el);
        }
    });

    const albumListBtn = document.querySelectorAll('#albumList');
    
    for (let i = 0; i < albumListBtn[0].children.length; i++) {
        albumListBtn[0].children[i].addEventListener('click', () => {
            console.log(songs[i]); // Aqui você pode acessar a música correspondente ao índice 'i'
            loadMusic(songs[i]); // Carrega a música correspondente ao índice 'i'
            playMusic(); // Toca a música
        });
    }
};







play.addEventListener('click', togglePlay);
previous.addEventListener('click', () => changeMusic(-1));
next.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);
volume.addEventListener('input', setVolume);

loadMusic(songs[musicIndex]);
