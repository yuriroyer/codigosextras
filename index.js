const tBody = $('#todasMensagens')

    $('#enviar').on('click', function () {
        const serializedForm = $('#mensagemform').serialize();
        $.ajax(
            {
                type: 'POST',
                url: 'modelo/mensagem.php',
                data: serializedForm,
                success: function (response) {
                    console.log(JSON.stringify(response));
                    $("#mensagem").val("");
                    tBody.append(
                        $.ajax(
                            {
                                type: 'GET',
                                url: 'modelo/mensagem.php?metodo=listaMensagem&idticket='+data.idticket,
                            }
                        );
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