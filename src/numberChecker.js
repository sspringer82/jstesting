function numberChecker(input) {
  if (typeof input === 'string') {
    throw new Error('Not a number');
  }
  return input;
}