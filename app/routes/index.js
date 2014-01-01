import request from 'appkit/utils/http';

export default Ember.Route.extend({
  model: function() {
    var promises = {
      summary: request("summary"),
      devs: request("devs"),
      historicalGPU: request("historical/gpu")
    };

    return Ember.RSVP.hash(promises);
  }
});
