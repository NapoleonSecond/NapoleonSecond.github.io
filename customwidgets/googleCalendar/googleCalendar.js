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
        this.test = "just a testing string for google calendar";

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

      convertDimensionDateToDate(theDate){
        const prelimArr = theDate;
        var theDateString = prelimArr[2].substr(2).substr(0,10);
        const theDateArray= theDateString.split("-");
        console.log(theDateArray);
        return theDateArray;
        
      }

      processDateData = (theData) => {
        console.log(theData);
        if(theData !== undefined){
          for (let index = 0; index < theData.length; index++) {
            console.log(this.convertDimensionDateToDate(theData[index]["dimensions_0"]["id"]));
          }
        }
        
      }
  
      async render () {
        await getScriptPromisify('https://www.gstatic.com/charts/loader.js')
        console.log("This is google Calendar");
        this.processDateData(this.myDataBinding.data);
        google.charts.load("current", {packages:["calendar"]});
        google.charts.setOnLoadCallback(this.drawChart);
      }

      drawChart = ()=> {
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({ type: 'date', id: 'Date' });
        dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
        dataTable.addRows([
           [ new Date(2012, 3, 13), 37032 ],
           [ new Date(2012, 3, 14), 38024 ],
           [ new Date(2012, 3, 15), 38024 ],
           [ new Date(2012, 3, 16), 38108 ],
           [ new Date(2012, 3, 17), 38229 ],
           // Many rows omitted for brevity.
           [ new Date(2013, 9, 4), 38177 ],
           [ new Date(2013, 9, 5), 38705 ],
           [ new Date(2013, 9, 12), 38210 ],
           [ new Date(2013, 9, 13), 38029 ],
           [ new Date(2013, 9, 19), 38823 ],
           [ new Date(2013, 9, 23), 38345 ],
           [ new Date(2013, 9, 24), 38436 ],
           [ new Date(2013, 9, 30), 38447 ]
         ]);
 
        var chart = new google.visualization.Calendar(this._chart);
 
        var options = {
          title: "Red Sox Attendance",
          height: 350,
        };
 
        chart.draw(dataTable, options);
    }

    

    }
  
    customElements.define('com-sap-sample-google-calendar', Googlecalendar)
  })()