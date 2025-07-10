import HomePage from "@/components/pages/HomePage"
export default async function LangHomePage({ params }) {
    const { lang } = await params
  
    return (
      <main>
        <HomePage lang={lang} />
      </main>
    )
  }
  