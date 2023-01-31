import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { signInGoogle } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInGoogle(provider)
      .then((result) => {
        toast.success("Successfully google social login!");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div>
      <div className="text-center">
        <button onClick={handleGoogleLogin} className="btn btn-primary mb-4">
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
