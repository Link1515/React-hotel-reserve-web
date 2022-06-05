import { useParams } from 'react-router-dom';

export default function RoomDetail() {
  const params = useParams();

  return (
    <div>
      <h1>{params.roomId}</h1>
    </div>
  );
}
