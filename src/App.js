import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn/index"
import SignUp from "./pages/SignUp/index"

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;