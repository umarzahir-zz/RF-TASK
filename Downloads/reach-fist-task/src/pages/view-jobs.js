import React from 'react'
import JobTable from "../components/table"
import { Container, Row, Col } from 'react-bootstrap'

export default function ViewJobs() {
    
    return (
        <Container>
            <Row>
                <Col>
                    <JobTable/>
                </Col>
            </Row>
        </Container>
    )
}
