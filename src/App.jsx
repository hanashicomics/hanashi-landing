import './assets/styles/App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home.jsx'
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import PublicLayout from "./public layout/PublicLayout.jsx";
import Pricing from "./components/Pricing.jsx";
import Upgrade from "./components/Upgrade.jsx";
import PrivacyPolicy from "./components/Privacy.jsx";
import Docs from "./docs/Docs.jsx";

function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route element={<PublicLayout />}>
                      <Route path="/" element={<Home />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<SignUp />} />
                      <Route path="/pricing" element={<Pricing/>}/>
                      <Route path="/upgrade" element={<Upgrade />} />
                      <Route path="/privacy" element={<PrivacyPolicy/>} />
                      <Route path="/docs" element={<Docs />}/>
                  </Route>
              </Routes>
          </Router>
      </>
  )
}

export default App
