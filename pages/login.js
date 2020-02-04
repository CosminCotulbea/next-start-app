import React, {useState, useEffect} from 'react';
import Layout from "../components/layouts/layout";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import userActions from '../state/actions/user';
import {
    faKey,
    faAt
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookSquare,
    faGooglePlusSquare,
    faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    Button,
    FormGroup,
    Input,
    Label,
    Container,
    Row,
    Form,
    Card,
    CardHeader,
    CardBody,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    CardFooter
} from 'reactstrap';
import '../resources/styles/auth/style.scss';
import {bodyBackground} from '../resources/styles/styles';

function Login(props) {
    const [userState, setUserState] = useState({
        email: '',
        password: '',
        remember: false
    });

    useEffect(function () {
        console.log(props.user);
    }, [props.user]);

    const _onChange = e => {
        const {name, value} = e.target;

        setUserState({
            ...userState,
            [name]: value
        });
    };

    const _remember = e => {
        const {name, checked} = e.target;

        setUserState({
            ...userState,
            [name]: checked
        });
    };

    const _login = async (e) => {
        const {loginUser} = props.actions;
        const {user} = props;

        await loginUser(userState);
    };

    let jsxStyle = bodyBackground('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');
    return (
        <Layout title="Login">
            <style jsx>{jsxStyle}</style>
            <Container className={'auth-container'}>
                <Card>
                    <CardHeader>
                        <h3>Sign In</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <FontAwesomeIcon icon={faFacebookSquare}/>
                            <FontAwesomeIcon icon={faGooglePlusSquare}/>
                            <FontAwesomeIcon icon={faTwitterSquare}/>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <InputGroup className={'form-group'}>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon={faAt}/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="email" name="email" value={userState.email} placeholder="Email"
                                       onChange={_onChange}/>
                            </InputGroup>
                            <InputGroup className={'form-group'}>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon={faKey}/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="password" name="password" value={userState.password}
                                       placeholder="Password" onChange={_onChange}/>
                            </InputGroup>
                            <InputGroup className={'custom-checkbox'}>
                                <Label>Remember Me
                                    <Input name="remember" type="checkbox" checked={userState.remember}
                                           onChange={_remember}/>
                                    <span className="checkmark"/>
                                </Label>
                            </InputGroup>
                            <FormGroup className="form-group">
                                <Button onClick={_login} className="float-right submit-btn">Login</Button>
                            </FormGroup>
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <div className="d-flex justify-content-center">
                            Don't have an account?<a href="#">Sign Up</a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </CardFooter>
                </Card>
            </Container>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {user: state.user};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({...userActions}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
