import { Header } from "@/widgets/header"
import { Outlet } from "react-router"

export const Layout = () => {
  return (
    <div className="flex flex-col flex-1">
      <header>
        <Header />
      </header>

      <main className="px-5 pt-2.5 pb-10">
        <Outlet />
      </main>
    </div>
  )
}
