import React from 'react';
import {Col, Row} from 'reactstrap'
import UsersComponent from '../../components/UsersComponent';
import { connect } from 'react-redux';

class UsersPage extends React.Component {
    render() {
        return (
            <Row>
                <Col md={{ size: 6, offset: 3 }}>
                    <UsersComponent />
                </Col>
            </Row>
        )
    }
}

export default connect()(UsersPage)