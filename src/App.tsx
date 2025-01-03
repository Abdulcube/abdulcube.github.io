import "./App.css";
import { Route, Routes } from "react-router";
import { Homescreen, Profile } from "./features";
import NavBar from "./features/NavBar/NavBar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Homescreen />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
