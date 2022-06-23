import { Container } from "@material-ui/core";
import React from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Part6 from "./Part6";
import Part7 from "./Part7";

function Part({ part, testId }) {
  const renderPart = (part) => {
    if (part === 1) return <Part1 part={part} testId={testId} />;
    else if (part === 2) return <Part2 part={part} testId={testId}/>;
    else if (part === 3) return <Part3 part={part} testId={testId}/>;
    else if (part === 4) return <Part4 part={part} testId={testId}/>;
    else if (part === 5) return <Part5 part={part} testId={testId}/>;
    else if (part === 6) return <Part6 part={part} testId={testId}/>;
    else return <Part7 part={part} testId={testId}/>;
  };
  return <Container>{renderPart(part)}</Container>;
}
export default React.memo(Part);
