import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import config from '../config.toml';
import NotFound from './NotFound.js';
import loadData from '../loadData.js';

const TopBar = (props) => (
  <div className="top-bar">
    <Link to="/">&#8962;</Link>
    <p>{props.count}</p>
    <Link to={"/index/" + props.title}><img src="./icons/grid.svg"/></Link>
  </div>
);

const Navigation = (props) => (
  <div id="arrows">
    { props.nr > 1 && (
      <Link to={`/view/${props.title}/${props.nr-1}`} id="left" className="arrow">&#8592;</Link>
    )}
    { props.nr < props.length && (
      <Link to={`/view/${props.title}/${props.nr+1}`} id="right" className="arrow">&#8594;</Link>
    )}
  </div>
);

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {description: ""};
  };
  componentDidMount() {
    loadData(this.props.title).then((data) => {
      if (data[this.props.nr] !=undefined){
        this.setState({description: data[this.props.nr]})
      }
    })
  };
  render() {
    if (this.state.description.length >0){
      return (
        <figcaption>
          <p>{this.state.description}</p>
        </figcaption>
      )
    }else{
        return null;
    };
  };
};
const Content = ({match}) => {
  const index = config.titles.indexOf(match.params.title);
  const length = config.lengths[index];
  if (index != -1)
  {return (
    <div id="view">
      <TopBar count="1" title={match.params.title}/>
        <Route path="/view/:title/:nr" component={({match, history}) => {
          const nr = parseInt(match.params.nr);
          function keySlide(e) {
            if(e.key =="ArrowLeft" && nr>1){
              history.push(`/view/${match.params.title}/${nr-1}`);
            }else if(e.key =="ArrowRight" && nr<length){
              history.push(`/view/${match.params.title}/${nr+1}`);
            };
            document.removeEventListener('keydown', keySlide);
          };
          document.addEventListener('keydown', keySlide);
          return (
          <figure>
            <img src={`./pics/${match.params.title}/${nr}.jpg`}/>
            <Description title={match.params.title} nr={nr}/>
            <Navigation title={match.params.title} nr={nr} length={length}/>
          </figure>
        )}}/>

    </div>
  )
}else{
  return <NotFound/>
}

}
export default () =>
    (
      <Switch>
        <Route exact path="/view" component={NotFound}/>
        <Route path="/view/:title" component={Content}/>
      </Switch>
    )
;
