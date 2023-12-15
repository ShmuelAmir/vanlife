import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  Form,
  ActionFunctionArgs,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import Toast from "../components/Toast";
import { loginUser } from "../api/loginUser";

export function loader({ request }: LoaderFunctionArgs) {
  return new URL(request.url).searchParams.get("redirected");
}

export async function action({ request }: ActionFunctionArgs) {
  const url = new URL(request.url);
  const redirectTo = url.searchParams.get("redirectTo") || "/host";

  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await loginUser({ email, password });
    localStorage.setItem("isLoggedIn", "true");
    return redirect(redirectTo);
  } catch (error) {
    return (error as { message: string }).message;
  }

  return null;
}

function Login() {
  const { state } = useNavigation();
  const redirected = useLoaderData();
  const formError = useActionData() as string;

  return (
    <div className="h-full bg-[#FFF7ED] pt-24 text-center">
      {redirected === "true" && (
        <Toast message="You must login first" type="warning" />
      )}
      {typeof formError === "string" && (
        <Toast message={formError} type="error" />
      )}
      <h2 className="text-3xl font-bold">Sign in to your account</h2>

      <Form replace method="post" className="m-12 mx-auto max-w-md">
        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="block w-full rounded-t-md border-2 border-gray-300 p-2"
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          className="block w-full rounded-b-md border-b-2 border-l-2 border-r-2 border-gray-300 p-2"
        />
        <button
          disabled={state === "submitting"}
          className="mb-12 mt-8 w-full rounded-md bg-[#FF8C38] py-2 text-white disabled:bg-gray-300"
        >
          {state === "submitting" ? "Logging in..." : "Sign in"}
        </button>
      </Form>

      <p className="text-sm">
        Don't have an account?{" "}
        <Link to="/" className="text-[#FF8C38] hover:underline">
          Create one now
        </Link>
      </p>
    </div>
  );
}

export default Login;
