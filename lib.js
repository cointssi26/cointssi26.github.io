const API_KEY = "AIzaSyAvpZkss-x_VswogLHIKnlpiDPpovXVgXs";
const CALENDAR_ID = "cointssi26@gmail.com";

function obtenerEstiloPais(titulo){

    titulo = (titulo || "").toLowerCase();


    if(titulo.includes("taller 1"))
        return {flag:"🇵🇪", color:"#ffad1f", textcolor:"#000", idponente:"#idptaller1"};
    if(titulo.includes("taller 2"))
        return {flag:"🇵🇪", color:"#ffad1f", textcolor:"#000", idponente:"#idptaller2"};
    if(titulo.includes("taller 3"))
        return {flag:"🇵🇪", color:"#ffad1f", textcolor:"#000", idponente:"#idptaller3"};
    if(titulo.includes("taller 4"))
        return {flag:"🇵🇪", color:"#ffad1f", textcolor:"#000", idponente:"#idptaller4"};
    if(titulo.includes("taller 5"))
        return {flag:"🇵🇪", color:"#ffad1f", textcolor:"#000", idponente:"#idptaller5"};
    if(titulo.includes("taller 6"))
        return {flag:"🇵🇪", color:"#ffad1f", textcolor:"#000", idponente:"#idptaller6"};
    if(titulo.includes("taller 7"))
        return {flag:"🇵🇪", color:"#d18b12", textcolor:"#000", idponente:"#idptaller7"};
    if(titulo.includes("taller 8"))
        return {flag:"🇵🇪", color:"#d18b12", textcolor:"#000", idponente:"#idptaller8"};


    
    if(titulo.includes("pineda"))
        return {flag:"🇵🇪", color:"#2499ff", textcolor:"#000", idponente:"#idppineda"};

    if(titulo.includes("milwart"))
        return {flag:"🇵🇪", color:"#2499ff", textcolor:"#000", idponente:"#idpmilwart"};

    if(titulo.includes("jean"))
        return {flag:"🇵🇪", color:"#2499ff", textcolor:"#000", idponente:"#idpjean"};

    if(titulo.includes("ramírez"))
        return {flag:"🇵🇪", color:"#2499ff", textcolor:"#000", idponente:"#idpramirez"};

    if(titulo.includes("calderón"))
        return {flag:"🇵🇪", color:"#2499ff", textcolor:"#000", idponente:"#idpcalderon"};

    if(titulo.includes("huancapaza"))
        return {flag:"🇵🇪 🇧🇷", color:"#2499ff", textcolor:"#000", idponente:"#idpliz"};

    if(titulo.includes("belizario"))
        return {flag:"🇵🇪 🇧🇷", color:"#2499ff", textcolor:"#000", idponente:"#idpivar"};

    if(titulo.includes("diego"))
        return {flag:"🇫🇷", color:"#4ac42b", textcolor:"#000", idponente:"#idpdiego"};

    if(titulo.includes("irma"))
        return {flag:"🇲🇽", color:"#4ac42b", textcolor:"#000", idponente:"#idpirma"};

    if(titulo.includes("erika"))
        return {flag:"🇺🇸", color:"#4ac42b", textcolor:"#000", idponente:"#idperika"};

    if(titulo.includes("zapata"))
        return {flag:"🇵🇪", color:"#2499ff", textcolor:"#000", idponente:"#idpzapata"};




    if(titulo.includes("inauguración") || titulo.includes("clausura") )
        return {flag:"", color:"#b2260a", textcolor:"#fff", idponente:""};

    if(titulo.includes("taller"))
        return {flag:"", color:"#ffad1f", textcolor:"#000", idponente:""};

    if(titulo.includes("concurso"))
        return {flag:"", color:"#6a0087", textcolor:"#fff", idponente:"#concurso"};

    if(titulo.includes("registro") )
        return {flag:"", color:"#000", textcolor:"#fff", idponente:""};


    if(titulo.includes("ponencia"))
        return {flag:"", color:"#0000ff", textcolor:"#ffffff", idponente:""};

    if(titulo.includes("almuerzo"))
        return {flag:"", color:"#ccc", textcolor:"#000", idponente:""};





    if(titulo.includes("perú") || titulo.includes("peru"))
        return {flag:"🇵🇪", color:"#2499ff", textcolor:"#000"};

    if(titulo.includes("brasil"))
        return {flag:"🇧🇷", color:"#4ac42b", textcolor:"#000"};

    if(titulo.includes("argentina"))
        return {flag:"🇦🇷", color:"#0288d1", textcolor:"#ffffff"};

    if(titulo.includes("chile"))
        return {flag:"🇨🇱", color:"#c62828", textcolor:"#ffffff"};

    if(titulo.includes("colombia"))
        return {flag:"🇨🇴", color:"#f9a825", textcolor:"#ffffff"};

    if(titulo.includes("ecuador"))
        return {flag:"🇪🇨", color:"#fbc02d", textcolor:"#ffffff"};

    if(titulo.includes("bolivia"))
        return {flag:"🇧🇴", color:"#388e3c", textcolor:"#ffffff"};


    if(titulo.includes("españa") || titulo.includes("espana"))
        return {flag:"🇪🇸", color:"#ef6c00", textcolor:"#ffffff"};



    return {flag:"", color:"#1565c0", textcolor:"#ffffff"};
}

