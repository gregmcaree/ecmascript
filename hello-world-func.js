const helloWorldFunc = (name = `World`) => {
  return `Hello, ${name}!`
};

const helloWorldFuncNonDefaultExport = (name = `World`) => {
  return `Hello, ${name}!`
};

export { helloWorldFuncNonDefaultExport };

export default helloWorldFunc;


