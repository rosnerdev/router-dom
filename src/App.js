import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/profile">Profile</a>
      </nav>
      <Routes>
        <Route path="/" element={<h1>hello world!</h1>} />
        <Route path="/about" element={<h1>this is the about page</h1>} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();

  return(
    <>
      <h1>this is the profile of {username}</h1>
      <button onClick={() => {navigate("/")}}>navigate home</button>  
    </>
  );
}

export default App;
