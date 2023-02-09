import { Card, Text, Title } from "@tremor/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Account = () => {
  const router = useRouter();
  const { data: sessionData, status } = useSession();

  if (status === "unauthenticated") void router.push("/");

  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-grow flex-col p-4 sm:px-6 lg:px-8">
      <Title>Account</Title>
      <br />

      <Card>
        <Title>Email</Title>
        <Text>{sessionData?.user.email}</Text>
      </Card>
      <br />
    </div>
  );
};

export default Account;
