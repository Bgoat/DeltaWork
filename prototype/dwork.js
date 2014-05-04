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
    $('.btn.btn-primary').on("click", function() {
      console.log("enter button clicked");
    });
  }
};
