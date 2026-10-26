import { Link } from "react-router";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oopss!</h2>
            <Link to="/"><button>Go Back to Home</button></Link>
        </div>
    )
}

export default ErrorPage;