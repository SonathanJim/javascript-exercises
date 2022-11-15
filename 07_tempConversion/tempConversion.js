const ftoc = function(num) {
  let fars = +num;
  let cels = ((fars - 32) * 5 / 9);
  let celsRounded = Math.round(cels * 10) / 10;
  return celsRounded
};

const ctof = function(num) {
  let cels = +num;
  let fars = ((cels * 9 / 5) + 32);
  let farsRounded = Math.round(fars * 10) / 10;
  return farsRounded
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
