
const fltabs = new FLtabs();

fltabs.start({
    container: '#container'
})

fltabs.addTab({
    title:'Tab 0',
    container: '#container',
    content: `<h1>Tab 0</h1>`,
    closeButton: false
})

fltabs.addTab({
    title:'Tab 1',
    container: '#container',
    content: `<h1>Tab 1</h1>`,
    closeButton: true
})

fltabs.addTab({
    title:'Tab 2',
    container: '#container',
    content: `<h1>Tab 2</h1>`,
    closeButton: true
})
