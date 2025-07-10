import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import Testimonials from "./components/Testimonials/Testimonials";
import AppStore from "./components/AppStore/AppStore";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// import AOS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "light" ? "light" : "dark")

  const htmlElement = document.documentElement;

  useEffect(() => {
    if(theme === "dark"){
      htmlElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    else{
      htmlElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  })

  // AOS initialization
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh()
  }, [])
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <About />
      <Services />
      <CarList />
      <Testimonials />
      <AppStore />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
