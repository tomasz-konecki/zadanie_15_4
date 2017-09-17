const average = (...args) => {
    let sum = 0;
    const arrayLength = args.length;

    args.forEach((value) =>
        sum += value
    );
    console.log(`The average value = ${sum/arrayLength}`);
};

average(4, 6, 5);
average(1, 3, 6, 6);
average(3, 8);