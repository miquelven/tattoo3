import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoMdArrowForward } from "react-icons/io";
// import photo album & lightbox
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";

const GallerySection = () => {
  const url = "https://json-server-kq40.onrender.com/tatuagens/1";

  const [tatuagens, SetTatuagens] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      SetTatuagens(response.data);
    });
  }, []);

  const url1 = "https://json-server-kq40.onrender.com/tatuagens/2";

  const [tatuagens1, SetTatuagens1] = useState([]);

  useEffect(() => {
    axios.get(url1).then((response) => {
      SetTatuagens1(response.data);
    });
  }, []);

  const url2 = "https://json-server-kq40.onrender.com/tatuagens/3";

  const [tatuagens2, SetTatuagens2] = useState([]);
  useEffect(() => {
    axios.get(url2).then((response) => {
      SetTatuagens2(response.data);
    });
  }, []);

  const url3 = "https://json-server-kq40.onrender.com/tatuagens/4";

  const [tatuagens3, SetTatuagens3] = useState([]);
  useEffect(() => {
    axios.get(url3).then((response) => {
      SetTatuagens3(response.data);
    });
  }, []);

  const url4 = "https://json-server-kq40.onrender.com/tatuagens/5";

  const [tatuagens4, SetTatuagens4] = useState([]);
  useEffect(() => {
    axios.get(url4).then((response) => {
      SetTatuagens4(response.data);
    });
  }, []);

  const url5 = "https://json-server-kq40.onrender.com/tatuagens/6";

  const [tatuagens5, SetTatuagens5] = useState([]);
  useEffect(() => {
    axios.get(url5).then((response) => {
      SetTatuagens5(response.data);
    });
  }, []);

  const url6 = "https://json-server-kq40.onrender.com/tatuagens/7";

  const [tatuagens6, SetTatuagens6] = useState([]);
  useEffect(() => {
    axios.get(url6).then((response) => {
      SetTatuagens6(response.data);
    });
  }, []);

  const url7 = "https://json-server-kq40.onrender.com/tatuagens/8";

  const [tatuagens7, SetTatuagens7] = useState([]);
  useEffect(() => {
    axios.get(url7).then((response) => {
      SetTatuagens7(response.data);
    });
  }, []);

  const galleryData = {
    title: "Galeria:",
    btnText: "Ver mais",
    btnIcon: <IoMdArrowForward />,
    images: [
      {
        src: tatuagens.url,
        key: tatuagens.url,
        original: tatuagens.url,
        width: 465,
        height: 412,
      },
      {
        src: tatuagens1.url,
        key: tatuagens1.url,
        original: tatuagens1.url,
        width: 465,
        height: 540,
      },
      {
        src: tatuagens2.url,
        key: tatuagens2.url,
        original: tatuagens2.url,
        width: 465,
        height: 412,
      },
      {
        src: tatuagens3.url,
        key: tatuagens3.url,
        original: tatuagens3.url,
        width: 465,
        height: 540,
      },
      {
        src: tatuagens4.url,
        key: tatuagens4.url,
        original: tatuagens4.url,
        width: 465,
        height: 540,
      },
      {
        src: tatuagens5.url,
        key: tatuagens5.url,
        original: tatuagens5.url,
        width: 464,
        height: 412,
      },
      {
        src: tatuagens6.url,
        key: tatuagens6.url,
        original: tatuagens6.url,
        width: 465,
        height: 540,
      },
      {
        src: tatuagens7.url,
        key: tatuagens7.url,
        original: tatuagens7.url,
        width: 465,
        height: 412,
      },
    ],
  };

  const validImages = galleryData.images.filter((img) => Boolean(img.src));

  const slides = validImages.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

  const [index, setIndex] = useState(-1);
  // destructure gallery data
  const { title, btnText, btnIcon, images } = galleryData;

  return (
    <section
      className="bg-[#F9F9F9] section relative mt-[40px] lg:mt-0"
      id="galeria"
    >
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 max-w-[370px] lg:mb-20"
        >
          {title}
        </motion.h2>
      </div>
      {/* photo album */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg:mb-20"
      >
        <PhotoAlbum
          layout="rows"
          photos={validImages}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={slides}
          styles={{ container: { backgroundColor: "rgba(0,0,0,.9)" } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
      {/* btn */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center"
      >
        <button className="btn btn-lg btn-dark">
          {btnText}
          <div className="text-xl">{btnIcon}</div>
        </button>
      </motion.div>
    </section>
  );
};

export default GallerySection;
