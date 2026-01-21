import React from "react";

const DiagramSection = ({ badge, title, description, image, fallback }) => {
    return (
        <section className="architecture-section compact">
            <div className="section-badge">{badge}</div>

            <h2 className="section-title">{title}</h2>

            {description && (
                <p className="architecture-intro">{description}</p>
            )}

            <div className="diagram-container">
                <img
                    src={`${process.env.PUBLIC_URL}/${image}`}
                    alt={title}
                    className="architecture-diagram"
                    loading="lazy"
                    onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                    }}
                />
                <div className="placeholder-diagram" style={{ display: "none" }}>
                    <p>📐 {fallback}</p>
                    <small>Place {image} inside /public</small>
                </div>
            </div>
        </section>
    );
};

export default DiagramSection;
