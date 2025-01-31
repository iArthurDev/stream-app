"use client";
import "./homePage.css";
import HomeComponent from "./homeComponent/homeComponent";
import NavbarComponent from "@/app/components/navbarComponent/navbar";
import { useSelector } from "react-redux";

export default function HomePageComponent() {
  const userProfile = useSelector((state) => state.profile);

  return (
    <div className="home-container">
      <NavbarComponent />
      <div className="content-home-container">
        <HomeComponent />
      </div>
    </div>
  );
}
