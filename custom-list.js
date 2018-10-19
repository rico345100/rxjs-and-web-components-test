/**
 * <CustomList> Component
 * @attr {string} data - Serialized string for string[] to render
 */

class CustomList extends HTMLElement {
    static get observedAttributes() {
        return ['data'];
    }
    constructor(...args) {
        super(...args);
        this.attachShadow({ mode: 'open' });
        const containerEl = document.createElement('div');

        this.shadowRoot.appendChild(containerEl);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    }
    render() {
        const data = this.getAttribute('data');
        const containerEl = this.shadowRoot.querySelector('div');
        const childs = Array.prototype.slice.call(containerEl.childNodes);
        
        for(let i = 0; i < childs.length; i++) {
            containerEl.removeChild(childs[i]);
        }
        
        if(data) { 
            const splitedData = data.trim().split(",");

            splitedData.map(data => {
                const divEl = document.createElement('div');

                if(divEl.textContent) {
                    divEl.textContent = `Data: ${data}`;
                }
                else {
                    divEl.innerText = `Data: ${data}`;
                }

                containerEl.appendChild(divEl);
            });
        }
    }
}

window.customElements.define('custom-list', CustomList);