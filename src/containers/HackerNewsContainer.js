import React from 'react';
import Header from '../components/Header.js';
import ArticleList from '../components/ArticleList.js';
// import Request from '../helpers/request';

import '../styles/HackerNewsContainer.css';

class HackerNewsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []

    }
  }

  // //This is to get the api of songs
  componentDidMount(){

    const urlTemplate = (articleNumber) => `https://hacker-news.firebaseio.com/v0/item/${articleNumber}.json`

    const arrayUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    fetch(arrayUrl)
      .then(res => res.json())
      .then(arrayOfIds => {
        const allPromises = arrayOfIds.map(id => {
          return fetch(urlTemplate(id)).then(res => res.json())
        })
        Promise.all(allPromises).then(data => this.setState({ articles: data }));
      })

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
