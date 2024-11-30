import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import ProtectedRoute from "../../pages/ProtectedRoutes";
import '../courses.css'
import '../custom.css'


const Css3 = () => {
    const [user] = useAuthState(auth);
  
    if (!user) {
      return <p>You need to log in to access the dashboard.</p>;
    }
    return (
        <ProtectedRoute>
           <div className="root">
              <h1>Welcome To css Course Section</h1>
              <div>
                <h2>This section is still under development</h2>
              </div>
            </div>
       </ProtectedRoute>
    );
  };
  
  export default Css3;
  