import Parallax from "parallax-js";
import React, { useCallback } from "react";
import { useWindowSize } from "./useWindowSize";

export function SkyeParallaxBackground() {
  const { width: windowWidth = 0, height: windowHeight = 0 } = useWindowSize();

  const elementStyle = {
    height: windowHeight + 50 + "px",
    width: windowWidth + 120 + "px"
  };
  return (
    <div className="parallaxContainer">
      <ParallaxContainer height={windowHeight} width={windowWidth}>
        <div
          data-depth="0"
          style={elementStyle}
          className="parallaxElement skye-background"
        />
        <div
          data-depth="0.02"
          style={elementStyle}
          className="parallaxElement skye-hill2"
        />
        <div
          data-depth="0.04"
          style={elementStyle}
          className="parallaxElement skye-hill1"
        />
        <div
          data-depth="0.08"
          style={elementStyle}
          className="parallaxElement skye-beach"
        />
        <div
          data-depth="0.15"
          style={elementStyle}
          className="parallaxElement skye-foreground"
        />
      </ParallaxContainer>
    </div>
  );
}

export function ParallaxContainer({ height, width, children }) {
  const sceneRef = useCallback(node => {
    const parallax = new Parallax(node, {});
    return () => parallax.destroy();
  }, []);

  return (
    <div
      className="parallax"
      data-limit-y="20"
      style={{
        height: height + "px",
        width: width + "px"
      }}
      ref={sceneRef}
    >
      {children}
    </div>
  );
}
