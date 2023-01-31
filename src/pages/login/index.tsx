import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getCsrfToken, useSession } from "next-auth/react";

const Login = ({ csrfToken }: { csrfToken: string }) => {
  const router = useRouter();
  const { data: sessionData } = useSession();

  if (sessionData) void router.push("/");

  return (
    <div className="flex flex-grow items-center justify-center">
      <form
        method="post"
        action="/api/auth/signin/email"
        className="flex w-1/2 flex-col"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="mb-3 rounded border-2 p-3"
        />

        <button
          type="submit"
          className="rounded bg-red-600 px-12 py-3 text-sm font-medium text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const csrfToken = await getCsrfToken(context);
  return { props: { csrfToken } };
};

export default Login;
