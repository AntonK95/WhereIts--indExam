# Indivuduell Examination Frontendramverk - Where It's @

## Uppdrag
Ditt uppdrag är att koda ihop en frontend till biljettjänsten *Where its @*. Den ska se ut enligt nedan mockup.

![image](https://github.com/AntonK95/WhereIts--indExam/assets/148202281/c98e418b-4c3e-4aa1-849d-416dae984873)


## Tekniska krav för godkänt
Du skall i denna uppgift för att få godkänt visa att du behärskar följande tekniker och delar inom React:
- Pages & Components
- useState & useEffect
- Props
- API-hantering
- Routing mellan Pages
- Avancerad statehantering med externt bibliotek (ex Zustand)

## Krav för väl godkänt
Du skall välja ut ytterligare 2 st React Hooks, alt. 2 st externa bibliotek (eller en av varje), som vi inte gått igenom i klassen och som du läser på om och implementerar i din applikation. Utöver detta så beskriver du i din *README.md*-fil, hur dessa hookar/bibliotek fungerar, samt varför du tycker att de passar just din applikation. För VG måste du även ha en god struktur på din applikation, med god uppdelning i Pages och Komponenter.

## Övriga Hooks

### useCallback
useCallback är en hook som sparar en callback-funktion så att den inte behöver skapas på nytt varje gång en komponent renderas om. Detta kan förhindra onödig omrendering av komponenter och förbättra prestandan i din applikation. I denna kod används useCallback för att spara funktionen addToCart, som används för att lägga till objekt i kundvagnen. Genom att memorisera den här funktionen säkerställs att den bara skapas om det finns förändringar i de variabler den är beroende av, detta hjälper till att undvika onödig omrendering. Detta kan vara särskilt användbart när callback-funktioner används som props i barnkomponenter eller när de är beroende av andra variabler eller hooks.

### useContext 
useContext är en hook som används för att få tillgång till värden som har delats över flera komponenter med hjälp av Context API i React. I denna kod skapas en context med createContext, som innehåller ett tillståndsobjekt från Zustand (useEventStore). Detta tillståndsobjekt innehåller en lista med händelser och en funktion för att uppdatera den listan.

Genom att använda useContext(EventContext) kan man få tillgång till detta tillståndsobjekt och dess funktioner från vilken komponent som helst som är omgiven av EventContext.Provider. Det gör det möjligt för komponenter att dela tillstånd och uppdateringsfunktioner utan att behöva skicka dem ner som props genom flera nivåer av komponentträd. Detta kan göra koden renare och mer lättläst.

## Övriga krav
- Er app måste inte vara pixel-perfekt mot skissen, men ni måste ha en enhetlig, responsiv design
- Appen skall se bra ut på alla skärmstorlekar mellan 375px - 500px
- Sidan får aldrig krascha
- När en beställing gjorts skall en biljett skapas där ni genererar fram ett biljettID på 5 tecken (endast STORA BOKSTÄVER och siffror tillåtna), en Sektion och en sittplats. Vid köp av flera biljetter till ett och samma evenemang skall Sektionen vara samma på alla biljetter, och sittplatserna skall vara bredvid varandra.

## Övrig info
Figma-skissen ger inte en fullständig överblick över hur projektet bör byggas. [Se tillhörande introduktionsfilm](https://vimeo.com/manage/videos/940396692/46ea16e4b9) där det förklaras vilka tolkningar ni kan få lov att göra.

