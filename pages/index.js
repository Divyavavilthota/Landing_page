import Head from 'next/head';
import Image from 'next/image';
import '../styles/pages.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Responsive Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <Image 
          src="/div_wrap.png" 
          alt="Italian Trulli" 
          className="one" 
          width={1864} 
          height={71}
          priority // fir fast image first
        />
        <Image 
          src="/two.png" 
          alt="two" 
          className="two" 
          width={1880} 
          height={1120}
          loading="lazy"
        />
        <Image 
          src="/three.png" 
          alt="three" 
          className="three" 
          width={1464} 
          height={586}
          loading="lazy"
        />
        <Image 
          src="/five.png" 
          alt="five" 
          className="five" 
          width={1560} 
          height={593}
          loading="lazy"
        />
        <Image 
          src="/eleven.png" 
          alt="eleven" 
          className="eleven" 
          width={1470} 
          height={88}
          loading="lazy"
        />
        <Image 
          src="/four.png" 
          alt="four" 
          className="four" 
          width={612} 
          height={266.64}
          loading="lazy"
        />
        <Image 
          src="/six.png" 
          alt="six" 
          className="six" 
          width={200} 
          height={502}
          loading="lazy"
        />
        <Image 
          src="/seven.png" 
          alt="seven" 
          className="seven" 
          width={414} 
          height={216}
          loading="lazy"
        />
        <Image 
          src="/eight.png" 
          alt="eight" 
          className="eight" 
          width={1138} 
          height={722}
          loading="lazy"
        />
        <Image 
          src="/nine.png" 
          alt="nine" 
          className="nine" 
          width={400.66} 
          height={502.22}
          loading="lazy"
        />
        <Image 
          src="/ten.png"
          alt="ten"
          className="ten"
          width={900}
          height={300}
          loading="lazy"
        />
      </div>
    </>
  );
}
