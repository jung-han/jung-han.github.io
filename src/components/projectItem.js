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
          <p className="_summary">
            {summary.map(val => <p className="_summary_list">{val}</p>)}
          </p>
        </div>
      </li>
    );
  }
}

ProjectItem.propTypes = {};
