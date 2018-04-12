class Helper {
  playPauseAndUpdate(song = player.currentlyPlaying){
  player.playPause(song);
  $('.total-time').text(song.duration);
  }
}
const helper = new Helper();
