import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn/index"
import SignUp from "./pages/SignUp/index"
import Home from "./pages/Home/index"

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;