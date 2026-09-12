import CandleFlame from "./CandleFlame";
function Candle({ color }: { color: string }) {
  return (
    <div className="flex flex-col items-center" style={{ gap: 0 }}>
      <CandleFlame/>
      <div
        style={{
          width: 9,
          height: 32,
          background: `linear-gradient(to right, ${color}cc, ${color}, ${color}cc)`,
          borderRadius: "2px 2px 0 0",
          boxShadow: `0 0 6px ${color}88`,
        }}
      />
    </div>
  );
}
export default Candle
