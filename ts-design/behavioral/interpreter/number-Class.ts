// Represent your language grammar as classes, and let each class interpret a part of the sentence.
// we don’t manually write interpreter pattern anymore—we use existing tools (Least used)

// You want to understand expressions like: "10 + 30 - 5"

// Expression interface
interface Expression {
  interpret(): number;
}

// Leaf — Number
class NumberExpression implements Expression {
  constructor(private value: number) {}

  interpret() {
    return this.value;
  }
}


// Non-terminal — Add
class AddExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression
  ) {}

  interpret() {
    return this.left.interpret() + this.right.interpret();
  }
}

// Non-terminal — Subtract
class SubtractExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression
  ) {}

  interpret() {
    return this.left.interpret() - this.right.interpret();
  }
}


const expr = new SubtractExpression(
  new AddExpression(
    new NumberExpression(10),
    new NumberExpression(30)
  ),
  new NumberExpression(5)
);

console.log(expr.interpret()); // 35
