import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,  Carousel} from 'react-bootstrap';
import PricingCards from "../components/Cards.tsx";
import useMediaQuery from "../hooks/useMediaQuery.ts";

export const Main = () => {
    const {isSmall} = useMediaQuery();
    return (
        <>
            <Container className="d-flex pb-3 " style={{
                width: '100%'
            }}>
                <Row className="w-100">
                    <Col className="w-100">
                        <Carousel autoCapitalize={'off'}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 object-fit-cover"
                                    src="https://s3-alpha-sig.figma.com/img/7deb/0a8c/d0b489319733859d49042126f517b890?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ofneodIvH-Q4cINTag~RpLE2GnAvV9gN5XjDPSeMQPS~kjhe16S21pzwuM5m2uhD1eqSkUEefSlKT4dVmFGVpmThw6znvjL8nKy66VRXJbluTW69QoTqw57sGxDKySiZtWjNxlvZEtuoiXCkrNd~M2ANqral8JI4J6QfPhquG4vnEVLWyruY-HppirStbP8DRSlhxHyEXFHlR5T9vHPGff1XFJWSiLnf1rKrJnA6UtV39xiEsxomE2DVM8wQHoYLUw~qWkBaKBEBzqCeNn-UTNABgMmG3E15Ssh3GQPedpj3lgoy9L3VuiqHiXCDFMcb2TNSmXXvgeYm5qPN6BtKCw__"
                                    alt="First slide"
                                />
                                <Carousel.Caption  >
                                    <h3 className={'text-start'} style={{ fontSize: isSmall ? '14px' : '18px' }}>GymFlow</h3>
                                    <p className={'text-start'} style={{ fontSize: isSmall ? '8px' : '18px' }}>GymFlow
                                        Автоматизуй роботу свого фітнес-клубу з GymFlow!
                                        Легко керуй абонементами, розкладами тренувань та взаємодій з клієнтами. Наше рішення створене для того, щоб ти міг зосередитися на розвитку бізнесу, поки система робить усе інше. Проста у використанні платформа
                                        для максимального комфорту й ефективності твоїх тренувальних процесів.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 object-fit-cover"
                                    src="https://s3-alpha-sig.figma.com/img/7deb/0a8c/d0b489319733859d49042126f517b890?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ofneodIvH-Q4cINTag~RpLE2GnAvV9gN5XjDPSeMQPS~kjhe16S21pzwuM5m2uhD1eqSkUEefSlKT4dVmFGVpmThw6znvjL8nKy66VRXJbluTW69QoTqw57sGxDKySiZtWjNxlvZEtuoiXCkrNd~M2ANqral8JI4J6QfPhquG4vnEVLWyruY-HppirStbP8DRSlhxHyEXFHlR5T9vHPGff1XFJWSiLnf1rKrJnA6UtV39xiEsxomE2DVM8wQHoYLUw~qWkBaKBEBzqCeNn-UTNABgMmG3E15Ssh3GQPedpj3lgoy9L3VuiqHiXCDFMcb2TNSmXXvgeYm5qPN6BtKCw__"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3 className={'text-start'} style={{ fontSize: isSmall ? '14px' : '18px' }}>GymFlow</h3>
                                    <p className={'text-start'} style={{ fontSize: isSmall ? '8px' : '18px' }}>GymFlow
                                        Автоматизуй роботу свого фітнес-клубу з GymFlow!
                                        Легко керуй абонементами, розкладами тренувань та взаємодій з клієнтами. Наше
                                        рішення створене для того, щоб ти міг зосередитися на розвитку бізнесу, поки система
                                        робить усе інше. Проста у використанні платформа
                                        для максимального комфорту й ефективності твоїх тренувальних процесів.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 object-fit-cover"
                                    src="https://s3-alpha-sig.figma.com/img/7deb/0a8c/d0b489319733859d49042126f517b890?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ofneodIvH-Q4cINTag~RpLE2GnAvV9gN5XjDPSeMQPS~kjhe16S21pzwuM5m2uhD1eqSkUEefSlKT4dVmFGVpmThw6znvjL8nKy66VRXJbluTW69QoTqw57sGxDKySiZtWjNxlvZEtuoiXCkrNd~M2ANqral8JI4J6QfPhquG4vnEVLWyruY-HppirStbP8DRSlhxHyEXFHlR5T9vHPGff1XFJWSiLnf1rKrJnA6UtV39xiEsxomE2DVM8wQHoYLUw~qWkBaKBEBzqCeNn-UTNABgMmG3E15Ssh3GQPedpj3lgoy9L3VuiqHiXCDFMcb2TNSmXXvgeYm5qPN6BtKCw__"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3 className={'text-start'} style={{ fontSize: isSmall ? '14px' : '18px' }}>GymFlow</h3>
                                    <p className={'text-start'} style={{ fontSize: isSmall ? '8px' : '18px' }}>GymFlow
                                        Автоматизуй роботу свого фітнес-клубу з GymFlow!
                                        Легко керуй абонементами, розкладами тренувань та взаємодій з клієнтами. Наше
                                        рішення створене для того, щоб ти міг зосередитися на розвитку бізнесу, поки система
                                        робить усе інше. Проста у використанні платформа
                                        для максимального комфорту й ефективності твоїх тренувальних процесів.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <PricingCards/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
