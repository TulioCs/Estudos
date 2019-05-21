/**
 * Obter um usuario
 * Obter o endereço de um usuario a partir do seu ID
 * Obter o número de telefone de um usuario a partir do seu ID
 */

function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: "João",
      dataNascimento: new Date()
    });
  }, 500);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      telefone: "932323233",
      ddd: 33
    });
  }, 1000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      rua: "Dos bobos",
      numero: 0
    });
  }, 1500);
}

obterUsuario(function resolverUsuario(erro, usuario) {
  if (erro) {
    console.error("Erro em Usuario", erro);
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
    if (erro1) {
      console.error("Erro em Telefone", erro1);
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
      if (erro2) {
        console.error("Erro em Endereco", erro2);
        return;
      }
      console.log(`
        Nome:${usuario.nome}
        Endereco:${endereco.rua},${endereco.numero}
        Telefone:(${telefone.ddd})${telefone.telefone}`);
    });
  });
});
