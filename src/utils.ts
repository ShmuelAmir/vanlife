import { redirect } from "react-router-dom";

export async function requireAuth(request: Request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("isLoggedIn") || true;

  if (!isLoggedIn) {
    throw redirect(`/login?redirected=true&redirectTo=${pathname}`);
  }

  return null;
}
