// Action creator to select song
export const selectSong = song => {
  // return an action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
