import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await api
        .createSession(user.email, user.password)
        .then((response) => navigate("/"));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="container h-screen mx-auto flex">
      <div className="flex-grow flex flex-col max-w-xl justify-center p-6">
        <form onSubmit={handleLogin}>
          <label className="block mt-6">Email</label>
          <input
            className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
            type="text"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            name="email"
            autoComplete="email"
          />
          <label className="block mt-6">Password</label>
          <input
            className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            name="password"
            autoComplete="password"
          />

          <div className="mt-6">
            <button
              type="submit"
              disabled={!user.email || !user.password}
              className="mx-auto mt-4 py-4 px-16 font-semibold rounded-lg shadow-md bg-gray-900 text-white border hover:border-gray-900 hover:text-gray-900 hover:bg-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
