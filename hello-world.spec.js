import HelloWorld from './hello-world';
import helloWorldFunc  from './hello-world-func';
import { helloWorldFuncNonDefaultExport } from './hello-world-func';

describe('Hello World', () => {
  const helloWorld = new HelloWorld();

  it('says hello world with no name', () => {
    expect(helloWorld.hello()).toEqual('Hello, World!');
  });

  it('says hello to bob', () => {
    expect(helloWorld.hello('Bob')).toEqual('Hello, Bob!');
  });

  it('says hello to sally', () => {
    expect(helloWorld.hello('Sally')).toEqual('Hello, Sally!');
  });
});

describe('Hello World Functional', () => {
  it('says hello world with no name', () => {
    expect(helloWorldFunc()).toEqual('Hello, World!');
  });

  it('says hello to bob', () => {
    expect(helloWorldFunc('Bob')).toEqual('Hello, Bob!');
  });

  it('says hello to sally', () => {
    expect(helloWorldFunc('Sally')).toEqual('Hello, Sally!');
  });

  it('says hello world with no name with no default export', () => {
    expect(helloWorldFuncNonDefaultExport()).toEqual('Hello, World!');
  });
});


