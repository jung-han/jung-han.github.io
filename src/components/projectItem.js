import React, {Component} from 'react';

export default class ProjectItem extends Component {
  render() {
    const {title, summary, image} = this.props.projectInfo;

    return (
      <li className="list-item">
        <div className="list-header">
          <img className="logo" src={image} />
        </div>
        <div className="list-detail">
          <div className="_title-block">
            <h3>{title}</h3>
          </div>
          <div className="_summary">
            {summary.map((val, idx) => <p className="_summary_list" key={idx}>{val}</p>)}
          </div>
        </div>
      </li>
    );
  }
}

ProjectItem.propTypes = {};
