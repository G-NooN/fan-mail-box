const SET_ARTIST_ACTIVE = "artist/SET_ARTIST_ACTIVE";

export const setArtist = (payload) => {
  return {
    type: SET_ARTIST_ACTIVE,
    payload,
  };
};

const initialState = "방현재";

const activeArtist = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST_ACTIVE: {
      const activeArtist = action.payload;
      return activeArtist;
    }
    default:
      return state;
  }
};

export default activeArtist;
