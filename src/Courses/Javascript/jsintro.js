import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import ProtectedRoute from "../../pages/ProtectedRoutes";
import '../courses.css'


const Cintro = () => {
    const [user] = useAuthState(auth);
  
    if (!user) {
      return <p>You need to log in to access the dashboard.</p>;
    }
    return (
        <ProtectedRoute>
            <div className="root">
              <p>Hello testing</p>
            </div>
       </ProtectedRoute>
    );
  };
  
  export default Cintro;
  