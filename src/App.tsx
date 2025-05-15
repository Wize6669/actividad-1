import './App.css'
import { Route, Routes } from 'react-router';
import Login from './pages/Login.tsx';
import SignUp from './pages/SignUp.tsx';
import Home from './pages/Home.tsx';
import MainLayout from './layouts/MainLayout.tsx';
import Books from './pages/Books.tsx';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/auth/sign-up" element={<SignUp/>}/>

            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path={"books"} element={<Books/>}/>
            </Route>
        </Routes>
    )
}

export default App
