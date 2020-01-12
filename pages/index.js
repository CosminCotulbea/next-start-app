import React from 'react';
import Layout from "../components/layouts/layout";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import userActions from '../state/actions/user';


const Home = (props) => {
    console.log(props);
    return (
        <Layout title="Homepage">
            <h1 className={'title'}>Welcome to Next.Js!</h1>
        </Layout>
    );
};

Home.getInitialProps = async () => {
    // await new Promise(resolve => {
    //     setTimeout(resolve, 3000)
    // });
    // return {}
};

function mapStateToProps(state) {
    return { user: state.user}
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({...userActions}, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
