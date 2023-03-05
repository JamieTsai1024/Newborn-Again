import { useState } from "react";
import { account } from "../api/api";
import { ID } from "appwrite";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    account.create(ID.unique(), user.email, user.password, user.name).then(
      (response) => {
        console.log("response", response);
        navigate("/");
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  return (
    <section className="container h-screen mx-auto flex">
      <div className="flex-grow flex flex-col max-w-xl justify-center p-6">
        <form onSubmit={handleSignUp}>
          <label className="block mt-6">Name</label>
          <input
            className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
            type="text"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            name="name"
            autoComplete="name"
          />

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
              disabled={!user.name || !user.email || !user.password}
              className="mx-auto mt-4 py-4 px-16 font-semibold rounded-lg shadow-md bg-gray-900 text-white border hover:border-gray-900 hover:text-gray-900 hover:bg-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
