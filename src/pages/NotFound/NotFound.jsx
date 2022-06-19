import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h3 className="text-center mt-5 text-2xl">
        找不到此頁面，請返回
        <Link to="/" className="text-[#2A58A8] underline">
          首頁
        </Link>
      </h3>
    </div>
  );
}
