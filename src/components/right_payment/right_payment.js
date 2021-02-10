import React from 'react'
import './right_payment.css'

const right_payment =()=>{
    return <div className="right_payment">
    <img className="post_detail_payment_image" src={'/assets/post_detail/right_post_detail_image.png'}></img>
    <div className="title">투자하는 마음-블루</div>
    <div>온라인(zoom) | 매달 네번째 토요일</div>
    <div>첫 모임일 2.27(토)</div>
    <div>월 57,500원</div>
        <div className="payment_buttons_wrapper"> 
            <div className="payment_heart_wrapper"><i className="far fa-heart"></i></div>
            <button className="payment_start_button">달라지는 4개월, 지금 시작</button>    
        </div> 
    </div>
}

export default right_payment

