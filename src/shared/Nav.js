
import { NavLink } from 'react-router-dom';


const Nav = () =>  {
    return (
        <nav>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/book-info/new'> Add Book </NavLink>
            <NavLink to='/create-book'> Create-Book </NavLink>
            <NavLink to='/book-info/:id/edit'> Edit Book </NavLink>
        </nav>
    )
}

export default Nav