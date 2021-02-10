import React, {Component} from 'react'
import "./post_detail.css"
import Navbar from '../../components/NavigationBar/navigationbar'
import {Accordion, Card, Button} from 'react-bootstrap'
import RightPayment from '../../components/right_payment/right_payment'

class Post_detail extends Component {

    render(){
        return <div className="post_detail_wrapper">
            <Navbar></Navbar>
            <div className="post_detail_main_payment_wrapper">
            <RightPayment/>
            <div className="post_detail_main">
                <h1 className="post_detail_title">[투자하는 마음]은 개인투자자로서 주식 시장에 뛰어든 우리들을 위한 클럽입니다.</h1>
                <p className="post_detail_detail">[투자하는 마음]에서 우리는 직접 투자해본 경험을 나눕니다. 왜 이 종목을 선택했는지, 어떤 예측이 어떻게 빗나갔는지, 자료는 어디서 수집했는지, 그래서 수익률은 어떤지 등등. 케이스 스터디보다 실전적인 공부는 없습니다. <br/> <br/>
                    보다 훌륭한 투자자가 되기 위해, 우리는 1) 자본시장의 흐름, 2) 산업과 기업의 동향, 3) 투자자의 심리에 대해 공부합니다. 장기적이고 건강한 수익을 위해 필요한 역량을 기르기 위해서입니다. [투자하는 마음]이 지향하는 것은 투기가 아니라 투자입니다.<br/> <br/>
                    트레바리는 실제로 현업에서 오랫동안 실력을 검증한 전문가와 함께 이 클럽을 준비했습니다. 책과 토론 주제가 미리 준비되어 있으니, 필요한 것은 오직 호기심과 의욕뿐입니다.<br/> <br/>
                    어차피 해야 할 투자, 그러나 별 지식과 생각 없이 마냥 운에 맡기고 싶지는 않은 분들이 함께하시면 좋겠습니다.<br/><br/>
                    ✔️ [투자하는 마음]은...종목 추천을 하는 커뮤니티가 아닙니다. 서로의 투자 아이디어와 의사결정의 원칙을 가다듬는 지혜를 익히는 커뮤니티입니다.<br/>
                    ‘이렇게 하면 된다’ 같은 이야기는 최대한 지양합니다. '제 생각에 이럴 수도 있고 저럴 수도 있을 것 같아요. 당신이 보기에는 어떠세요?' 같은 이야기를 권장합니다.<br/>
                    모임의 커리큘럼은 홍진채 님(라쿤자산운용 대표, 트레바리 [돈돈] 클럽장)과 함께 준비했습니다. 클럽장님 없이 멤버분들이 함께 만들어가는 클럽으로, 알찬 책과 발제를 통해 훌륭한 투자자로서의 역량을 키워봅시다.<br/>
                </p>
                <h1 className="post_detail_subtitle">온라인 클럽 후기를 확인하세요!</h1>
                <img src="/assets/post_detail/review.png"></img> 
                <h1 className="post_detail_subtitle">모임 안내</h1>
                <div className="guide_wrapper">  
                    <img alt="spot" className="guide_image" src="/assets/post_detail/spot.png"></img>
                    <p>온라인 ZOOM으로 진행됩니다.</p>
                </div>
                <div className="guide_wrapper">  
                    <img alt="user" className="guide_image" src="/assets/post_detail/user.png"></img>
                    <p>멤버십 4개월 190,000원 (월 47500원)</p>
                </div>
                <div className="guide_wrapper">  
                    <img alt="card" className="guide_image" src="/assets/post_detail/card.png"></img>
                    <p>매달 네번째 토요일, 10시 00분 ~ 13시 00분</p>
                </div>
                <div className="guide_wrapper">  
                    <img alt="users" className="guide_image" src="/assets/post_detail/users.png"></img>
                    <p>최소인원 8명, 최대 인원 15명</p>
                </div>
                <div className="guide_wrapper">  
                    <img alt="bulb" className="guide_image" src="/assets/post_detail/bulb.png"></img>
                    <p>공지사항</p>
                </div>
                <h1 className="post_detail_subtitle">FAQ</h1>
                <Accordion className="FAQ_accordion">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="FAQ_header"> 
                            1.트레바리 멤버가 되면 어떤 혜택이 있나요?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>독서모임 월 1회, 총 4번의 트레바리 독서모임에 참여하게 됩니다. (일부 6회) 이벤트 강연부터 체험까지 지적이고 사랑스러운 이벤트에 참여하실 수 있어요. 아지트 트레바리 멤버가 모여 읽고, 쓰고, 대화하고 놀 수 있는 공간이 제공돼요.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="FAQ_header"> 
                            2.독후감을 제출하지 않으면 정말 모임에 참가 할수 없나요?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>독서모임 월 1회, 총 4번의 트레바리 독서모임에 참여하게 됩니다. (일부 6회) 이벤트 강연부터 체험까지 지적이고 사랑스러운 이벤트에 참여하실 수 있어요. 아지트 트레바리 멤버가 모여 읽고, 쓰고, 대화하고 놀 수 있는 공간이 제공돼요.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3" className="FAQ_header"> 
                            3.모임 진행 순서는 어떻게 되나요?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>독서모임 월 1회, 총 4번의 트레바리 독서모임에 참여하게 됩니다. (일부 6회) 이벤트 강연부터 체험까지 지적이고 사랑스러운 이벤트에 참여하실 수 있어요. 아지트 트레바리 멤버가 모여 읽고, 쓰고, 대화하고 놀 수 있는 공간이 제공돼요.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4" className="FAQ_header"> 
                            4.어떤 이야기를 나누나요?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                        <Card.Body>독서모임 월 1회, 총 4번의 트레바리 독서모임에 참여하게 됩니다. (일부 6회) 이벤트 강연부터 체험까지 지적이고 사랑스러운 이벤트에 참여하실 수 있어요. 아지트 트레바리 멤버가 모여 읽고, 쓰고, 대화하고 놀 수 있는 공간이 제공돼요.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <button className="more_button">더보기</button>
                </div>
            </div>
            <div className="bottom_footer"></div> 
        </div> 
    }
}

export default Post_detail

 