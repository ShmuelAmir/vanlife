import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return <div>Something went wrong! {error.message}</div>;
}

export default ErrorPage;
