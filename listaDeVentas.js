const autosImportados = require('./modulo');

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
  },
  autosParaLaVenta: function() {
    return this.autos.filter(auto => !auto.vendido);
  },
  autosNuevos: function() {
    return this.autosParaLaVenta().filter(auto => auto.kilometraje < 100);
  },

  listaDeVentas: function() {
     let vendidos = this.autos.filter(function(elemento){
        return elemento.vendido == true
     })
     let listaDeVentas = vendidos.map(function(elemento){
        return elemento.precio
     })
return listaDeVentas
}}