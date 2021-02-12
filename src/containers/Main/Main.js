import React, {Component} from 'react'
import Navbar from '../../components/NavigationBar/navigationbar'
import SlideShow from '../../components/slideshow/slideshow'
import './main.css'
import Thumbnails from '../../components/thumbnails/thumbnails'
import Footer from '../../components/footer/footer'
class Main extends Component {

    thumbnailHandler=()=>{
        console.log("clicked")
        this.props.history.push({
            pathname: '/postdetail',
        });
    }

    render (){
        return <div>
            <Navbar></Navbar>
            <div className="slideshow_wrapper">
                <SlideShow></SlideShow>
            </div>
            <Thumbnails onClick={this.thumbnailHandler}></Thumbnails>
            <Footer/>
        </div>
    }
}

export default Main