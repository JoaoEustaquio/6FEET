import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./css/Slider.css";

const Slider = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img src="https://33giga.com.br/wp-content/uploads/2021/01/mangas-mais-populares.jpg" alt="img-1"/>
        </div>
        <div className="image">
          <img src="https://1.bp.blogspot.com/-ZysOj6QPMvs/X1jOw0-VBFI/AAAAAAAADeA/QpLtTZTxwkszOYdZ2EmLpGXr112_KgvlgCLcBGAsYHQ/w1200-h630-p-k-no-nu/Mang%25C3%25A1s%2Bbrasileiros.jpg" alt="img-2"/>
        </div>
        <div className="image">
          <img src="https://cdn.ome.lt/TpEwXFwEzMvEH_vMP7R93PRtICg=/970x360/smart/uploads/conteudo/fotos/mangas-esgotados-materia-capa.jpg" alt="img-3"/>
        </div>
        <div className="image">
          <img src="https://uploads.jovemnerd.com.br/wp-content/uploads/2020/01/manga-plus.png" alt="img-4"/>
        </div>
        <div className="image">
          <img src="https://shopee.com.br/blog/wp-content/uploads/2022/01/mangas-para-iniciantes.jpg" alt="img-5"/>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;