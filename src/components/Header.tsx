import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <header className="bg-gray-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="block text-red-600">
          <span className="text-lg font-medium">Story Analytics</span>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          {/* <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav> */}
          <button
            className="font-medium text-red-600"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
