import Logo from "@/components/logo";

import Chat from "@/components/chat";

export default function Home() {
  return (
    <section className="md:w-[100vh] w-[70vh] mx-auto px-4 h-screen flex flex-col items-center justify-center -mt-[30px]">
      <Logo width={300} />

      <Chat />
    </section>
  );
}
