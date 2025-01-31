"use client";
import "./iImagesComponent.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function IImagesComponent({ urlImage }) {
  const imgProfiles = useSelector((state) => state.images);
  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);
  const [superheroes, setSuperheroes] = useState([]);
  const [newUrl, setNewUrl] = useState(null);

  useEffect(() => {
    if (imgProfiles && Array.isArray(imgProfiles)) {
      setPeliculas(imgProfiles.filter((img) => img.category === "peliculas"));
      setSeries(imgProfiles.filter((img) => img.category === "seriesAnimadas"));
      setSuperheroes(
        imgProfiles.filter((img) => img.category === "superheroes")
      );
    }
  }, [imgProfiles]);

  useEffect(() => {
    setNewUrl(urlImage);
  }, [urlImage]);

  const handleChangeImage = (url) => {
    setNewUrl(url);
  };

  return (
    <div>
      <div className="categoryDetails">
        <p>Series animadas</p>
        <div className="img-container">
          {series.map((Img) => (
            <img
              key={Img.idImage}
              src={Img.urlImage}
              alt=""
              className={`img-item ${
                newUrl === Img.urlImage ? "img-selected" : ""
              }`}
              draggable="false"
              onClick={() => handleChangeImage(Img.urlImage)}
            />
          ))}
        </div>
      </div>
      <div className="categoryDetails">
        <p>Superheroes</p>
        <div className="img-container">
          {superheroes.map((Img) => (
            <img
              key={Img.idImage}
              src={Img.urlImage}
              alt=""
              className={`img-item ${
                newUrl === Img.urlImage ? "img-selected" : ""
              }`}
              draggable="false"
              onClick={() => handleChangeImage(Img.urlImage)}
            />
          ))}
        </div>
      </div>
      <div className="categoryDetails">
        <p>Peliculas</p>
        <div className="img-container">
          {peliculas.map((Img) => (
            <img
              key={Img.idImage}
              src={Img.urlImage}
              alt=""
              className={`img-item ${
                newUrl === Img.urlImage ? "img-selected" : ""
              }`}
              draggable="false"
              onClick={() => handleChangeImage(Img.urlImage)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
