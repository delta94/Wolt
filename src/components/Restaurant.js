import React from "react";
import "../assets/styles/Restaurant.scss";
import { Blurhash } from "react-blurhash";
import ProgressiveImage from "react-progressive-image";

const Restaurant = ({ name, description, image, blurhash, delivery_price, tags, isGrid }) => {
    const placeholder = <Blurhash hash={blurhash} width={350} height={350} resolutionX={32} resolutionY={32} punch={1} />;
   
    return (
        <div className={isGrid ? "restaurant-card-grid" : "restaurant-card-list"}>
            <div className="image">
                <ProgressiveImage src={image}>
                    {(image, loading) => {
                        return loading ? placeholder : <img src={image} />;
                    }}
                </ProgressiveImage>
            </div>
            <div className="restaurant-content">
                <h2>{name}</h2>
                <p className="description">{description}</p>
                <p className="tags">
                    Delivery: {delivery_price / 100}€ - {tags.join(", ")}
                </p>
            </div>
        </div>
    );
};

export default Restaurant;
