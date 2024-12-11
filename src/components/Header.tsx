import './styles.css';
import {Button, Col, Container, Modal, Nav, Row} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import CookieManager from "../utils/cookieManager.ts";
import {customEvent} from "../utils/customEvent.ts";
import useMediaQuery from "../hooks/useMediaQuery.ts";
import {useState} from "react";
import {useDuelStore} from "../stores/useUserStore.tsx";


export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const {isLoggedIn} = useDuelStore();
    const {isSmall} = useMediaQuery();

    const routes: {
        title: string;
        link: string;
    }[] = [
        {
            link: '/',
            title:'Головна'
        },
    ]

    if (isLoggedIn)
        routes.push(...[
            {
                link: '/membership',
                title:'Абонементи'
            },
            {
                link: '/schedule',
                title:'Розклад'
            }]);

    return (
        <header className={'header-main'} style={{
            padding: '0 24px'
        }}>
            <h1 className={'logo-header'} onClick={()=> {
                if(isSmall) {
                    setIsOpen(prev=> !prev)
                }else {
                    navigate('/');
                }
            }}>GymFlow</h1>

            <Modal show={isOpen} onHide={()=> setIsOpen(false)}>
            <Modal.Body>
                <Container>
                    <Row>
                        <Nav activeKey={location.pathname} className={'align-items-center justify-content-center'}>
                            {routes.map((e) => (
                                <Nav.Item key={e.link}>
                                    <Nav.Link
                                        as={Link}
                                        to={e.link}
                                        eventKey={e.link}
                                        active={location.pathname === e.link}
                                        className={`${location.pathname === e.link ? 'active-link' : ''}`}
                                    >
                                        {e.title}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </Row>
                    <Row>
                        {isLoggedIn ? (
                            <Button variant="danger" onClick={() => {
                                CookieManager.removeItem('isLoggedIn');
                                customEvent.emit('changeCookie');
                                navigate('/');
                            }}>
                                Logout
                            </Button>
                        ) : (
                            <Container>
                                <Row className="align-items-center">
                                    <Col className={'d-flex gap-4'}>
                                        <Button variant="primary" onClick={() => {
                                            navigate('/signIn');
                                        }}>
                                            Sign In
                                        </Button>
                                        <Button variant="secondary" onClick={() => {
                                            navigate('/signUp');
                                        }}>
                                            Sign Up
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        )}
                    </Row>
                </Container>
            </Modal.Body>
            </Modal>
            {!isSmall && <Container>
                <Row className="align-items-center">
                    <Nav activeKey={location.pathname} className={'align-items-center justify-content-center'}>
                        {routes.map((e) => (
                            <Nav.Item key={e.link}>
                                <Nav.Link
                                    as={Link}
                                    to={e.link}
                                    eventKey={e.link}
                                    active={location.pathname === e.link}
                                    className={`${location.pathname === e.link ? 'active-link' : ''}`}
                                >
                                    {e.title}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Row>
            </Container>}
            <div>{isLoggedIn ? (
                <Button variant="danger" onClick={()=> {
                     CookieManager.removeItem('isLoggedIn');
                     customEvent.emit('changeCookie');
                    navigate('/');
                }}>Logout</Button>
            ) : (

                <Container>
                    <Row className="align-items-center">
                        <Col className={'d-flex gap-4'}>
                            <Button variant="primary" onClick={()=> {
                                navigate('/signIn');
                            }}>Sign In</Button>
                            <Button variant="secondary" onClick={()=> {
                                navigate('/signUp');
                            }}>Sign Up</Button>
                        </Col>
                    </Row>
                </Container>
            )}</div>
        </header>
    )
}
