export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className=" bg-white h-10 flex justify-center items-center">
      <h1 className="font-bold text-black ">{children}</h1>
    </header>
  );
}
