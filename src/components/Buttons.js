import PropTypes from 'prop-types'


const Buttons = ({color, text, onClick}) => {

    return (
        <button className='btn' style={{ backgroundColor: color}} onClick={onClick}>{text}</button>
    )
}

Buttons.defaultProps = {
    color : 'steelblue',
}

Buttons.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func
}

export default Buttons
