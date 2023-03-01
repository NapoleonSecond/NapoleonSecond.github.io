(function() { 
	let template = document.createElement("template");
	template.innerHTML = `
	<head> 
	<link href="https://napoleonsecond.github.io/customwidgets/adaptableGantt/ibm-gantt-chart.css" rel="stylesheet" />
	</head>
		<style>
		</style> 
	<body>
	<div>
	<i class="fa fa-address-book"></i>
	</div>
	</body>
	`;

	class Box extends HTMLElement {
		constructor() {
			super(); 
			let shadowRoot = this.attachShadow({mode: "open"});
			shadowRoot.appendChild(template.content.cloneNode(true));
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});
			this._props = {};
		}

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };
		}

		onCustomWidgetAfterUpdate(changedProperties) {
			if ("color" in changedProperties) {
				this.style["background-color"] = changedProperties["color"];
			}
			if ("opacity" in changedProperties) {
				this.style["opacity"] = changedProperties["opacity"];
			}
		}
	}

	customElements.define("com-sample-box",Box);
})();