import { type ReactNode} from "react";
function CakeTier({
  width,
  height,
  topColor,
  sideGradient,
  shadowColor,
  children,
}: {
  width: number;
  height: number;
  topColor: string;
  sideGradient: string;
  shadowColor: string;
  children?: ReactNode;
}) {
    
  return (
    <div style={{ width, position: "relative" }}>
      <div
        style={{
          width,
          height: 22,
          background: topColor,
          borderRadius: "50%",
          position: "relative",
          zIndex: 2,
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        }}
      />
      <div
        style={{
          width,
          height,
          background: sideGradient,
          position: "relative",
          zIndex: 1,
          marginTop: -11,
          boxShadow:
            "inset 0 4px 12px rgba(255,255,255,0.15), inset 0 -4px 8px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
      <div
        style={{
          width: width + 18,
          height: 14,
          background: shadowColor,
          borderRadius: "50%",
          margin: "-7px auto 0",
          opacity: 0.45,
          zIndex: 0,
        }}
      />
    </div>
  );
}

export default CakeTier
