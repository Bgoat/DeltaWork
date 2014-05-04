$(document).ready (function(){
  var options = {};
  $('#zip-modal').modal(options);

  var dworkController = new dworkApp.Controller();
  dworkController.init();
});



var dworkApp = {};

dworkApp.Controller = function() {};

dworkApp.Controller.prototype = {
  init: function() {
    var binder = new dworkApp.Binder(this);
    binder.bind();
  },

  getTariffOnZip: function(userZip) {
    $.getJSON("http://api.genability.com/rest/prices?appId=894a0759-f682-4760-b160-ecefba051e7b&appKey=ad02f158-8b1d-4cac-8fda-8d21c8248752&zipCode=" + userZip + "&customerClasses=RESIDENTIAL&tariffTypes=DEFAULT", function(data){
      var outputTariff = data.results[0].rateMean.toFixed(2);
      $('#tariffInHere').html(outputTariff);
      var outputRenew = (data.results[0].rateMean * 1.08).toFixed(2);
      $('#renewInHere').html(outputRenew);
    });
  },

  getNameOnZip: function(userZip) {
    $.getJSON("http://api.genability.com/rest/public/lses?appId=894a0759-f682-4760-b160-ecefba051e7b&appKey=ad02f158-8b1d-4cac-8fda-8d21c8248752&zipCode=" + userZip + "&customerClasses=RESIDENTIAL&tariffTypes=DEFAULT", function(data){
      var outputName = data.results[0].name;
      $('#nameInHere').html(outputName);
      var outputRenewName = "Oasis Energy";
      $('#renewNameInHere').html(outputRenewName);
    });
  }
};

dworkApp.Binder = function(controller) {
  this.controller = controller;
};

dworkApp.Binder.prototype = {
  bind: function() {
    this.bindEnterZip(this.controller);
  },

  bindEnterZip: function(controller) {
    $('#zip-submit').on("click", function(e) {
      e.preventDefault();
      var userZip = $('#zipcode').val();
      controller.getTariffOnZip(userZip);
      controller.getNameOnZip(userZip);
      $('button.close').click();
    });
  }
};