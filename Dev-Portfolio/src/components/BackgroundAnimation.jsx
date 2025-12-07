import { useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

/**
 * Background component renders a full-screen animated fog effect using Vanta.js.
 *
 * The animation is initialized on mount and destroyed on unmount to prevent memory leaks.
 * It uses mouse and touch controls to interact with the effect.
 *
 * @component
 * @example
 * return (
 *   <Background />
 * )
 */
export default function Background() {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!effectRef.current) {
      effectRef.current = FOG({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        highlightColor: 0x0f5525, // Highlight fog color
        midtoneColor: 0x226b2e, // Midtone fog color
        lowlightColor: 0x1f2d21, // Shadow fog color
        baseColor: 0x000000, // Background base color
        blurFactor: 0.9,
        speed: 2.6,
        zoom: 2.0,
      });
    }

    return () => {
      if (effectRef.current) effectRef.current.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
}
