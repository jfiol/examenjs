function filanova() {//Funció per introduir files a l'índex
    $("#taula").append("<tr><td>"+$("#NOM").val()+
    "</td><td>"+$("#LLINATGES").val()+
    "</td><td>"+edat()+//Funció que calcula i retorna l'edat a partir de la data de naixament
    "</td><td>"+salarinet()+//Funció que calcula i retorna el salari net a partir del salari brut
    "</td><td>"+'<button class="btnremove">delete</button><td></tr>');
//Botó que elimina la <tr> més próxima, la seua.
//Funció que posibilita la eliminació de les files
    $("#taula").on('click', '.btnremove', function() {
    $(this).closest('tr').remove();
});
    $("#formtraballador")[0].reset()
}

function salarinet(salbrut) {//Funció par calcular el salari net amb la fórmula-->salari brut-(salari brut+(IRPF/100))
    salarinet=$("#SALBRUT").val()-($("#SALBRUT").val()*($("#IRPF").val()/100))
    console.log (salarinet);
    return salarinet;
}

function edat () {//Funció per calcular l'edat a partir de la data de naixament
    var datnaixament = $('#DATNAIXEMENT').val();
    var today = new Date();
    console.log (today);
    console.log (datnaixament);
    var miliseconds = 31556952000;
    var edat = ((Date.parse(today) - Date.parse(datnaixament)))/miliseconds;/*Aquí, tenguent en compte que amb Data.parse 
les dates pasen a number en forma de milisegons, dividim la resta del día actual y de la data de naixament per
per la quantitat de milisegons que té un any*/
    var edatString = edat.toFixed(0);//Aquí feim que l'edat no mostri decimals.
    console.log(edat);  
    return edatString;
}