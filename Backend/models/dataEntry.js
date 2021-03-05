'use strict';

module.exports = (sequelize, DataType) => {
  let DataEntry = sequelize.define('DataEntry', {
    // id missing because Sequelize adds it by default
    latitudine:  DataType.FLOAT,
    longitudine: DataType.FLOAT,
    nomePoi: DataType.STRING(30),
    tipoPoi: DataType.STRING(30),
    ingresso: DataType.STRING(15),
    valutazione: DataType.STRING(15)
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'data'
  });

  // Association to other models (foreign keys)
  DataEntry.associate = function (models) {

  };

  return DataEntry;
};
