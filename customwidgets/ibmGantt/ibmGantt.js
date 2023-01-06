var getScriptPromisify = (src) => {
    return new Promise(resolve => {
      $.getScript(src, resolve)
    })
  }
  (function () {
    const prepared = document.createElement('template')
    prepared.innerHTML = `
    
    <head>
    <title>Simple Gantt</title>
    <link href="https://napoleonsecond.github.io/customwidgets/ibmGantt/dist/ibm-gantt-chart.css"/>

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
    <div id="root" style="width: 100%; height: 100%;">
    <div id="gantt"></div>
      `
    class IBMGantt extends HTMLElement {
      constructor () {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });

        this._shadowRoot.appendChild(prepared.content.cloneNode(true));
  
        this._root = this._shadowRoot.getElementById('root');
        this._chart = this._shadowRoot.getElementById('gantt');
  
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
        await getScriptPromisify('https://napoleonsecond.github.io/customwidgets/ibmGantt/dist/ibm-gantt-chart.js');
        

        var dataVals = [];

        if (this.data != undefined){
          console.log("Data exists");
          for (let index = 0; index < this.data.length; index++){         
            var originalStartTime = this.data[index]["START_TIME"];
            var originalEndTime = this.data[index]["END_TIME"];
            if(originalStartTime != NaN && this.data[index]["VARIANTE"] != "" ){
              var valid = originalEndTime != "@NullMember" && originalStartTime != "@NullMember" && this.data[index]["START_DATE"] != "@NullMember" && this.data[index]["END_DATE"] != "@NullMember" && this.data[index]["END_DATE"] != " ";
              if(valid){
                dataVals.push(
                  {
                    id: index.toString(),
                    name: this.data[index]["VARIANTE"],
                    activities: [
                      {
                      id: index.toString(),
                      name: this.data[index]["VARIANTE"],
                      start: this.data[index]["START_DATE"].concat(" ", originalStartTime),
                      end:  this.data[index]["END_DATE"].concat( " ", originalEndTime),
                      }
                    ]
                  }
                )
              }
              
            } 
          }
        }

        console.log(dataVals);
        /*
        var data = [
          {
            id: 'NURSES+Anne',
            name: 'Anne',
            activities: [
              {
                id: 'SHIFTS+Emergency+Monday+2+8',
                name: 'Emergency',
                start: 1474880400000,
                end: 1474902000000,
              },
            ],
          },
          {
            id: 'NURSES+Bethanie',
            name: 'Bethanie',
            activities: [],
          },
          {
            id: 'NURSES+Betsy',
            name: 'Betsy',
            activities: [
              {
                id: 'SHIFTS+Emergency+Wednesday+12+18',
                name: 'Emergency',
                start: 1475089200000,
                end: 1475110800000,
              },
              {
                id: 'SHIFTS+Emergency+Saturday+12+20',
                name: 'Emergency',
                start: 1475348400000,
                end: 1475377200000,
              },
              {
                id: 'SHIFTS+Consultation+Friday+8+12',
                name: 'Consultation',
                start: 1475247600000,
                end: 1475262000000,
              },
            ],
          },
          {
            id: 'NURSES+Cathy',
            name: 'Cathy',
            activities: [
              {
                id: 'SHIFTS+Emergency+Sunday+20+2',
                name: 'Emergency',
                start: 1475463600000,
                end: 1475485200000,
              },
              {
                id: 'SHIFTS+Emergency+Saturday+12+20',
                name: 'Emergency',
                start: 1475348400000,
                end: 1475377200000,
              },
              {
                id: 'SHIFTS+Emergency+Monday+18+2',
                name: 'Emergency',
                start: 1474938000000,
                end: 1474966800000,
              },
            ],
          },
          {
            id: 'NURSES+Cindy',
            name: 'Cindy',
            activities: [
              {
                id: 'SHIFTS+Emergency+Saturday+20+2',
                name: 'Emergency',
                start: 1475377200000,
                end: 1475398800000,
              },
              {
                id: 'SHIFTS+Consultation+Friday+8+12',
                name: 'Consultation',
                start: 1475247600000,
                end: 1475262000000,
              },
              {
                id: 'SHIFTS+Consultation+Tuesday+8+12',
                name: 'Consultation',
                start: 1474988400000,
                end: 1475002800000,
              },
            ],
          },
        ];
        */
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
            },
            // Configures how to fetch activities for the Gantt
            // As activities are provided along with the resources, this section only describes how to create
            // activity Gantt properties from the activity model objects.
            activities: {
              start: 'start', // The start of the activity is provided with the start property of the model object
              end: 'end', // The end of the activity is provided with the end property of the model object
              name: 'name', // The name of the activity is provided with the name property of the model object
            },
            dateFormat : "YYYY-MM-DD HH:MM:SS"
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
          title: 'UN Project', // Title for the Gantt to be displayed in the toolbar
        };
        new Gantt(this._chart /* the id of the DOM element to contain the Gantt chart */, config);
      }

    }
    customElements.define('com-sap-sample-ibm-gantt', IBMGantt)
  })()