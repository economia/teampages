import React from 'react'
import Layout from '../components/Layout'
import 'react-circular-progressbar/dist/styles.css'
import Proces from '../../static/images/proces.png'
import Twitter from '../../static/images/twitter.png'
import Github from '../../static/images/github.png'
import Facebook from '../../static/images/facebook.png'
import Linkedin from '../../static/images/linkedin.png'
import Proudly from '../../static/images/proudly.png'
import { HeaderImage } from '../components/homepage/HeaderImage'
import { OurTeams } from '../components/homepage/OurTeams'
import { OurLangs, Language } from '../components/homepage/OurLangs'
import { OurProducts } from '../components/homepage/OurProducts'
import { ConferencesList } from '../components/listing/Conferences'
import { Parallax } from 'react-parallax'
import { GalleryHP } from '../components/homepage/GalleryHP'

let languageData: Array<Language> = [
  {
    name: 'JavaScript',
    color: '#d69e3f',
    nameClassName: 'orange',
    data: { '2018': 66, '2017': 55, '2016': 50, '2015': 45 },
  },
  {
    name: 'PHP',
    color: '#7580b2',
    nameClassName: 'violett',
    data: { '2018': 30, '2017': 35, '2016': 45, '2015': 50 },
  },
  {
    name: 'DOCKER',
    nameClassName: 'blue',
    color: '#007bff',
    data: { '2018': 35, '2017': 25, '2016': 20, '2015': 15 },
  },
  {
    name: 'Server Less',
    color: '#000000',
    data: { '2018': 30, '2017': 25, '2016': 20, '2015': 15 },
  },
]

