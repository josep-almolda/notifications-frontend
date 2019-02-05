import React from 'react'
import {
    Col,
    Row,
} from 'reactstrap'

const NotificationRow = ({ title, text }) => (
    <Row className="mx-3 pl-3">
        <Col>
            {title}
        </Col>
        <Col>
            {text}
        </Col>
    </Row>
)

export default NotificationRow