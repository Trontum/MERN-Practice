import { Link, Outlet } from "react-router-dom"
export default function Support() {
  return (
    <div>
        <Link to="/support/support1">
        <button className="btn btn-primary">Click for Support1</button>
        </Link>
        <Link to="/support/support2">
        <button className="btn btn-secondary">Click for Support2</button>
        </Link>
        <Outlet/>
    </div>
  )
}
