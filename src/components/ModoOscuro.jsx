import { useEffect, useState } from "react";

const ModoOscuro = () => {
  const sun = "../src/assets/sun.png";
  const moon = "../src/assets/moon.png"; 
  const [modo, setModo] = useState(localStorage.getItem("temaSeleccionado"));
  const [icono, setIcono] = useState(moon);

  useEffect(() => {
    if (modo === "dark") {
      document.querySelector("body").setAttribute("data-theme", "dark");
      localStorage.setItem("temaSeleccionado", "dark");
      setIcono(sun)
    }
    if (modo === "light") {
      document.querySelector("body").setAttribute("data-theme", "light");
      localStorage.setItem("temaSeleccionado", "light");
      setIcono(moon)
    }
  }, [modo])

  const modoDark = () => {
    document.querySelector("body").setAttribute("data-theme", `${modo}`);
    localStorage.setItem("temaSeleccionado", `${modo}`);
    if (modo === "dark") {
      setModo("light")
      setIcono(sun)
    } else {
      setModo("dark")
      setIcono(moon)
    }
  }

  return(
    <>
      <li className="ModoOscuro"><img src={icono} alt="" className="sun" onClick={modoDark} /></li>
    </>
  )
}

export default ModoOscuro