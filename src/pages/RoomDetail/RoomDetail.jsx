import { useParams } from 'react-router-dom';
import Card from '@/components/Card';

export default function RoomDetail() {
  const params = useParams();

  return (
    <div>
      <h1>{params.roomId}</h1>
      <Card />
    </div>
  );
}
