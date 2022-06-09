$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 20){

            $('nav').addClass('sticky');
        }else{

            $('nav').removeClass('sticky');
        }

        if (this.scrollY > 300) {

            $('.scroll-up-btn').addClass('show');
        }else{

            $('.scroll-up-btn').removeClass('show');
        }
    });

    $('.menu-btn').click(function(){
        $('nav .nav__list').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    })

});

const svcBtn = document.querySelector('.service__btn');

svcBtn.addEventListener('click', function(e){

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    
    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    // ripples.style.top = y + 'px';
    
    this.appendChild(ripples);
    
    setTimeout(() => {
        ripples.remove()
    },500);
});

const ap = new APlayer({

    container: document.getElementById('aplayer'),
    listFolded: true,
    theme: '#ff7300',
    listMaxHeight: 120,

    audio: [
    {
        name: 'Darkside',
        artist: 'Alan Walker',
        url: 'https://github.com/megaflashxyz/Music-site/blob/main/music/Alan_Walker_-_Darkside_(feat__Au_Ra_and_Tomine_H_M-P4QBt-FWw_070219031311(0).mp3?raw=true',
        cover: 'https://i1.sndcdn.com/artworks-000182052128-dhw4gd-t500x500.jpg'
    },
    {
        name: '1 of a kind',
        artist: 'Blaclite District',
        url: 'https://github.com/megaflashxyz/Music-site/blob/main/music/blacklite district - 1 of a kind.mp3?raw=true',
        cover: 'https://yt3.ggpht.com/ytc/AAUvwnjB1J4kWMYUz9gScniBFY_KFCgtU8UnOvP_TLTt4A=s900-c-k-c0x00ffffff-no-rj'
    },
            {
        name: 'MusicMix One',
        artist: 'Xclusive',
        url: 'https://www.dl.dropboxusercontent.com/s/fv1579q12rykr9q/MusicMix One.mp3?dl=0',
        cover: 'https://media.bauerradio.com/image/upload/q_auto,c_fill,g_faces,w_500,h_500/v1610465305/shows/afryusijb0zs8xanwdvi.png'
    },
                    {
        name: 'Put On Your Sunday',
        artist: 'Jerry Herman',
        url: 'https://rawcdn.githack.com/Kerthin/musicPlayer-templateSait/4df6444e97123a39d036f1f9b57973858f70bae5/docs/music/JerryHerman_PutOnYourSundayClothes.mp3',
        cover: 'https://media.bauerradio.com/image/upload/q_auto,c_fill,g_faces,w_500,h_500/v1610465305/shows/afryusijb0zs8xanwdvi.png'
    },
                    {
        name: 'Pumped Up Kicks',
        artist: 'Lujavo, New Beat Order, Donovans Playground &amp; Britt Lari',
        url: 'https://www.dl.dropboxusercontent.com/s/c4h1qshnhvfknu0/Pumped%20Up%20Kicks%20%28Lujavo%2C%20New%20Beat%20Order%2C%20Donovan%27s%20Playground%20%26%20Britt%20Lari%29%20%28Magic%20Cover%20Release%29%20%28320%20kbps%29.mp3?dl=0',
        cover: 'https://media.bauerradio.com/image/upload/q_auto,c_fill,g_faces,w_500,h_500/v1610465305/shows/afryusijb0zs8xanwdvi.png'
    },
    {
        name: 'Derniere-danse',
        artist: 'Indila',
        url: 'https://github.com/megaflashxyz/Music-site/blob/main/music/indila-derniere-danse(mp3name.net).mp3?raw=true',
        cover: 'https://static10.tgstat.ru/channels/_0/4b/4b5b5dfa6d97bd682c4377713aadcc48.jpg'
    },
    ]
})

// aplayer click

$('.card').on('click', function(e){

    var dataSwitchId = $(this).attr('data-switch');

    ap.list.switch(dataSwitchId);

    ap.play();
    $('#aplayer').addClass('show');

    $('.scroll-up-btn').addClass('showTop');
});
$('.aplayer-icon.aplayer-icon-menu').click(function(){

    $('.scroll-up-btn').toggleClass('showTp')
});

var type = new Typed(".logo__text", {
    strings: ["CloudMusika"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true 
});

const boxes = document.querySelectorAll('.box');
let width = window.screen.availWidth

boxes.forEach(box => {

    box.classList.remove('carousel-item');
    
    if (width <= 768) {
        
        box.classList.add('carousel-item');
        console.log(width);
    }
});
