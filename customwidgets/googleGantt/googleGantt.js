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
        const prelimArr = theDate.split(".");
        var theDateString = prelimArr[2].substr(2).substr(0,10);
        const theDateArray= theDateString.split("-");
        return theDateArray;
        
      }

      processDateData = (theData) => {
        console.log(theData);
        var dates = [];
        var value = [];
        if(theData !== undefined){
          for (let index = 0; index < theData.length; index++) {
            dates.push(this.convertDimensionDateToDate(theData[index]["dimensions_0"]["id"]));
            value.push(theData[index]["measures_0"]["raw"]);
          }
          console.log("this is dates");
          console.log(dates);
          return [dates,value];
        }
        
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
        await getScriptPromisify('https://www.gstatic.com/charts/loader.js')
        console.log("This is google Calendar");
        
        google.charts.load("current", {packages:["calendar"]});
        google.charts.setOnLoadCallback(this.drawChart);
      }

      drawChart = ()=> {
        /*var dateArray = [];
        var valueArray =[];*/
        var targetRows = [];

        const theResult = this.processDateData(this.myDataBinding.data);
        const dateArray = theResult[0];
        const valueArray = theResult[1];
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({ type: 'date', id: 'Date' });
        dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
        console.log("This is first date and then value array");
        console.log(dateArray);
        console.log(valueArray);
        for (let index = 0; index < valueArray.length; index++) {
          targetRows.push(
            [new Date(dateArray[index][0],dateArray[index][1],dateArray[index][2]), valueArray[index]]
          )
          
        }
         dataTable.addRows(targetRows);
 
        var chart = new google.visualization.Calendar(this._chart);
 
        var options = {
          title: this.name,
          height: 350,
        };
 
        chart.draw(dataTable, options);
    }

    

    }
  
    customElements.define('com-sap-sample-google-calendar', Googlecalendar)
  })()