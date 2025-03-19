Hallo dit wordt een belastings formulier in de stijl van de NS. Dit is een schoolopdracht!!!.

# proces week 1

Deze week heb ik gekeken naar de verschillende formulieren de op de NS website te vinden zijn. Ik heb ook de eisen opgeschreven en dingen die leuk zijn voor de gebruiker die alleen online kunnen. Hiermee heb ik een design gemaakt. Ik heb ook een workshop van

![alt text](images/FormulierVB1.png)
![alt text](images/image.png)
![alt text](images/image-1.png)
![alt text](images/image-2.png)

## Technische eisen
* invul vakjes voor tekst, cijfers, datums
* vink knopjes
* compatible voor elk device
* Als de site herladen wordt, blijft alles ingevuld

**Interessante design onderdelen om te maken**
* Een manier om te checken of iets ingevulds valide is.
* Vragen dichtklappen als de optie "nee. ga verder met vraag x" is ingedrukt.
* Ingevulde tekst leegmaken "nee. ga verder met vraag x" is ingedrukt.
* Kunnen klikken op woorden voor een popup met uitleg.


## design

* startscherm heeft startknop en een 'meer informatie' knop.
* Elk scherm heeft een vraag (1a, 1b, 1c etc)
* Als je een vraag kan overslaan vouwt het onnodige gedeelte in.

## bronnen

NS: https://www.ns.nl/
https://www.werkenbijns.nl/vacatures
Kijk bij formulieren: https://www.ns.nl/voorwaarden.html

https://zeroheight.com/4a05a30ad/p/04b3ac-nessie--ns-design-system

https://valsplat.nl/work/een-design-system-van-wereldklasse

# proces week 2

Ik ben begonnen met vraag 1 uitwerken en uitvogelen hoe fieldsets en al die verschillende input velden werken. Met hulp van Elton heb ik gemaakt dat sectie 1b kan verdwijnen en dat het bestand toevoegen knop verschijnt. Dit deden we met een has() en vervolgens heb ik dat zelf verandert zodat het css nesting gebruikt. Ik heb ook de ns fundamentels site bekeken en heb daar de kleuren uitgehaald.

![alt text](images/image-8.png)
![alt text](images/image-7.png)
![alt text](images/image-4.png)


Ik was niet blij met hoe het er tot nu toe uitzag dus ik ben bezig geweest met de fonts en een beetje de stijl van de NS overnemen. Ook heb ik een les HTML + CSS validatie gevolgd waarna ik dat heb toegevoegd heb in mijn project.

![alt text](images/image-3.png)

![alt text](images/image-6.png)

![alt text](images/image-11.png)

Ik gebruik ook een grid net zoals de NS website. En ik wou dat het vlak verdween bij een bepaalde scherm grote, maar dat wou niet lukken. Dus toen liet Elton me het zien via flexbox. Wat wel werkte, maar ik wou weten waarom het niet werkte met het grid dus toen vroeg ik het aan Dante, die ook een grid gebruikt en ik had het goed gedaan, maar het grid werkte net iets anders dan ik dacht. Ik had 'grid-column: 0 / 6;' gebruikt, maar het moest 'grid-column: 1 / 7;' zijn en dat was het enigste wat mis was.

![alt text](images/image-9.png)

![alt text](images/image-10.png)

## feedback, vooruitgang & volgende week

### feedback

* gebruik gamification
* alles op een pagina, om je meer uit te dagen

### vooruitgang

* vraag 1 gemaakt
* input velden goed en fout
* vraag 1b kunnen inklappen
* iets van de opmaak

### volgende week

* vinkje en kruisje toevoegen als iets nog moet ingevuld worden
* vraag 4 meerdere erfgenamen op een manier doen
* de styling verbeteren?

## bronnen

fundamentels: https://www.ns.nl/platform/fundamentals/index.html

mediaqueries: https://www.w3schools.com/css/css3_mediaqueries_ex.asp

grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout



# proces week 3

Ik begon met het kijken naar mijn stijl, omdat ik er nog steeds niet blij mee was. Ik begon met het oppervlakkige uitterlijk zoals de positie het hele blok van onderkant halen en dat soort kleine dingen.

![alt text](images/image-12.png)

Vervolgens ging ik kijken naar validatie. Ik had het vorige week toegevoegd, maar nog niet gestyled. Ik begon met de tekstboxjes zelf stijlen en vervolgens heb ik inspiratie genomen van Dante hoe hij de foutmeldingen liet zien.

![alt text](images/image-13.png)

Ik heb vervolgens gekeken naar vraag 4, specifiek naar meerdere verkrijgers toevoegen. Ik had in gedachte om de gebruiker een getal te laten invoeren en dan te klikken op genereren. Dit lukte met behulp van veel zoeken en chatGPT, maar ik was er niet tevreden mee. Het had ook een paar grote fundamentele fouten zoals je kon meerdere keren op de knop drukken en het bleef maar nieuwe secties aanmaken.

<video controls src="images/20250319-2145-34.9823960.mp4" title="Title"></video>

Vervolgens ging weer verder met validatie. Ik wou dat als je een vlak openvouwde dat die vragen dan ook verplicht zouden worden. En dan natuurlijk ook weer terug gaan naar niet verplicht. Hiervoor was javascript nodig wat ik eigenlijk nog vrij weinig heb gebruikt. De eerste versie had get elementbyId en was specifiek voor 1 knop. Vervolgens had ik een versie gemaakt met getelementsbyname wat ik persoonlijk mooier vind, want dan worden bijvoorbeeld alle radio buttons op required gezet. Op deze manier werkte mijn validatie code ook. Dus nu wist ik hoe ik het wou doen en toen was het alleen nog maar herbruikbaar maken. Dit heb ik gedaan met hulp van chatGPT, want wat ik had geschreven werkte niet en vervolgens ook om te bug fixen. Een probleem waar ik tegen aanliep was dat in html je niet "aanhalingstekens" kan gebruiken, maar het kon wel als ik 'tremas' gebruikte.

```js
//first version
function RequiredOnnOff(){
    var chkYes = document.getElementById("Nee1b1");

var test = document.getElementById("Ja1b2");
var test2 = document.getElementById("kIP");

if(chkYes.checked){
    test.removeAttribute("required");
    test2.removeAttribute("required");
}
else{
    test.setAttribute("required", true);
    test2.setAttribute("required", true);
    console.log(test, test2);
}
}

//second version
function RequiredOnnOff(){
var chkYes = document.getElementById("Nee1b1");
var test = document.getElementsByName("1b3");

if(chkYes.checked){
    test.forEach(input => input.removeAttribute("required"));
}
else{
    test.forEach(input => input.setAttribute("required", "true"));
    console.log(test);
}
}

// final version
function RequiredOnnOff(inputNames, shouldRequire){
inputNames.forEach(name => {
var inputElement = document.getElementsByName(name);
    if (shouldRequire){
        inputElement.forEach(input => input.setAttribute("required", "true"));
    }else{
        inputElement.forEach(input => input.removeAttribute("required"));
    }
});
}
 ```
<video controls src="images/20250319-2214-14.0280402.mp4" title="Title"></video>

## bronnen

Turning on/off the required attribute:
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName
https://stackoverflow.com/questions/40434416/setting-and-removing-the-required-attribute-using-javascript-and-html5#:~:text=You%20could%20use%20.,directly%20operate%20on%20the%20element.
https://www.aspsnippets.com/Articles/1981/RadioButton-OnClick-event-example-in-JavaScript/


https://www.w3schools.com/tags/tag_template.asp

## proces week 4

## bronnen

https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild