import Image from "next/image";

export default function HomePage({ data }) {
  return (
    <main className="flex items-center justify-center h-screen">
        <Image src="/ondu_home.jpg" width="400" height="600" alt="Ondu Zentroa"></Image>
    </main>
  );
}
