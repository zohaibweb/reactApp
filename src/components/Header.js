
import Buttons from './Buttons'

const Header = () => {

    const onClick = () => {
        console.log('clicked');
    }
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Buttons text='Add' color= 'green' onClick={onClick} />
        </header>
    )
}

export default Header
