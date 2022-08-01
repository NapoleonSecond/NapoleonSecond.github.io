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
        <div id="chart_div" style="width: 900px; height: 500px;"></div>
        </div>
      `
    class Googlecalendar extends HTMLElement {
      constructor () {
        super();
        this.test = "just a testing string";

        this._shadowRoot = this.attachShadow({ mode: 'open' });

        this._shadowRoot.appendChild(prepared.content.cloneNode(true));
  
        this._root = this._shadowRoot.getElementById('root');
        this._chart = this._shadowRoot.getElementById('chart_div');
  
        this._props = {};
  
        this.render();
      }

  
      onCustomWidgetResize (width, height) {
        this.render()
      }
  
      async render () {
        await getScriptPromisify('https://www.gstatic.com/charts/loader.js')
        console.log("This is google Calendar");
        this.myDataBinding.data.forEach(element => {
          console.log(element); 
      });
        

        google.charts.load("current", {packages:["calendar"]});
        google.charts.setOnLoadCallback(this.drawChart);

     
        
      }

    

    }
  
    customElements.define('com-sap-sample-google-calendar', Googlecalendar)
  })()