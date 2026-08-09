function findMinimum(stack) {
    let temp = [];
    let minimum = Infinity;

    while (stack.length > 0) {
        let current = stack.pop();

        if (current < minimum) {
            minimum = current;
        }

        temp.push(current);
    }

    // Restore original stack
    while (temp.length > 0) {
        stack.push(temp.pop());
    }

    return minimum;
}