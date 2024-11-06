import { Navbar } from "@/components"
import { Outlet } from "react-router-dom"


function AppLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout