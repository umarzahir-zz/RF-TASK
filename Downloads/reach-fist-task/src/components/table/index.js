import React,{useState,useEffect} from 'react'
import {Table} from "react-bootstrap"
import { useSelector } from 'react-redux'

export default function Index() {
  
  const {jobs} = useSelector((state) => state.form)
  const [myJobs , setMyJobs] = useState([])
  useEffect(() => {
   setMyJobs(jobs)
   localStorage.clear()
  }, [])
  

  const handleChange = (event) => {
    const {value} = event.target
    if(!value) {
    return  setMyJobs(jobs)
    } 
    const filterJobs = myJobs && myJobs?.filter((job) => {
     console.log(job)
      return  job?.lookingFor?.includes(value)
    })
    setMyJobs(filterJobs)
  }
 
    return (
      <>
      <input type="text" className="w-100 border rounded mt-5 p-3" placeholder="Search job" onChange={handleChange} /> 
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Experience</th>
            <th>Education</th>
          </tr>
        </thead>
        <tbody>
          {myJobs && myJobs.map((job) => {
            return(
              <tr>
              <td>{job.lookingFor}</td>
              <td>{job.experience}</td>
              <td>{job.education}</td>
            </tr>
            )
          })}
        </tbody>
      </Table>

      </>
    )
}
