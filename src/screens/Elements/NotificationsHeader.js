import React from 'react'
import {
    Col,
    Row,
} from 'reactstrap'

const NotificationHeader = () => (
    <Row className="mx-3 bg-secondary text-white">
        <Col className="text-center border-right border-white">
            Title
        </Col>
        <Col className="text-center">
            Text
        </Col>
    </Row>
)

export default NotificationHeader