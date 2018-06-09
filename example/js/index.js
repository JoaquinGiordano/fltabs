
const xtabs = new Xtabs();

xtabs.start({
    container: '#container'
})

xtabs.addTab({
    title:'Tab 0',
    container: '#container',
    content: `<h1>Tab 0</h1>`,
    closeButton: false
})

xtabs.addTab({
    title:'Tab 1',
    container: '#container',
    content: `<h1>Tab 1</h1>`,
    closeButton: true
})

xtabs.addTab({
    title:'Tab 2',
    container: '#container',
    content: `<h1>Tab 2</h1>`,
    closeButton: true
})
