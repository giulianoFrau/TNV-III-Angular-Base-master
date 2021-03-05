const DataEntry = require('../models/index').DataEntry;

const getEntry = (req, res) => {
  DataEntry.findAll({})
    .then(entry => {
      return res.status(200).send(entry)
    })
    .catch(err => {
      return res.status(500).send(err)
    });
};

const getEntryById = (req, res) => {
  const entryId = req.params.id;

  DataEntry.findOne({
    where: {
      id: entryId
    }
  })
    .then(entry => {
      if (!entry) {
        return res.status(404).send({
          error: true,
          message: 'The requested data does not exist.',
          entryId
        })
      }

      return res.status(200).send(entry);
    })
    .catch(err => {
      return res.status(500).send(err);
    })
};

const createEntry = (req, res) => {
  const { latitudine, longitudine, nomePoi, tipoPoi, ingresso, valutazione } = req.body;

  DataEntry.create({
    latitudine: latitudine,
    longitudine: longitudine,
    nomePoi: nomePoi,
    tipoPoi: tipoPoi,
    ingresso: ingresso,
    valutazione: valutazione
  })
    .then(entry => {
      return res.status(201).send(entry);
    })
    .catch(error => {
      return res.status(500).send(error);
    });
};

const editEntry = (req, res) => {
  const entryId = req.params.id;
  const { latitudine, longitudine, nomePoi, tipoPoi, ingresso, valutazione } = req.body;

  DataEntry.findOne({
    where: {
      id: entryId
    }
  })
    .then(entry => {
      if (!entry) {
        return res.status(404).send({
          error: true,
          message: 'Cannot update a entry that does not exist.',
          entryId
        })
      }

      DataEntry.update({
        latitudine: latitudine,
        longitudine: longitudine,
        nomePoi: nomePoi,
        tipoPoi: tipoPoi,
        ingresso: ingresso,
        valutazione: valutazione
      }, {
        where: {
          id: entryId
        }
      })
        .then(updated => {
          if (updated.pop() === 1) {
            return res.status(201).send({
              updated: true,
              entryId
            });
          } else {
            return res.status(400).send({
              updated: false,
              entryId
            })
          }
        })
        .catch(error => {
          return res.status(500).send(error);
        }
        );
    })
    .catch(error => {
      return res.status(500).send(error);
    })
};

const deleteEntry = (req, res) => {
  const entryId = req.params.id;

  DataEntry.destroy({
    where: {
      id: entryId
    }
  })
    .then(res => {
      return res.status(204).send({});
    })
    .catch(error => {
      return res.status(500).send(error);
    })
};

module.exports = {
  getEntry,
  getEntryById,
  editEntry,
  deleteEntry,
  createEntry
};