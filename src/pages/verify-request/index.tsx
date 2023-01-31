import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const VerifyRequest = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();

  if (sessionData) void router.push("/");

  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="rgb(220 38 38)"
        className="mb-3 h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
      <p className="text-lg font-medium">
        Check your email for your login link.
      </p>
    </div>
  );
};

export default VerifyRequest;
