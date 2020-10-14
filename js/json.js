"use strict"
//JSON -> javascript object notation

var persona ={nombre:"uriel", facebook:"prietokun"};
var personas =[{nombre:"samuel", facebook:"SrJancho"},
            {nombre:"paco el chato", facebook:"paco jontas"},
            persona
        ]
var personaJSON =JSON.stringify(persona);
var nuevaPersona =JSON.parse(personaJSON)


