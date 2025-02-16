import { Route, Routes, useNavigate } from "react-router"
import { Layout } from "../layout"
import { Home } from "@/pages/home"
import { useEffect } from "react";
import { WomenHome } from "@/pages/women-home";

export const AppRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/men-home");
  }, []);
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/men-home" element={<Home />}></Route>
        <Route path="/women-home" element={<WomenHome />}></Route>
      </Route>
    </Routes>
  )
}
