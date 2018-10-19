const { Observable, fromEvent } = rxjs;

const attr$ = Observable.create(observer => {
    const el = document.createElement('custom-list');
    document.body.appendChild(el);

    el.setAttribute('data', [1,2,3,4,5].join(','));

    el.addEventListener('onattributechanged', (ev) => {
        observer.next(ev.detail);
    });
});

attr$.subscribe({
    next: (e) => {
        console.log(e);
    }
});