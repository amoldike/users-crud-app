import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddNewUser from "./pages/AddNewUser";
import Dashboard from "./pages/Dashboard";
import UpdateUser from "./pages/UpdateUser";

function App() {
  return (
    <div className="App">
      <h1>MERN USERS APP!</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addNewUser" element={<AddNewUser />} />
          <Route path="/edit/:userId" element={<UpdateUser />} />

          <Route
            path="*"
            element={
              <>
                <h1 style={{ color: "red" }}>
                  Error 404! - The page you're looking for does not exists!
                </h1>
                <button>Go Back To Home!</button>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
