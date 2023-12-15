import { useEffect, useState } from "react";

function LogoutButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <button
      onClick={() => setIsLoggedIn(false)}
      className="fixed bottom-4 left-4 text-white"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
