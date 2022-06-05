export default function Card(props) {
  return (
    <div style={{ backgroundImage: `url('${props.imageUrl}')` }}>
      <h2>{props.name}</h2>
    </div>
  );
}
