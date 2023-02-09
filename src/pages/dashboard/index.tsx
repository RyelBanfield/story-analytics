import {
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { Button, Callout, TextInput, Title } from "@tremor/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const { status } = useSession();

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<boolean | null>(null);

  if (status === "unauthenticated") void router.push("/");

  const checkPost = () => {
    setLoading(true);

    fetch("/api/check-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        setResult(data.postExists);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-grow flex-col p-4 sm:px-6 lg:px-8">
      <Title>Check post activity</Title>

      <div className="mt-3 flex items-center gap-3">
        <TextInput
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={loading}
        />
        <Button
          color="red"
          icon={MagnifyingGlassIcon}
          onClick={() => void checkPost()}
          disabled={loading}
        >
          Check
        </Button>
      </div>

      <div className="mt-3">
        {result === true && (
          <Callout
            title="Post Exists"
            text="The post you are looking for exists."
            icon={CheckBadgeIcon}
            color="green"
            height=""
            marginTop="mt-0"
          />
        )}
        {result === false && (
          <Callout
            title="Post does not exist"
            text="The post you are looking for does not exist."
            icon={ExclamationTriangleIcon}
            color="red"
            height=""
            marginTop="mt-0"
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
