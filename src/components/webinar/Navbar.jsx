// src/components/Navbar.jsx
// Navbar component with a fixed position and clickable logo
import logo from '../../assets/logo.png'; // Placeholder import for the PNG image

function Navbar() {
  const handleLogoClick = () => {
    window.location.reload(); // Refresh the entire page on logo click
  };

  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="Roothe-Kharis & Partners Logo"
        className="navbar-logo"
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }} // Visual cue for clickable logo
      />
    </nav>
  );
}

export default Navbar;