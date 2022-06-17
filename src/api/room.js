import { serverApi } from './config';

// 取得房間清單
export const fetchRoomList = () => {
  return serverApi({
    method: 'get',
    url: '/rooms'
  });
};

// 取得房間內容
export const fetchRoomDetail = (roomId) => {
  return serverApi({
    method: 'get',
    url: `/room/${roomId}`
  });
};

// 預約房間
export const reserveRoom = (roomId, data) => {
  return serverApi({
    method: 'post',
    url: `/rooms/${roomId}`,
    data
  });
};

// 清除所有預約
export const unreserveAllRooms = () => {
  return serverApi({
    method: 'delete',
    url: `/rooms`
  });
};
