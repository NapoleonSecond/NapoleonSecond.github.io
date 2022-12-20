var getScriptPromisify = (src) => {
    return new Promise(resolve => {
      $.getScript(src, resolve)
    })
  }
  (function () {
    const prepared = document.createElement('template')
    prepared.innerHTML = `
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <link href="https://napoleonsecond.github.io/customwidgets/jQueryChart//lib/css/style.css" type="text/css" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.css" rel="stylesheet" type="text/css">
        <style type="text/css">
            body {
                font-family: Helvetica, Arial, sans-serif;
                font-size: 13px;
                padding: 0 0 50px 0;
            }
            h1 {
                margin: 40px 0 20px 0;
            }
            h2 {
                font-size: 1.5em;
                padding-bottom: 3px;
                border-bottom: 1px solid #DDD;
                margin-top: 50px;
                margin-bottom: 25px;
            }
            table th:first-child {
                width: 150px;
            }
            .github-corner:hover .octo-arm {
                animation: octocat-wave 560ms ease-in-out
            }
            @keyframes octocat-wave {
                0%, 100% {
                    transform: rotate(0)
                }
                20%, 60% {
                    transform: rotate(-25deg)
                }
                40%, 80% {
                    transform: rotate(10deg)
                }
            }
            @media (max-width:500px) {
                .github-corner:hover .octo-arm {
                    animation: none
                }
                .github-corner .octo-arm {
                    animation: octocat-wave 560ms ease-in-out
                }
            }
        </style>
        <div id="root" style="width: 100%; height: 100%;">
        <div id="chart_div" style="width: 900px; height: 500px;"></div>
        </div>
      `
    class ibmGantt extends HTMLElement {
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
        await getScriptPromisify('https://napoleonsecond.github.io/customwidgets/jQueryChart/lib/js/jquery.min.js');
        await getScriptPromisify('https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js');
        await getScriptPromisify('https://napoleonsecond.github.io/customwidgets/jQueryChart/lib/js/jquery.fn.gantt.js');
        await getScriptPromisify('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js');
        await getScriptPromisify('https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.js');
        //var $ = jQuery;
        
        jQuery( document ).ready(function ($) {
            $(function() {
                "use strict";
    
                var demoSource = [{
                    name: "Sprint 0",
                    desc: "Analysis",
                    values: [{
                        from: 1320192000000,
                        to: 1322401600000,
                        label: "Requirement Gathering",
                        customClass: "ganttRed"
                    }]
                },{
                    desc: "Scoping",
                    values: [{
                        from: 1322611200000,
                        to: 1323302400000,
                        label: "Scoping",
                        customClass: "ganttRed"
                    }]
                },{
                    name: "Sprint 1",
                    desc: "Development",
                    values: [{
                        from: 1323802400000,
                        to: 1325685200000,
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                },{
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: 1325685200000,
                        to: 1325695200000,
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                },{
                    name: "Sprint 2",
                    desc: "Development",
                    values: [{
                        from: 1325695200000,
                        to: 1328785200000,
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                },{
                    desc: "Showcasing",
                    values: [{
                        from: 1328785200000,
                        to: 1328905200000,
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                },{
                    name: "Release Stage",
                    desc: "Training",
                    values: [{
                        from: 1330011200000,
                        to: 1336611200000,
                        label: "Training",
                        customClass: "ganttOrange"
                    }]
                },{
                    desc: "Deployment",
                    values: [{
                        from: 1336611200000,
                        to: 1338711200000,
                        label: "Deployment",
                        customClass: "ganttOrange"
                    }]
                },{
                    desc: "Warranty Period",
                    values: [{
                        from: 1336611200000,
                        to: 1349711200000,
                        label: "Warranty Period",
                        customClass: "ganttOrange"
                    }]
                }];
    
                // shifts dates closer to Date.now()
                var offset = new Date().setHours(0, 0, 0, 0) -
                    new Date(demoSource[0].values[0].from).setDate(35);
                for (var i = 0, len = demoSource.length, value; i < len; i++) {
                    value = demoSource[i].values[0];
                    value.from += offset;
                    value.to += offset;
                }
    
                $('chart_div').gantt({
                    source: demoSource,
                    navigate: "scroll",
                    scale: "weeks",
                    maxScale: "months",
                    minScale: "hours",
                    itemsPerPage: 10,
                    scrollToToday: false,
                    useCookie: true,
                    onItemClick: function(data) {
                        alert("Item clicked - show some details");
                    },
                    onAddClick: function(dt, rowId) {
                        alert("Empty space clicked - add an item!");
                    },
                    onRender: function() {
                        if (window.console && typeof console.log === "function") {
                            console.log("chart rendered");
                        }
                    }
                });
    
                $('chart_div').popover({
                    selector: ".bar",
                    title: function _getItemText() {
                        return this.textContent;
                    },
                    container: '.gantt',
                    content: "Here's some useful information.",
                    trigger: "hover",
                    placement: "auto right"
                });
    
                prettyPrint();
    
            });
        })(jQuery);
        
        
      }

    }
    customElements.define('com-sap-sample-ibm-gantt', ibmGantt)
  })()