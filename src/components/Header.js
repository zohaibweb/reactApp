
import Buttons from './Buttons'

const Header = ({onAdd, showAdd}) => {

   
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Buttons text={showAdd ? 'close' : 'Add'} color= {showAdd ? 'red' : 'green'} onClick={onAdd} />
        </header>
    )
}

export default Header
