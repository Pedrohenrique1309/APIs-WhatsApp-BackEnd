/***************************************************************************
  * Objetivo: Criar funcoes para as APIs do projeto WhatsApp
  * Data: 30/01/2024
  * Autor: Pedro
  * Versão: 1.0
***************************************************************************/

/* Import dos dados */
const contatosUsers = require('./contatos')

const getInformacoesPessoais = (function(numero){

    let usuario = contatosUsers.contatos.whats_users
    let telefone = String(numero)

    let dadosUsuario = {}

    let status = false

    usuario.forEach(function(item){
        if(String(item.number) == telefone){
            dadosUsuario.id = item.id
            dadosUsuario.nome = item.account
            dadosUsuario.criacaoConta = item.created_since.start
            dadosUsuario.exclusaoConta = item.created_since.end
            dadosUsuario.numero = item.number

            status = true
        }

    })

    if(status == true){
        return dadosUsuario
    }else{
        return false
    }

})

const getInformacoesProfile = (function(numero){

    let usuario = contatosUsers.contatos.whats_users
    let telefone = String(numero)

    let dadosUsuario = {}

    let status = false
    
    usuario.forEach(function(item){
        if(String(item.number) == telefone){
            dadosUsuario.nickname = item.nickname
            dadosUsuario.foto = item.profile_image
            dadosUsuario.fundo = item.background

            status = true
        }
    })

    if(status == true){
        return dadosUsuario
    }else{
        return false
    }

})

const getContatosUsuario = (function(numero){

    let usuario = contatosUsers.contatos.whats_users
    let telefone = String(numero)

    let contatos = []

    let status = false

    usuario.forEach(function(item){
        if(String(item.number) == telefone){
            status = true

            item.contacts.forEach(function(itemContato){
                let dadosUsuario = {}
                dadosUsuario.nomeContato = itemContato.name
                dadosUsuario.fotoContato = itemContato.image
                dadosUsuario.descricaoContato = itemContato.description

                contatos.push(dadosUsuario)

            })
        }

    })

    if(status == true){
        return contatos
    }else{
        return false
    }

})

const getConversaUsuario = function(numero){

    let usuario = contatosUsers.contatos.whats_users
    let telefone = String(numero)

    let contatos = []

    let status = false

    usuario.forEach(function(item){
        if(String(item.number) == telefone){
            status = true
            contatos.push(item.contacts)

        }

    })

    if(status == true){
        return contatos
    }else{
        return false
    }

}

const getMenssagensUsuarioContato = function(numero, nomeContato){

    let usuario = contatosUsers.contatos.whats_users
    let telefone = String(numero)
    let contato = String(nomeContato)

    let menssagens = {
        numero: telefone,
        contato: contato,
        menssagens: []
    }

    let status = false

    usuario.forEach(function(item){
        if(String(item.number) == telefone){
            status = true 
            item.contacts.forEach(function(itemContato){
                if(String(itemContato.name) == contato)
                menssagens.menssagens.push(itemContato.messages)
                status = true
            })
        }
    })

    if(status == true){
        return menssagens
    }else{
        return false
    }

}

const getPalavraChave = function(numero,nomeContato,palavraChave){

    let usuario = contatosUsers.contatos.whats_users
    let telefone = String(numero)
    let contato = String(nomeContato)
    let menssagem = String(palavraChave)

    let contatos = {
        numero: telefone,
        contato: contato,
        menssagem: []
    }

    let status = false

    usuario.forEach(function(item){
        if(String(item.number) == telefone){
            status = true 
            item.contacts.forEach(function(itemContato){
                if(String(itemContato.name) == contato)
                status = true
                itemContato.messages.forEach(function(itemContatoMenssagem){
                    if(String(itemContatoMenssagem.content).toLowerCase().includes(menssagem.toLowerCase())){
                        contatos.menssagem.push(itemContatoMenssagem.content)
                        status = true
                    }
                })
            })
        }
    })

    if(status == true){
        return contatos
    }else{
        return false
    } 

}

module.exports = {
    getInformacoesPessoais,
    getInformacoesProfile,
    getContatosUsuario,
    getConversaUsuario,
    getMenssagensUsuarioContato,
    getPalavraChave
}

//console.log(getPalavraChave('11987876567','Jane Smith',"hi jane"))
//console.log(getMenssagensUsuarioContato('11987876567','Jane Smith'))
//console.log(getConversaUsuario('11987876567'))
//console.log(getContatosUsuario('11987876567'))
//console.log(getInformacoesPessoais('11987876567'))
//console.log(getInformacoesProfile('11987876567'))