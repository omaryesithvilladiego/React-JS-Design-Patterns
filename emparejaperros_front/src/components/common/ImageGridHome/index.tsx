import React from "react";
import withImageFetch from "../../../hoc/withImagesFetch";
import Image from "next/image";

interface ImageGridProps {
  images: Array<string>;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }: ImageGridProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "10px",
        width: "98dvw",
        height: "100%",
        margin: "0 auto",
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      {" "}
      {images &&
        images.map((image, index) => (
          <div
            key={index}
            style={{ position: "relative", width: "200px", height: "200px" }}
          >
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "120px" }}
              alt="dog"
            />
          </div>
        ))}
    </div>
  );
};

const ImageGridWithFetch = withImageFetch(ImageGrid);

export default ImageGridWithFetch;
