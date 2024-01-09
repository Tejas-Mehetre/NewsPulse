import React from "react";
import "../App.css";

const Newscard = (props) => {
    let { title, description, imageUrl, url, author, date, source } = props;
    return (
      <>
        <div className="card">
          
          <div className="card-body">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "15px",
            }}
          >
            <span className="badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden"></span>
            </span>
          </div>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </>
    );
}

export default Newscard;