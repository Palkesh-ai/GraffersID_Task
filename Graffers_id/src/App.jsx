import CompanyList from "./pages/HomeScreen"
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import RevCard from "./components/RevCard";

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<CompanyList />} />
      <Route path="/company/:id" element={<RevCard />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
