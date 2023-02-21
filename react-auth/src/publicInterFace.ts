type User = {
  username: string;
  id: number;
  email: string;
  age: number;
};

type Post = {
  id: number;
  title: string;
  user_id: number;
  content: string;
  created_at: string;
  user: {
    email: string;
  };
};

export type { User, Post };
