import React from 'react'
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from "./pages/Login"
import Todo from "./components/Todo" 
function App() {
  return (  
     <div className="App">
<BrowserRouter>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/Registration" element={<Registration />}></Route>
<Route path="/todo" element={<Todo/>}></Route>

</Routes>

</BrowserRouter>
</div>
  );
}
export default App;