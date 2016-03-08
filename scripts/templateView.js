//Object array that holds functions for updating page and dynamic changes
//But why do we need an array? Ask today during lab.
var templateView = {};

templateView.showTeaser = function() {
  $('#projects article').children().filter('.description:nth-of-type(n+2)').hide();
  $('article').on('click', '.reveal-btn', function(ev) {
    ev.preventDefault();
    console.log(this);
    $(this).hide().siblings().show();
  });
};

templateView.showTabs = function() {
  var $target = $('ul');
  $target.on('click', '.tab', function(ev){
    ev.preventDefault();
    $clickTarget = $(ev.target).attr('href');
    $('section').hide();
    $($clickTarget).fadeIn(700);
  });
  $target.find('li:first').click();
};


$(
  function() {
    templateView.showTabs();
    templateView.showTeaser();
  }
);
