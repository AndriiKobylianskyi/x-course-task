import Header from '../header/Header';
import Footer from '../footer/Footer';
import SignIn from '../signIn/SignIn';
import SpecificBook from '../specific-book/Specific-book';
import BookList from '../book-list/Book-list';
import Cart from '../cart/Cart';
import ErrorMessage from '../ErrorMessage/ErrorMessage';




function App() {
    return (
        <>
            <header className="header">
                <Header />
            </header>



            <main className="main">
                {/* <SignIn /> */}
                <SpecificBook />
                {/* <BookList /> */}
                {/* <Cart /> */}
                {/* <ErrorMessage /> */}
            </main>



            <footer className="footer">
                <Footer />
            </footer>
        </>
    );
}

export default App;