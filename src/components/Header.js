
import './Header.css'
const Header = (props) => {

    const toggleHandler = () => {
        props.onDarkMode((prevDarkMode) => !prevDarkMode)
    }

    return (
      <div className="header">
        <h1 className='header__title'>Note</h1>
        <button onClick={toggleHandler} className='header__toggle'>Toggle Mode</button>
      </div>
    );
  }
  
  export default Header;
  