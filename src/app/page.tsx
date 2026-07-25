import Image from "next/image";

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

        <div className="grid grid-cols-1 md:grid-cols-3 w-full"> 
          <div className= "">
            [ building ]

            <h1>projects</h1>
          </div>
          
          <div className= "">
            [ projects ]
          </div>

          <div className= "">
            [ writing ]
          </div>
        
        </div>


        <div className="flex flex-col mt-8">
          [ contact ] <br />

          hey [ at ] daofeng [dot] ca

        </div>
      
      </main>

      {/* <footer>
        <p> © Dao Feng</p>
      </footer> */}

    </div>
  );
}
