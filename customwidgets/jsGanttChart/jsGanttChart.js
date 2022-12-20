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
        
        this.render();
      }
  
      async render () {
        await getScriptPromisify('https://napoleonsecond.github.io/customwidgets/jsGanttChart/gantt-master/dist/frappe-gantt.js');
        

        var tasks = [
			{
				start: '2018-10-01',
				end: '2018-10-08',
				name: 'Redesign website',
				id: "Task 0",
				progress: 20
			},
			{
				start: '2018-10-03',
				end: '2018-10-06',
				name: 'Write new content',
				id: "Task 1",
				progress: 5,
				dependencies: 'Task 0'
			},
			{
				start: '2018-10-04',
				end: '2018-10-08',
				name: 'Apply new styles',
				id: "Task 2",
				progress: 10,
				dependencies: 'Task 1'
			},
			{
				start: '2018-10-08',
				end: '2018-10-09',
				name: 'Review',
				id: "Task 3",
				progress: 5,
				dependencies: 'Task 2'
			},
			{
				start: '2018-10-08',
				end: '2018-10-10',
				name: 'Deploy',
				id: "Task 4",
				progress: 0,
				dependencies: 'Task 2'
			},
			{
				start: '2018-10-11',
				end: '2018-10-11',
				name: 'Go Live!',
				id: "Task 5",
				progress: 0,
				dependencies: 'Task 4',
				custom_class: 'bar-milestone'
			},
			{
				start: '2014-01-05',
				end: '2019-10-12',
				name: 'Long term task',
				id: "Task 6",
				progress: 0
			}
		]
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
			view_mode: 'Quarter Day',
			language: 'en'
		});
      }

    }
    customElements.define('com-sap-sample-js-gantt', jsGantt)
  })()