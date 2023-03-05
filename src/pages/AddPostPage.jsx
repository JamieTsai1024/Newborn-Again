import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { api } from "./../api/api";
import { Permission, Role } from "appwrite";
import { Server } from "../utils/config";

const AddPostPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [post, setPost] = useState({
    name: "",
    description: "",
    condition: "",
    location: "",
    category: "",
    userId: user.id,
  });

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      console.log("user", user);
      // await account.createEmailSession(user.email, user.password);
      // await api.createSession(user.email, "happyhappy");
      // await api.createSession(user.email, user.password);
      await api.createDocument(
        "6403d5d8bfa5e8fe29e1",
        "6403d600199676c85a34",
        //   Server.databaseID,
        //   Server.collectionID,
        post,
        [
          Permission.read(Role.user(user["$id"])),
          Permission.write(Role.user(user["$id"])),
        ]
      );
      // setPost({
      //   name: "",
      //   description: "",
      //   condition: "",
      //   location: "",
      //   category: "",
      //   userId: user.id,
      // });
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   api
  //     .provider()
  //     .account.get()
  //     .then((account) => {
  //       setPost({ ...post, userId: account.$id });
  //       setUser(account);
  //     })
  //     .catch((error) => navigate("/login"));
  // }, []);

  return (
    <section className="container h-screen mx-auto flex">
      <div className="flex-grow flex flex-col max-w-xl justify-center p-6">
        <form onSubmit={handleAddPost}>
          <label className="block mt-6">Name</label>
          <input
            className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
            type="text"
            onChange={(e) => setPost({ ...post, name: e.target.value })}
            name="name"
            autoComplete="name"
          />
          <label className="block mt-6">Description</label>
          <input
            className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
            type="text"
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            name="description"
            autoComplete="description"
          />
          <label className="block mt-6">Condition</label>
          <select
            className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
            onChange={(e) => setPost({ ...post, condition: e.target.value })}
            name="condition"
            autoComplete="condition"
          >
            <option className="hidden"></option>
            {Object.values(ConditionsEnum).map((condition) => (
              <option key={condition} value={condition}>
                {condition.replaceAll("-", " ").toLowerCase()}
              </option>
            ))}
          </select>
          <label className="block mt-6">Location</label>
          <input
            className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
            type="text"
            onChange={(e) => setPost({ ...post, location: e.target.value })}
            name="location"
            autoComplete="location"
          />
          <label className="block mt-6">Category</label>
          <select
            className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
            onChange={(e) => setPost({ ...post, category: e.target.value })}
            name="category"
            autoComplete="category"
          >
            <option className="hidden"></option>
            {Object.values(CategoriesEnum).map((category) => (
              <option key={category} value={category}>
                {category.replaceAll("-", " ").toLowerCase()}
              </option>
            ))}
          </select>

          <div className="mt-6">
            <button
              type="submit"
              disabled={
                !post.name ||
                !post.condition ||
                !post.location ||
                !post.category ||
                !post.userId
              }
              className="mx-auto mt-4 py-4 px-16 font-semibold rounded-lg shadow-md bg-gray-900 text-white border hover:border-gray-900 hover:text-gray-900 hover:bg-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const ConditionsEnum = ["new", "gently used", "used"];
const CategoriesEnum = [
  "clothing",
  "toys",
  "books",
  "furniture",
  "safety gear",
  "other",
];

export default AddPostPage;
