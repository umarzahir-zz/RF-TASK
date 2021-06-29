import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Step1() {
    return (
            <Container>
                <Row>
                    <Col span="12">
                        <h1>CREATE A JOB POST</h1>
                    </Col>
                    <Col className="form-instruction">
                        <p className="form-instruction">Complete the following steps to create an efective job post</p>
                        <hr></hr>
                    </Col>
                </Row>
            </Container>
    )
}
