
# Counter JavaScript

Questo progetto contiene un counter, il quale aumenta il numero se premuto il pulsante + e diminuisce se premuto il pulsante - fino ad arrivare a 0.


## Screenshots

![App Screenshot](https://github.com/Flowers115/CounterJS/blob/main/Screenshot/Screenshot%202023-07-12%20alle%2016.09.41.png?raw=true)


## Implementazione progetto
Per realizzare il progetto è stato innanzitutto creata l'interfaccia grafica in HTML e CSS caricando uno sfondo e realizzando una "card" effetto vetro per conterene il counter vero e proprio.  
I pulsanti sono stati creati con il codice seguente:  
```html
<div class="plusMinus">        
        <button onclick="minus()">
          -
        </button>
                      
        <div class="numero" id="number">
          0
        </div>
                      
        <button onclick="plus()">
          +
        </button>
      </div>
```

ed in seguito sviluppati in JavaScript: 
```javascript
let contatore = 0;

function plus() {
    contatore++;
    document.getElementById("number").innerHTML = contatore;
}

function minus() {
    if (contatore !=0) {
        contatore--;
    }
    document.getElementById("number").innerHTML = contatore;
}
```

## GitHub Link  
Il progetto è disponibile al seguente link: https://flowers115.github.io/CounterJS/