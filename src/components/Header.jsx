import globepng from '../assets/globe.png'

function Header() {
  return (
    <header className="header">
      <img src={globepng} alt="globe icon" />
      <h1>my travel journal.</h1>
    </header>
  )
}

export default Header