const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const Teatr = require('../models/Teatr');
const upsert = require('../utils/upsert');
const { Iconv } = require('iconv');

const TeatrController = () => {
  const sync = async (req, res) => {
    const file = fs.readFileSync(path.join(__dirname, '../../db/data.json'));
    const buffer = Buffer.from(file, 'binary');
    const conv = Iconv('windows-1251', 'utf8');
    const body = conv.convert(buffer).toString();
    const apiData = JSON.parse(body);

    //  eslint-disable-next-line no-restricted-syntax
    apiData.forEach((entry) => {
      upsert({
        model: Teatr,
        values: {
          id: entry.global_id,
          shortName: entry.ShortName,
          chiefPosition: entry.ChiefPosition,
          chiefName: entry.ChiefName,
          website: entry.WebSite,
        },
        condition: { id: entry.global_id },
      });
    });

    return res.status(200).json(apiData);
  };

  const getAll = async (req, res) => {
    try {
      let teatrs;

      if (req.query.name) {
        teatrs = await Teatr.findAll({
          where: {
            name: {
              [Op.substring]: req.query.name,
            },
          },
        });
      } else {
        teatrs = await Teatr.findAll();
      }

      return res.status(200).json({ teatrs });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    sync,
    getAll,
  };
};

module.exports = TeatrController;
