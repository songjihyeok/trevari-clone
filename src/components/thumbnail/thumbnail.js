import React, {Component} from 'react'
import "./thumbnail.css"

class Thumbnail extends Component {

    render(){
        return <div className="thumbnail_wrapper">
            <div className="image_wrapper">
                <img className="thumbnail_image"src="/assets/thumbnails/th-1.png"></img>
                <img className="tag" src="/assets/marks/bookmark.png"></img>
            </div>
            <div className="thumbnail_title"> 
                투자하는 마음-레드
            </div>
            <div className="thumbnail_description"> 
                어차피 해야할 투자, 마냥 운에 맡기고 싶지 않다면?
            </div>
            <div  className="thumbnail_detail">
                온라인 | 첫모임일 2/27 (토)
            </div>
        </div>
    }
}

export default Thumbnail

