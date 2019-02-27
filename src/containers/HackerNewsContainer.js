import React from 'react';
import Header from '../components/Header.js';
import ArticleList from '../components/ArticleList.js';
// import Request from '../helpers/request';

import '../styles/HackerNewsContainer.css';

class HackerNewsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      articleIds: []
    }
  }

  // This is to get the api of songs
  componentDidMount(){
    const arrayUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    fetch(arrayUrl)
    .then(res => res.json())
    .then(data => this.setState(() => {
      return { articleIds: data }
    }))
    .then(() => {
      const allPromises = this.setupArticleRequestsSpliceOnArticleId()
      Promise.all(allPromises).then(data => this.setState({ articles: data }));
    });
  }

  setupArticleRequestsSpliceOnArticleId(){
    const top20Articles = this.state.articleIds.splice(0,20);
    const allRequests = top20Articles.map((articleID) => {
      return this.getArticles(articleID)
    });
    return allRequests;
  }

  getArticles(articleId){
    const url = `https://hacker-news.firebaseio.com/v0/item/${articleId}.json`;
    return fetch(url)
    .then(res => res.json())
  }


  render(){
    if(!this.state.articles){
      return <p> Waiting on stuff... </p>;
    }
    return (
      <div className="hacker-news-container">
      <p> Hello from the Hacker News Container</p>
      <Header />
      <ArticleList articles={this.state.articles}/>
      </div>
    )
  }

}


export default HackerNewsContainer;
