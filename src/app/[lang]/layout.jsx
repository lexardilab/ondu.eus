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
      </header>
      <main>{children}</main>
    </>
  );
}
