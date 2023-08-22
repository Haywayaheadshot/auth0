import './App.css';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <h1>Hello!</h1>
      {isAuthenticated ? (
        <UserProfile />
      ) : <Login />}
    </div>
  );
}

export default App;
