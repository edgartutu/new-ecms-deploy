<template>
  <div class="small">
    <bar-chart :chart-data="datacollection" height="400px"></bar-chart>
    <!-- <button @click="fillData()">Randomize</button> -->
    
    
    
  </div>
</template>

<script>
  import BarChart from '../BarChart.js';

  export default {
    components: {
      BarChart
    },
    data () {
      return {
        datacollection: null,
        options:{
          xAxes: [{
            barPercentage: 0.5,
            barThickness: 30,
            maxBarThickness: 8,
            minBarLength: 2,
            gridLines: {
                offsetGridLines: true
            }
        }]
        }

      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Unresolved',
              backgroundColor: '#AB47BC',
              data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
            }, {
              label: 'Resolved',
              backgroundColor: '#004080',
              data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
            }
          ]
        }
      },
      
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 400px;
    margin:  auto auto;
  }
</style>