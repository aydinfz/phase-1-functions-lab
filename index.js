// Code your solution in this file!
const distanceFromHqInBlocks = (loc) => {
  return Math.abs(42 - loc);
};

const distanceFromHqInFeet = (loc) => {
  return Math.abs(42 - loc) * 264;
};

const distanceTravelledInFeet = (loc1, loc2) => {
  return Math.abs(loc1 - loc2) * 264;
};

const calculatesFarePrice = (start, destination) => {
  const feet = Math.abs(start - destination) * 264;
  if (feet > 2500) {
    return "cannot travel that far";
  } else if (feet > 2000) {
    return 25;
  } else if (feet > 400) {
    return ((feet - 400) * 2) / 100;
  } else {
    return 0;
  }
};
