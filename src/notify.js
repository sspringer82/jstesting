function notify(value) {
  const date = (new Date()).toUTCString();
  alert(date + ' ' + value);
}

function notifyWithDependency(dependencyWindow, value) {
  const date = (new Date()).toUTCString();
  dependencyWindow.alert(date + ' ' + value);
}