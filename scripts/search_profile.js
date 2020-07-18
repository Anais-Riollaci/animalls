//sur le clique du boutton le formulaire de filtres apparait

$("#bouton").click(function(){
    $("#formToHide").toggle();
})



const formTypes = jQuery('#form_types');

function getRacesSelect(typesSelected, racesSelected) {
    const oldSelect = jQuery('#form_race');
    jQuery.ajax({
        method: 'GET',
        url: `/ajax/species/${typesSelected}/races`,
        success: function (response) {
            oldSelect.replaceWith(jQuery(response));

            if (racesSelected) {
                const newSelect = jQuery('#form_race');

                const possibleValues = [];
                newSelect.children("option").each(function() {
                    const optionValue = $(this).val();
                    possibleValues.push(optionValue);
                });

                if(possibleValues.indexOf(racesSelected) > -1) {
                    newSelect.val(racesSelected)
                } else {
                    newSelect.val(possibleValues[0])
                }
            }
        }
    })
}

function clearRacesSelect(raceSelect) {
    raceSelect.empty();
    raceSelect.prop("disabled", true);
}

function updateRacesSelect() {
    const typeSelected = formTypes.val();
    const formRace = jQuery('#form_race');
    const raceSelected = formRace.val();


    if (typeSelected) {
        getRacesSelect(typeSelected, raceSelected);
    } else {
        clearRacesSelect(formRace)
    }
}


jQuery(window).on("load", updateRacesSelect); // on page load
formTypes.on('change', updateRacesSelect); // on form type update


