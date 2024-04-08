
const homePlayer = document.getElementById('homePlayer');
const albumPlayer = document.getElementById('albumPlayer');
const uploadSong = document.getElementById('uploadSong');
const main = document.getElementById('main');

const visor = document.getElementById('visor');

const closeBtn = document.getElementById('close');

const homeSongBtn = document.getElementById('homeBtn');
const albumSongBtn = document.getElementById('albumBtn');
const uploadSongBtn = document.getElementById('uploadBtn');
const backMenuBtn = document.getElementById('backMenu');

const menuFechado = true;



function backMenu(){
        if(albumPlayer.classList.contains("active")){
            albumPlayer.classList.remove("active");
            visor.classList.remove( 'active' ); 
            main.classList.remove("active");
        }
        else if (homePlayer.classList.contains("active")){
            homePlayer.classList.remove("active");
            visor.classList.remove( 'active' ); 
            main.classList.remove('active');
        }
        else if (uploadSong.classList.contains("active")){
            uploadSong.classList.remove("active");
            visor.classList.remove( 'active' ); 
            main.classList.remove('active');
        }
};

backMenuBtn.addEventListener("click", ()=>{
    backMenu();
    
});

homeSongBtn.addEventListener("click", ()=>{    
    homePlayer.classList.add('active');
    visor.classList.add( 'active' ); 
    main.classList.add('active');
    console.log("clicou")
});

albumSongBtn.addEventListener("click",()=>{
    albumPlayer.classList.add('active');
    visor.classList.add( 'active' ); 
    main.classList.add('active');
});

uploadSongBtn.addEventListener("click",()=>{
    uploadSong.classList.add('active');
    visor.classList.add( 'active' ); 
    main.classList.add('active');
});




closeBtn.addEventListener('click', () => {
    window.api.close();
});


