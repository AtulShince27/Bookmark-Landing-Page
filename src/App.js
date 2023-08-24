import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CollapsibleExample from './components/nav-bar';
import BasicAccordion from './components/accordion';
import LandingPageImage from './images/illustration-hero.svg';
import Page2Image1 from './images/illustration-features-tab-1.svg';
import Page2Image2 from './images/illustration-features-tab-2.svg';
import Page2Image3 from './images/illustration-features-tab-3.svg';
import Page3Image1 from './images/logo-chrome.svg';
import Page3Image2 from './images/logo-firefox.svg';
import Page3Image3 from './images/logo-opera.svg';
import FooterImage1 from './images/icon-error.svg'
import BottomNavBar from './components/bottom-nav-bar';
import { useEffect, useState } from 'react';

function App() {
  const [tab, setTab] = useState(1);
  const [flag, setFlag] = useState(1);
  useEffect(()=>{
    if(flag === 1){
      setTab(1);
    } else if(flag === 2){
      setTab(2);
    } else if(flag === 3){
      setTab(3);
    }
  }, [flag]);
  const changeTabHandler = ()=>{
    if(tab === 1){
      console.log('tab 1');
      const tab1GridImage = document.getElementById('page2GridImage');
      tab1GridImage.innerHTML = `
      <img src=${Page2Image1} alt="Page2 features"/>
      `;
      const tab1GridContent = document.getElementById('page2GridContent');
      tab1GridContent.innerHTML = `
      <h1>Bookmark in one click</h1>
      <p id='page2GridDescription'>
        Organize your bookmarks however you like. Our simple drag-and-drop interface 
        gives you complete control over how you manage your favourite sites.
      </p>
      <button id='moreInfoBtn'>
        More Info
      </button>
      `
    } else if(tab === 2){
      const tab2GridImage = document.getElementById('page2GridImage');
      tab2GridImage.innerHTML = `
      <img src=${Page2Image2} alt="Page2 features"/>
      `;
      const tab2GridContent = document.getElementById('page2GridContent');
      tab2GridContent.innerHTML = `
      <h1>Intelligent search</h1>
      <p id='page2GridDescription'>
      Easily share your bookmarks and collections with others. Create a shareable 
      link that you can send at the click of a button.
      </p>
      <button id='moreInfoBtn'>
            More Info
      </button>
      `
      console.log('tab 2');
    } else if(tab === 3){
      console.log('tab 3');
      const tab3GridImage = document.getElementById('page2GridImage');
      tab3GridImage.innerHTML = `
      <img src=${Page2Image3} alt="Page2 features"/>
      `;
      const tab3GridContent = document.getElementById('page2GridContent');
      tab3GridContent.innerHTML = `
      <h1>Share your bookmarks</h1>
      <p id='page2GridDescription'>
        Organize your bookmarks however you like. Our simple drag-and-drop interface 
        gives you complete control over how you manage your favourite sites.
      </p>
      <button id='moreInfoBtn'>
            More Info
      </button>
      `
    }
  }
  return (
    <div className="App">
      <div className="landing-page">
        {/* Do not add classes for navbar react-bootstrap it may lead to the navbar not filling the screen width */}
        <CollapsibleExample className='landing-page-navbar'></CollapsibleExample>
        <div id='landingPageDesignElement'></div>
        <div className="landing-page-grid">
          <div id='text-content'>
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites. 
              Open a new browser tab and see your sites load instantly. Try it for free.
            </p>
            <button>
              Get it on Chrome
            </button>
            <button>
              Get it on Firefox
            </button>
          </div>
          <div id='image-content'>
            <img src={LandingPageImage} alt="landing page image" />
          </div>
        </div>
      </div>
      <div className="page2">
        <div id="page2-into-text">
          <h3>Features</h3>
          <p id='page2Description'>
            Our aim is to make it quick and easy for you to access your favourite websites. 
            Your bookmarks sync between your devices so you can access them on the go.
          </p>
        </div>
        <div className='tab-bar'>
          <div className='tab-bar-links' onClick={()=> {setFlag(1);changeTabHandler()}}><button id='tab1Btn'>Simple Bookmarking</button></div>
          <div className='tab-bar-links' onClick={()=> {setFlag(2);changeTabHandler()}}><button id='tab2Btn'>Speedy Searching</button></div>
          <div className='tab-bar-links' onClick={()=> {setFlag(3);changeTabHandler()}}><button id='tab3Btn'>Easy Sharing</button></div>
        </div>
        <div className='page2-grid'>
          <div className='grid-image-col' id='page2GridImage'>
            <img src={Page2Image1} alt="Page2 features"/>
          </div>
          <div className='grid-content-col' id='page2GridContent'>
            <h1>Bookmark in one click</h1>
            <p id='page2GridDescription'>
              Organize your bookmarks however you like. Our simple drag-and-drop interface 
              gives you complete control over how you manage your favourite sites.
            </p>
            <button id='moreInfoBtn'>
              More Info
            </button>
          </div>
        </div>
      </div>
      <div className="page3">
        <h1>Download the extension</h1>
        <p id='page3IntroDescription'>  
          We’ve got more browsers in the pipeline. Please do let us know if you’ve 
          got a favourite you’d like us to prioritize.
        </p>
        <div className='w-4/5 pl-12 pr-12 ml-40 page3-grid'>
          <div>
            <img src={Page3Image1} alt='Chrome'/>
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
            <hr />
            <button>Add & Install Extension</button>
          </div>
          <div>
            <img src={Page3Image2} alt='Firefox'/>
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>
            <hr />
            <button>Add & Install Extension</button>
          </div>
          <div>
            <img src={Page3Image3} alt='Opera'/>
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>
            <hr />
            <button>Add & Install Extension</button>
          </div>
        </div>
      </div>
      <div className="faq-page">
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like 
          answered please feel free to email us.
        </p>
        <div className="page3-main-content">
          <BasicAccordion></BasicAccordion>
          <button id='moreInfoBtn'>More Info</button>
        </div>
      </div>
      <div className="footer-page">
        <h5>35,000+ already joined</h5>
        <h1>Stay up-to-date with what we’re doing</h1>
        <div>
          <input type="email" placeholder='Enter your email'/>
          <button>Contact Us</button>
        </div>
        {/* <img src={FooterImage1} alt="Error" /> */}
      </div>
      <div className="bottom-nav">
        <BottomNavBar></BottomNavBar>
      </div>
    </div>
  );
}

export default App;
