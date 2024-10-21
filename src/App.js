import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Auth from "./pages/Auth";
import RecetteDetail from "./components/RecetteDetail";
import RecetteForm from "./components/RecetteForm";
import CreateRecipePage from "./components/create-recipe";
import EditRecipePage from "./components/edit-recipe";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
          <Route  path="/auth" element={<Auth/>}/>
          <Route path="/RecetteDetail" element={<RecetteDetail/>}/>
          <Route path="/RecetteForm" element={<RecetteForm/>}/>
          <Route path="/create-recipe" element={<CreateRecipePage />} />
          <Route path="/edit-recipe" element={<EditRecipePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
