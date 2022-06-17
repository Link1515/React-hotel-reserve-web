export default function InputText(props) {
  const { placeholder, value, onChange } = props;

  return (
    <input
      onChange={onChange}
      value={value}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
      type="text"
      placeholder={placeholder}
    />
  );
}
