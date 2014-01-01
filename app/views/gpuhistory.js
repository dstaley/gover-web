export default Ember.View.extend({
  classNames: ['canvas'],

  didInsertElement: function() {
    this.renderChart();
  },

  chartUpdated: function() {
    this.renderChart();
  }.observes('datasets'),

  renderChart: function() {
    var canvas = this.$();
    var gpudata = this.get('datasets');
    gpudata["hashrate"].forEach(function(entry){
      entry[0] = entry[0]*1000;
    });
    gpudata["temperature"].forEach(function(entry){
      entry[0] = entry[0]*1000;
    });

    var data = [];
    data.push({data: gpudata["hashrate"], label: "Hashrate (kH/s)"});
    data.push({data: gpudata["temperature"], label: "Temperature (Celcius)", yaxis: 2});

    if (canvas) {
      canvas.plot(data,
       {
        xaxes: [ { mode: "time" } ],
        yaxes: [ { min: 0 }, {
          position: "right"
        } ],
        legend: { position: "sw" }
      });
    }
  }
});