$('input[type=file]').on('change',function(){
    console.log("toto");
    //get the file name
    let fileName = $(this).val().split("\\").slice(-1)[0] ;
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
});

//sur le clique du boutton le formulaire d'ajout apparait

$("#bouton").click(function(){
    $("#formToHide").toggle();
})