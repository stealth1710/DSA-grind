// Problem: Valid Parentheses (Order Bracket Validator)

// Amazon's internal configuration parser processes strings containing nested brackets representing order/config groupings: 
// (, ), {, }, [, ]. Given a string s containing just these characters, determine if the input string is valid.

// A string is valid if:

// Every opening bracket has a corresponding closing bracket of the same type.
// Opening brackets are closed in the correct order (i.e., properly nested — no crossing).
// Every closing bracket has a corresponding open bracket that came before it.
// Constraints
// 1 <= s.length <= 10^4
// s consists only of the characters (, ), {, }, [, ]
// Example 1
// Input: s = "()[]{}"
// Output: true
// Explanation: Each bracket type is opened and closed independently, no nesting issues.
// Example 2
// Input: s = "(]"
// Output: false
// Explanation: '(' is opened but closed with ']', which is the wrong type.
// Example 3
// Input: s = "([)]"
// Output: false
// Explanation: Brackets are opened in order ( then [, but closed out of order — 
// the ')' tries to close before '[' is closed, which is invalid nesting even though 
// both bracket types eventually appear.
// Example 4
// Input: s = "{[]}"
// Output: true
// Explanation: Properly nested — [] closes before {} does, matching the LIFO order they were opened in.
// Example 5
// Input: s = "("
// Output: false
// Explanation: Opening bracket with no matching close.

function validParenthesis(string){
    const stack = []

}