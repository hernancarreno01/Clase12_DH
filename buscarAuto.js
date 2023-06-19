const autosImportados = require('./modulo');

const concesionaria = {
  autos: autosImportados,
  buscarAuto: function(patente) {
    let elAuto = this.autos.find(auto => auto.patente === patente);
    if (elAuto) {
      return elAuto;
    }
    return null;
  }
};