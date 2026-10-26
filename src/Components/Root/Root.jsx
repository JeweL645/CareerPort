import { Outlet } from "react-router"
import Footer from "../Footer/Footer";


const Root = () => {
  return (
    <div>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root;