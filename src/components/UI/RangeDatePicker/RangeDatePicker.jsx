import { useState } from 'react';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// 自訂樣式
import './RangeDatePicker.css';

export default function RangeDatePicker(props) {
  const { control } = props;

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function formatDate(originDate = null) {
    let D = new Date(originDate);

    return D.toISOString().split('T')[0];
  }

  return (
    <div className="flex">
      <Controller
        name="startDate"
        control={control}
        render={({ field: { onChange } }) => (
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              onChange(formatDate(date));
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy - MM - dd"
            placeholderText="入住"
          />
        )}
      />
      <div
        className="px-4 mx-2 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${require('@/assets/images/icons/arrow-right.svg').default})` }}
      ></div>
      <Controller
        name="endDate"
        control={control}
        render={({ field: { onChange } }) => (
          <DatePicker
            selected={endDate}
            onChange={(date) => {
              setEndDate(date);
              onChange(formatDate(date));
            }}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="yyyy - MM - dd"
            placeholderText="退房"
          />
        )}
      />
    </div>
  );
}
