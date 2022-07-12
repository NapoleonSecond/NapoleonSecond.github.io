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
    class SamplePrepared extends HTMLElement {
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

        console.log("This is the data fed back in");
        console.log(this.myDataBinding.data); //For checking data bindings
        console.log(this.myDataBinding.data[0]);
        console.log(this.myDataBinding.data[0]["dimensions_0"]);
        console.log(this.myDataBinding.data[0]["measures_0"]);
        const dimension = [];
        const value = [];

        this.myDataBinding.data.forEach(element => {
            dimension.push(element["dimensions_0"]["id"]);
            value.push(element["measures_0"]["raw"]);
            console.log(element);
        });
        
        console.log("arr values");
        console.log(dimension);
        console.log(value);
        


        const option = {
          // https://echarts.apache.org/examples/zh/index.html
         

    
          xAxis: {
            type: 'category',
            //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            data : dimension
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              //data: [120, 200, 150, 80, 70, 110, 130],
              data: value,
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              }
            }
          ]
        }

        chart.setOption(option)
        
      }
    }
  
    customElements.define('com-sap-sample-echarts-prepared', SamplePrepared)
  })()