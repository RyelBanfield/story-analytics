import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: sessionData, status } = useSession();

  return (
    <header>
      <div className="mx-auto flex max-w-screen-xl items-center gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/" className="block text-red-600">
          <span className="text-lg font-medium">Story Analytics</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-6 text-sm">
            {status === "authenticated" && (
              <>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <button
            className="font-medium text-red-600"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {status === "authenticated" && "Sign out"}
            {status === "unauthenticated" && "Login"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
