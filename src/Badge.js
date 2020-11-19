
function Badge(props) {

    let color = props.color;

    return (
        <span className={`Badge ${color}`}>
            {typeof(color) == 'undefined' ? 'no-color' : `color : ${color}`}
        </span>
    )
}

export default Badge