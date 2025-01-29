"use client";
import "./configureUser.css";
import ImageDashboardComponent from "./components/imageDashboard";
import ProfileDashboardComponent from "./components/profileDashboard";

export default function ConfigUserPageComponent() {
  return (
    <div className="ConfigUserPage">
      <div className="columnaProfilesDashborad">
        <div className="profilesDashborad-container">
          {" "}
          <ProfileDashboardComponent />
        </div>
      </div>
      <div className="columnaImagesDashborad">
        {" "}
        <ImageDashboardComponent />
      </div>
    </div>
  );
}
