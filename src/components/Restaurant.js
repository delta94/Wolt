import React from "react";
import "../assets/styles/Restaurant.scss";
import { Blurhash } from "react-blurhash";
import ProgressiveImage from "react-progressive-image";

const Restaurant = ({ name, description, image, blurhash, delivery_price, tags, online, isGrid }) => {
    const placeholder = <Blurhash hash={blurhash} width={350} height={350} resolutionX={32} resolutionY={32} punch={1} />;

    return (
        <div className="restaurant-card">
            <div className={isGrid ? "restaurant-card-grid" : "restaurant-card-list"}>
                <div className="restaurant-image">
                    <ProgressiveImage src={image}>
                        {(image, loading) => {
                            // ProgressiveImage Component loads placeholder (Blurhash Component) while loading the real image
                            return loading ? placeholder : <img src={image} alt="" className={online ? null : "closed"} />;
                            // If the restaurant is not online, it gets className 'closed' which means it has black & white image
                        }}
                    </ProgressiveImage>
                    <p className={online ? null : "offline"}>Offline</p>
                </div>
                <div className="restaurant-content">
                    <h2 className="restaurant-title">{name}</h2>
                    <p className="restaurant-description">{description}</p>
                    <p className="restaurant-tags">
                        Delivery: {delivery_price / 100}€ - {tags.join(", ")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;
