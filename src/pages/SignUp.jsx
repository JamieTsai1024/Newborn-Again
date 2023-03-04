import api from "../api/api";
import { Button } from "@mui/material";

const SignUp = () => {
  //   const handleSignup = async () => {
  //     // e.preventDefault();
  //     try {
  //       register().then((account) =>
  //         alert(`successfully created account with id: ${account.$id}`)
  //       );
  //       await api.createAccount(void {}, {
  //         onSuccess: () => {
  //           console.log("hi");
  //         },
  //         onError: () => {
  //           console.log("bye");
  //         },
  //       });
  //       await api.createSession("me@example.com", "password");
  //       // dispatch({ type: FetchState.FETCH_SUCCESS, payload: user });
  //     } catch (e) {
  //       // dispatch({ type: FetchState.FETCH_FAILURE });
  //     }
  //   };
  const handleSignup = async () => {
    // e.preventDefault();
    try {
      await api.createAccount(void {}, {
        onSuccess: () => {
          console.log("hi");
        },
        onError: () => {
          console.log("bye");
        },
      });
      await api.createSession("me@example.com", "password");
      // dispatch({ type: FetchState.FETCH_SUCCESS, payload: user });
    } catch (e) {
      // dispatch({ type: FetchState.FETCH_FAILURE });
    }
  };
  return (
    <div>
      <Button
        variant="contained"
        size="large"
        sx={{ borderRadius: "16px", my: "20px" }}
        onClick={handleSignup}
      >
        Create account
      </Button>
    </div>
  );
};

export default SignUp;
