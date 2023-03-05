import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { api } from "./../api/api";
import { Permission, Role } from "appwrite";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const AddPostPage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState();
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
    image: "",
    category: "",
    userId: user.id,
  });

  const handleAddPost = async (e) => {
    e.preventDefault();
    // TODO: later for anonymous sessions, use account.createAnonymousession(); https://youtu.be/DkchyIDef18?t=182
    try {
      const newImage = await api.createFile("6404413ed6aa6c044fe7", image);
      await api.createDocument(
        "6403d5d8bfa5e8fe29e1",
        "6403d600199676c85a34",
        //   Server.databaseID,
        //   Server.collectionID,
        { ...post, image: newImage.$id },
        [
          Permission.read(Role.user(user["$id"])),
          Permission.write(Role.user(user["$id"])),
        ]
      );
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    api
      .getAccount()
      .then((account) => {
        setPost({ ...post, userId: account.$id });
        setUser(account);
      })
      .catch((error) => navigate("/login"));
  }, []);

  return (
    <section className="login-container">
      <form className="login-box" onSubmit={handleAddPost}>
        <h2 className="welcome">Create Posting</h2>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            multiline
            maxRows={4}
            required
            onChange={(e) => setPost({ ...post, name: e.target.value })}
            size="small"
            fullWidth
          />
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            multiline
            maxRows={4}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            size="small"
            fullWidth
          />

          <TextField
            id="condition"
            select
            label="Condition"
            size="small"
            required
            defaultValue={""}
            onChange={(e) => setPost({ ...post, condition: e.target.value })}
            fullWidth
          >
            {Object.values(ConditionsEnum).map((condition) => (
              <MenuItem key={condition} value={condition}>
                {condition.replaceAll("-", " ").toLowerCase()}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="location"
            label="Location"
            variant="outlined"
            required
            onChange={(e) => setPost({ ...post, location: e.target.value })}
            size="small"
            fullWidth
          />

          <TextField
            id="category"
            select
            label="Category"
            size="small"
            required
            defaultValue={""}
            onChange={(e) => setPost({ ...post, category: e.target.value })}
            fullWidth
          >
            {Object.values(CategoriesEnum).map((category) => (
              <MenuItem key={category} value={category}>
                {category.replaceAll("-", " ").toLowerCase()}
              </MenuItem>
            ))}
          </TextField>
          <Button
            type="submit"
            disabled={
              !post.name ||
              !post.condition ||
              !post.location ||
              !post.category ||
              !post.userId
            }
          >
            Create Post
          </Button>
        </Box>
      </form>
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
