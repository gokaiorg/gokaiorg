import AOS from "aos";
import "aos/dist/aos.css";

const globalAOS = AOS.init({
  // note: your options here
  startEvent: 'load'
})

// trigger when the Nuxt page is ready
window.onNuxtReady(() => {
  AOS.refresh()
})

export default ({ app }) => {
  app.AOS = globalAOS
}
