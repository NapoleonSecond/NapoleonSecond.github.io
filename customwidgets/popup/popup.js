(function() { 
    let template = document.createElement("template");
	template.innerHTML = ` 
    <h1>Pop-up info widget - web components</h1>

    <form>
      <div>
        <label for="cvc">Enter your CVC <popup-info img="img/alt.png" data-text="Your card validation code (CVC) is an extra security feature — it is the last 3 or 4 numbers on the back of your card."></popup-info></label>
        <input type="text" id="cvc">
      </div>
    </form>
    `;


    class PopUpInfo extends HTMLElement {
        constructor() {
          // Always call super first in constructor
          super();
      
          // Create a shadow root
          const shadow = this.attachShadow({mode: 'open'});
      
          // Create spans
          const wrapper = document.createElement('span');
          wrapper.setAttribute('class', 'wrapper');
      
          const icon = document.createElement('span');
          icon.setAttribute('class', 'icon');
          icon.setAttribute('tabindex', 0);
      
          const info = document.createElement('span');
          info.setAttribute('class', 'info');
      
          // Take attribute content and put it inside the info span
          const text = this.getAttribute('data-text');
          info.textContent = text;
      
          // Insert icon
          let imgUrl;
          if(this.hasAttribute('img')) {
            imgUrl = this.getAttribute('img');
          } else {
            imgUrl = 'img/default.png';
          }
      
          const img = document.createElement('img');
          img.src = imgUrl;
          icon.appendChild(img);
      
          // Create some CSS to apply to the shadow dom
          const style = document.createElement('style');
          console.log(style.isConnected);
      
          style.textContent = `
            .wrapper {
              position: relative;
            }
      
            .info {
              font-size: 0.8rem;
              width: 200px;
              display: inline-block;
              border: 1px solid black;
              padding: 10px;
              background: white;
              border-radius: 10px;
              opacity: 0;
              transition: 0.6s all;
              position: absolute;
              bottom: 20px;
              left: 10px;
              z-index: 3;
            }
      
            img {
              width: 1.2rem;
            }
      
            .icon:hover + .info, .icon:focus + .info {
              opacity: 1;
            }
          `;
      
          // Attach the created elements to the shadow dom
          shadow.appendChild(style);
          console.log(style.isConnected);
          shadow.appendChild(wrapper);
          wrapper.appendChild(icon);
          wrapper.appendChild(info);
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
      
      // Define the new element
      customElements.define('com-demo-popup', PopUpInfo);

})();