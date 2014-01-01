import request from 'appkit/utils/http';

export default Ember.Route.extend({
  model: function(params, transition) {
  	var promises = {
  		gpu: request("gpu/%@".fmt(params.id)),
  		history: request("gpu/%@/historical".fmt(params.id))
  	};
  	return Ember.RSVP.hash(promises);
  }
});