import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./stepper-form.module.css"

export default function FirstStep() {
    return (
        <Container className="mt-5 px-0">
            <Row>
                <Col xs={6}>
                <Autocomplete
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    // style={{ width: 300 }}
                    renderInput={(params) =>   <TextField {...params}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                        id="outlined-required"
                        label="Looking For"
                        defaultValue="Hello World"
                        variant="outlined"
                    />}
                    />
                </Col>
                <Col xs={6}>
                <Autocomplete
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    // style={{ width: 300 }}
                    renderInput={(params) =>   <TextField {...params}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                        id="outlined-required"
                        label="Experience"
                        defaultValue="Hello World"
                        variant="outlined"
                    />}
                    />
                </Col>
                <Col xs={6} className="mt-5">
                <Autocomplete
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    // style={{ width: 300 }}
                    renderInput={(params) =>   <TextField {...params}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                        id="outlined-required"
                        label="Education"
                        defaultValue="Hello World"
                        variant="outlined"
                    />}
                    />
                </Col>
                <Col xs={12} className="mt-5">
                <Autocomplete
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    // style={{ width: 300 }}
                    renderInput={(params) =>   <TextField {...params}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                        id="outlined-required"
                        label="Skills"
                        defaultValue="Hello World"
                        variant="outlined"
                    />}
                    />
                </Col>
                <Col xs={12} className="mt-5">
                <TextField
                    className={styles.descripition}
                    required
                    multiline
                    rows={5}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    id="outlined-required"
                    label="Descripition"
                    defaultValue="Hello World"
                    variant="outlined"
                    />
                </Col>

 {/* file upload button */}
                <Col>
                    <p className={styles.fileUploadLabel}>And if there is any inspiration</p>
                    <button type="file" className={styles.fileUploadBtn}>GO TO SELECT TEMPLATE</button>
                </Col>
            </Row>
        </Container>
    )
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
]
