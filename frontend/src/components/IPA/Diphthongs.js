import React, { useState, useEffect } from 'react';
import IPAGroupCollapse from './GroupCollapse';
import ipaApi from 'apis/ipaApi';

function Diphthongs() {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const apiRes = await ipaApi.getIPAByType("Diphthongs");
        if (apiRes.status === 200) {
          setList(apiRes.data.ipas);
        }
      } catch (error) {}
    })();
  
    return () => {};
  }, []);
  console.log(list)

  return (
    <>
      <h2 className="dyno-title">2. Nguyên âm đôi (Diphthongs)</h2>
      <h3 className="dyno-sub-title">
       
      </h3>
      {list &&(
      list.map((item) => 
        <IPAGroupCollapse  
         phoneticData={item}
        />
      ))}
    </>
  );
}

export default Diphthongs;
