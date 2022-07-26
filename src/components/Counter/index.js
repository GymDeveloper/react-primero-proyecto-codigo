// const Counter = ({ contador, incrementar, decrementar }) => {

const Counter = (props) => {
  const { contador, incrementar, decrementar } = props;

  return (
    <div>
      <h1>Contador: {contador}</h1>
      {/* 2 botones uno para sumar y otro para restar */}
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </div>
  );
};

export default Counter;
