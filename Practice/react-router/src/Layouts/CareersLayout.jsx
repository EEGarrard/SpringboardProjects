import { Outlet } from "react-router-dom"

export default function CareersLayout() {
  return (
    <div>
        <h2>Careers</h2>
        <p>These are careers.</p>
        <Outlet/>
    </div>
  )
}
