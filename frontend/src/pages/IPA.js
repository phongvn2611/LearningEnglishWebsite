import ipaChartSrc from "assets/images/ipa/ipa-chart.png";
import ipaTableSrc from "assets/images/ipa/ipa-table.jpg";
import mouthShapeSrc from "assets/images/ipa/mouth-shape.png";
import Consonants from "components/IPA/Consonants";
import Diphthongs from "components/IPA/Diphthongs";
import Vowels from "components/IPA/Vowels";
import useTitle from "hooks/useTitle";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { dictionaryRoot } from "../components/UI/style";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  ...dictionaryRoot(theme),
}));

function IPAPage() {
  useTitle("IPA");
  const classes = useStyle();
  return (
    <div className={`${classes.root} english-container`}>
      <div className="flex-center-between">
        <h1 className="english-title">IPA</h1>
      </div>
      <div className="english-break"></div>
      <Vowels />
      <Diphthongs />
      <Consonants />
    </div>
  );
}

export default IPAPage;
