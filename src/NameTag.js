import React from 'react'
import Badge from './Badge';
import './Badge.css';


// class NameTag extends React.Component {

//     render() {
//         let color = this.props.color;
//         let tag = this.props.tag;
//         let name = this.props.name;
//         return (
//             <div className='NameTag'>
//                 <img src='./logo192.png'/>
//                 {name} / {tag}
//             </div>
//         )
//     }
// }

function NameTag(props) {

    let color = props.color;
    let tag = props.tag;
    let name = props.name;
    let type = props.type;

    let color_stat = (<Badge color={color} />)

    let output = ''
    switch (type) {
        case 'inline':
        default:
            output = '{color_stat} / {name} / {tag}'
            break;
        case 'breakall':
            output = (
                <div>
                    <p>{color_stat}</p>
                    <p>{name}</p>
                    <p>{tag}</p>
                </div>
            )
            break;
    }

    let tag_app = (
        <div className='NameTag'>
            <img src='./logo192.png' />
            {output}
        </div>
    )

    return tag_app
}

export default NameTag