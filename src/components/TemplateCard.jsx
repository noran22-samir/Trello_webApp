import React from "react";
import "../styles/TemplateCard.css";

function TemplateCard({ image, title }) {
  return (
    <div className="template-card">
      <img src={image} alt={title} className="card-image" />
      <div className="template-badge">Template</div>
      <div className="card-title">{title}</div>
    </div>
  );
}

export default TemplateCard;

