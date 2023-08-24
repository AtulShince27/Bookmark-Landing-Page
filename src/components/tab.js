import Nav from 'react-bootstrap/Nav';
import './components.css';
import Page2Image1 from '../images/illustration-features-tab-1.svg';
import Page2Image2 from '../images/illustration-features-tab-2.svg';
import Page2Image3 from '../images/illustration-features-tab-3.svg';
      
function TabBar() {
  // const changeTabHandler = (flag) =>{
  //   console.log(flag);
  //   const gridImage = document.getElementById('page2GridImage');
  //   const gridContent = document.getElementById('page2GridContent');
  //   if(flag === 1){
  //     gridImage.innerHTML = `
  //     <img src={${Page2Image1}} alt="Page2 features"/>
  //     `;
  //     gridContent.innerHTML = `
  //       <h1>Intelligent search</h1>
  //       <p id='page2GridDescription'>
  //       Easily share your bookmarks and collections with others. Create a shareable 
  //       link that you can send at the click of a button.
  //       </p>
  //       <button>
  //             More Info
  //       </button>
  //     `;
  //   } else if(flag === 2){
  //     gridContent.innerHTML = `
  //     <img src={${Page2Image2}} alt="Page2 intelligent search"/>
  //     `;
  //     gridContent.innerHTML = `
  //       <h1>Share your bookmarks</h1>
  //       <p id='page2GridDescription'>
  //         Organize your bookmarks however you like. Our simple drag-and-drop interface 
  //         gives you complete control over how you manage your favourite sites.
  //       </p>
  //       <button>
  //             More Info
  //       </button>
  //     `;
  //   } else if(flag === 3){
  //     gridContent.innerHTML = `
  //     <img src={${Page2Image3}} alt="Page2 bookmarks"/>`;
  //     gridContent.innerHTML = `
  //       <h1>Bookmark in one click</h1>
  //       <p id='page2GridDescription'>
  //         Organize your bookmarks however you like. Our simple drag-and-drop interface 
  //         gives you complete control over how you manage your favourite sites.
  //       </p>
  //       <button>
  //             More Info
  //       </button>`;
  //   }
  // }  
  return (
    <div>
      <Nav variant="underline" defaultActiveKey="/link1" className='tab-bar'>
      <Nav.Item className='tab'>
        <Nav.Link eventKey="link1" id='tab1' >Simple Bookmarking</Nav.Link>
      </Nav.Item>
      <Nav.Item className='tab'>
        <Nav.Link eventKey="link2" id='tab2' >Speedy Searching</Nav.Link>
      </Nav.Item>
      <Nav.Item className='tab'>
        <Nav.Link eventKey="link3" id='tab3'>Easy Sharing</Nav.Link>
      </Nav.Item>
      </Nav>
    </div>
  );
}

export default TabBar;