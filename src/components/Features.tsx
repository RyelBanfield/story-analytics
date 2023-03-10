import Link from "next/link";
import { useSession } from "next-auth/react";

const Feature = () => {
  return (
    <Link
      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
      href="/"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>

      <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

      <p className="mt-1 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
      </p>
    </Link>
  );
};

const Features = () => {
  const { status } = useSession();

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold">Kickstart your marketing</h2>
          <p className="mt-4 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Feature />
          <Feature />
          <Feature />
        </div>

        {status === "unauthenticated" && (
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="mt-8 inline-flex items-center rounded border border-red-600 bg-red-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-red-500"
            >
              <span className="text-sm font-medium">Get Started</span>

              <svg
                className="ml-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        )}

        {status === "authenticated" && (
          <div className="mt-12 text-center">
            <Link
              href="/dashboard"
              className="mt-8 inline-flex items-center rounded border border-red-600 bg-red-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-red-500"
            >
              <span className="text-sm font-medium">Dashboard</span>

              <svg
                className="ml-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
