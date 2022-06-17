import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
// api
import api from '@/api';
// components
import ImgShower from '@/components/RoomDetail/ImgShower';
import InfoShower from '@/components/RoomDetail/InfoShower';

export default function RoomDetail() {
  const [roomInfo, setRoomInfo] = useState({});
  const params = useParams();

  const fetchRoomDetail = useCallback(async () => {
    const { data } = await api.room.fetchRoomDetail(params.roomId);
    setRoomInfo(data.room[0]);
  }, [params]);

  useEffect(() => {
    fetchRoomDetail();
  }, [fetchRoomDetail]);

  return (
    <div className="mb-[120px]">
      <ImgShower roomInfo={roomInfo} />
      <InfoShower roomInfo={roomInfo} />
    </div>
  );
}
