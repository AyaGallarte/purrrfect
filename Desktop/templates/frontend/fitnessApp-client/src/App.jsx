import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { WorkoutProvider } from './context/WorkoutContext';
import WorkoutView from './components/WorkoutView';
import AppNavbar from './components/AppNavbar';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {
  return (
    <Router basename="/">
      <UserProvider>
        <WorkoutProvider>
          <AppNavbar />
          <Container>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/workouts" element={<WorkoutView />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </Container>
        </WorkoutProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
