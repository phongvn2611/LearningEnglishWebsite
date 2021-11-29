import { DEFAULTS } from './../../constants';
import VOICE_CONSTANT from "../constants/voiceConstant";

let initialState = {
  voiceURI: DEFAULTS.VOICE_URI,
  speed: DEFAULTS.VOICE_SPEED,
  volume: DEFAULTS.VOICE_VOLUME,
}

const voiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case VOICE_CONSTANT.SET_VOICE:
      const { key, value } = action.payload;
      state[key] = value;
      return { ...state, ...action.payload };

    default:
      return state;
  }
}

export default voiceReducer;
