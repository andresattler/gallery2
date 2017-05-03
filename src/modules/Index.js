import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import NotFound from './NotFound.js';
import loadData from '../loadData.js';
const months = ['nov', 'dec', 'jan', 'feb'];
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tumbnails: []};
    this.title = this.props.match.params.title;
  }
  componentDidMount() {
    console.log(this.title)
    loadData(this.title).then((data) => {
      let arr = [];
      for (let i = 1; i <= data.length; i++){
        arr.push((
          <Link key={i} to={`/view/${this.title}/${i}`}>
            <img src={`/pics/${this.title}/${i}.jpg`}/>
          </Link>
        ))
      };
      this.setState({thumbnails: arr})
      console.log(arr);
    });
  }
    render() {
      if (months.indexOf(this.title) != -1) {
        return (
          <div id="index">
            <header>
              <Link to="/">&#8962;</Link>
              <h1>{this.title}</h1>
            </header>
            <main>
              {this.state.thumbnails}
            </main>
          </div>
        )
      }else {
        return <NotFound/>
      }
    }
}

export default class extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/index" component={NotFound}/>
        <Route path="/index/:title" component={Content}/>
      </Switch>
    )
  }
};
