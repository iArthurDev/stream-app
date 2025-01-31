"use client";
import "./profilePage.css";
import { useDispatch, useSelector } from "react-redux";
import { AddCircleOutline } from "@mui/icons-material";
import { selectProfile } from "@/app/store/slide/userProfileSlice";
import Link from "next/link";

export default function ProfilePageComponent() {
  const profiles = useSelector((state) => state.profiles);
  const dispatch = useDispatch();

  const handleProfileSelect = (id, userName, urlImage) => {
    const profile = { idUser: id, userName, urlImageProfile: urlImage };
    dispatch(selectProfile(profile));
    console.log("Perfil seleccionado:", profile);
  };

  return (
    <div className="profile-page">
      <p draggable="false">Selecciona tu perfil y vuelve a donde lo dejaste.</p>
      <div className="profiles-container">
        {profiles.map((profile) => (
          <Link key={profile.idUser} href={"/pages/home"}>
            <div
              className="profile"
              onClick={() =>
                handleProfileSelect(
                  profile.idUser,
                  profile.userName,
                  profile.urlImageProfile
                )
              }
            >
              <div className="img-profile">
                <img src={profile.urlImageProfile} alt="" draggable="false" />
              </div>
              <div className="name-profile-container">
                <p draggable="false">{profile.userName}</p>
              </div>
            </div>
          </Link>
        ))}
        {profiles.length < 4 && (
          <div className="add-profile-container">
            <div className="img-profile">
              <AddCircleOutline className="add-profile-item" />
            </div>
            <div className="name-profile-container">
              <p draggable="false">Agregar perfil</p>
            </div>
          </div>
        )}
      </div>
      <div className="btn-admin-profiles">
        <Link href={"/pages/configUser"}>
          <button>Editar perfiles</button>
        </Link>
      </div>
    </div>
  );
}
