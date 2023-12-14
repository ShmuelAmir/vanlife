import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return <div>Something went wrong! {error.message}</div>;
}

export default ErrorPage;
