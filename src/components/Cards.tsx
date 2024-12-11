import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

interface PricingCardProps {
    title: string;
    description: string[];
    price: string;
    buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, buttonText }) => {
    return (
        <Card className="text-center mb-4 card-mainPage"
              style={{
                  backgroundColor: '#444444',
                  border: '2px solid white',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%' // Ensures the card fills the column's height
              }}>
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-success">{title}</Card.Title>
                <ul className="list-unstyled">
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="mt-4">
                    <h3>{price} грн/міс</h3>
                </div>
                <Button variant="success" className="mt-3">
                    {buttonText}
                </Button>
            </Card.Body>
        </Card>
    );
};

const PricingCards: React.FC = () => {
    return (
        <Row className="justify-content-center align-items-stretch">
            <Col md={4} className="d-flex mb-4">
                <PricingCard
                    title="Стандарт"
                    description={[
                        'Безлімітний доступ до тренажерної зони',
                        'Гнучкий графік відвідувань',
                    ]}
                    price="800"
                    buttonText="Купити"
                />
            </Col>
            <Col md={4} className="d-flex mb-4">
                <PricingCard
                    title="Престиж"
                    description={[
                        'Безлімітний доступ до тренажерної зони',
                        'Участь у групових тренуваннях',
                        'Персональна консультація тренера',
                    ]}
                    price="1200"
                    buttonText="Купити"
                />
            </Col>
            <Col md={4} className="d-flex mb-4">
                <PricingCard
                    title="VIP"
                    description={[
                        'Безкоштовні персональні тренування (2 рази на місяць)',
                        'Доступ до VIP-зон клубу та спеціальних заходів',
                    ]}
                    price="1800"
                    buttonText="Купити"
                />
            </Col>
        </Row>
    );
};

export default PricingCards;
