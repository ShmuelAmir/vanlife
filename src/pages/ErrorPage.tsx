import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-12 max-w-md">
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre className="my-4">
        {error.message || JSON.stringify(error, null, 2)}
      </pre>
      <button
        onClick={() => navigate("/")}
        className="mt-8 rounded-md bg-[#FF8C38] px-4 py-2 text-center text-white"
      >
        Click here to reload the app
      </button>
    </div>
  );
}

export default ErrorPage;
