// pages/api/todos/index.ts

import type { NextApiRequest, NextApiResponse } from "next";

const todos: Todo[] = [
  { id:1 ,title: "task 1" },
  { id:2 ,title: "task 2" },
  { id:3 ,title: "task 3" },
];

type Todo = {
  id:number
  title: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Todo[]>) => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // for slow test
  res
    .status(200)
    // .json([{ title: "task 1" }, { title: "task 2" }, { title: "task 3" }]);
    .json(todos);
};

export default handler;
