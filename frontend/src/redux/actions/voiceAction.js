
import VOICE_CONSTANT from "../constants/voiceConstant";

export const setVoice = (key, value)  => {
  return {
    type: VOICE_CONSTANT.SET_VOICE,
    payload: {
      key,
      value
    }
  }
}


