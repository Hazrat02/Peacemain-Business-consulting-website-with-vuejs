<template>
  <div class="chart-container">
    <div id="dynamic_chart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'App',
  data() {
    return {
      categories: this.getInitialCategories(),
      categories2: this.getInitialCategories2(),
      data: this.getInitialData(),
      data2: this.getInitialData2(),
      count: 11,
    };
  },
  mounted() {
    this.initializeChart();
    window.addEventListener('resize', this.handleResize);
    this.startDynamicUpdate();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    clearInterval(this.dynamicInterval);
  },
  methods: {
    getInitialCategories() {
      let now = new Date();
      let res = [];
      let len = 10;
      while (len--) {
        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
        now = new Date(+now - 2000);
      }
      return res;
    },
    getInitialCategories2() {
      let res = [];
      let len = 10;
      while (len--) {
        res.push(10 - len - 1);
      }
      return res;
    },
    getInitialData() {
      let res = [];
      let len = 10;
      while (len--) {
        res.push(Math.round(Math.random() * 1000));
      }
      return res;
    },
    getInitialData2() {
      let res = [];
      let len = 0;
      while (len < 10) {
        res.push(+(Math.random() * 10 + 5).toFixed(1));
        len++;
      }
      return res;
    },
    initializeChart() {
      this.myChart = echarts.init(document.getElementById('dynamic_chart'));
      this.setChartOptions();
    },
    setChartOptions() {
      const option = {
        title: {
          text: 'Dynamic Data',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56',
            },
          },
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: this.categories,
          },
          {
            type: 'category',
            boundaryGap: true,
            data: this.categories2,
          },
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            name: 'Price',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2],
          },
          {
            type: 'value',
            scale: true,
            name: 'Order',
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2],
          },
        ],
        series: [
          {
            name: 'Dynamic Bar',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: this.data,
          },
          {
            name: 'Dynamic Line',
            type: 'line',
            data: this.data2,
          },
        ],
      };

      this.myChart.setOption(option);
    },
    startDynamicUpdate() {
      this.dynamicInterval = setInterval(() => {
        let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');

        this.data.shift();
        this.data.push(Math.round(Math.random() * 1000));

        this.data2.shift();
        this.data2.push(+(Math.random() * 10 + 5).toFixed(1));

        this.categories.shift();
        this.categories.push(axisData);

        this.categories2.shift();
        this.categories2.push(this.count++);

        this.myChart.setOption({
          xAxis: [
            {
              data: this.categories,
            },
            {
              data: this.categories2,
            },
          ],
          series: [
            {
              data: this.data,
            },
            {
              data: this.data2,
            },
          ],
        });
      }, 2100);
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
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
}

.chart {
  width: 100vw;
  height: 200vw;
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
