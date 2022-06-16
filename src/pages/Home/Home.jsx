import { useEffect, useState } from 'react';
import api from '@/api';
import Card from '@/components/Card';

export default function Home() {
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    fetchRoomList();
  }, []);

  // 取得房間清單
  async function fetchRoomList() {
    const { data } = await api.room.fetchRoomList();
    setRoomList(data.items);
  }

  return (
    <div className="container p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {roomList.map((roomData) => (
        <Card roomData={roomData} key={roomData.id} />
      ))}
    </div>
  );
}
