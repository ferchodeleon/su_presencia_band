import { useEffect, useState } from "react";

import "../styles/loading.css";

const Loading = ({ children, imageUrls }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = (imageUrls) => {
      return Promise.all(
        imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        })
      );
    };

    loadImages(imageUrls)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  });

  return loading ? <Load /> : children;
};

export default Loading;

const Load = () => {
  return (
    <div class="loading-container">
      <div class="loading-container-line">
        <div class="loading-line"></div>
        <div class="loading-line"></div>
        <div class="loading-line"></div>
        <div class="loading-line"></div>
        <div class="loading-line"></div>
        <div class="loading-line"></div>
        <div class="loading-line"></div>
      </div>
      <span class="loading-text">LOADING...</span>
    </div>
  );
};
