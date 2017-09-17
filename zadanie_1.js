const hello = 'Hello',
    world = 'World';

// sposób 1

console.log(`${hello} ${world}`);

// sposób 2

const sayHello = (...args) => {
    let result = '';

    args.forEach((word) =>
        result += `${word} `
    );
    console.log(result.trim());
};

sayHello(hello, world);