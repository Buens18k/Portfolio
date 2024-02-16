import Banner from './components/banner';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-10">
      <section className="flex flex-col justify-between items-center md:flex-row w-full border-solid border-2 border-red-600">
        <Banner src="photoBruno.webp" alt="Phot Profil de Bruno" width={500} height={500} />
        <div className="border-solid border-2 border-yellow-600">
          <h1 className="text-6xl font-bold underline decoration-white-500">Bruno Vang</h1>
          <h2 className="text-5xl font-bold">Developpeur Frontend</h2>
          <p>
            Hello à toi !!! <br />
            Passionné par la création de solutions innovantes et fonctionnelles. <br />
          </p>
        </div>
      </section>
      <section>
        <div>Projects</div>
      </section>
    </main>
  );
}
