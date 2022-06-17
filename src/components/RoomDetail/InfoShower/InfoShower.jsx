import { useState } from 'react';
import { useParams } from 'react-router-dom';
import InputText from '@/components/UI/InputText';
import RangeDatePicker from '@/components/UI/RangeDatePicker';
import { isEmpty } from '@/utils/utils.js';
import api from '@/api';

export default function InfoShower(props) {
  const { descriptionShort, checkInAndOut, name, description, amenities, normalDayPrice, holidayPrice } =
    props.roomInfo;
  const params = useParams();

  // 床型
  const bedType = {
    Single: '單人床',
    Double: '雙人床',
    'Small Double': '小雙人床',
    Queen: '皇后床'
  };

  // 表單資料
  const [form, setForm] = useState({
    name: '',
    tel: '',
    date: []
  });

  function haveOrNot(condition) {
    return condition ? '有' : '無';
  }

  if (!isEmpty(props.roomInfo)) {
    return (
      <div className="mx-5 lg:mx-[120px]">
        <div className="mt-10 py-8 bg-white flex flex-wrap justify-evenly">
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
          <div className="w-full lg:w-0 pb-8"></div>
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
            <div className="py-8 px-10 select-none border border-gray-300 grid grid-cols-2">
              <span className={`mb-6 flex items-center ${amenities['Wi-Fi'] ? '' : 'disabled'}`}>
                <img className="w-4 h-4 mr-2" src={require('@/assets/images/icons/wifi.svg').default} alt="wifi" />{' '}
                wifi: {haveOrNot(amenities['Wi-Fi'])}
              </span>
              <span className={`mb-6 flex items-center ${amenities['Breakfast'] ? '' : 'disabled'}`}>
                <img className="w-4 h-4 mr-2" src={require('@/assets/images/icons/cup.svg').default} alt="breakfast" />{' '}
                早餐:
                {haveOrNot(amenities['Breakfast'])}
              </span>
              <span className={`mb-6 flex items-center ${amenities['Mini-Bar'] ? '' : 'disabled'}`}>
                <img className="w-4 h-4 mr-2" src={require('@/assets/images/icons/goblet.svg').default} alt="minibar" />{' '}
                Mini Bar: {haveOrNot(amenities['Mini-Bar'])}
              </span>
              <span className={`mb-6 flex items-center ${amenities['Room-Service'] ? '' : 'disabled'}`}>
                <img
                  className="w-4 h-4 mr-2"
                  src={require('@/assets/images/icons/serviceBell.svg').default}
                  alt="room service"
                />
                Room Service: {haveOrNot(amenities['Room-Service'])}
              </span>
              <span className={`mb-6 flex items-center ${amenities['Television'] ? '' : 'disabled'}`}>
                <img className="w-4 h-4 mr-2" src={require('@/assets/images/icons/phone.svg').default} alt="phone" />
                電話: {haveOrNot(amenities['Television'])}
              </span>
              <span className={`mb-6 flex items-center ${amenities['Air-Conditioner'] ? '' : 'disabled'}`}>
                <img
                  className="w-4 h-4 mr-2"
                  src={require('@/assets/images/icons/wind.svg').default}
                  alt="air condition"
                />{' '}
                冷氣:
                {haveOrNot(amenities['Air-Conditioner'])}
              </span>
              <span className={`mb-6 flex items-center ${amenities['Refrigerator'] ? '' : 'disabled'}`}>
                <img
                  className="w-4 h-4 mr-2"
                  src={require('@/assets/images/icons/refrigerator.svg').default}
                  alt="refrigerator"
                />{' '}
                冰箱:
                {haveOrNot(amenities['Refrigerator'])}
              </span>
              <span className={`mb-6 flex items-center ${amenities['Sofa'] ? '' : 'disabled'}`}>
                <img className="w-4 h-4 mr-2" src={require('@/assets/images/icons/sofa.svg').default} alt="sofa" />{' '}
                沙發:
                {haveOrNot(amenities['Sofa'])}
              </span>
              <span className={`mb-6 flex items-center ${amenities['Great-View'] ? '' : 'disabled'}`}>
                <img
                  className="w-4 h-4 mr-2"
                  src={require('@/assets/images/icons/mountain.svg').default}
                  alt="mountain"
                />{' '}
                景觀:
                {haveOrNot(amenities['Great-View'])}
              </span>
              <span className={`mb-6 flex items-center ${amenities['Smoke-Free'] ? '' : 'disabled'}`}>
                <img
                  className="w-4 h-4 mr-2"
                  src={require('@/assets/images/icons/noSmoke.svg').default}
                  alt="no smoke"
                />{' '}
                禁止吸菸:
                {haveOrNot(amenities['Smoke-Free'])}
              </span>
              <span className={`mb-6 flex items-center ${amenities['Child-Friendly'] ? '' : 'disabled'}`}>
                <img
                  className="w-4 h-4 mr-2"
                  src={require('@/assets/images/icons/baby.svg').default}
                  alt="child friendly"
                />{' '}
                適合兒童:
                {haveOrNot(amenities['Child-Friendly'])}
              </span>
              <span className={`mb-6 flex items-center ${amenities['Pet-Friendly'] ? '' : 'disabled'}`}>
                <img
                  className="w-4 h-4 mr-2"
                  src={require('@/assets/images/icons/dog.svg').default}
                  alt="pet friendly"
                />{' '}
                寵物攜帶:
                {haveOrNot(amenities['Pet-Friendly'])}
              </span>
            </div>
          </div>
          <div className="lg:w-[40%]">
            <div className="p-8 text-center bg-[#2A58A8] divide-x flex justify-evenly">
              <div className="grow">
                <p className="text-gray-300">平日 (一 ~ 四)</p>
                <p className="text-2xl text-white">$NT {normalDayPrice} / 晚</p>
              </div>
              <div className="grow">
                <p className="text-gray-300">假日 (五 ~ 日)</p>
                <p className="text-2xl text-white">$NT {holidayPrice} / 晚</p>
              </div>
            </div>
            <form className="px-10 py-8 bg-white">
              <div className="mb-4">
                <p className="mb-2">姓名</p>
                <InputText
                  onChange={(e) => {
                    form.name = e.target.value;
                    setForm({ ...form });
                  }}
                />
              </div>
              <div className="mb-4">
                <p className="mb-2">電話</p>
                <InputText
                  onChange={(e) => {
                    form.tel = e.target.value;
                    setForm({ ...form });
                  }}
                />
              </div>
              <div className="mb-4">
                <p className="mb-2">日期</p>
                <RangeDatePicker
                  onChange={(startDate = null, endDate = null) => {
                    if (startDate) {
                      form.date[0] = startDate;
                      setForm({ ...form });
                    }

                    if (endDate) {
                      form.date[1] = endDate;
                      setForm({ ...form });
                    }
                  }}
                />
              </div>
              <div className="mb-10">
                <p className="mb-2">房客</p>
                <InputText
                  onChange={(e) => {
                    form.tel = e.target.value;
                    setForm({ ...form });
                  }}
                  placeholder="1 人"
                />
              </div>
              <button
                onClick={() => {
                  api.room.reserveRoom(params.roomId, form);
                }}
                className="w-full py-4 block bg-[#508DF6] text-white rounded-md hover:bg-blue-600 duration-500"
              >
                預訂房間
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
