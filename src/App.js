// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import packageJson from "../package.json";
import { getBuildDate } from "./util/util";
import withClearCache from "./ClearCache";

const ClearCacheComponent = withClearCache(MainApp);

function App() {
  return <ClearCacheComponent />;
}

function MainApp(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Build date: {getBuildDate(packageJson.buildDate)}</p>
        <p>
           Edit <code>src/App.js</code>.
           Edition 3
        </p>
      </header>
    </div>
  );
}

export default App;
