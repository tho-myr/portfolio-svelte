import './app.css'
import BlobBackground from './lib/BlobBackground.svelte'
import App from "./App.svelte";

const app = new App({
  target: document.getElementById('app'),
})

export const blob = document.getElementById("blob");

export default app
