import {
  Container,
} from "@material-ui/core";
import React from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Part6 from "./Part6";
import Part7 from "./Part7";

function Part({ part }) {
  const renderPart = (part) => {
    if (part === 1) return <Part1 />;
    else if (part === 2) return <Part2 />;
    else if (part === 3) return <Part3 />;
    else if (part === 4) return <Part4 />;
    else if (part === 5) return <Part5 />;
    else if (part === 6) return <Part6 />;
    else return <Part7 />
  };
  return <Container>
    {renderPart(part)}
  </Container>;
}
export default React.memo(Part);
