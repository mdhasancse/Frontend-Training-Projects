import React, { Component } from 'react'

export class NewsItem extends Component {
     
render() {
    let {title, description,imageUrl ,newsUrl} = this.props;
    return (
      <div className='container my-3'>
        <div className="card">
            <img src={imageUrl?imageUrl:"https://nypost.com/wp-content/uploads/sites/2/2024/02/miami-beach-florida-veterans-day-76711549.jpg?quality=75&strip=all&w=1024"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} rel="noreferrer" target='_blank' className="btn sm-btn btn-primary">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
