const Jimp = require('jimp');

const imgHandler = async (imagePath) => {
  const image = await Jimp.read(imagePath);
  await image.resize(250, 250).writeAsync(imagePath);
};

module.exports = imgHandler;
