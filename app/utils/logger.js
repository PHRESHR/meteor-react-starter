// send log to TrackJS in prod
export function log() {
  console.log.apply(console, arguments);
}

// send error to service in prod
export function logError() {
  console.error.apply(console, arguments);
}
