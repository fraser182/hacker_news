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

        <Article article = {article} key={index}/>
      )
    });
    return (
      <div className='article-list'>
      {articles}
      </div>

    );
  }
}

export default ArticleList;
