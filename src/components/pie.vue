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
          text: 'Doughnut Portfolio Chart',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc',
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: '#fff',
          },
        },
        series: [
          {
            name: 'Investment Breakdown',
            type: 'pie',
            radius: ['40%', '70%'], // Doughnut style
            center: ['50%', '55%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: 'Precious Metals ETF' },
              { value: 310, name: 'Exchange Commissions' },
              { value: 274, name: 'Union Ads' },
              { value: 335, name: 'Government Bonds' },
              { value: 400, name: 'Debt ETF' },
            ],
            itemStyle: {
              color: function (params) {
                const colors = ['#00c1de', '#fadb14', '#ff4d4f', '#7cb305', '#9254de'];
                return colors[params.dataIndex];
              },
              borderColor: '#1f2330',
              borderWidth: 3,
              shadowBlur: 15,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
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
