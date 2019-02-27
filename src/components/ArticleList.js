import React from 'react';
import Article from "./Article.js";
import '../styles/ArticleList.css';

class ArticleList extends React.Component {

  render(){
    if(!this.props.articles){
      return <p>Waiting</p>
    }
    const articles = this.props.articles.map((article, index) => {
      return(

        <Article
        key={index}
        score={article.score}
        title={article.title}
        />

      )
    }
  )

  return(
    <div className="article-list">
    <ul>
    {articles}
    </ul>
    </div>
  )
}
}

export default ArticleList;
