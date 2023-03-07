import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/places">Places</Link>
            <Link to ="/foods">Foods</Link>
            <Link to="/about">About</Link>
        </div>
    )
}
export default Navbar ;