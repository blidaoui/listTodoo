import React from 'react'
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from "./pages/Login"
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import { TodoWrapper } from './component/TodoWrapper';
function App() {
  return (  
     <div className="App">
<BrowserRouter>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />}></Route>
<Route path="/Registration" element={<Registration />}></Route>
<Route path="/todo" element={<TodoWrapper />}></Route>

</Routes>

</BrowserRouter>
</div>
  );
}
export default App;