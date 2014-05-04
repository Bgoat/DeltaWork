$(document).ready (function(){
  var options = {};
  $('#zip-modal').modal(options);

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
      var userZip = $('#zipcode').val();
      $.getJSON( "http://api.genability.com/rest/prices?appId=894a0759-f682-4760-b160-ecefba051e7b&appKey=ad02f158-8b1d-4cac-8fda-8d21c8248752&zipCode=" + userZip + "&customerClasses=RESIDENTIAL&tariffTypes=DEFAULT", function(data){
        var tariffs = _.each(data.results, function(tariff) {
          tariff["roundedRate"] = tariff.rateMean.toFixed(2);
        })
        var template= $('#tariffInfo').html();
        var output = Mustache.render(template, {tariffs: tariffs});
        $('#tariffInHere').html(output);
        $('button.close').click()
      })
    });
  }
}

