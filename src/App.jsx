import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "BillGates",
    name: "Bill Gates",
    isFollowing: false,
  },
  {
    userName: "elonmusk",
    name: "Elon Musk",
    isFollowing: true,
  },
  {
    userName: "tim_cook",
    name: "Tim Cook",
    isFollowing: false,
  },
  {
    userName: "jeffbezos",
    name: "Jeff Bezos",
    isFollowing: true,
  },
  {
    userName: "sama",
    name: "Sam Altman",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
