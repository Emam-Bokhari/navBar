import PropTypes from 'prop-types'
const Navbar = ({ NavbarData }) => {
    const { name, path } = NavbarData
    return (
        <div>
            <li className='mr-4 hover:bg-orange-300 p-2'>
                <a href={path}>{name}</a>
            </li>
        </div>
    )
}

Navbar.propTypes = {
    NavbarData: PropTypes.object.isRequired
}

export default Navbar