import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import SignIn from "./pages/SignIn/index"
import SignUp from "./pages/SignUp/index"
import Home from "./pages/Home/index"
import TokenContext from "./contexts/tokenContext";

function App() {
  const [token, setToken] = useState('')
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  )
}

export default App;