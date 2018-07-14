import React, {Component} from 'react';
import ProjectItem from "./projectItem";
import {projectInfo} from "../personalInfo";

export default class ProjectList extends Component {
  render() {
    return (
      <ol className="project-list">
        {projectInfo.map((projectInfo, idx) =>
          <ProjectItem key={idx} projectInfo={projectInfo}/>)}
      </ol>
    );
  }
}

ProjectList.propTypes = {};
