"use client";
import "./imageDashboard.css";
import IFormEditComponent from "@/app/components/IFormEditComponent/IformEditComponent";
import IImagesComponent from "@/app/components/IImagesComponent/iImagesComponent";
import { setProfile } from "@/app/store/slide/profileSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ImageDashboardComponent({ profileSelected }) {
  const profiles = useSelector((state) => state.profiles);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [imgProfile, setImgProfile] = useState("");

  useEffect(() => {
    if (profileSelected) {
      setUserName(profileSelected.userName);
      setImgProfile(profileSelected.urlImageProfile);
    }
  }, [profileSelected]);

  const handleUpdateProfile = () => {
    const id = profileSelected.idUser;
    console.log("Entra a la funcion", id);
    dispatch(setProfile({ id, userName, imgProfile }));
  };

  const handleProfileNameChange = (newName) => {
    setUserName(newName);
  };

  return (
    <div className="imgDashboard-container">
      <div className="btn-safeChanges-container">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={handleUpdateProfile}
        >
          Guardar cambios
        </button>
      </div>
      <p style={{ fontSize: "2rem" }}>
        Nombre del perfil{profileSelected.idUser}{" "}
      </p>
      <div className="form-container">
        <IFormEditComponent
          profileName={userName}
          onProfileNameChange={handleProfileNameChange}
        />
      </div>
      <div className="img-categoriescontainer">
        <p style={{ fontSize: "2rem" }}>Imagen del perfil</p>
        <IImagesComponent urlImage={imgProfile} />
      </div>
    </div>
  );
}
