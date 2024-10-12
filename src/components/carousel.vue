<template>
  <div class="chart-container">
    <div id="e_chart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'App',
  mounted() {
    this.initializeChart();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    initializeChart() {
      this.myChart = echarts.init(document.getElementById('e_chart'));
      this.setChartOptions();
    },
    setChartOptions() {
      const option = {
        backgroundColor: '#2c343c',
        title: {
          text: 'Portfolio Chart',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc',
          },
        },
        tooltip: {
          trigger: 'item',
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: 'Precious Metals ETF' },
              { value: 310, name: 'Exchange Commissions' },
              { value: 274, name: 'Union Ads' },
              { value: 335, name: 'Government Bonds' },
              { value: 400, name: 'Debt ETF' },
            ].sort((a, b) => a.value - b.value),
            roseType: 'radius',
            label: {
              color: 'rgba(255, 255, 255, 0.3)',
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(57,100,208,1) ',
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            itemStyle: {
              color: 'rgba(45,193,201,1)',
              shadowBlur: 200,
              shadowColor: 'black',
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: (idx) => Math.random() * 200,
          },
        ],
      };

      this.myChart.setOption(option);
    },
    handleResize() {
      if (this.myChart) {
        this.myChart.resize();
      }
    },
  },
};
</script>

<style>
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f2330;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
}

.chart {
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  height: calc(100vw * 0.75); /* Adjust height based on width to maintain aspect ratio */
}

@media (max-width: 768px) {
  .chart {
    height: calc(100vw * 0.9); /* Increase height slightly for smaller screens */
  }
}

@media (max-width: 480px) {
  .chart {
    height: calc(100vw * 1); /* Full height for very small screens */
  }
}
</style>
