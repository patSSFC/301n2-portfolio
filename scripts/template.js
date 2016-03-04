$(function () {
  var projects = [];

  function Project(proj) {
    this.screenshotUrl = proj.screenshotUrl;
    this.screenAlt = proj.screenAlt;
    this.description = proj.description;
    this.projectUrl = proj.projectUrl;
    this.publishedOn = proj.publishedOn;
  }

  Project.prototype.toHtml = function () {
    var $newProject = $('article.project').clone();

    $newProject.find('figure.screenshot a').attr('href', this.projectUrl);
    $newProject.find('p.description').html(this.description);

  };

  function setLink() {
    var $newProject = $('article.project');
    $newProject.find('figure.screenshot a').attr('href', 'http://www.travellingfan.org').attr('target', '_blank');
  }

  setLink();

  var $projects = $('#projects');
  $projects.append(tohtml(new Project(proj)));
});
