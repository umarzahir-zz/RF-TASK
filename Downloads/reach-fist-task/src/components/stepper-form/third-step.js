import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./stepper-form.module.css"

export default function ThirdStep() {
    const [selectedDays, setSelectedDays] = useState([])
    const [selectedTimes, setSelectedTimes] = useState([])

   const handleDays = (event) => {
       let temp;
       if(selectedDays){
           console.log(selectedDays, event.target.id)
      const found = selectedDays.findIndex(id => id === event.target.id)
           if(found !== -1){
               temp =[ ...selectedDays];
                temp.splice(found,1)
              return setSelectedDays(temp)
           }
       }
       const mytemp = [...selectedDays, event.target.id ]
       setSelectedDays(mytemp)
   }
   const daysClass = (id) => {
    const alredy = selectedDays.findIndex((item) => item === id)
    if(alredy !== -1){
        return styles.daySelect
    }
    return styles.day
}
   const handleTimes = (event) => {
    let temp;
    if(selectedTimes){
        console.log(selectedTimes, event.target.id)
   const found = selectedTimes.findIndex(id => id === event.target.id)
        if(found !== -1){
            temp =[ ...selectedTimes];
             temp.splice(found,1)
           return setSelectedTimes(temp)
        }
    }
    const mytemp = [...selectedTimes, event.target.id ]
    setSelectedTimes(mytemp)
}
   
   const daysTimeClass = (id) => {
    const alredy = selectedTimes.findIndex((item) => item === id)
    if(alredy !== -1){
        return styles.timeDaySelect
    }
    return styles.timeDay
}
    return (
        <Container>
            <Row>
                <Col><div class={daysClass("1")}  id="1" onClick={handleDays}>  M    </div></Col>
                <Col><div class={daysClass("2")}  id="2" onClick={handleDays}>  T    </div></Col>
                <Col><div class={daysClass("3")}  id="3" onClick={handleDays}>  W    </div></Col>
                <Col><div class={daysClass("4")}  id="4" onClick={handleDays}>  T    </div></Col>
                <Col><div class={daysClass("5")}  id="5" onClick={handleDays}>  F    </div></Col>
                <Col><div class={daysClass("6")}  id="6" onClick={handleDays}>  S    </div></Col>
                <Col><div class={daysClass("7")}  id="7" onClick={handleDays}>  S    </div></Col>
            </Row>
            <Row>
                <Col xs="6">
                    <div class={styles.timeCon}>
                        <div class={daysTimeClass("1")}id="1"  onClick={handleTimes}>Monday</div>
                        <div class={styles.time}>3:00 am to 5:00 am</div>
                    </div>
                </Col>
                <Col xs="6">
                    <div class={styles.timeCon}>
                        <div class={daysTimeClass("2")}id="2"  onClick={handleTimes}>Thuesday</div>
                        <div class={styles.time}>3:00 am to 5:00 am</div>
                    </div>
                </Col>
                <Col xs="6">
                    <div class={styles.timeCon}>
                        <div class={daysTimeClass("3")}id="3"  onClick={handleTimes}>Wednesday</div>
                        <div class={styles.time}>3:00 am to 5:00 am</div>
                    </div>
                </Col>
                <Col xs="6">
                    <div class={styles.timeCon}>
                        <div class={daysTimeClass("4")}id="4"  onClick={handleTimes}>Thursday</div>
                        <div class={styles.time}>3:00 am to 5:00 am</div>
                    </div>
                </Col>
                <Col xs="6">
                    <div class={styles.timeCon}>
                        <div class={daysTimeClass("5")} id="5"  onClick={handleTimes}>Friday</div>
                        <div class={styles.time}>3:00 am to 5:00 am</div>
                    </div>
                </Col>
                <Col xs="6">
                    <div class={styles.timeCon}>
                        <div class={daysTimeClass("6")} id="6" onClick={handleTimes}>Saturday</div>
                        <div class={styles.time}>3:00 am to 5:00 am</div>
                    </div>
                </Col>
                <Col xs="6">
                    <div class={styles.timeCon}>
                        <div class={daysTimeClass("7")} id="7"  onClick={handleTimes}>Sunday</div>
                        <div class={styles.time}>3:00 am to 5:00 am</div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
