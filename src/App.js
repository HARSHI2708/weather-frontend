import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
      <Route path="/" element={<Navigate to="/main" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {user && <Route path="/main" element={<Main />} />}
    </Routes>
	);
}

export default App;
