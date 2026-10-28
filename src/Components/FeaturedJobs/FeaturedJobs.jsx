import { useEffect, useState } from "react";
import Card from "../Card/Card";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [jobsLength, setJobsLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [])

    return (
        <div className=' text-center'>
            <h2>Total Data: {jobs.length}</h2>
            <h2 className="text-6xl">Featured Jobs Part</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-8">{
                jobs.slice(0, jobsLength).map(job => <Card key={job.id} job={job}></Card>)
            }
            </div>
            <div className={ jobs.length === jobsLength && 'hidden'}>
                <button className="my-5 px-5 py-2 text-lg font-bold border rounded-lg border-[#7E90FE]  hover:bg-[#5754E8] mr-4" onClick={ () => setJobsLength(jobs.length)}>Show All Jobs</button>
            </div>
        </div>
    )
}

export default FeaturedJobs;