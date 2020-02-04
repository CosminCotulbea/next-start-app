import React from 'react';
import Layout from "../components/layouts/layout";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import userActions from '../state/actions/user';
import {
    Container,
} from "reactstrap";


function Home(props) {
    return (
        <Layout title="Homepage">
            <Container fluid={true} className={'home-page'}>
                <h1 className={'title'}>Homepage!</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
