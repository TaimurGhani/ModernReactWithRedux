import _ from 'lodash';
import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = "AIzaSyDuFZSY08ebhms8jPI0F0KYCq5UQygUrGQ";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 400);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} 
        />
      </div>
    );
  }
} 

ReactDOM.render(<App />, document.querySelector(".container"));