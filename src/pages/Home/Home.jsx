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
    <div className="container flex flex-wrap">
      {roomList.map((roomData) => (
        <Card roomData={roomData} key={roomData.id} />
      ))}
    </div>
  );
}
