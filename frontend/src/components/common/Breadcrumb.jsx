import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPage }) => {
  return (
    <div className="bg-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-6 text-sm text-gray-600">
        <Link
          to="/"
          className="hover:text-[#123447] transition font-medium"
        >
          Home
        </Link>

        <span className="mx-2 text-gray-400">{">>"}</span>

        <span className="text-[#123447] font-semibold">
          {currentPage}
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;

