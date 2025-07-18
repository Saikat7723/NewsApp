import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 5;

  state = {
    progress: 0,
  };

  // ✅ FIXED: Added closing brace
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />

          <LoadingBar
            color="#1f1ce6"
            progress={this.state.progress}
            height={4}
            onLoaderFinished={() => this.setProgress(0)} // ✅ reset after done
          />
         <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={6} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={5} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={5} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={5} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={5} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={5} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={5} country="in" category="technology" />} />
          </Routes>
        
        </BrowserRouter>
      </div>
    );
  }
}
