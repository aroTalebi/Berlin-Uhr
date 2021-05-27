#Berlin-Uhr mit React.js
---
[Die Berlin-Uhr, auch inoffiziell Mengenlehreuhr genannt, ist eine...](https://de.wikipedia.org/wiki/Berlin-Uhr)
---
hier ist das foto von Berlin-Uhr:

Inline-style: 
![Berlin-Uhr](https://www.google.com/search?q=(https://de.wikipedia.org/wiki/Berlin-Uhr)&client=firefox-b-d&sxsrf=ALeKk00JM_Omae04lyefroML5SOQ0tTw-g:1622140539255&source=lnms&tbm=isch&sa=X&ved=2ahUKEwivmvi0wOrwAhWhgP0HHU_WAvAQ_AUoA3oECAEQBQ&biw=1536&bih=750#imgrc=f8enen7EvekakM "Berlin-Uhr")

```javascript
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

```
#Das Prinzip
```Die Anzeige der Zeit erfolgt in einem Stellenwertsystem zur Basis 5.
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
```



