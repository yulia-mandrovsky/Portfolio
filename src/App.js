import './App.css';
import Header from './components/Header/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Numbers from './components/Numbers/Numbers';
import NavProvider from './context/NavContext';
import DesktopMenu from './nav/Nav'

// Trying ToDo Navigation

const navLinks = [
  {navLinkId: 'About', scrollToId: 'aboutContainer'}, 
  {navLinkId: 'Portfolio', scrollToId: 'portfolioContainer'},
  {navLinkId: 'Skills', scrollToId: 'skillsContainer'},
  {navLinkId: 'Contacts', scrollToId: 'contactsContainer'},
  {navLinkId: 'Portfolio', scrollToId: 'portfolioContainer'}
]

function App() {
  return (
    <div className="App">
      <NavProvider>
        <DesktopMenu />
        <Header />
        <About />
        <Skills />
        <Numbers />
        <ContactForm />
        <Portfolio />
        <Footer />
      </NavProvider>
    </div>
  );
}

export default App;
