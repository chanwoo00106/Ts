function someFunc(val: string | number, isNumber: boolean) {
    if (isNumber) {
        (val as number).toFixed(2);
        isNaN(val as number);
    } else {
        (val as string).split('');
        (val as string).toUpperCase();
        (val as string).length;
    }
}