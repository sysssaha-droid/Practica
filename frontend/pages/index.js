import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>EventFlow</title>
        <meta name="description" content="Платформа для перегляду та бронювання квитків на події" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold">Ласкаво просимо до EventFlow</h1>
        <p className="mt-4">
          Відкрийте та забронюйте квитки на захоплюючі події
        </p>
        <a href="/events" className="mt-6 inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700">
          Переглянути події
        </a>
      </main>
    </div>
  );
}
