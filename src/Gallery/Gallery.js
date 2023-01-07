import { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const imgs = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [sliderData, setSliderData] = useState(imgs[3]);

  const clickImg = (id) => {
    // console.log(id);
    const slider = imgs[id];
    setSliderData(slider);
  };
  return (
    <div className="text-center p-4 gal">
      <img src={sliderData.src} className="mb-5 img" height="200" width="400" />
      <div className="d-flex justify-content-evenly">
        {imgs.map((img, id) => (
          <img
            src={img.src}
            className={sliderData.id == id + 1 ? "rounded-circle" : "rounded"}
            key={id}
            onClick={() => clickImg(id)}
            height="150"
            width="150"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
