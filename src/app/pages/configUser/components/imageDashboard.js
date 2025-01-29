"use client";
import IFormEditComponent from "@/app/components/IFormEditComponent/IformEditComponent";
import "./imageDashboard.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ImageDashboardComponent() {
  const imgProfiles = useSelector((state) => state.images);
  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    if (imgProfiles && Array.isArray(imgProfiles)) {
      setPeliculas(imgProfiles.filter((img) => img.category === "peliculas"));
      setSeries(imgProfiles.filter((img) => img.category === "seriesAnimadas"));
      setSuperheroes(
        imgProfiles.filter((img) => img.category === "superheroes")
      );
    }
  }, [imgProfiles]);

  return (
    <div className="imgDashboard-container">
      <IFormEditComponent />
      <div className="img-categoriescontainer">
        <div className="category">
          <p>Series animadas</p>
          <div className="img-container">
            {series.map((Img) => (
              <img
                key={Img.idImage}
                src={Img.urlImage}
                alt=""
                className="img-item"
                draggable="false"
              />
            ))}
          </div>
        </div>
        <div className="category">
          <p>Superheroes</p>
          <div className="img-container">
            {superheroes.map((Img) => (
              <img
                key={Img.idImage}
                src={Img.urlImage}
                alt=""
                className="img-item"
                draggable="false"
              />
            ))}
          </div>
        </div>
        <div className="category">
          <p>Peliculas</p>
          <div className="img-container">
            {peliculas.map((Img) => (
              <img
                key={Img.idImage}
                src={Img.urlImage}
                alt=""
                className="img-item"
                draggable="false"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
