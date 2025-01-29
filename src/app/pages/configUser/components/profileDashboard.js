"use client";
import Link from "next/link";
import "./profileDashborad.css";
import { useSelector } from "react-redux";

export default function ProfileDashboardComponent() {
  const profiles = useSelector((state) => state.profiles);

  return (
    <div className="container-profileDashboardComponent">
      <div className="profileDashboard">
        {profiles.map((profile) => (
          <div key={profile.idUser} className="profileDetail">
            <img
              className="imageProfileDashboard"
              src={profile.urlImageProfile}
              alt=""
            />
            <div className="detailItem">
              <p>{profile.userName} </p>
              <button>Editar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="btn-regresar-container">
        <Link href={"/pages/profile"}>
          <button className="btn-regresar">regresar</button>
        </Link>
      </div>
    </div>
  );
}
