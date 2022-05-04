import Nav from './Nav'
import Footer from './Footer';

const Layout = (props) => {
    return (
        <>
        <div className='layout-div'>
          <h1>booklist</h1>
        </div>
        <Nav />
        {props.children}

        <Footer />
        </>
    )
}

export default Layout; 