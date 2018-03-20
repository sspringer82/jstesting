function numberChecker(input) {
  if (typeof input !== 'number') {
    throw new Error('Not a number');
  }
  return input;
}
