var getScriptPromisify = (src) => {
    return new Promise(resolve => {
      $.getScript(src, resolve)
    })
  }
  (function () {
    const prepared = document.createElement('template')
    prepared.innerHTML = `
        <style>
            body {
                font-family: sans-serif;
                background: #ccc;
            }
            .container {
                width: 80%;
                margin: 0 auto;
            }
            /* custom class */
            .gantt .bar-milestone .bar {
                    fill: tomato;
            }
        </style>
        <link rel="stylesheet" href="https://napoleonsecond.github.io/customwidgets/jsGanttChart/gantt-master/dist/frappe-gantt.css" />
        <div id="root" style="width: 100%; height: 100%;">
        <div id="chart_div" style="width: 900px; height: 500px;"></div>
        </div>
      `
    class jsGantt extends HTMLElement {
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
        this.render();
      }

      onCustomWidgetBeforeUpdate(changedProperties) {
        this._props = { ...this._props, ...changedProperties };
      }

      onCustomWidgetAfterUpdate(changedProperties) {
        if ("name" in changedProperties) {
          this.name = changedProperties["name"];
        }
        
        if ("data" in changedProperties) {
            this.data = changedProperties["data"];
          }
          
        this.render();
        console.log("PropertyHasChanged");
        console.log(this.data);
      }
  
      async render () {
        await getScriptPromisify('https://napoleonsecond.github.io/customwidgets/jsGanttChart/hour.js');
        

        var tasks = []
        
        if (this.data != undefined){
            console.log("Data exists");
            for (let index = 0; index < this.data.length; index++){
              console.log(this.data[index]["START_DATE"]);
  
              var theStartTime = new Date(this.data[index]["START_DATE"]);
              var theEndTime = new Date(this.data[index]["END_DATE"]);
              
              var originalStartTime = this.data[index]["START_TIME"];
              var originalEndTime = this.data[index]["END_TIME"];
  
              var originalStartTimeArray = originalStartTime.split(":");
              var originalEndTimeArray = originalEndTime.split(":");
  
              theStartTime.setHours(originalStartTimeArray[0]);
              theStartTime.setMinutes(originalStartTimeArray[1]);
              theStartTime.setSeconds(originalStartTimeArray[2]);
  
              theEndTime.setHours(originalEndTimeArray[0]);
              theEndTime.setMinutes(originalEndTimeArray[1]);
              theEndTime.setSeconds(originalEndTimeArray[2]);
  
              tasks.push(
                {
                    start: this.data[index]["START_DATE"].concat(" ", originalStartTime),
				    end:  this.data[index]["END_DATE"].concat( " ", originalEndTime),
				    name: this.data[index]["VARIANTE"],
				    id: index.toString(),
				    progress: 100
                }
              )
            }
            console.log(tasks);
          }
		var gantt_chart = new Gantt(this._chart, tasks, {
			on_click: function (task) {
				console.log(task);
			},
			on_date_change: function(task, start, end) {
				console.log(task, start, end);
			},
			on_progress_change: function(task, progress) {
				console.log(task, progress);
			},
			on_view_change: function(mode) {
				console.log(mode);
			},
			view_mode: 'Hour',
			language: 'en'
		});
      }

    }
    customElements.define('com-sap-sample-js-gantt', jsGantt)
  })()