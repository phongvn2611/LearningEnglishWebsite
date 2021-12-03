import listeningApi from 'apis/listeningApi';
import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { messageReducer } from '/src/redux/reducers/messageReducer';
import CreateListening from './index';
import { setMessage } from 'redux/actions/messageAction';
//import messageReducer from 'redux/reducers/messageReducer';

const analysisLinkVideo = (linkVideo = '') => {
  if (typeof linkVideo !== 'string' || linkVideo === '') {
    return null;
  }

  let checkVid = linkVideo.includes("https://www.youtube.com")
  console.log(checkVid)
  if(!checkVid){
      checkVid =linkVideo.includes("youtu.be/")
      if(checkVid)
      {
        return linkVideo;
      }
      return null;
  }
  return linkVideo;
};


function CreateListeningData() {
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();


  const handleSubmit = async (data) => {
    try {
      setSubmitting(true);
      const { VidUpload, LinkVideo, ...rest } = data;
      let dataSend = []
      if(!VidUpload){
        console.log(data)
        const videoUrl = analysisLinkVideo(LinkVideo);
        if (videoUrl==null) {
          dispatch(setMessage("Link video is invalid.", "warning"));
          setSubmitting(false);
          return;
        }
        dataSend ={
          ...rest,
         Video: LinkVideo,
        };
      }
      else{
        dataSend ={
          ...rest,
         Video: VidUpload,
        };  
      }     
      const apiRes = await listeningApi.postListen(dataSend);
      console.log(apiRes.data)
      if (apiRes.status === 200) {
        dispatch(setMessage("Created listening successfully", "success"));
        setSubmitting(false);
     }

    } catch (error) {
      const message =  error.response?.data?.message ||
      'Error, can not create listening.';
        dispatch(setMessage(message, "error"));
      setSubmitting(false);
    }
  };

  return (
    <CreateListening onSubmitForm={handleSubmit} submitting={submitting} />
  );
}

export default CreateListeningData;
