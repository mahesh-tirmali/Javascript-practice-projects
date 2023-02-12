//Initialization of variables.
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
  { songName: 'song 1', filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg' },
  { songName: 'song 2', filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg' },
  { songName: 'song 3', filePath: 'songs/3.mp3', coverPath: 'covers/3.jpg' },
  { songName: 'song 4', filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg' },
  { songName: 'song 5', filePath: 'songs/5.mp3', coverPath: 'covers/5.jpg' },
  { songName: 'song 6', filePath: 'songs/6.mp3', coverPath: 'covers/6.jpg' },
  { songName: 'song 7', filePath: 'songs/7.mp3', coverPath: 'covers/7.jpg' },
  { songName: 'song 8', filePath: 'songs/8.mp3', coverPath: 'covers/8.jpg' },
  { songName: 'song 9', filePath: 'songs/9.mp3', coverPath: 'covers/9.jpg' },
  { songName: 'song 10', filePath: 'songs/10.mp3', coverPath: 'covers/10.jpg' },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName('img')[0].src = songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

//Handle play/pause click
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
    makeAllPlays();
  }
});

//Listen to events.
audioElement.addEventListener('timeupdate', () => {
  //update progress bar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
  if (audioElement.currentTime == audioElement.duration) {
    songIndex += 1; //increase song index
    audioElement.src = `songs/${songIndex + 1}.mp3`; //filename is always songindex+1
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
  }
});

myProgressBar.addEventListener('change', () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach(
    (element) => {
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
    }
  );
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach(
  (element, i) => {
    element.addEventListener('click', (e) => {
      makeAllPlays();
      songIndex = i;
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
    });
  }
);

document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }

  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('back').addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }

  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
});
