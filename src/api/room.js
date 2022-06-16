import { roomAPI } from './config';

// 取得房間清單
export const fetchRoomList = () => {
  return roomAPI({
    method: 'get',
    url: '/rooms'
  });
};

// 取得房間內容
export const fetchRoomDetail = (roomId) => {
  return roomAPI({
    method: 'get',
    url: `/room/${roomId}`
  });
};

// 預約房間
export const reserveRoom = (roomId, data) => {
  return roomAPI({
    method: 'post',
    url: `/rooms/${roomId}`,
    data
  });
};

// 清除所有預約
export const unreserveAllRooms = () => {
  return roomAPI({
    method: 'delete',
    url: `/rooms`
  });
};
