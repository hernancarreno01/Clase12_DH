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
    let ventas = [];
    for (let i = 0; i < this.autos.length; i++) {
      if (this.autos[i].vendido) {
        ventas.push(this.autos[i].precio);
      }
    }
    return ventas;
  },
  totalDeVentas: function() {
    let ventas = this.listaDeVentas();
        if (ventas.length === 0) {
      return 0;
    }
    return ventas.reduce((total, precio) => total + precio);
  }
};