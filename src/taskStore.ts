export interface Task {
  id: number;
  title: string;
  done: boolean;
}

let tasks: Task[] = [
  { id: 1, title: "Understand CI Stages", done: false },
  { id: 2, title: "Fix the Failing Test", done: false },
  { id: 3, title: "Review the Dockerfile", done: true },
];
let nextId = 4;

export const getTasks = (): Task[] => tasks;

export const addTask = (title: string): Task | null => {
  // ✅ FIXED: ใช้ .trim() เพื่อดักจับกรณีชื่อเป็นช่องว่าง (Lab 1 Bug)
  if (!title || title.trim().length === 0) {
    return null;
  }
  const newTask: Task = {
    id: nextId++,
    title: title.trim(),
    done: false,
  };
  tasks.push(newTask);
  return newTask;
};

export const toggleTask = (id: number): Task | null => {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.done = !task.done;
    return task;
  }
  return null;
};

export const deleteTask = (id: number): boolean => {
  // ✅ FIXED: เปิดใช้งานฟังก์ชันลบเพื่อให้ระบบทำงานสมบูรณ์
  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    return true;
  }
  return false;
};

export const resetTasks = () => {
  tasks = [
    { id: 1, title: "Understand CI Stages", done: false },
    { id: 2, title: "Fix the Failing Test", done: false },
    { id: 3, title: "Review the Dockerfile", done: true },
  ];
  nextId = 4;
};