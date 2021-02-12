import React, {Component} from 'react'
import "./footer.scss"

class Footer extends Component {
    render(){
        return <div className="footer">
            <div className="footer_buttons">
                <div>자주 묻는 질문</div>
                <div>문의하기</div>
                <div>블로그</div>
                <div>트레바리 채용</div>
                <div>파트너 모집</div>
            </div>
            <div className="footer_company_detail">
                <div className="company_name">주식회사 트레바리</div>
                <div className="company_detail">대표 윤수영 | 사업자 등록번호 326-86-01375</div>
                <div className="company_where">서울특별시 종로구 율곡로19길 12, 23층</div>
                <div className="company_policy">트레바리 운영정책</div>
            </div>
        </div>  
    }
}

export default Footer
