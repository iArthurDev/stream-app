"use client";
import "./configureUser.css";
import ImageDashboardComponent from "./components/imageDashboard";
import ProfileDashboardComponent from "./components/profileDashboard";
import { useEffect, useState } from "react";

export default function ConfigUserPageComponent() {
  const [showImages, setShowImages] = useState(false);
  const [profileSelected, setProfileSelected] = useState({
    idUser: "",
    userName: "",
    urlImageProfile: "",
  });

  useEffect(() => {
    if (profileSelected) {
      console.log(profileSelected);
    }
  }, [profileSelected]);

  return (
    <div className="ConfigUserPage">
      <div className="columnaProfilesDashborad">
        <div className="profilesDashborad-container">
          <ProfileDashboardComponent
            onMostrar={() => setShowImages(true)}
            setProfileSelected={setProfileSelected}
          />
        </div>
      </div>
      <div className="columnaImagesDashborad">
        {showImages && (
          <div>
            <ImageDashboardComponent profileSelected={profileSelected} />
          </div>
        )}
      </div>
    </div>
  );
}
