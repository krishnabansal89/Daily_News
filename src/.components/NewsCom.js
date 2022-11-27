import React, { Component } from 'react'

export default class NewsCom extends Component {
    
  render() {
    let {title , desc  , url , date} = this.props;
    return (
      <div className="news-box">
        <img src={title} alt=""  className='news-img'/>
        <span className='date'>{date}</span>
        <div className="headline">{desc}</div>
        <a className='btn' href={url} target = '_blank'> Read More</a>
      </div>
    )
  }
}
