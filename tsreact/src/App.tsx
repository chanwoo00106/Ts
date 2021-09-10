import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";

function AppRouter() {
  const [id, setId] = useState(0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num: number = Number(e.target.value);
    setId(num);
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/products/${id}`}>Go!</Link>
            </li>
          </ul>
        </nav>
        <input type="number" onChange={onChange} />
        <Route path="/" exact component={Profile} />
        <Route path="/products/:id" component={Home} />
      </div>
    </Router>
  );
}

export default AppRouter;