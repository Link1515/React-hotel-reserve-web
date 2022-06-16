import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
// api
import api from '@/api';
// components
import ImgShower from '@/components/ImgShower';

export default function RoomDetail() {
  const [roomInfo, setRoomInfo] = useState({});
  const [bookInfo, setBookInfo] = useState({});
  const params = useParams();

  const fetchRoomDetail = useCallback(async () => {
    const { data } = await api.room.fetchRoomDetail(params.roomId);
    setRoomInfo(data.room[0]);
    setBookInfo(data.book);
  }, [params]);

  useEffect(() => {
    fetchRoomDetail();
  }, [fetchRoomDetail]);

  return (
    <div>
      <ImgShower roomInfo={roomInfo} />
    </div>
  );
}