const BlogIndex = () => {
  return (
    <Layout title="Economia">
      <HeaderImage text="#IT v Economii" />
      <div className="container-white">
        <div className="content-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Sed ac dolor sit amet purus malesuada congue.
          </p>
          <h2>proces vývoje u nás</h2>
          <img src={Proces} alt="" />
        </div>
      </div>

      <a id="tymy" />
      <OurTeams />

      <div className="container-white">
        <div className="content-holder">
          <h2>benchmarky</h2>
          <div className="statistics-flex">
            <div className="statistics-item">
              <h3>2 mil.</h3>
              <p>návštěvníků aktualne.cz / den</p>
            </div>
            <div className="statistics-item">
              <h3>50 mil.</h3>
              <p>requestů na centrum.cz / den</p>
            </div>
            <div className="statistics-item">
              <h3>20</h3>
              <p>vlastních serverů</p>
            </div>
          </div>
        </div>
      </div>

      <a id="technologie" />
      <OurLangs languageData={languageData} defaultYear={2018} maxYear={2018} minYear={2015} />

      <OurProducts />

      <a id="aboutus" />
      <div>
        <div className="content-holder">
          <h2>jak to u nás chodí</h2>
          <h3>den vývojáře v Economii</h3>
          <p>
            Den začíná standupem, který má každý team mezi 10-11 hodinou. Stand-up je krátká schůzka
            přímo na pracovišti, kde každý postupně řekne co dělal včera, co bude dělat dnes a
            jestli nemá nějaké problémy a záseky. Pak už máš klid na práci až do oběda. Můžeš buť
            pokračovat v načatém, udělat někomu code review nebo, pokud máš hotovo, můžeš si ze
            sprintu vybrat něco nového, co tě zabaví.
          </p>
          <p>
            Na oběd chodí teamy většinou společně, kolem poledne. Rádi chodíme třeba do Mexika,
            Indie, na Burgery a před výplatou do jídelny, kde se dá najíst pod stokorunu :D
            Samozřejmně je to na tobě, můžeš si klidně přinést vlastní jídlo, které si ohřeješ v
            kuchyňce. Na obědě si povídáme o všem možném, dáme pivko a vypneme. Oběd trvá cca
            hodinu.
          </p>
          <p>
            Po příchodu se můžeš zase zaměřit na programování. Sem tam je potřeba za někým dojít a
            na něco se zeptat, sem tam přijde někdo za tebou. Primárně ale lidi chodí za tvým
            teamleaderem, aby jsi měl(a) co nejvíce klidu na tvorbu skvělého kódu :)
          </p>
          <p>
            Je třeba taky kontrolovat Slack, který používáme na vnitrofiremní komunikaci. Každý team
            v Economii má svůj channel, pak jsou i nějaké společné. Každý má taky svoji mailovku ve
            tvaru jmeno.prijmeni@economia.cz. Tu je třeba taky pravidelně kontrolovat, sem tam ti
            může do kalendáře přijít nějaká schůzka.
          </p>
          <p>
            Během odpoledne si můžeš klidně udělat dobré kafe, čaj, nebo si skočit do automatu pro
            něco na zub. Máme tu taky místnost nazvanou Digital Lab, kde máme pohovky, fatboye a
            nadupanou telku s Xboxem. Nebo si můžeš zajít provětrat hlavu do backstage. Jako
            software developer by jsi tu měl(a) být cca 8 hodin denně, píchačky ale nevedeme.
            Rozhodující je stav sprintu a když jde vše hladce, můžeš klidně odejít o něco dřív nebo
            si vzít homeoffice. Když máš padla, můžeš utíkat na zastávku metra Křižíkova, kterou máš
            za rohem, nebo si skočit pro auto/kolo, které můžeš parkovat v podzemních garážích. A
            hurá dom!
          </p>
          <GalleryHP />
        </div>
      </div>

      <div className="container-white">
        <div className="content-holder">
          <h2>jak probíhá přijímací řízení?</h2>
          <p>
            Na stránkách Economie{' '}
            <a href="https://economia.jobs.cz/" target="_blank">
              economia.jobs.cz
            </a>{' '}
            jsou k dispozici aktuálně volné pozice. Pokud tě nějaká zaujala, pošli nám svůj
            životopis a ukázku práce, ideálně třeba odkaz na github. Ohledně samotného pohovoru,
            máme pouze jedno kolo, kterého se učástní vždy teamleader teamu, do kterého hledáme
            posily a vedoucí vývoje. Celý pohovor trvá maximálně hodinu. V první části mluvíme
            hlavně my.Řekneme ti kdo jsme, co děláme, jak pracujeme a jaké máme benefity. Druhá část
            je více o tobě. Povídáme si o tom kdo jsi, co tě baví, co umíš a jaké máš zkušenosti a
            také si spolu projdeme projekty, které si nám zaslal a povídáme si o kódu.
          </p>
          <h3>kdo jsme?</h3>
          <h3>co děláme?</h3>
          <h3>jak pracujeme?</h3>
          <h3>jaké máme benefity</h3>
        </div>
      </div>
      <div>
        <div className="content-holder">
          <h2>najdete nás na sítích</h2>
          <div className="social-flex">
            <a href="https://twitter.com/ecodevops" target="_blank" className="social-item">
              <img src={Twitter} alt="twitter" />
              twitter.com/ecodevops
            </a>
            <a href="https://github.com/ecodevops" target="_blank" className="social-item">
              <img src={Github} alt="github" />
              github.com/ecodevops
            </a>
            <a href="https://www.facebook.com/Economiaas/" target="_blank" className="social-item">
              <img src={Facebook} alt="facebook" />
              facebook
            </a>
            <a
              href="https://www.linkedin.com/company/economia"
              target="_blank"
              className="social-item"
            >
              <img src={Linkedin} alt="linkedin" />
              linked in
            </a>
            <a href="" target="_blank" className="social-item">
              <img src={Proudly} alt="proudly" />
              proudly
            </a>
          </div>
        </div>
      </div>
      <div className="container-white">
        <h2>účastníme se konferencí</h2>
        <ConferencesList />
      </div>
      <a className="career-link" href="https://economia.jobs.cz/" target="_blank">
        <Parallax
          bgImage={require('../../static/images/bg_03.jpg')}
          bgImageAlt="our photo"
          strength={350}
        >
          <div>Volné pracovní pozice >></div>
        </Parallax>
      </a>
    </Layout>
  )
}

export default BlogIndex
