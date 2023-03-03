export default function Contents({ projectNames }: { projectNames: string[] }) {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold">Next.js + Notion</h1>
      <p className="mt-3 text-sm">{projectNames}</p>
    </div>
  );
}
