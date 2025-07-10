import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function LangLayout({ children, params }) {
  const { lang } = await params;

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <h1>Mi Web Multilingüe</h1>
        <LanguageSwitcher />
      </header>
      <main>{children}</main>
    </>
  );
}
