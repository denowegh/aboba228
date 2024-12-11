import React, {useEffect} from "react";
import { mockPlans } from "./mockData";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {URL_API} from "../constants.ts";
import {TrainingPlan} from "../types/main.ts";

export const Membership: React.FC = () => {


    useEffect(() => {
        (async ()=> {
            const res = await fetch(`https://b8cf-178-133-1-89.ngrok-free.app/api/memberships`, {
                method: "GET",
            });

            console.log(res);
        })()
    }, []);

    return (
        <Container className="mt-5">
            <h1 className="text-center text-light mb-4">Абонементи</h1>
            <Row>
                {mockPlans.map((plan) => (
                    <Col key={plan.id} md={4} sm={6} className="mb-4">
                        <Card className="text-light bg-dark border-success h-100 rounded">
                            <Card.Body>
                                <Card.Title className="text-success">{plan.title}</Card.Title>
                                <Card.Text>{plan.description}</Card.Text>
                                <ul>
                                    {plan.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <h4 className="mt-3">{plan.price}</h4>
                                <Button variant="success" className="w-100 mt-2">
                                    Купити
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

