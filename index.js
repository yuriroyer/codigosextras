var tBody = $('#todasMensagens');

    $('#enviar').on('click', function () {
        const serializedForm = $('#mensagemform').serialize();
        $.ajax(
            {
                type: 'POST',
                url: 'modelo/mensagem.php',
                data: serializedForm,
                success: function (response) {
                    //console.log(JSON.stringify(response));
                    var obj = JSON.parse(response);
                    console.log(obj);
                    $("#mensagem").val("");

                    $.ajax(
                        {
                            type: 'GET',
                            url: 'modelo/mensagem.php?metodo=listaMensagem&idticket=' + obj.idticket,

                            success: function (responseMensagem) {
                                console.log(responseMensagem);
                                tBody.html(responseMensagem);
                            }
                        }
                    );

                    return false;
                },
                error: function (error) {
                    console.log('failed: ' + JSON.stringify(error))
                }
            }
        );
        return false;
    });
