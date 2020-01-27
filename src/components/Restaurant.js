import React from "react";
import "../assets/styles/Restaurant.scss";

const Restaurant = ({ name, blurhash, description, image, delivery_price, tags }) => {
    return (
        <div className="restaurant-card">
            <div className="image">
                <img src={image} alt="restaurant" />
            </div>
            <div className="restaurant-content">
                <h3>{name}</h3>
                <p className="description">{description}</p>
                {/* <hr className="divider" /> */}
                <p className="tags">
                    Delivery: {delivery_price / 100}€ - {tags.join(", ")}
                </p>
            </div>
        </div>
    );
};

export default Restaurant;
