import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import Main from './Main';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <div id="wrapper"> */}
        {/* <div className="container-fluid"> */}
          <Routes>
            {/* <Route path="/" element={<Dashboard />}></Route>
                <Route path="/users" element={<UserList />}></Route>
                <Route path="/create-user" element={<UserCreate />}></Route>
                <Route path="/user-edit" element={<UserEdit />}></Route>
                <Route path="/user-delete" element={<UserDelete />}></Route>
                <Route path="/products" element={<ProductList />}></Route>
                <Route path="/create-product" element={<ProductCreate />}></Route>
                <Route path="/product-edit" element={<ProductEdit />}></Route>
                <Route path="/product-delete" element={<ProductDelete />}></Route> */}
                <Route path="/login" element={<Login />}></Route>
                <Route path="/main" element={<Main />}></Route>
                <Route path="/register" element={<Register />}></Route>
          </Routes>
        {/* </div>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
