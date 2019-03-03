import React from 'react';
import '../styles/Article.css';

const Article = (props) => {


  return(
    <div className="article-info">
    <a href={props.article.url}>{props.article.title}</a>
    </div>
)
}


export default Article;
