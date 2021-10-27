import React from "react";
import "../CSS/Newsdetail.css"

export default function Newsdetail(props) {
  let { title, description, imgUrl, newsUrl, author, date} = props;
  return (
    <div className="container">
      <div className="post-module">
        <div className="thumbnail">
          <img src={
            imgUrl
              ? imgUrl
              : "https://c.ndtvimg.com/2021-10/k40t0g48_amazon-article-barrons_625x300_11_October_21.jpg"
          } alt="xyz"/>
        </div>
        <div className="post-content">
          <div className="category">Top Headlines</div>
          <h1 className="title">{title}</h1>
          <span className="description">
          {description}
          </span>
          <div className="post-meta">
            <span className="timestamp">
            By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </span>
            <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Read More
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
