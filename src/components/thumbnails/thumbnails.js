import React, {Component} from 'react'
import "./thumbnails.css"
import Thumbnail from '../thumbnail/thumbnail'
class Thumbnails extends Component {

    render(){
        let Thumbnails = []
        for(var i=0; i<30; i++){
            Thumbnails.push(<Thumbnail></Thumbnail>)
        }
        return (
            <div className="thumbnails_wrapper" onClick={this.props.onClick}>
                {Thumbnails}
             </div>
        )
    }
}

export default Thumbnails

