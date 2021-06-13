import './style.css';

const api = import.meta.env.VITE_API_KEY;

const app = document.querySelector<HTMLDivElement>('#app')!
console.log(api);

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https:/y/vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
