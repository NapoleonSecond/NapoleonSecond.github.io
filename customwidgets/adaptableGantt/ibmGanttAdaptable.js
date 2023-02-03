var getScriptPromisify = (src) => {
    return new Promise(resolve => {
      $.getScript(src, resolve)
    })
  }

  (function () {
    const prepared = document.createElement('template')
    const ENDDATE = "CM_END_TIMESTMP"
    const STARTDATE = "CM_START_TIMESTMP"
    prepared.innerHTML = `
    
    <head>
    <title>Simple Gantt</title>
    <link href="https://napoleonsecond.github.io/customwidgets/adaptableGantt/dist/ibm-gantt-chart.css" rel="stylesheet" />

    <!--  Page styles  -->
    <style>
      html {
        height: 100%;
      }
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #gantt {
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="gantt"></div>
    `
    class IBMGanttAdaptable extends HTMLElement {
      constructor () {

        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });

        this._shadowRoot.appendChild(prepared.content.cloneNode(true));

        this.isLoaded= false;
  
        this._root = this._shadowRoot.getElementById('root');
        this._chart = this._shadowRoot.getElementById('gantt');
  
        this._props = {};
  
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

        
        await getScriptPromisify('https://napoleonsecond.github.io/customwidgets/adaptableGantt/dist/ibm-gantt-chart.js');
        
        
        var dataVals = [];
        var catToDate = new Map();
        var listOfCat = [];

        if (this.data != undefined){
          console.log("Data exists");
          

          for (let index = 0; index < this.data.length; index++){         
            var startDate = new Date(this.data[index][STARTDATE]);
            var endDate = new Date(this.data[index][ENDDATE]);
            startDate.setMilliseconds(0);
            endDate.setMilliseconds(0);

            var category = this.data[index]["ZBUS_CAT"];
            
            if(this.data[index]["STATUS"] != ""){
                var status = this.data[index]["STATUS"];

                if(listOfCat.indexOf(category) === -1){
                  listOfCat.push(category);
                  dataVals.push(
                    {
                      id: category.concat("_ID"),
                      name: category,
                    }
                  );
                  var tempMap = new Map();
                  tempMap.set("smallStart",Infinity);
                  tempMap.set("largeEnd",0);
                  catToDate.set(category,tempMap);
                }

                dataVals.push(
                  {
                    id: "TaskNum".concat("+",index.toString()),
                    name: status,
                    parent: category.concat("_ID"),
                    activities: [
                      {
                      id: index.toString().concat("+", "id"),
                      name: status.concat("+","Task"),
                      start: Date.parse(startDate.toISOString()),
                      end:  Date.parse(endDate.toISOString()),
                      },
                    ],
                  }
                )
                
                
                  
                if(Date.parse(startDate.toISOString()) < catToDate.get(category).get("smallStart")){
                  var tempLarg = catToDate.get(category).get("largeEnd");
                  catToDate.get(category).set("smallStart",Date.parse(startDate.toISOString()));
                }

                if(Date.parse(endDate.toISOString()) > catToDate.get(category).get("largeEnd")){
                  var tempSmall = catToDate.get(category).get("smallStart");
                  catToDate.get(category).set("largeEnd",Date.parse(endDate.toDateString()));
                }
                
                
              
              
            } 
          }
          console.log(catToDate);
          console.log(dataVals);
          
          var config = {
            data: {
              // Configures how to fetch resources for the Gantt
              resources: {
                data: dataVals, // resources are provided in an array. Instead, we could configure a request to the server.
                // Activities of the resources are provided along with the 'activities' property of resource objects.
                // Alternatively, they could be listed from the 'data.activities' configuration.
                activities: 'activities',
                name: 'name', // The name of the resource is provided with the name property of the resource object.
                id: 'id', // The id of the resource is provided with the id property of the resource object.
                parent: 'parent',
              },
              // Configures how to fetch activities for the Gantt
              // As activities are provided along with the resources, this section only describes how to create
              // activity Gantt properties from the activity model objects.
              activities: {
                start: 'start', // The start of the activity is provided with the start property of the model object
                end: 'end', // The end of the activity is provided with the end property of the model object
                name: 'name', // The name of the activity is provided with the name property of the model object
              },
            },
            // Configure a toolbar associated with the Gantt
            toolbar: [
              'title',
              'search',
              'separator',
              {
                type: 'button',
                text: 'Refresh',
                fontIcon: 'fa fa-refresh fa-lg',
                onclick: function(ctx) {
                  ctx.gantt.draw();
                },
              },
              'fitToContent',
              'zoomIn',
              'zoomOut',
            ],
            title: 'Simple Gantt', // Title for the Gantt to be displayed in the toolbar
          };
          new Gantt(this._chart /* the id of the DOM element to contain the Gantt chart */, config);
        }

        console.log(dataVals);
        
      
        
      }

    }
    customElements.define('com-sap-sample-ibm-gantt-adaptable', IBMGanttAdaptable)
  })()