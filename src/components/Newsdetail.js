import React from 'react'


export default function Newsdetail(props){
  let {title, description, imgUrl, newsUrl, author, date} = props
  return (
    <div>
      <div className="card" style={{width: '18rem'}}>
        <img src={imgUrl?imgUrl:"https://c.ndtvimg.com/2021-10/k40t0g48_amazon-article-barrons_625x300_11_October_21.jpg"} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date (date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}
