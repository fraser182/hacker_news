import React from 'react';
import '../styles/Article.css';

const Article = (props) => {


    return(
      <div className="song-info">
      <p>Article Position: { props.score} </p>
      <p>Title: { props.title} </p>
      </div>
    )
  }


export default Article;
