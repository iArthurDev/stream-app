"use client";
import { useEffect, useState } from "react";
import "./navbar.css";
import { useSelector } from "react-redux";

export default function NavbarComponent() {
  const profile = useSelector((state) => state.profile);
  const [scroll, setScroll] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">MiLogo</div>
      <ul className="navbar-menu">
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Contacto</li>
      </ul>
      <div className="img-profile-nav">
        <img src={profile.urlImageProfile} alt="" draggable="false" />
      </div>
    </nav>
  );
}
