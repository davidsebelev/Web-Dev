alert( null || 2 || undefined ); // answer 2 - true
if (age >= 14 && age <= 90);


// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );



// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
let user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)

// The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

// It’s forbidden to use it with || or && without explicit parentheses.