import french from '../assets/icons/flag-french66-40.jpg';
import english from '../assets/icons/flag-english66-40.jpg';
import japanese from '../assets/icons/flag-japan66-40.jpg';
import darkmode from '../assets/icons/icon-darkmode-trans.png';
function Header() {
  return (
    <header>
      <a href="">Home</a>
      <div className="icons">
        <div className="flags">
          <ul>
            <li>
              <a href="#">
                <img src={french}></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={english}></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={japanese}></img>
              </a>
            </li>
          </ul>
        </div>
        <img src={darkmode} className="mode"></img>
      </div>
    </header>
  );
}

export default Header;
