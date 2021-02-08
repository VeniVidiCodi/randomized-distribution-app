import logo from './mallard.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import TitleBar from './components/TitleBar/TitleBar';
import GroupSection from './components/GroupSection/GroupSection';
import RosterSection from './components/RosterSection/RosterSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav logo={logo} />
        <TitleBar />
      </header>
      <main id="entry-container">
        <GroupSection />
        <RosterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
