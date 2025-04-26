import Image from 'next/image';
import Link from 'next/link';

import { WhatsappLogo, Mailbox } from '@phosphor-icons/react/dist/ssr';




export default function Home() {
  return (
    <main className="relative min-h-screen bg-eluz-white font-luxury text-eluz-gold">
      <div className='h-64 w-64 absolute bg-eluz-gold blur-[128px] opacity-40 top-60 left-50'></div>
      <div className='h-64 w-64 absolute bg-eluz-gold blur-[128px] opacity-40 top-96 right-40'></div>

      <header className="flex justify-between items-center p-8">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Eluz Web Logo" width={215} height={215} />
        </div>
        <nav className="hidden gap-6 text-md uppercase md:flex [&>*]:hover:-translate-y-1 [&>*]:transition">
          <Link href="#sobre">Sobre</Link>
          <Link href="#portfolio">Portfólio</Link>
          <Link href="#servicos">Serviços</Link>
          <Link href="#contato">Contato</Link>
        </nav>
      </header>

      <section className="flex relative flex-col items-center justify-center text-center h-[70vh] px-6">
        <h1 className=" text-4xl text-shadow-lg md:text-5xl tracking-wide mb-4">
          Sites sofisticados, sob medida.
        </h1>

        <p className="font-poppins max-w-xl text-sm md:text-base my-8">
          Criação de websites com foco em elegância, desempenho e experiência do usuário.
        </p>
        <div className="flex gap-4 text-xl">
          <Link href="#contato" className="border border-eluz-gold px-6 py-2 ">
            Solicitar Orçamento
          </Link>
          <Link href="#portfolio" className="border border-eluz-gold px-6 py-2 ">
            Ver Portfólio
          </Link>
        </div>
      </section>

      <section id="sobre" className="py-20 relative px-6 md:px-32 text-center md:text-start">
        <h2 className="text-5xl mb-4 text-shadow-lg">SOBRE</h2>

          <Image className='select-none -z-0 right-[20%] absolute top-0 opacity-20 -rotate-35' src="/lamp.svg" alt="Eluz Web Logo" width={400} height={300} />


        <p className="font-poppins md:w-1/2  text-sm md:text-2xl">
          Somos uma agência digital especializada na criação de websites únicos, responsivos e otimizados para resultados reais.
        </p>
      </section>
      <section id="portfolio" className="relative py-20 px-6 md:px-32 text-center md:text-start">
        <h2 className="text-5xl mb-8 text-shadow-lg">PORTFÓLIO</h2>
        <p className="font-poppins mb-10 text-md md:text-base">Alguns de nossos trabalhos:</p>
        <div className="flex flex-col md:flex-row gap-16">
        <div className="z-1 relative overflow-visible shadow-lg before:border-1 before:-top-2 before:-right-2 before:absolute before:h-full before:w-full before:-z-1">
            <Image src="/wordsapp-print.png" alt="Projeto 1" width={400} height={300} />
          </div>
          <div className="z-1 relative overflow-visible shadow-lg before:border-1 before:-top-2 before:-right-2 before:absolute before:h-full before:w-full before:-z-1">
            <Image src="/amandabaliana-print.png" alt="Projeto 2" width={400} height={300} />
          </div>
          <div className='h-96 w-96 absolute bg-eluz-gold blur-[128px] -z-0 opacity-30 right-60'></div>
        </div>
      </section>

      <section id="servicos" className="py-20 px-6 md:px-32 text-center md:text-start">
        <h2 className="text-5xl mb-8 text-shadow-lg">SERVIÇOS</h2>
        <p className="font-poppins mb-6 text-sm md:text-base">O que fazemos:</p>
        <ul className="font-poppins list-disc list-inside text-left mx-auto md:mx-0 max-w-md space-y-2">
          <li>Criação de sites institucionais</li>
          <li>Criação de logos</li>
          <li>Landing pages</li>
          <li>Criação de artes para seu negócio</li>
        </ul>
      </section>
      <div className='h-128 w-128 absolute bg-eluz-gold blur-[232px] -z-0 opacity-30 bottom-50 right-130'></div>

      <section id="contato" className="py-20 px-6 md:px-32 text-center md:text-start mb-48">
        <h2 className="text-5xl mb-8 text-shadow-lg">CONTATO</h2>
        <p className="mb-6 text-sm md:text-base">
          Faça seu orçamento, converse conosco :)
        </p>
        <div className="flex flex-col max-w-64 mx-auto md:mx-0 md:justify-start gap-4">
          <a href="https://wa.me/5584987871161" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-eluz-gold px-6 py-2">
            <span>WhatsApp</span>
            <WhatsappLogo size={24}/>
          </a>
          <a href="mailto:gustavosant3301@gmail.com" className="flex items-center justify-between border border-eluz-gold px-6 py-2">
            <span>Email</span>
            <Mailbox size={24}/>
          </a>
        </div>
      </section>

      <footer className="text-center py-6 text-xs">
        <p>© 2025 Eluz Web - Todos os direitos reservados - <Link href="https://www.linkedin.com/in/gustavsant">LinkedIn</Link> | <Link href="wa.me/5584987871161">WhatsApp</Link></p>
      </footer>
    </main>
  );
}
