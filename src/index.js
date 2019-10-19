module.exports = function zeros(expression) {

    const isEven = function(someNumber) {
        return (someNumber % 2 === 0);
    };
    const dontIsEven = !isEven;
    function getTrallingZeros(factorial) {
        if(factorial < 0)
            return -1;

        let count = 0;
        for (let i = 5; (factorial / i) > 0; i = i*5) {
            count = count + Math.floor(factorial / i);
        }
        return count;
    }
    const vals = expression
        .split(/\*/);

    const nuli = vals
        .map(function (item, expression) {
            let del = item.slice(0, -1);
            let res = parseInt(del, 10);
            if (del.indexOf('!') !== -1 ) {
                res = isEven(res) ? getTrallingZeros(res) : 0;
            } else {
                res = getTrallingZeros(res)
            }
            return res;
        }).reduce((res, val) => res + val);
    return nuli;

};