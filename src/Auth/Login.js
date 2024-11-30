import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};

import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
  const location = useLocation(); // Get the location object
  const navigate = useNavigate(); // Navigate to other pages after login
  const [user, loading, error] = useAuthState(auth); // Get current user state
  
  const courseName = location.state?.course; // Retrieve the course name passed from Home page
  
  const handleLogin = () => {
    // If login is successful
    if (user) {
      if (courseName) {
        // If course was passed, navigate to that course page
        navigate(`/courses/${courseName}`);
      } else {
        // Otherwise, redirect to the home page or any default page
        navigate('/');
      }
    }
  };

  return (
    <div>
      {/* Display login form */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;