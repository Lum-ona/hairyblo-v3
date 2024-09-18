import "./Hacks.css";

export default function Hacks() {
  const hackCard = () => (
    <div className="hack-card col-lg-4">
      <p></p>
    </div>
  );
  return (
    <div className="hacks">
      <div className="container">
        <div className="row">{hackCard()}</div>
      </div>
    </div>
  );
}
