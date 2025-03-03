import './App.css';
import { useState } from 'react';

function App(): JSX.Element {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const toggleContact = (): void => {
    setIsContactVisible(!isContactVisible);
    setIsAboutVisible(false); // Close about when contact opens
  };

  const toggleAbout = (): void => {
    setIsAboutVisible(!isAboutVisible);
    setIsContactVisible(false); // Close contact when about opens
  };

  return (
    <div className="minimal-portfolio">
      <header>
        <nav>
          <span onClick={toggleAbout} style={{ cursor: 'pointer', textDecoration: 'underline' }}>ABOUT ME</span>
          <span onClick={toggleContact} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            REACH OUT
          </span>
          <span>KYIV [11:14 PM]</span>
        </nav>
      </header>
      <main className={isAboutVisible ? 'slide-page' : ''}>
        <div className="intro">
          <h1>POLINA HARKUSHA<br /></h1>
          <p>First-Year Computer Science Student at UIUC</p>
        </div>
        <div className="gallery">
          <div className="gallery-item">[coming soon]</div>
          <div className="gallery-item">[coming soon]</div>
          <div className="gallery-item">[coming soon]</div>
        </div>
      </main>

      {/* About sliding section */}
      <div className={`about ${isAboutVisible ? 'slide-down' : ''}`}>
        <div className="about-content">
          <h2>ABOUT ME</h2>
          <p>I'm Polina! Freshman in Computer Science aiming to blend tech with fashion innovation.</p>
          <button onClick={toggleAbout} style={{ background: 'none', border: '1px solid black', padding: '0.5rem 1.5rem', borderRadius: '20px', cursor: 'pointer', fontSize: '0.9rem' }}>Close</button>
        </div>
      </div>

      {/* Contact window popup */}
      <div className={`contact ${isContactVisible ? 'slide-side' : ''}`}>
        <h2>Contact<br />Contact<br />Contact</h2>
        <button onClick={toggleContact} style={{ background: 'none', border: '1px solid black', padding: '0.5rem 1.5rem', borderRadius: '20px', cursor: 'pointer', fontSize: '0.9rem' }}>Close</button>
      </div>

      <footer>
        <span>PLNKI '25</span>
        <span>ALL RIGHTS RESERVED</span>
      </footer>
    </div>
  );
}

export default App;
