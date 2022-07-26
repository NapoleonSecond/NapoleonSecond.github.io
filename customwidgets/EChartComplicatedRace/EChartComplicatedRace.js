

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
    class Race extends HTMLElement {
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

        $.get(
            "https://napoleonsecond.github.io/customwidgets/EChartComplicatedRace/EChartComplicatedRace.js",
            function (_rawData) {
                console.log("running raw data");
                run(_rawData);
            }
          );
        function run(_rawData) {
            // var countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'];
            const countries = [
              'Finland',
              'France',
              'Germany',
              'Iceland',
              'Norway',
              'Poland',
              'Russia',
              'United Kingdom'
            ];
            const datasetWithFilters = [];
            const seriesList = [];

            console.log("Before each loops");


            echarts.util.each(countries, function (country) {
              var datasetId = 'dataset_' + country;
              datasetWithFilters.push({
                id: datasetId,
                fromDatasetId: 'dataset_raw',
                transform: {
                  type: 'filter',
                  config: {
                    and: [
                      { dimension: 'Year', gte: 1950 },
                      { dimension: 'Country', '=': country }
                    ]
                  }
                }
              });

              console.log("After each for loop with country",country);
              console.log("Below are the dataset With Filters")
              console.log(datasetWithFilters);


              seriesList.push({
                type: 'line',
                datasetId: datasetId,
                showSymbol: false,
                name: country,
                endLabel: {
                  show: true,
                  formatter: function (params) {
                    return params.value[3] + ': ' + params.value[0];
                  }
                },
                labelLayout: {
                  moveOverlap: 'shiftY'
                },
                emphasis: {
                  focus: 'series'
                },
                encode: {
                  x: 'Year',
                  y: 'Income',
                  label: ['Country', 'Income'],
                  itemName: 'Year',
                  tooltip: ['Income']
                }
              });
            });

            console.log("after all the for loops");
            const option = {
          // https://echarts.apache.org/examples/zh/index.html

        
                animationDuration: 10000,
                dataset: [
                {
                    id: 'dataset_raw',
                    source: _rawData
                },
                ...datasetWithFilters
                ],

                title: {
                    text: 'Income of Germany and France since 1950'
                },

                tooltip: {
                    order: 'valueDesc',
                    trigger: 'axis'
                },
                
                xAxis: {
                    type: 'category',
                    nameLocation: 'middle'
                },
                
                yAxis: {
                    name: 'Income'
                },
                
                grid: {
                    right: 140
                },
                series: seriesList
                };
            chart.setOption(option);
        
      }
      console.log("all function should be executed correctly within the code");
    }
  
    
  }customElements.define('com-sap-sample-echarts-race', Race)

})()