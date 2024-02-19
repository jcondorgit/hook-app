import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'
import './index.css'
//import { Memorize } from './06-memos/Memorize'
//import { MemorizeHook } from './06-memos/MemorizeHook'
//import { CallBackHook } from './06-memos/CallBackHook'
import { Padre } from './07-tarea-memo/Padre'
//import { Layout } from './05-useLayoutEffect/UseLayout'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { MultipleCustomHooks } from './03-ejemplos/MultipleCustomHooks'
//import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterCustomHook } from './01-useState/CounterCustomHook'
//import { SimpleForm } from './02-useEfect/SimpleForm'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Padre/>
  </React.StrictMode>,
)
