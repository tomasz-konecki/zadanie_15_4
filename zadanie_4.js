const average = (...args) => {
    let sum = 0;
    const arrayLength = args.length;

    args.forEach((value) =>
        sum += value
    );
    console.log(`The average value = ${(sum/arrayLength).toFixed(2)}`);
};

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);