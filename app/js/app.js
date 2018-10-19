var el = document.createElement('custom-list');
document.body.appendChild(el);

el.setAttribute('data', [1,2,3,4,5].join(','));

el.addEventListener('onrendered', (ev) => {
    console.log('<custom-list />::render');
});

el.addEventListener('onattributechanged', (ev) => {
    const { attrName, newVal, oldVal } = ev.detail;
    console.log(ev.detail);
});