document.addEventListener("DOMContentLoaded", function(){

    const calendarEl = document.getElementById("calendar");

    const calendar = new FullCalendar.Calendar(calendarEl, {

        locale: "es",

        initialDate: "2026-06-30",

        views: {
            tresDias: {
                type: "timeGrid",
                duration: { days: 3 }
            }
        },

        initialView: "tresDias",

        height: "auto",

        slotMinTime: "07:00:00",
        slotMaxTime: "18:00:00",
        scrollTime: "07:00:00",

        slotDuration: "00:30:00",

        allDaySlot: false,

        slotLabelFormat: {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        },

        eventTimeFormat: {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        },

        visibleRange: {
            start: "2026-06-30",
            end: "2026-07-03"
        },

        validRange: {
            start: "2026-06-30",
            end: "2026-07-03"
        },

        headerToolbar: {
            left: "",
            center: "title",
            right: ""
        },

        weekends: false,

        nowIndicator: true,

        dayHeaderFormat: {
            weekday: "short",
            day: "numeric",
            month: "numeric"
        },

        events: function(fetchInfo, successCallback, errorCallback){

            const url =
                "https://www.googleapis.com/calendar/v3/calendars/" +
                encodeURIComponent(CALENDAR_ID) +
                "/events?key=" +
                API_KEY +
                "&singleEvents=true" +
                "&orderBy=startTime" +
                "&timeMin=2026-06-30T00:00:00Z" +
                "&timeMax=2026-07-03T23:59:59Z";

            fetch(url)
            .then(response => response.json())
            .then(data => {

                const events = data.items.map(event => {

                    const estilo = obtenerEstiloPais(event.summary);

                    return {
                        title: estilo.flag + " " + event.summary,

                        start: event.start.dateTime || event.start.date,

                        end: event.end.dateTime || event.end.date,

                        //url: event.htmlLink || "",
                        url: estilo.idponente,

                        backgroundColor: estilo.color,
                        borderColor: estilo.color,
                        textColor: estilo.textcolor
                    };

                });

                successCallback(events);

            })
            .catch(error => {
                console.error(error);
                errorCallback(error);
            });

        },

        /*
        eventClick: function(info){

            info.jsEvent.preventDefault();

            if(info.event.url){
                window.open(info.event.url, "_blank");
            }

        }
        */

        eventClick: function(info){
            //console.log("info.event.url", info.event.url);
            info.jsEvent.preventDefault();
            if(info.event.url!=""){
                const seccion = document.querySelector(info.event.url);
                if(seccion){
                    seccion.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        }        

    });

    calendar.render();

});