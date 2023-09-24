const songsList = [
    {
        id: "song1",
        name: "Blank Space",
        artist: "Taylor Swift",
        img: 'images/blank-space-cover.png',
        genre: "Pop",
        source: 'songs/Taylor-swift-Blank-space.mp3',
    },
    {
        id: "song2",
        name: "Cold Heart",
        artist: "Elton John and Dua Lipa",
        img: 'images/cold-heart-cover.jpg',
        genre: "Pop",
        source: 'songs/cold-heart.mp3',

    },
    {
        id: "song3",
        name: "Cruel Summer",
        artist: "Taylor Swift",
        img: 'images/cruel-summer-cover.jpg',
        genre: "Pop",
        source: 'songs/cruel-summer.mp3',
    },
    {
        id: "song4",
        name: "Boy's a Liar Pt. 2",
        artist: "PinkPantheress ft. Ice Spice",
        img: 'images/boys-liar-cover.jpg',
        genre: "Hip Hop",
        source: 'songs/boys-liar.mp3',

    },
    {
        id: "song5",
        name: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        img: 'images/uptown-cover.png',
        genre: "Hip Hop",
        source: 'songs/uptown-funk.mp3',

    },
    {
        id: "song6",
        name: "Mean",
        artist: "Taylor Swift",
        img: 'images/mean-cover.png',
        genre: "Country",
        source: 'songs/mean.mp3',

    },
]

let ball = document.querySelector('#theme-div-two');
let themeName = document.querySelector('#theme-name');
let selectSong = document.querySelector('#genre-selection');
let allSongsDiv = document.querySelector('.all-songs');
let songCover = document.querySelector('#song-cover');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let songSource = document.querySelector('#the-song');
let addPlaylist = document.querySelector('#add-to-playlist');
let themeDiv = document.querySelector('#theme-div-two');
let body = document.querySelector('body');
let filterby = document.querySelector('#filterby');
let head = document.querySelector('#music-player-heading');
let genre = document.querySelector('#genre-selection');
let allH3 = document.querySelectorAll('h3');
let alldivStyle = document.querySelectorAll('.all-div-style');
let inputF = document.querySelectorAll('input');

// toggle theme
let t = false;
function check() {
    if (t == false) {
        let translateX = 20;
        ball.style.transform = `translate(${translateX}px`;
        themeName.textContent = 'Light'
        t = true;
    }
    else {
        let translateX = -2;
        ball.style.transform = `translate(${translateX}px`;
        themeName.textContent = 'Dark'
        t = false;
    }
};
ball.addEventListener('click', check);

let themeChange = true;
themeDiv.addEventListener('click', () => {
    if (themeChange) {
        body.style.backgroundColor = 'rgb(58 55 55)';
        head.style.color = 'white';
        themeName.style.color = 'white';
        filterby.style.color = 'white';
        genre.style.color = 'white';
        allH3.forEach((h)=>{
            h.style.color = 'white';
        });
        alldivStyle.forEach((ads)=>{
            ads.style.backgroundColor = 'rgb(24, 33, 41)';
        });
        inputF.forEach((i)=>{
            i.style.backgroundColor = 'black';
            i.style.color = 'white';
        })
    }
    else{
        body.style.backgroundColor = 'rgb(230, 226, 226)';
        head.style.color = 'black';
        themeName.style.color = 'black';
        filterby.style.color = 'black';
        genre.style.color = 'black';
        allH3.forEach((h)=>{
            h.style.color = 'black';
        });
        alldivStyle.forEach((ads)=>{
            ads.style.backgroundColor = 'rgb(98, 165, 228)';
        });
        inputF.forEach((i)=>{
            i.style.backgroundColor = 'white';
            i.style.color = 'black';
        })
    }
    themeChange = !themeChange;
})

//appending songs in dropdown

const uniqueSongList = [];
songsList.forEach((song) => {
    if (!uniqueSongList.includes(song.genre)) {
        uniqueSongList.push(song.genre);
        let option = document.createElement('option');
        option.textContent = song.genre;
        option.value = song.genre;
        selectSong.appendChild(option);
    };
});

//all songs
songsList.forEach((song) => {
    const button = document.createElement('div');
    button.classList.add('song-button');
    button.textContent = `${song.name} - ${song.artist}`;
    allSongsDiv.appendChild(button);
    renderCurrentSong()
})

//function for filtering songs on genre
function showSongs() {
    if (selectSong.value == "Pop") {
        allSongsDiv.textContent = '';
        songsList.forEach((song) => {
            if (song.genre == "Pop") {
                const button = document.createElement('div');
                button.classList.add('song-button');
                button.textContent = `${song.name} - ${song.artist}`;
                allSongsDiv.appendChild(button);
                renderCurrentSong()
            };
        });
    }
    else if (selectSong.value == "Country") {
        allSongsDiv.textContent = '';
        songsList.forEach((song) => {
            if (song.genre == "Country") {
                const button = document.createElement('div');
                button.classList.add('song-button');
                button.textContent = `${song.name} - ${song.artist}`;
                allSongsDiv.appendChild(button);
                renderCurrentSong()
            };
        });
    }
    else if (selectSong.value == "Hip Hop") {
        allSongsDiv.textContent = '';
        songsList.forEach((song) => {
            if (song.genre == "Hip Hop") {
                const button = document.createElement('div');
                button.classList.add('song-button');
                button.textContent = `${song.name} - ${song.artist}`;
                allSongsDiv.appendChild(button);
                renderCurrentSong()
            };
        });
    }
    else {
        allSongsDiv.textContent = '';
        songsList.forEach((song) => {
            const button = document.createElement('div');
            button.classList.add('song-button');
            button.textContent = `${song.name} - ${song.artist}`;
            allSongsDiv.appendChild(button);
            renderCurrentSong()
        })
    }
}
selectSong.addEventListener('change', showSongs);

