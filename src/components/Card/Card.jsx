export default function Card(props) {
  const { name, imageUrl, normalDayPrice, holidayPrice } = props.roomData;

  return (
    <div className="group relative w-1/3 h-[400px] overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover object-bottom" />
      <div className="absolute bottom-[-78px] inset-x-0 bg-black bg-opacity-50 text-center duration-500 group-hover:bottom-0 group-hover:bg-white">
        <h2 className="py-5 text-white duration-500 group-hover:text-blue-700 group-hover:font-bold">{name}</h2>
        <ul className=" flex justify-around">
          <li className="grow py-3 border-solid border">
            <p className="text-gray-400 mb-1">平日(一 ~ 四)</p>
            <p>$NT {normalDayPrice} / 晚</p>
          </li>
          <li className="grow py-3 border-solid border">
            <p className="text-gray-400 mb-1">假日(五 ~ 日)</p>
            <p>$NT {holidayPrice} / 晚</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
