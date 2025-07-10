export default async function LangHomePage({ params }) {
    const { lang } = await params
  
    return (
      <main>
        <h1>{lang === 'es' ? 'Bienvenido' : 'Ongi'}</h1>
        <p>{lang === 'es' ? 'Esta es la página principal en castellano.' : 'Hau euskarazko orri nagusia da.'}</p>
      </main>
    )
  }
  