export default function Color({ hex, colorname, setBackgroundColor }) {
  return (
    <button
      className="color-square"
      style={{ backgroundColor: hex }}
      onClick={() => {
        setBackgroundColor(hex);
      }}
    >
      <h2>{colorname}</h2>
    </button>
  );
}
