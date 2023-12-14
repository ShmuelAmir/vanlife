import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="grid h-full place-content-center px-16">
      <p className="text-3xl font-bold">
        Sorry, the page you were looking for was not found.
      </p>
      <Link
        to="/"
        className="mt-4 rounded-md bg-black py-2 text-center text-white hover:bg-gray-800 "
      >
        Return to home
      </Link>
    </div>
  );
}

export default NotFound;
