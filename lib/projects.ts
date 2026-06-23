export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "AI Learning Assistant",
    description:
      "Full-stack AI platform for All Star Code. RAG pipeline over curriculum documents stored in Supabase vector DB, Google MediaPipe CV models to analyze instructional videos, and an instructor UI for structured feedback and student evaluation.",
    tags: ["TypeScript", "React", "OpenAI APIs", "RAG", "Supabase", "MediaPipe"],
    github: "https://github.com/patnaikt4/AllStarCode",
  },
  {
    title: "Stripe Payments MCP Server",
    description:
      "MCP server that gives an AI assistant real payment capabilities through Stripe's API. Explores how tool design shifts when the model is the decision-maker — docstrings become the signal, not documentation. Built with FastMCP in Python.",
    tags: ["Python", "MCP", "FastMCP", "Stripe API"],
    github: "https://github.com/patnaikt4/Stripe-Payments-MCP-Server",
  },
  {
    title: "RL Card Grid Environment",
    description:
      "Reinforcement learning environment for a solo card placement puzzle on a 3x3 grid. Custom reward shaping with survival, progress, and line-completion signals. Gym-compatible wrapper for training with PPO via Stable-Baselines3.",
    tags: ["Python", "Reinforcement Learning", "Gymnasium", "NumPy", "Stable-Baselines3"],
    github: "https://github.com/patnaikt4/RL-TicTacToe-Game",
  },
  {
    title: "GPT from Scratch",
    description:
      "Working GPT implementation assembled from NeetCode ML course submissions — built bottom-up from gradient descent and backprop through BPE tokenization, multi-head attention, KV-cache, and a full transformer training loop.",
    tags: ["Python", "PyTorch", "Transformers", "NLP"],
    github: "https://github.com/patnaikt4/neetcode-gpt",
  },
  {
    title: "Algorithmic Trading Strategy",
    description:
      "Unsupervised trading strategy using Garman-Klass Volatility, RSI, Bollinger Bands, and Fama-French Factors. K-means clustering groups assets by risk profile — outperformed the S&P 500 benchmark portfolio.",
    tags: ["Python", "Pandas", "Scikit-learn", "K-means", "Quant Finance"],
    github: "https://github.com/patnaikt4/Algorithmic-Trading-Machine",
  },
  {
    title: "GitHub Repo Explorer",
    description:
      "React + Next.js app for searching any GitHub username and browsing their public repos with star and fork counts. Built to practice the GitHub REST API, React state, and Tailwind. Deployed on Vercel.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS", "GitHub API"],
    github: "https://github.com/patnaikt4/GithubRepoExplorer",
    live: "https://github-repo-explorer-sigma.vercel.app/",
  },
];
