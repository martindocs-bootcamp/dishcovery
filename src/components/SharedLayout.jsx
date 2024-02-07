import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      {/* Content outlet for rendering routes */}
      <Outlet />
    </>
  )
}

export default SharedLayout
