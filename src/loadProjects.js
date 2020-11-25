import Project from './project';
import loadTasks from './loadTasks';

export default function(projects) {
  let list = {};
  JSON.parse(projects).forEach((object) => {
    let project = Project(object.name, object.id);
    project.setTasks(loadTasks(object.tasks));
    list[project.getId()] = project;
  })

  return list;
}