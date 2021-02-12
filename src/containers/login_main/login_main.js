import React, {Component} from 'react'
import "./login_main.scss"
import Input from '../../components/UI/Input/input';
import Footer from '../../components/footer/footer'
import Navbar from '../../components/NavigationBar/navigationbar'

class LoginMain extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: '이메일'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: '비밀 번호'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true
    }
    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
    }


    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );
    }

    render(){
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }
        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );
        return (
            <div className ="login_main_wrapper">
                <Navbar></Navbar>
                <div className="login_main_form">
                    <div className="form_wrapper">
                        <div className="login">로그인</div>
                        <div className="kakao_login"><img src={'/assets/login/kakao_transperent.png'}></img>카카오톡으로 시작하기</div>
                        <div className="border"></div>
                        <form onSubmit={this.submitHandler}>
                            {form}
                            <button className="button login_button">로그인</button>
                        </form>
                        <div className="ask_member">아직 트레바리 회원이 아니신가요?</div>
                        <div className="go_to_signup">트레바리 가입하기</div>
                        <div className="border"></div>
                        <div className="find_email_password">
                            <div className="find_email">이메일 찾기</div>
                            <div className="between">|</div>
                            <div className="find_password">비밀번호 찾기</div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default LoginMain