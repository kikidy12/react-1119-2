
function Badge(props) {

    let color = props.color;

    if (typeof(color) == "undefined")
        return (
            <span className="Badge no-color">
                No Color
            </span>
        );

    return (
        <span className={`Badge ${color}`}>
            Color: {color}
        </span>
    )
}

export default Badge