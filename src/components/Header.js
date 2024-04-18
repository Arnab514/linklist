import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b flex justify-between p-4">
      <div className="flex gap-4">
        <Link href={"/"}>Linklist</Link>
        <nav className="flex items-center gap-4 text-slate-500">
          <Link href={"/about"}>About</Link>
          {/* <Link href={'/'}>Linklist</Link>
        <Link href={'/'}>Linklist</Link> */}
        </nav>
      </div>
      <nav className="flex gap-4 text-slate-500">
        <Link href={"/login"}>Log in</Link>
        <Link href={"/register"}>Create account</Link>
      </nav>
    </header>
  );
}
