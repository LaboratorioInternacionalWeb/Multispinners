![npm](https://img.shields.io/badge/version-1.0.0-blue)
![npm](https://img.shields.io/npm/dw/localeval.svg?style=flat-square)
![Maintained](	https://img.shields.io/badge/Maintained%3F-yes-green.svg)

[![Header](https://raw.githubusercontent.com/LaboratorioInternacionalWeb/Multispinners/main/shared/readme_header.png "Header")](https://labweb.mx/)

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)


### Install
```
npm install multispinners
```

<img src="https://raw.githubusercontent.com/LaboratorioInternacionalWeb/Multispinners/main/shared/Example.gif">

### Usage
```Javascript
    const  multiSpinner = require('multispinners')
    const  ms = new  multiSpinner()
       
    // Show All spinners
    ms.showSpinners()
       
    //Create a spinner
    ms.createSpinner("threeDots", {frames:[".", "..", "..."]})
    ms.createSpinner("emoji", {frames:[": ", ":)", ":D"]})
    
    //Parallel add spinners
    ms.add('faa587d1',"threeDots","Loading") // costum spinner
    ms.add('606903ff',undefined,"Charging") // default spinner
    ms.add('ade726da',"dots2","Connecting") // spinner choosed
    ms.add('1c9159a6',"emoji","Loving") // costum choosed
    
    // Start the loaders
    ms.start()
    
    // Update text
    setTimeout(() =>  ms.update('faa587d1',"Update text"), 3000);
    // Fail icon and update text
    setTimeout(() =>  ms.fail("606903ff","Fail text"), 3500);
    // create a subtext message
    setTimeout(() =>  ms.subtext("606903ff","Check your conection"), 5500) // spinner choosed
    // Update icon and update text
    setTimeout(() =>  ms.succed("faa587d1","Succed text"), 6500);
    // Warn icon and update text
    setTimeout(() =>  ms.warn("ade726da","Warn text"), 4500);
    // Info icon and save text
    setTimeout(() =>  ms.info("1c9159a6"), 8000);
    
    // End all loaders
    setTimeout(() =>  ms.stop(), 9000)
```
