import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton />
      <h1>hello</h1>
    </div>
  );
}
