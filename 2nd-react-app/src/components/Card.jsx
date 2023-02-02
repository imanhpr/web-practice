function Card({ value, index }) {
  return (
    <div>
      <header>
        <h5>
          {index}-{value}
        </h5>
      </header>
    </div>
  );
}

export default Card;
