$(document).ready (function(){
  var options = {};
  $('.modal').modal(options);

  var binder = new dworkApp.Binder();
  binder.bind();

});

function dworkApp(){};

dworkApp.Binder = function() {};

dworkApp.Binder.prototype = {
  bind: function() {
    this.bindEnterZip();
  },

  bindEnterZip: function() {
    $('#zip-submit').on("click", function(e) {
      e.preventDefault();
      console.log("enter button clicked");
    });
  }
};
