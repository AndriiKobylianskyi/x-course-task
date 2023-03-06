import Header from '../header/Header';
import Footer from '../footer/Footer';
import SignIn from '../signIn/SignIn';
import BooksListItem from '../book-list-item/Book-list-item';
import BookList from '../book-list/Book-list';
import Cart from '../cart/Cart';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
    return (

        <Router>
            <header className="header">
                <Header />
            </header>



            <main className="main">
                <Routes>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/x-course-task' element={<SignIn />} />
                    <Route path='/booklist' element={<BookList />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/booklist/:bookId' element={<BooksListItem />} />
                    <Route path='*' element={<ErrorMessage />} />
                </Routes>
            </main>



            <footer className="footer">
                <Footer />
            </footer>
        </Router>

    );
}

export default App;