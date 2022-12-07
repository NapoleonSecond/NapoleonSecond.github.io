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
        <div id="container"></div>
      `
    class anyChartGantt extends HTMLElement {
      constructor () {
        super();
        this.test = "just a testing string for anychart gantt";

        this._shadowRoot = this.attachShadow({ mode: 'open' });

        this._shadowRoot.appendChild(prepared.content.cloneNode(true));
  
        this._root = this._shadowRoot.getElementById('container')
  
        this._props = {};
  
        this.render();
      }

      getChartDiv = () => {
        return this._shadowRoot.getElementById("container");
      }
  
      onCustomWidgetResize (width, height) {
        this.render();
      }

      onCustomWidgetBeforeUpdate(changedProperties) {
        this._props = { ...this._props, ...changedProperties };
      }

      onCustomWidgetAfterUpdate(changedProperties) {
        if ("name" in changedProperties) {
          this.name = changedProperties["name"];
        }
        this.render();
      }
  
      async render () {
        await getScriptPromisify('https://cdn.anychart.com/releases/8.6.0/js/anychart-core.min.js')
        await getScriptPromisify('https://cdn.anychart.com/releases/8.6.0/js/anychart-gantt.min.js')
        
        const rootEle = this.getChartDiv();
        
        anychart.onDocumentReady(function () {
            // create data
            var data = [{
                id: "1",
                name: "Development Life Cycle",
                actualStart: Date(2018, 01, 02),
                actualEnd: Date(2018, 06, 15),
                children: [{
                        id: "1_1",
                        name: "Planning",
                        actualStart: Date("2018-01-02"),
                        actualEnd: Date("2018-01-22"),
                        connectTo: "1_2",
                        connectorType: "finish-start",
                        progressValue: "75%"
                    },
                    {
                        id: "1_2",
                        name: "Design and Prototyping",
                        actualStart: Date("2018-01-23"),
                        actualEnd: Date("2018-02-20"),
                        connectTo: "1_3",
                        connectorType: "start-finish",
                        progressValue: "60%"
                    },
                    {
                        id: "1_3",
                        name: "Evaluation Meeting",
                        actualStart: Date("2018-02-23"),
                        actualEnd: Date("2018-02-28"),
                        connectorType: "start-finish",
                        progressValue: "80%"
                    },
                    
                ]
            }];
            // create a data tree
            var treeData = anychart.data.tree(data, "as-tree");
        
            // create a chart
            var chart = anychart.ganttProject();
        
            // set the data
            chart.data(treeData);
            // configure the scale
            //chart.getTimeline().scale().maximum(Date(2018, 06, 30));
            // set the container id
            chart.container(this.rootEle);
            // initiate drawing the chart
            chart.draw();
            chart.fitAll();
        });
      }

    

    }
  
    customElements.define('com-sap-sample-anychart-gantt', anyChartGantt)
  })()