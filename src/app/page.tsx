import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        {/* // wrap this in a div and then maybe add other sections to the right of it */}
        <Image
        className="dark:opacity-85 mb-8"
        src = "/icons/FZAL1.png" // consider switching to svg
        alt="headshot"
        width={50}
        height={10}
        priority
        />
        
        <Image 
        className="dark:opacity-85"
        src = "/images/Headshot.jpg"
        alt="headshot"
        width={100}
        height={20}
        priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Dao Feng
          </h1>

          <div className="h-10"/>

          <p>
            I'm a London-based Data Scientist @ AITIS and an AI Automations Engineer at 4C Labs.

            <br />
            <br />
            Previously, 

            
            I have worked on financial data pipelines @ Velo.
            Research Consultant at <a href="https://emeraldhealthclinic.co.uk"> Emerald Health </a>,
            
            and a Frontend Engineer @ Huzzle.

            I was an applied statistician and specialized in medical statistics with experimental design for clinical trials. 
            I hold a BSc. in Applied Statistics and a MSc. in Data Science.
            {/* I am an associate statistician chartered by the RSS */}
            <br />
          </p>

          <p>
            Currently I am researching computer vision algorithms and novel attention mechanisms
            in application to diagnostics of coronary artery disease.
          </p>

          <p>
            When I am not working or writing code, I enjoy city walks around London with my Fujifilm X100F.
            I also like to visit jazz bars.
          </p>
      
          <p className="mx-auto mt-4 text-center">
            * * *
          </p>

          <div className="h-10"/>

        </div>

        <div className="w-full overflow-x-auto">
        <div className="grid min-w-[720px] grid-cols-3"> 
          <div className= "">
            <center>[ building ]</center>

            <h1>project vv</h1>
            <h1>secret taps</h1>
          </div>
          
          <div className= "">
            <center>[ projects ]</center> 
            <h1>4c-auto</h1>
            <h1>openssl</h1>
          </div>

          <div className= "">
            <Link href="/writing" className="transition-colors hover:text-zinc-500">
              <center>[ writing ]</center>
            </Link>
            <h1>
              <Link href="" className="transition-colors hover:text-zinc-500">
                devlog 1
              </Link>
            </h1>
            <h1>why do we use vv</h1>
          </div>
        
        </div>
        </div>

        <br></br>

        <p className="mx-auto mt-4 text-center">
            * * *
          </p>


        <div className="flex flex-col mt-8">
          [ contact ] <br />

          hey [ at ] daofeng [dot] ca

        </div>

        <div className="mt-6 flex gap-4">
          <br></br>
          <a
            href="https://github.com/zian-feng"
            target="_blank" //opens in new tab
            rel="noopener noreferrer"
            aria-label="github"
            className="opacity-50 transition-opacity hover:opacity-80"
          >
            <img src="/icons/socials-github-dark.svg" className="h-5 w-5"/>
          </a>

          <a
            href=""
            target="_blank" //opens in new tab
            rel="noopener noreferrer"
            aria-label="linkedin"
            className="opacity-50 transition-opacity hover:opacity-80"
          >
            <img src="/icons/socials-linkedin.svg" className="h-5 w-5"/>
          </a>

          <a
            href=""
            target="_blank" //opens in new tab
            rel="noopener noreferrer"
            aria-label="twitter"
            className="opacity-50 transition-opacity hover:opacity-80"
          >
            <img src="/icons/socials-x-dark.svg" className="h-5 w-5"/>
          </a>

          <a
            href=""
            target="_blank" //opens in new tab
            rel="noopener noreferrer"
            aria-label="bsky"
            className="opacity-50 transition-opacity hover:opacity-80"
          >
            <img src="/icons/socials-bsky.svg" className="h-5 w-5"/>
          </a>


        </div>
      
      </main>

      <footer>
        <hr className="my-2 w-full border-zinc-300 dark:border-zinc-700"/>
        
        <p> © Dao Feng </p>
        <br></br>
      </footer>

    </div>
  );
}
