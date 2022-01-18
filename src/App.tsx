import React, { FC } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import '../src/styles/App.css';
import UserProvider from './context';
import Form from './form';
import Menu from './menu';
import User from './user';

const App : FC = () => {
  return (<UserProvider>
        <BrowserRouter>
    <Menu/>
    <Routes>
    <Route path="/" element={<Form />} />
   <Route path="user" element={<User />} />
    </Routes>
  </BrowserRouter>
  </UserProvider>
  );
}

export default App;
