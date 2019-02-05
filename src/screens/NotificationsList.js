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
import { getAllNotifications, getNotificationsByUser, getAllUsers } from '../actions'
import { NotificationsHeader, NotificationRow } from './Elements'

class NotificationsList extends PureComponent {

    state = {
        userId: "0",
    }

    componentDidMount() {
        this.props.getAllUsers()
    }

    onChangeUser = event => {
        const selectedValue = event.target.value
        this.setState(prevState => (
            {
                ...prevState,
                userId: selectedValue
            }))
    }

    getNotifications = () => {
        if (this.state.userId === "0") {
            this.props.getAllNotifications()
        }
        else {
            this.props.getNotificationsByUser(this.state.userId)
        }
    }

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
                                        {this.props.users.map(x => (
                                            <option value={x}>{x}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col className="pt-5">
                                <Button onClick={this.getNotifications}>
                                    Refresh
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <NotificationsHeader />
                {this.props.notifications && this.props.notifications.map(x => (
                    <NotificationRow title={x.title} text={x.text} />
                ))
                }
            </Container >
        )
    }
}

const mapStateToProps = ({ notifications }) => ({
    notifications: notifications.notificationsList,
    users: notifications.usersList,
})

export default connect(mapStateToProps,
    {
        getAllNotifications,
        getAllUsers,
        getNotificationsByUser
    })(NotificationsList)