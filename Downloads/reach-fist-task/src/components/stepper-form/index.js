import React, { useState } from 'react'
import styles from "./stepper-form.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import cn from 'classnames'
import FirstStep from './first-step';
import SecondStep from "./second-step";
import ThirdStep from './third-step';
import {useDispatch} from "react-redux"
import {addJob, addNotification} from "../../redux/formSlice" 
import {useHistory} from "react-router"

export default function Index(props) {

    const dispatch = useDispatch()
    const history = useHistory()

  const step1Class = () => {
        if(step === 1) return cn(styles.stepperDesignActive,  "d-flex align-items-center justify-content-center")
            return cn(styles.stepperDesignCompleted,  "d-flex align-items-center justify-content-center")
    }

  const step2Class = () => {
        if(step === 2) return cn(styles.stepperDesignActive,  "d-flex align-items-center justify-content-center")
        if(step > 2) return cn(styles.stepperDesignCompleted,  "d-flex align-items-center justify-content-center")
        return  cn(styles.stepperDesignInActive,  "d-flex align-items-center justify-content-center")
    }

    const step3Class = () => {
        if(step === 3) return cn(styles.stepperDesignCompleted,  "d-flex align-items-center justify-content-center")
        if(step < 3)   return cn(styles.stepperDesignInActive,  "d-flex align-items-center justify-content-center")
    }
    
    const renderStep = () => {
        if(step === 1) return <FirstStep/>
        if(step === 2) return <SecondStep/>
        if(step === 3)  return <ThirdStep/>
    }

    const handleNext = () => {
        if(step === 3){
         const step1   = JSON.parse(localStorage.getItem("step1Data"))
         const step2   = JSON.parse(localStorage.getItem("step2Data"))
         const days    = JSON.parse(localStorage.getItem("sday"))
         const dayTime = JSON.parse(localStorage.getItem("sdayTime"))
         if(days === null) return 
         if(dayTime === null) return 
         const step3 =  { days: [...days], daysTime:  [...dayTime] }
         const job = {step1: {...step1}, step2: {...step2},  step3}   
         dispatch(addJob(job))
         dispatch(addNotification(job))
         return history.push("/jobs/view")  
        } 
        setStep((previous) => previous + 1)
        
    }
    const handlePrevious = () => {
        if(step === 1) return
        setStep((previous) => previous - 1)
    }
 
    const [step, setStep] = useState(1);
    const [totalSteps, setTotalSteps] = useState(3);
    return (
             <Container fluid> 
                <Container className="py-4">
                    <Row>
                        <Col xs={12}>
                            <h1>CREATE A JOB POST</h1>
                        </Col>
                        <Col>
                            <p className={styles.formInstruction}>Complete the following steps to create an efective job post</p>
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
                <Container>
                    <Row>
                        <Col className={styles.stepsNumber}>Step {step} of {totalSteps}</Col>
                    </Row>

{/* stepper indicator and information */}
                    <Row className={cn(styles.stepperRow, "")}>
                        <Col xs={4}  className={step1Class()} >
                            <p className={styles.noPM}>Job Information</p>
                        </Col>
                        <Col xs={4} className={step2Class()}>
                            <p className={styles.noPM}>Candidate Type</p>
                        </Col>
                        <Col xs={4} className={step3Class()}>
                            <p className={styles.noPM}>Shift Timings</p>
                        </Col>
                    </Row>
                </Container>

{/* render steps component based on step count */}
                {renderStep()}

{/* next and previous button to inc and dec step count */}
                <Container className="px-0 my-5 pt-5">
                    <Row>
                        <Col> <button onClick={handlePrevious} className={styles.previous}>Previous</button> </Col>
                        <Col  className="d-flex justify-content-end"> <button onClick={handleNext} className={styles.next}>Next</button> </Col>
                    </Row>
                </Container>

            </Container>
    )
}
