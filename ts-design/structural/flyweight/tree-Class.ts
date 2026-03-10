// Flyweight object (shared)
class TreeType {
  constructor(
    public name: string,
    public color: string,
    public texture: string
  ) {}

  draw(x: number, y: number) {
    console.log(`Drawing ${this.name} tree at (${x}, ${y})`);
  }
}

// Flyweight Factory
class TreeFactory {
  private static treeTypes: Record<string, TreeType> = {};

  static getTreeType(name: string, color: string, texture: string) {
    const key = `${name}_${color}_${texture}`;

    if (!this.treeTypes[key]) {
      this.treeTypes[key] = new TreeType(name, color, texture);
      console.log("Created NEW flyweight:", key);
    }

    return this.treeTypes[key];
  }
}

// Tree object (extrinsic state)
class Tree {
  constructor(
    private x: number,
    private y: number,
    private type: TreeType
  ) {}

  draw() {
    this.type.draw(this.x, this.y);
  }
}
// x and y are extrinsic → unique.


const trees: Tree[] = [];

const mangoType = TreeFactory.getTreeType("Mango", "Green", "Rough");
const bananaType = TreeFactory.getTreeType("Banana", "Yellow", "Smooth");

trees.push(new Tree(10, 20, mangoType));
trees.push(new Tree(30, 40, mangoType));
trees.push(new Tree(50, 80, bananaType));

trees.forEach(tree => tree.draw());

// If you created 1,000,000 trees manually, it would break memory.
// With Flyweight,
// 1 million trees share 2 TreeType objects.
