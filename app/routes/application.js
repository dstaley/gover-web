import request from 'appkit/utils/http';

export default Ember.Route.extend({
  model: function() {
  	var data = request("devs").then(function(data){
  		for (var i = 0; i < data["DEVS"].length; i++) {
  			data["DEVS"][i]["id"] = i;
  		};
  		return data
  	});
    return data;
  }
});
