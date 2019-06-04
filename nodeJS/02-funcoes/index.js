/**
 * Obter um usuario
 * Obter o endereço de um usuario a partir do seu ID
 * Obter o número de telefone de um usuario a partir do seu ID
 */

//importando modulo interno do node.js
const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  //quando der algum problema -> reject(ERRO)
  //quando sucesso -> resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        id: 1,
        nome: "João",
        dataNascimento: new Date()
      });
    }, 500);
  });
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        telefone: "932323233",
        ddd: 33
      });
    }, 1000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      rua: "Dos bobos",
      numero: 0
    });
  }, 1500);
}

main();
async function main() {
  try {
    const usuario = await obterUsuario();
    // const telefone = await obterTelefone(usuario.id);
    // const endereco = await obterEnderecoAsync(usuario.id);

    // ENDEREÇO NÃO DEPENDE DE TELEFONE

    const resultado = await Promise.all([
      obterEnderecoAsync(usuario.id),
      obterTelefone(usuario.id)
    ]);
    const endereco = resultado[0];
    const telefone = resultado[1];
    console.log(`
        Nome:${usuario.nome},
        Endereco:${endereco.rua},${endereco.numero},
        Telefone:(${telefone.ddd})${telefone.telefone}`);
  } catch (error) {
    console.error("ERRO", error);
  }
}

// const usuarioPromisse = obterUsuario();
// // para manipular sucesso, usamos o .then
// // para manipular erros, usamos o .catch
// usuarioPromisse
//   .then(function(usuario) {
//     return obterTelefone(usuario.id).then(function resolverTelefone(result) {
//       return {
//         usuario: {
//           nome: usuario.nome,
//           id: usuario.id
//         },
//         telefone: result
//       };
//     });
//   })
//   .then(function(resultado) {
//     const endereco = obterEnderecoAsync(resultado.usuario.id);
//     return endereco.then(function resolverEndereco(result) {
//       return {
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: result
//       };
//     });
//   })
//   .then(function(resultado) {
//     console.log(`
//          Nome:${resultado.usuario.nome}
//          Endereco:${resultado.endereco.rua},${resultado.endereco.numero}
//          Telefone:(${resultado.telefone.ddd})${resultado.telefone.telefone}`);
//   })
//   .catch(function(erro) {
//     console.log("erro", erro);
//   });

// obterUsuario(function resolverUsuario(erro, usuario) {
//   if (erro) {
//     console.error("Erro em Usuario", erro);
//     return;
//   }
//   obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
//     if (erro1) {
//       console.error("Erro em Telefone", erro1);
//       return;
//     }
//     obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
//       if (erro2) {
//         console.error("Erro em Endereco", erro2);
//         return;
//       }
//       console.log(`
//         Nome:${usuario.nome}
//         Endereco:${endereco.rua},${endereco.numero}
//         Telefone:(${telefone.ddd})${telefone.telefone}`);
//     });
//   });
// });
