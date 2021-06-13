import './style.css';

import { Client } from "@notionhq/client"
const apiKey = import.meta.env.VITE_API_KEY;
const databaseId = import.meta.env.VITE_DATABASE_ID;


const getResources = () => {
  const notion = new Client({auth: apiKey});
  return [{
    title: "Sample Resource added with Notion API",
    url: "https://google.com",
  }]
}

const app = document.querySelector<HTMLDivElement>('#app')!
console.log(getResources());

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https:/y/vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
