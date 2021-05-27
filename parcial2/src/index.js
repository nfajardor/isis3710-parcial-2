import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import Main from './components/Main'
import { IntlProvider } from 'react-intl'
import localEsMessages from './locales/es.json'
import localEnMessages from './locales/en.json'
const lang = window.navigator.language || navigator.browserLanguage
const urlEs =
  'https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/a467415350e87c13faf9c8e843ea2fd20df056f3/series-es.json'
const urlEn =
  'https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/e2d16f7440d51cae06a9daf37b0b66818dd1fe31/series-en.json'
let url = ''
let msg = {}

function getData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data)
      ReactDOM.render(
        <IntlProvider locale={lang} messages={msg}>
          <Main data={data} />
        </IntlProvider>,
        document.getElementById('root'),
      )
    })
}
function startWebsite() {
  if (lang.includes('es')) {
    url = urlEs
    msg = localEsMessages
  } else if (lang.includes('en')) {
    url = urlEn
    msg = localEnMessages
  }

  getData()
}

startWebsite()
/*
fetch(urlES)
  .then((res) => res.json())
  .then((data) => {
    //console.log('data: ')
    //console.log(data)
    ReactDOM.render(<Main data={data} />, document.getElementById('root'))
  })
  .catch((error) => {
    console.error(error)
  })*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
