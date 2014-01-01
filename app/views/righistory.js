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
    gpudata.forEach(function(gpu){
      gpu["hashrate"].forEach(function(entry){
        entry[0] = entry[0]*1000;
      });
      gpu["temperature"].forEach(function(entry){
        entry[0] = entry[0]*1000;
      });
    });

    var data = [];
    for (var i = 0; i < gpudata.length; i++) {
      data.push({data: gpudata[i]["hashrate"], label: "GPU "+i+" - Hashrate (kH/s)"});
      data.push({data: gpudata[i]["temperature"], label: "GPU "+i+" - Temperature (Celcius)", yaxis: 2});
    }

    if (canvas) {
      canvas.plot(data,
       {
        xaxes: [ { mode: "time" } ],
        yaxes: [ { min: 0 }, {
          position: "right"
        } ],
        legend: { position: "sw", backgroundColor: "#46586A" },
        grid: {color: "#ffffff"}
      });
    }
  }
});