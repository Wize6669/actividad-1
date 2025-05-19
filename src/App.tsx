import './App.css'
import { Route, Routes } from 'react-router';
import Login from './pages/Login.tsx';
import SignUp from './pages/SignUp.tsx';
import Home from './pages/Home.tsx';
import MainLayout from './layouts/MainLayout.tsx';
import Books from './pages/Books.tsx';
import { ThemeProvider } from './context/ThemeProvider';
import BookDetail from "./pages/BookDetail";
import { BookList } from './pages/BookList.tsx';

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/auth/sign-up" element={<SignUp/>}/>

                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"books"} element={<Books/>}/>
                </Route>
                <Route path="/" element={<BookList />} />
                <Route path="/book/:id" element={<BookDetail />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App
