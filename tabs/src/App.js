import React, {useState, useEffect} from 'react';
import {BsChevronDoubleRight} from 'react-icons/bs'
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async() =>{
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect (()=>{
    fetchJobs()
  }, [])

  if(loading) {
    return (
      <section className="section loading">
        <h1>Loading ....</h1>
      </section>
    )
  }
  // why put this in this position!!
  // because code runs like
  // 1. all except useEffect so this timw, loading page appearing. we can not place the line below in front of if(loading...), jobs is empty array
  // 2. then it runs useEffect => runs fetchJobs() => jobs is a given array
  const {company, dates, duties, title} = jobs[value]
  return (
      <section className='section'>
        <div className = 'title'>
          <h2>Expierence</h2>
          <div className = "underline" ></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {
              jobs.map((job, index)=>{
                // note: className of btn
                return <button key={job.id} onClick={()=> setValue(index)} className={`${index === value ? 'job-btn active-btn': 'job-btn'}`}>
                          {job.company}
                       </button>
              })
            }
          </div>

          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, index) =>{
                return <div key = {index} className='job-desc'>
                <BsChevronDoubleRight className='job-icon'/>
                <p>{duty}</p>
                </div>
            })}
          </article>
        </div>
      </section>
    
  );
}

export default App;
