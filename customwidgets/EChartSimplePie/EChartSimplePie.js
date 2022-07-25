

function formatData(arr1,arr2){
  return {
    legendData:arr1,
    seriesData:arr2
  }
}
  
var getScriptPromisify = (src) => {
    return new Promise(resolve => {
      $.getScript(src, resolve)
    })
  }
  
  (function () {
    const prepared = document.createElement('template')
    prepared.innerHTML = `
        <style>
        </style>
        <div id="root" style="width: 100%; height: 100%;">
        </div>
      `
    class SimplePie extends HTMLElement {
      constructor () {
        super()
  
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(prepared.content.cloneNode(true))
  
        this._root = this._shadowRoot.getElementById('root')
  
        this._props = {}
  
        this.render()
      }
  
      onCustomWidgetResize (width, height) {
        this.render()
      }
  
      async render () {
        await getScriptPromisify('https://cdn.bootcdn.net/ajax/libs/echarts/5.0.0/echarts.min.js')
  
        const chart = echarts.init(this._root)

        const legendData = [];
        const seriesData = [];

        this.myDataBinding.data.forEach(element => {
          legendData.push(element["dimensions_0"]["id"]);
          seriesData.push({
            name: element["dimensions_0"]["id"],
            value: element["measures_0"]["raw"]});
        });
        const data = formatData(legendData,seriesData);
        
        const option = {
          // https://echarts.apache.org/examples/zh/index.html

          title: {
            text: 'Operator\'s total number of wins',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: data.legendData
          },
          series: [
            {
              name: 'Operator',
              type: 'pie',
              radius: '55%',
              center: ['40%', '50%'],
              data: data.seriesData,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }

        chart.setOption(option)
        
      }
    }
  
    customElements.define('com-sap-sample-echarts-simple-pie', SimplePie)
  })()