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
              id: 1,
              parent: null,
              name: "Root",
              actualStart: Date.UTC(2018, 01, 02),
              actualEnd: Date.UTC(2018, 06, 15),
            },
            {
              id: 2,
              parent: 1,
              name: "Parent 1",
              actualStart: Date.UTC(2018, 01, 02),
              actualEnd: Date.UTC(2018, 01, 22),
              progressValue: "90%"
            },
            {
              id: 3,
              parent: 2,
              name: "Child 1–1",
              actualStart: Date.UTC(2018, 01, 23),
              actualEnd: Date.UTC(2018, 02, 20),
              progressValue: "75%"
            },
            {
              id: 4,
              parent: 2,
              name: "Child 1–2",
              actualStart: Date.UTC(2018, 02, 23),
              actualEnd: Date.UTC(2018, 02, 23),
              progressValue: "60%"
            },
            {
              id: 5,
              parent: 1,
              name: "Parent 2",
              actualStart: Date.UTC(2018, 02, 26),
              actualEnd: Date.UTC(2018, 04, 26),
              progressValue: "80%"
            },
            {
              id: 7,
              parent: 6,
              name: "Child 2–1",
              actualStart: Date.UTC(2018, 04, 29),
              actualEnd: Date.UTC(2018, 05, 15),
              progressValue: "30%"
            },
          
            ];
            // create a data tree
            var treeData = anychart.data.tree(data, "as-tree");
        
            // create a chart
            var chart = anychart.ganttProject();
        
            // set the data
            chart.data(treeData);
            // configure the scale
            chart.getTimeline().scale().minimum("2018-01-01");
            chart.getTimeline().scale().maximum(Date.UTC("2018-06-30"));
            // set the container id
            chart.container(rootEle);
            // initiate drawing the chart
            chart.draw();
            chart.fitAll();
        });
      }

    

    }
  
    customElements.define('com-sap-sample-anychart-gantt', anyChartGantt)
  })()