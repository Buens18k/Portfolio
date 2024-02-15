import Image from 'next/image';
import photo from '../public/images/photoBruno.webp';

export default function Home() {
  return (
    <main className="  flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex w-full justify-between">
        <div className="border-solid border-2 border-red-600 rounded-full w-100 h-100">
          <Image className=" object-cover rounded-full w-full h-full " src={photo} alt="Photo de profil de Bruno" priority />
        </div>
        <div>Biographie</div>
      </section>
      <section>
        <div>Projects</div>
      </section>
    </main>
  );
}
