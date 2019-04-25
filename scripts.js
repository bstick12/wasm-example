let squarer;
let add;
let multiply;
let divide;

function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then(module => { return new WebAssembly.Instance(module) });
};

loadWebAssembly('squarer.wasm')
  .then(instance => {
    squarer = instance.exports.squarer;
    console.log('Finished compiling! Ready when you are...');
  });