function renderCurrentSong() {
    let songButton = document.querySelectorAll('.song-button');

    songButton.forEach((option) => {
        option.addEventListener('click', () => {
            songsList.forEach((song) => {
                if (option.textContent == `${song.name} - ${song.artist}`) {
                    songCover.src = song.img;
                    title.textContent = song.name;
                    artist.textContent = song.artist;
                    songSource.src = song.source;
                    songSource.play();
                }
            })
        })
    });
};

let FButton = document.querySelector('.f-button');
let BButton = document.querySelector('.b-button');
let index = 0;
function controlSongsForward() {

    if (index < songsList.length - 1) {
        index++;
        songCover.src = songsList[index].img;
        title.textContent = songsList[index].name;
        artist.textContent = songsList[index].artist;
        songSource.src = songsList[index].source;
        songSource.play();
    }
    else {
        index = 0;
        songCover.src = songsList[index].img;
        title.textContent = songsList[index].name;
        artist.textContent = songsList[index].artist;
        songSource.src = songsList[index].source;
        songSource.play();
        index++;
    }

};

function controlSongsBackward() {
    if (index == 0) {
        index = songsList.length - 1;
        songCover.src = songsList[index].img;
        title.textContent = songsList[index].name;
        artist.textContent = songsList[index].artist;
        songSource.src = songsList[index].source;
        songSource.play();
        index--;
    }
    else {
        index--;
        songCover.src = songsList[index].img;
        title.textContent = songsList[index].name;
        artist.textContent = songsList[index].artist;
        songSource.src = songsList[index].source;
        songSource.play();
    }
}

FButton.addEventListener('click', controlSongsForward);
BButton.addEventListener('click', controlSongsBackward);

let createPlaylistButton = document.querySelector('#playlist-button');
let inputField = document.querySelector('#input-playlist');
let createPlaylistDiv = document.querySelector('#create-playlist');
let allPlaylistDiv = document.querySelector('#all-playlists');


let songArray = []
function createPlaylist() {
    if (inputField.value !== '') {
        let playlistName = document.createElement('div');
        playlistName.classList.add('playlist-name');
        playlistName.textContent = inputField.value;
        allPlaylistDiv.appendChild(playlistName)
        inputField.value = '';
        detail = {
            name: playlistName.textContent,
            arr: []
        };
        songArray.push(detail);
        working(playlistName);
    }
};
createPlaylistButton.addEventListener('click', createPlaylist);


let currentPlaylist = null;

function working(playlistName) {
    playlistName.addEventListener('click', () => {
        createPlaylistDiv.textContent = 'Create Playlist';

        // Set the current playlist when a playlist is clicked
        currentPlaylist = playlistName.textContent;

        // Clear the display area for songs from previous selections
        createPlaylistDiv.innerHTML = '';

        // Get the array of songs for the selected playlist
        const playlist = songArray.find((list) => list.name === currentPlaylist);

        if (playlist) {
            // Loop through the array and display each song
            playlist.arr.forEach((songText) => {
                let n = document.createElement('div');
                n.textContent = songText;
                createPlaylistDiv.appendChild(n);
            });
        }
    });

    addPlaylist.addEventListener('click', () => {
        if (currentPlaylist) {
            let n = document.createElement('div');
            n.textContent = `${title.textContent} - ${artist.textContent}`;

            // Check if the song is already in the playlist
            const playlist = songArray.find((list) => list.name === currentPlaylist);
            if (playlist && !playlist.arr.includes(n.textContent)) {
                createPlaylistDiv.appendChild(n);
                playlist.arr.push(n.textContent);
                console.log(`Added '${title.textContent} - ${artist.textContent}' to '${currentPlaylist}' playlist.`);
            } else {
                console.log(`'${title.textContent} - ${artist.textContent}' is already in '${currentPlaylist}' playlist.`);
            }
        } else {
            console.log('Please select a playlist first.');
        }
    });
}




//song-search
const songSearchInput = document.getElementById('song-search');

songSearchInput.addEventListener('input', performSearch);

function performSearch() {
    const query = songSearchInput.value.toLowerCase();

    // Filter the songsList based on the search query
    const searchResults = songsList.filter((song) =>
        song.name.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        song.genre.toLowerCase().includes(query)
    );

    // Call a function to display the search results
    displaySearchResults(searchResults);
}

function displaySearchResults(results) {
    // Clear the previous search results
    allSongsDiv.innerHTML = '';

    // Loop through the search results and display them
    results.forEach((song) => {
        const button = document.createElement('div');
        button.classList.add('song-button');
        button.textContent = `${song.name} - ${song.artist}`;
        allSongsDiv.appendChild(button);

        // Add an event listener to play the selected song
        button.addEventListener('click', () => {
            songCover.src = song.img;
            title.textContent = song.name;
            artist.textContent = song.artist;
            songSource.src = song.source;
            songSource.play();
        });
    });
}

