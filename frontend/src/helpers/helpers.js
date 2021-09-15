export const durationConverter = (duration) => {
  const minutes = Math.floor(duration / 60000);
  const seconds = ((duration % 60000) / 1000).toFixed(0);
  return '0' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

export function isInPlaylist(playlistId, arr) {
  return arr.some((playlist) => playlist.playlistId === playlistId);
}
