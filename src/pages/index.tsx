import ThemeSelect from "@components/ui/Theme/ThemeSelect";
import { useAtomValue } from "jotai";
import { type NextPage } from "next";
import Head from "next/head";
import Chat from "../components/Chat/Chat";
import { chatUserIdAtom } from "./_app";

const Home: NextPage = () => {
  const userId = useAtomValue(chatUserIdAtom);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid min-h-screen grid-cols-6">
        <div className="col-span-1 h-full border-r-[1px] bg-base-200">
          <div className="flex h-full flex-col items-center justify-between">
            <div className="px-2 pt-4">
              <div className="text-xl-4 font-semibold">Chat Bot Starter</div>
              <div className="whitespace-normal py-2">
                <div>USER ID</div>
                {userId}
              </div>
            </div>
            <div className="py-4">
              <ThemeSelect />
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="flex h-full w-full flex-col">
            <Chat />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
