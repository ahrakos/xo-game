import "./Cell.css";

export const Cell = ({ char, onClick }) => {
  return (
    <div className="cell" onClick={onClick}>
      {char}
    </div>
  );
};
