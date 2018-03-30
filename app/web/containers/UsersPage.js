import React from 'react';
import {Col, Row} from 'react-bootstrap'
import UsersComponent from '../../components/UsersComponent';
import { connect } from 'react-redux';

class UsersPage extends React.Component {
    render() {
        return (
            <Row>
                <Col md={6} mdOffset={3}>
                    <UsersComponent />
                </Col>
            </Row>
        )
    }
}

export default connect()(UsersPage)