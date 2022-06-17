import "normalize.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthContext from "./auth/context";

import HomeScreen from "./routes/HomeScreen";
import LoginScreen from "./routes/LoginScreen";
import RegisterScreen from "./routes/RegisterScreen";
import StudyPlanScreen from "./routes/StudyPlanScreen";

function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/study-plans" element={<StudyPlanScreen />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
