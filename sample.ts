function someFunc(val: string | number, isNumber: boolean) {
    if (typeof val === 'number') {
        val.toFixed(2);
        isNaN(val);
    } else {
        val.split('');
        val.toUpperCase();
        val.length;
    }
}