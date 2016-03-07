//Object array that holds functions for updating page and dynamic changes
//But why do we need an array? Ask today during lab.
var templateView = {};

templateView.showTeaser = function() {
  $('#projects article').children();
}

templateView.showTabs = function() {
  var $target = $('ul li:not(:nth-of-type(n+3))');
  $target.on('click', function(ev) {
    ev.preventDefault();
    $clickTarget = $(ev.target).attr('href');
    console.log($clickTarget);
    $('section').hide();
    $($clickTarget).fadeIn();
  });
  $target.click();
};


$(
  function() {
    templateView.showTabs();
  }
);
