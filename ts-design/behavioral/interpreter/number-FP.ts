type Expr =
  | { type: "num"; value: number }
  | { type: "add"; left: Expr; right: Expr }
  | { type: "sub"; left: Expr; right: Expr };


const interpret = (expr: Expr): number => {
  if (expr.type === "num") return expr.value;
  if (expr.type === "add") return interpret(expr.left) + interpret(expr.right);
  if (expr.type === "sub") return interpret(expr.left) - interpret(expr.right);
  return 0
};

const expr: Expr = {
  type: "sub",
  left: {
    type: "add",
    left: { type: "num", value: 10 },
    right: { type: "num", value: 30 },
  },
  right: { type: "num", value: 5 },
};

console.log(interpret(expr)); // 35
