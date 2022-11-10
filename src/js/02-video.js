
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);
console.log(throttle);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Метод on()
player.on('play', function() {
        сonsole.log('played the video!');
});

player.on('timeupdate', throttle ((function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}), 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
