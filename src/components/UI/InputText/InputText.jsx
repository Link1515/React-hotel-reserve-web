export default function InputText(props) {
  const { placeholder, label, register, required, type, defaultValue } = props;

  return (
    <input
      {...register(label, { required })}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
      type={type || 'text'}
      defaultValue={defaultValue || ''}
      placeholder={placeholder}
    />
  );
}
