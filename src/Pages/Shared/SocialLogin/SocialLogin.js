import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signInGoogle } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInGoogle(provider)
      .then((result) => {
        const email = result?.user?.email;
        const buyers = {
          email,
          buyer: true,
        };
        fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(buyers),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Successfully google social login!");
              navigate(from, { replace: true });
            }
          });
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
