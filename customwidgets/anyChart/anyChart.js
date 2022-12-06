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
                actualStart: Date.UTC(2018, 01, 02),
                actualEnd: Date.UTC(2018, 06, 15),
                children: [{
                        id: "1_1",
                        name: "Planning",
                        actualStart: Date.UTC(2018, 01, 02),
                        actualEnd: Date.UTC(2018, 01, 22),
                        connectTo: "1_2",
                        connectorType: "finish-start",
                        progressValue: "75%"
                    },
                    {
                        id: "1_2",
                        name: "Design and Prototyping",
                        actualStart: Date.UTC(2018, 01, 23),
                        actualEnd: Date.UTC(2018, 02, 20),
                        connectTo: "1_3",
                        connectorType: "start-start",
                        progressValue: "60%"
                    },
                    {
                        id: "1_3",
                        name: "Evaluation Meeting",
                        actualStart: Date.UTC(2018, 02, 23),
                        actualEnd: Date.UTC(2018, 02, 23),
                        connectTo: "1_4",
                        connectorType: "start-start",
                        progressValue: "80%"
                    },
                    {
                        id: "1_4",
                        name: "Application Development",
                        actualStart: Date.UTC(2018, 02, 26),
                        actualEnd: Date.UTC(2018, 04, 26),
                        connectTo: "1_5",
                        connectorType: "finish-finish",
                        progressValue: "90%"
                    },
                    {
                        id: "1_5",
                        name: "Testing",
                        actualStart: Date.UTC(2018, 04, 29),
                        actualEnd: Date.UTC(2018, 05, 15),
                        connectTo: "1_6",
                        connectorType: "start-finish",
                        progressValue: "60%"
                    },
                    {
                        id: "1_6",
                        name: "Deployment",
                        actualStart: Date.UTC(2018, 05, 20),
                        actualEnd: Date.UTC(2018, 05, 27),
                        connectTo: "1_7",
                        connectorType: "start-finish",
                        progressValue: "100%"
                    },
                    {
                        id: "1_7",
                        name: "Maintenance",
                        actualStart: Date.UTC(2018, 05, 30),
                        actualEnd: Date.UTC(2018, 06, 11),
                        progressValue: "40%"
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
            //chart.getTimeline().scale().maximum(Date.UTC(2018, 06, 30));
            // set the container id
            chart.container(this.rootEle);
            // initiate drawing the chart
            chart.draw();
            chart.fitAll();
        });
      }

    

    }
  
    customElements.define('com-sap-sample-anyChart-gantt', anyChartGantt)
  })()