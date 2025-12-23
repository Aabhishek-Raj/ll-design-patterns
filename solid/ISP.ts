
interface WorkerBad {
  work(): void;
  eat(): void;
}

class RobotBad implements WorkerBad {
  work() {}
  eat() {} //nonsense
}

// Many small interfaces > One big interface

interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Human implements Workable, Eatable {
  work() {}
  eat() {}
}

class Robot implements Workable {
  work() {}
}
