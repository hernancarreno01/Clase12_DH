const autosImportados = require('./moduilo');

const concesionaria = {
  autos: autosImportados,
  buscarAuto: function(patente) {
    let elAuto = this.autos.find(auto => auto.patente === patente);
    if (elAuto) {
      return elAuto;
    }
    return null;
  },
  venderAuto: function(patente) {
    let auto = this.buscarAuto(patente);
    if (auto) {
      auto.vendido = true;
      return "Auto vendido correctamente";
    }
    return "No se encontró el auto";
  }
};