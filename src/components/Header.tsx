import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Account",
    href: "/account",
  },
];

const Header = () => {
  const { data: sessionData, status } = useSession();

  const router = useRouter();
  const activePage = pages.find((page) => page.href === router.pathname);

  return (
    <header>
      <div className="mx-auto flex max-w-screen-xl items-center gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/" className="block text-red-600">
          <span className="text-lg font-medium">Story Analytics</span>
        </Link>
        {status === "authenticated" && (
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    className={
                      activePage?.name === page.name
                        ? "text-red-600 transition"
                        : "text-gray-500 transition hover:text-gray-500/75"
                    }
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
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
