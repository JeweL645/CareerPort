import { IoLocation } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router";

const Card = ({ job }) => {

  const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;


  return (
    <div className="card bg-base-100 w-[500px] shadow-sm border p-7" >
      <figure>
        <img
          src={logo}
          alt="" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center">{job_title}</h2>
        <p>{company_name}</p>
        <div >
          <button className="px-5 py-2 text-lg font-bold border rounded-lg border-[#7E90FE]  hover:bg-[#5754E8] mr-4">{remote_or_onsite}</button>
          <button className="px-5 py-2 text-lg font-bold border rounded-lg border-[#7E90FE]  hover:bg-[#5754E8]">{job_type}</button>
        </div>
        <div className="flex justify-evenly" >
          <h2 className="flex"><IoLocation className="text-xl"></IoLocation>{location}</h2>
          <h2 className="flex"><AiOutlineDollarCircle className="text-xl"></AiOutlineDollarCircle>{salary}</h2>

        </div>
        <div>
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details
            </button>
          </Link>


        </div>
      </div>
    </div>
  )
}

export default Card;