// app.js

// Import VanJS
const { h, render } = Van;
console.log("huhu", Van.createElement)
// Define a custom component
const Counter = () => {
    let count = 0;

    const increment = () => {
        count++;
        renderApp(); // Re-render the app when the count changes
    };

    const renderApp = () => {
        return h('div', { class: 'counter' }, [
            h('h1', {}, `Count: ${count}`),
            h('button', { onclick: increment }, 'Increment')
        ]);
    };

    return renderApp();
};

// Render the custom element to the DOM
const appElement = document.getElementById('app');
render(appElement, Counter());
