import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cloud Infrastructure Engineer",
          "AWS Solutions Architect",
          "Infrastructure Automation Specialist",
          "Kubernetes Infrastructure Engineer",
          "Cloud Migration Specialist",
          "DevOps Automation Engineer",
          "Multi-Cloud Solutions Architect"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
