import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex justify-between bg-white">
      <Link to="/" className="px-8 py-3 bg-[#2A58A8] block text-white">
        TRAVEL
      </Link>
    </div>
  );
}
