#Berlin-Uhr mit React.js
Die Berlin-Uhr, auch inoffiziell Mengenlehreuhr genannt, ist eine...

hier ist das foto von Berlin-Uhr:

Inline-style: Berlin-Uhr

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

#Das Prinzip

Die Stunden und Minuten werden durch leuchtende Segmente in
vier waagerecht untereinander angeordneten Streifen dargestellt. In
der ersten, zweiten und vierten Zeile sind vier und in der dritten elf
Leuchten angebracht. Die ersten beiden Zeilen zeigen mit roten
Leuchten die Stunde an, wobei im oberen Streifen ein leuchtendes
Segment für fünf Stunden und im unteren für eine Stunde steht. Die
aktuelle Stunde ergibt sich aus der Addition der Werte.
Entsprechend werden in den beiden unteren Zeilen die Minuten mit
gelben Segmenten in Fünfer- und Einerschritten angezeigt. Die
Leuchten für 15, 30 und 45 Minuten sind zur besseren Ablesbarkeit
rot. Über den Zeilen befindet sich ein rundes Blinklicht, das im
Sekundentakt ein- oder ausgeschaltet wird.
