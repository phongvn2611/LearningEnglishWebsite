import ipaChartSrc from "assets/images/ipa/ipa-chart.png";
import ipaTableSrc from "assets/images/ipa/ipa-table.jpg";
import mouthShapeSrc from "assets/images/ipa/mouth-shape.png";
import Consonants from "components/IPA/Consonants";
import Diphthongs from "components/IPA/Diphthongs";
import Vowels from "components/IPA/Vowels";
import useTitle from "hooks/useTitle";
import React from "react";
import Typography from "@material-ui/core/Typography";

function IPAPage() {
  useTitle("IPA");

  return (
    <div className="container dyno-box">
      <div className="flex-center-between">
        <h1 className="dyno-title">IPA</h1>
      </div>
      <div className="dyno-break"></div>
      <Vowels />
      <Diphthongs />
      <Consonants />
    </div>
  );
}

export default IPAPage;
