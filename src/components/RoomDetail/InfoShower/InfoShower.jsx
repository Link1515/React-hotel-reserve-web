import { isEmpty } from '@/utils/utils.js';

export default function InfoShower(props) {
  const { descriptionShort, checkInAndOut, name, description, amenities, normalDayPrice, holidayPrice } =
    props.roomInfo;

  // 床型
  const bedType = {
    Single: '單人床',
    Double: '雙人床',
    'Small Double': '小雙人床',
    Queen: '皇后床'
  };

  function haveOrNot(condition) {
    return condition ? '有' : '無';
  }

  if (!isEmpty(props.roomInfo)) {
    return (
      <div className="mx-5 lg:mx-[120px]">
        <div className="mt-10 py-8 bg-white flex justify-evenly">
          <div>
            <h4 className="text-gray-400 mb-2">房間人數:</h4>
            <p className="text-2xl">{`${descriptionShort.GuestMin}~${descriptionShort.GuestMax} 人`}</p>
          </div>
          <div>
            <h4 className="text-gray-400 mb-2">床型:</h4>
            <p className="text-2xl">
              {descriptionShort.Bed.map(
                (bed, index, array) => `${bedType[bed]}${index + 1 === array.length ? '' : '、'}`
              )}
            </p>
          </div>
          <div>
            <h4 className="text-gray-400 mb-2">房間大小:</h4>
            <p className="text-2xl">{`${descriptionShort.Footage} 平方公尺`}</p>
          </div>
          <div>
            <h4 className="text-gray-400 mb-2">浴廁數量:</h4>
            <p className="text-2xl">{`${descriptionShort['Private-Bath']} 間`}</p>
          </div>
          <div>
            <h4 className="text-gray-400 mb-2">CheckIn 時間:</h4>
            <p className="text-2xl">{`${checkInAndOut.checkInEarly} ~ ${checkInAndOut.checkInLate}`}</p>
          </div>
          <div>
            <h4 className="text-gray-400 mb-2">CheckOut 時間:</h4>
            <p className="text-2xl">{`${checkInAndOut.checkOut}`}</p>
          </div>
        </div>

        <div className="mt-10 lg:flex">
          <div className="lg:w-[60%] lg:pr-[60px] mb-8 lg:mb-0">
            <div className="border-l-4 border-[#508DF6] pl-9">
              <h2 className="text-[#508DF6] text-4xl mb-8">{name}</h2>
              <p>{description}</p>
            </div>
            <h3 className="mt-10 mb-6 text-2xl">設備與服務</h3>
            <div className="grid grid-cols-2">
              <span>wifi: {haveOrNot(amenities['Wi-Fi'])}</span>
              <span>早餐: {haveOrNot(amenities['Breakfast'])}</span>
              <span>Mini Bar: {haveOrNot(amenities['Mini-Bar'])}</span>
              <span>Room Service: {haveOrNot(amenities['Room-Service'])}</span>
              <span>電視: {haveOrNot(amenities['Television'])}</span>
              <span>冷氣: {haveOrNot(amenities['Air-Conditioner'])}</span>
              <span>冰箱: {haveOrNot(amenities['Refrigerator'])}</span>
              <span>沙發: {haveOrNot(amenities['Sofa'])}</span>
              <span>景觀: {haveOrNot(amenities['Great-View'])}</span>
              <span>靜止吸菸: {haveOrNot(amenities['Smoke-Free'])}</span>
              <span>適合兒童: {haveOrNot(amenities['Child-Friendly'])}</span>
              <span>寵物攜帶: {haveOrNot(amenities['Pet-Friendly'])}</span>
            </div>
          </div>
          <div className="lg:w-[40%]">
            <div className="p-8 text-center bg-[#2A58A8] divide-x flex justify-evenly">
              <div className="grow">
                <p className="text-gray-300">平日(一~四)</p>
                <p className="text-2xl text-white">$NT {normalDayPrice} / 晚</p>
              </div>
              <div className="grow">
                <p className="text-gray-300">假日(五~日)</p>
                <p className="text-2xl text-white">$NT {holidayPrice} / 晚</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
