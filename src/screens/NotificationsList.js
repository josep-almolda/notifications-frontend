import React, { PureComponent } from 'react'
import {
    Col,
    Row,
    Container,
    FormGroup,
    Label,
    Button,
    Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { Header } from '../elements'
import { getAllNotifications } from '../actions'

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

class NotificationsList extends PureComponent {

    state = {
        userId: 0
    }

    onChangeUser = event => {
        const selectedValue = event.target.value
        this.setState(prevState => (
            {
                ...prevState,
                userId: selectedValue
            }))
    }

    getAllNotifications = () => this.props.getAllNotifications()

    render() {
        return (
            <Container fluid className="h-100 p-0" >
                <Header />
                <Row>
                    <Col className="">
                        <Row>
                            <Col className="pl-5 pt-3">
                                <FormGroup>
                                    <Label for="exampleSelect">Select a user</Label>
                                    <Input type="select"
                                        name="users"
                                        id="usersSelect"
                                        onChange={this.onChangeUser}>
                                        <option value="0">All</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col className="pt-5">
                                <Button onClick={this.getAllNotifications}>
                                    Refresh
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <NotificationHeader />
                {this.props.notifications.map(x => (
                    <NotificationRow title={x.title} text={x.text} />
                ))
                }
            </Container >
        )
    }
}

const mapStateToProps = ({ notifications }) => ({
    notifications: notifications.notificationsList
})

export default connect(mapStateToProps, { getAllNotifications })(NotificationsList)