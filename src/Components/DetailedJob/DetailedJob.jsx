import { useLoaderData, useParams } from "react-router";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";


const DetailedJob = () => {

    const jobs = useLoaderData();

    const { id } = useParams();

    const idInt = parseInt(id);

    const job = jobs.find(job => job.id === idInt)
    console.log(job);
    return (
        <div>

            <h1 className="text-3xl text-center my-5">Job Details</h1>
            <div className="grid gap-4 md:grid-cols-4 ">
                <div className="md:col-span-3 p-5">

                    {/* <h2 className="text-4xl">Details Coming Soon</h2> */}
                    <p className="py-5"><span className="text-2xl font-lg underline">Job Description:</span>{job.job_description}</p>

                    <p className="py-5"><span className="text-2xl font-lg underline">Job Responsibility:</span>{job.job_responsibility}</p>

                    <h3 className="text-2xl font-lg underline">Educational Requirements:</h3>
                    <p className="py-5">{job.educational_requirements}</p>

                    <h3 className="text-2xl font-lg underline">Experiences:</h3>
                    <p className="py-5">{job.experiences}</p>

                </div>
                <div className="bg-blue-900 p-3">
                    <h2 className="text-2xl text-center p-3">Job Details</h2>
                    <hr/>
                    <div className="py-3">
                        <h2 className="flex items-center "><AiOutlineDollarCircle className="text-xl"></AiOutlineDollarCircle>Salary: {job.salary}(per month)</h2>
                    </div>
                    <div className="py-3">
                        <h2 className="flex items-center"><BiTask className="text-xl"></BiTask>Title: {job.job_title}</h2>
                    </div>
                    <h2 className="text-2xl text-center py-3">Contact Information</h2>
                    <hr/>
                    <div className="py-3">
                        <h2 className="flex items-center"><FaPhoneAlt className="text-xl px-1"></FaPhoneAlt>Phone: {job.contact_information.phone}</h2>
                    </div>
                    <div className="">
                        <h2 className="flex items-center"><AiTwotoneMail className="text-xl px-1"></AiTwotoneMail>Email: {job.contact_information.email}</h2>
                    </div>
                    <div className="py-3">
                        <h2 className="flex items-center"><CiLocationOn className="text-6xl px-1"></CiLocationOn>Address: {job.contact_information.address}</h2>
                    </div>
                    <button className="btn btn-primary w-full mt-3">Appy Now</button>
                </div>
                
            </div>
        </div>
    )
}

export default DetailedJob;