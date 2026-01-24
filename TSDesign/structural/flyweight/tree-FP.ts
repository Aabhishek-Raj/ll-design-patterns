// Flyweight factory function
const createTreeFactory = () => {
  const cache: Record<string, object> = {};

  return (name: string, color: string, texture: string) => {
    const key = `${name}_${color}_${texture}`;

    if (!cache[key]) {
      cache[key] = { name, color, texture };
      console.log("Created NEW flyweight:", key);
    }

    return cache[key];
  };
};

// factory instance
const getTreeType = createTreeFactory();

// Tree creation (extrinsic)
const createTree = (x: number, y: number, type: any) => ({
  draw: () => console.log(`Drawing ${type.name} at (${x}, ${y})`)
});


const mangoType = getTreeType("Mango", "Green", "Rough");
const bananaType = getTreeType("Banana", "Yellow", "Smooth");

const tree1 = createTree(10, 20, mangoType);
const tree2 = createTree(30, 40, mangoType);

tree1.draw();
tree2.draw();

// Flyweight = share common data, store unique data outside