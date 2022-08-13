import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Books from './components/Books.jsx';
import Category from './components/Categories.jsx';
import Form from './components/Form.jsx';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/category" element={<Category />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;