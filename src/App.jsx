import {useEffect,useState} from 'react'
import {CONFIG,DOMAINS,COORDS} from './data'

const cactus=(x,y,h,c)=><g fill={c} key={x+'-'+y}><rect x={x} y={y-h} width="2" height={h}/><rect x={x-3} y={y-h*.6} width="1.5" height={h*.3}/><rect x={x-3} y={y-h*.6+h*.3-1.5} width="4" height="1.5"/><rect x={x+4} y={y-h*.8} width="1.5" height={h*.3}/><rect x={x+2} y={y-h*.8+h*.3-1.5} width="3.5" height="1.5"/></g>

const FLOCK_CROWS = [
  // Spread across the whole sky smoothly from t=0
  { id: 'c1', top: 15, size: 56, flightSpeed: 14, flapSpeed: '0.38s', delay: 0, dir: 'ltr', tilt: -4, opacity: 0.98 },
  { id: 'c2', top: 9, size: 44, flightSpeed: 14, flapSpeed: '0.34s', delay: -2.5, dir: 'ltr', tilt: -8, opacity: 0.92 },
  { id: 'c3', top: 22, size: 48, flightSpeed: 14, flapSpeed: '0.40s', delay: -5.0, dir: 'ltr', tilt: 2, opacity: 0.92 },
  { id: 'c4', top: 13, size: 38, flightSpeed: 14, flapSpeed: '0.36s', delay: -7.5, dir: 'ltr', tilt: -5, opacity: 0.88 },
  { id: 'c5', top: 6, size: 36, flightSpeed: 18, flapSpeed: '0.42s', delay: -3.0, dir: 'rtl', tilt: 6, opacity: 0.8 },
  { id: 'c6', top: 28, size: 42, flightSpeed: 16, flapSpeed: '0.39s', delay: -8.0, dir: 'rtl', tilt: -3, opacity: 0.85 },
  { id: 'c7', top: 11, size: 24, flightSpeed: 22, flapSpeed: '0.30s', delay: -11.0, dir: 'ltr', tilt: -6, opacity: 0.55 },
  { id: 'c8', top: 8, size: 20, flightSpeed: 22, flapSpeed: '0.28s', delay: -14.0, dir: 'ltr', tilt: -10, opacity: 0.5 },
  { id: 'c9', top: 16, size: 22, flightSpeed: 22, flapSpeed: '0.32s', delay: -17.0, dir: 'ltr', tilt: 0, opacity: 0.52 },
  { id: 'c10', top: 19, size: 66, flightSpeed: 11, flapSpeed: '0.35s', delay: -9.0, dir: 'ltr', tilt: -2, opacity: 0.98 },
  { id: 'c11', top: 25, size: 48, flightSpeed: 13, flapSpeed: '0.36s', delay: -4.0, dir: 'ltr', tilt: -5, opacity: 0.9 },
]

const Crow = ({ id, top, size = 48, flightSpeed = 15, flapSpeed = '0.38s', delay = 0, dir = 'ltr', tilt = 0, opacity = 0.95 }) => (
  <div
    key={id}
    className={`crow-flight ${dir}`}
    style={{
      top: `${top}%`,
      width: `${size}px`,
      height: `${size * 0.65}px`,
      animationDuration: `${flightSpeed}s`,
      animationDelay: `${delay}s`,
      '--crow-op': opacity,
      '--crow-tilt': `${tilt}deg`,
      '--flap-spd': flapSpeed,
    }}
  >
    <div className="crow-scaler">
      <svg viewBox="0 0 75 50" className="crow-flapper-svg" fill="#110402">
        {/* Far Wing (Top / Background) */}
        <path
          className="crow-wing-far"
          d="M 33 21 C 29 13 23 6 15 1 C 13 1 12 2 13 4 C 11 3 10 5 11 7 C 9 7 9 9 10 11 C 8 11 8 13 10 14 C 12 16 18 18 24 20 C 28 21 31 22 33 22 Z"
        />
        {/* Main Body with Head, Pointed Beak, and Wedge Fan Tail */}
        <g className="crow-body-motion">
          <path d="M 68 23 C 65 21 60 19 55 19 C 48 19 40 21 32 23 C 26 24 22 26 19 27 L 7 22 L 4 25 L 3 28 L 5 31 L 8 34 L 19 29 C 23 31 29 32 37 32 C 46 32 54 29 58 26 L 68 23 Z" />
        </g>
        {/* Near Wing (Foreground - attached at shoulder with fingered feathers) */}
        <path
          className="crow-wing-near"
          d="M 32 23 C 27 14 20 6 12 1 C 10 1 9 2 10 4 C 8 3 7 5 8 8 C 6 8 6 10 7 12 C 5 12 5 14 7 16 C 9 18 16 21 24 23 C 28 24 31 24 33 25 Z"
        />
      </svg>
    </div>
  </div>
)

function Scene({ready}){return(
<svg className={'scene'+(ready?' up':'')} viewBox="0 0 160 90" preserveAspectRatio="xMidYMax slice" shapeRendering="crispEdges">
<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffcf5a"/><stop offset=".6" stopColor="#ff9a2a"/><stop offset="1" stopColor="#e8601a"/></linearGradient></defs>
<rect width="160" height="90" fill="url(#sk)"/>
<g className="sun"><circle cx="50" cy="40" r="17" fill="#ffe9a8"/><circle cx="50" cy="40" r="13" fill="#fff6d6"/></g>
<polygon points="0,62 10,52 20,58 34,44 46,56 60,48 72,60 88,46 100,58 116,42 130,56 146,48 160,58 160,90 0,90" fill="#f0701c"/>
<polygon points="0,72 14,64 28,70 44,60 60,70 76,62 94,72 112,62 128,72 144,64 160,70 160,90 0,90" fill="#b8461a"/>
<polygon points="0,80 20,74 40,80 70,73 100,80 130,74 160,80 160,90 0,90" fill="#7a2a14"/>
<rect y="84" width="160" height="6" fill="#3d130b"/>
{[[12,82,12],[132,82,14],[148,83,9]].map(a=>cactus(...a,'#2a0d08'))}
{[[28,88,22],[118,88,26],[96,87,16]].map(a=>cactus(...a,'#1a0805'))}
</svg>)}

function useCountdown(d){
  const calc=()=>{if(!d)return[0,0,0,0];const t=Math.max(0,new Date(d)-Date.now())/1000;return[Math.floor(t/86400),Math.floor(t%86400/3600),Math.floor(t%3600/60),Math.floor(t%60)]}
  const [v,setV]=useState(calc)
  useEffect(()=>{const i=setInterval(()=>setV(calc()),1000);return()=>clearInterval(i)},[d])
  return v
}

export default function App(){
  const [stage,setStage]=useState(0)      // 0 presents, 1 boot, 2 hero
  const [tab,setTab]=useState('all')
  const [toast,setToast]=useState(false)
  const [toastMsg,setToastMsg]=useState('COMING SOON !!')
  const [open,setOpen]=useState(false)
  const cd=useCountdown(CONFIG.REG_DEADLINE)
  const ready=stage>=2
  useEffect(()=>{
    const a=setTimeout(()=>setStage(1),2800),b=setTimeout(()=>setStage(2),5600)
    return()=>{clearTimeout(a);clearTimeout(b)}
  },[])
  useEffect(()=>{document.body.style.overflow=ready?'':'hidden'},[ready])
  useEffect(()=>{
    if(!ready)return
    const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.15})
    document.querySelectorAll('.rv').forEach(x=>io.observe(x));return()=>io.disconnect()
  },[ready,tab])
  const soon=(msg='COMING SOON !!')=>{setToastMsg(msg);setToast(true);setTimeout(()=>setToast(false),1800)}
  const Reg=({cls=''})=>CONFIG.REG_LINK
    ?<a className={'btn '+cls} href={CONFIG.REG_LINK} target="_blank" rel="noreferrer">REGISTER</a>
    :<button className={'btn off '+cls} onClick={()=>soon('REGISTRATION COMING SOON !')}>REGISTER</button>
  const cards=[{id:'pre',tag:'ROUND 1',name:'PRELIMS',icon:'🎤',desc:'Present your own problem statement to the juries. They evaluate your idea and the best teams advance to the finals.',chips:['PITCH','JURY EVALUATION'],link:null},
    ...DOMAINS.map(d=>({...d,tag:'FINALIST ROUND',chips:['24 HRS','DOMAIN']}))]
  const shown=cards.filter(c=>tab==='all'||(tab==='pre'?c.id==='pre':c.id!=='pre'))
  const go=()=>setOpen(false)
  return(<>
  <nav>
    <a className="logo px" href="#home">MADATHON</a>
    <button className="burger px" onClick={()=>setOpen(!open)}>MENU</button>
    <div className={'links px'+(open?' open':'')}>
      {[['home','HOME'],['events','EVENTS'],['about','ABOUT US'],['coord','COORDINATORS']].map(([i,t])=><a key={i} href={'#'+i} onClick={go}>{t}</a>)}
    </div>
  </nav>

  {stage<2&&<div className="intro">
    {stage===0&&<div className="presents">
      <div className="logos-text">
        <span className="hud-corner tl"/>
        <span className="hud-corner tr"/>
        <span className="hud-corner bl"/>
        <span className="hud-corner br"/>
        <div className="intro-brand">
          <div className="brand-logo-text kec-brand px">KEC</div>
          <div className="brand-full-name">KONGU ENGINEERING COLLEGE</div>
          <div className="brand-motto">TRANSFORM YOURSELF</div>
        </div>
        <span className="brand-divider"/>
        <div className="intro-brand">
          <div className="brand-logo-text madc-brand px">MADC</div>
          <div className="brand-full-name">MOBILE APPLICATION DEVELOPMENT CLUB</div>
          <div className="brand-motto">INNOVATE · BUILD · DEPLOY</div>
        </div>
      </div>
      <p className="px pr">PRESENTS</p>
    </div>}
    {stage===1&&<div className="boot px"><p>LOADING NOVA ENGINE...</p><div className="pbar"><i/></div></div>}
    <button className="skip px" onClick={()=>setStage(2)}>SKIP ▶</button>
  </div>}

  <header id="home" className={ready?'hero on':'hero'}>
    <Scene ready={ready}/>
    <div className="crows-sky">
      {FLOCK_CROWS.map(c => Crow(c))}
    </div>
    <div className="shade"/>
    <div className="hc">
      <p className="px org">MADC · MOBILE APPLICATION DEVELOPMENT CLUB</p>
      <h1 className="px title">MADATHON</h1>
      <div className="px tag">24-HOUR HACKATHON</div>
      <p className="px ttl">COUNTDOWN TO EVENT</p>
      <div className="cdw">{['DAYS','HRS','MINS','SECS'].map((l,i)=><div className="cb" key={l}><b className="px">{String(cd[i]).padStart(2,'0')}</b><small>{l}</small></div>)}</div>
      <p className="px date">{CONFIG.DATE_TEXT}</p>
      <Reg cls="big"/>
      <p className="pw">Powered by NOVA</p>
    </div>
  </header>

  <main>
  <section id="events"><h2 className="px rv">EVENTS</h2><i className="ul"/><p className="sb rv">Unleash your skills · Two rounds, three domains</p>
    <div className="tabs px rv">{[['all','ALL'],['pre','PRELIMS'],['fin','FINALIST ROUND']].map(([k,t])=><button key={k} className={tab===k?'on':''} onClick={()=>setTab(k)}>{t}</button>)}</div>
    <div className="grid">{shown.map(c=><article className="card rv" key={c.id}>
      <span className="chip px">{c.tag}</span><div className="ic">{c.icon}</div><h3 className="px">{c.name}</h3><p>{c.desc}</p>
      <div className="chips">{c.chips.map(x=><span key={x}>{x}</span>)}</div>
      <div className="acts">
        {c.id === 'pre' ? (
          <Reg />
        ) : (
          c.link ? (
            <a className="btn ghost" href={c.link} target="_blank" rel="noreferrer">EXPLORE</a>
          ) : (
            <button className="btn ghost" onClick={() => soon('COMING SOON !!')}>EXPLORE</button>
          )
        )}
      </div>
    </article>)}</div>
  </section>

  <section id="about"><h2 className="px rv">ABOUT US</h2><i className="ul"/>
    <div className="grid g2">
      <article className="card rv">
        <img className="kl" src="./kec-logo.png" alt="KEC"/>
        <h3 className="px">ABOUT KEC</h3>
        <p>Kongu Engineering College, affiliated to Anna University, is located in Perundurai, Erode. It is accredited with an 'A' grade by National Assessment Accreditation Council. Over the past 40 years, the institution with its good infrastructure facility and excellent academic records has emerged as a center of excellence. The college with its quality education and peaceful environment provides continuous improvement and confidence for the students to face the real world challenges and mould their future.</p>
        <div className="mot px"><span>ESTD 1984</span><span>AUTONOMOUS</span><span>NAAC 'A' GRADE</span></div>
      </article>

      <article className="card rv">
        <img className="kl" src="./madc-logo.png" alt="MADC Club"/>
        <h3 className="px">ABOUT MADC CLUB</h3>
        <p>MADC – Mobile Application Development Club of KEC is a vibrant community where students learn, build, and innovate through hands-on workshops, real-world projects, hackathons, and technical events. Explore modern technologies like Flutter, Android, React Native, Firebase, APIs, AI, and UI/UX while turning ideas into impactful applications. Collaborate with passionate developers, share knowledge, build your portfolio, and grow together as a developer.</p>
        <div className="mot px"><span>INNOVATE</span><span>BUILD</span><span>DEPLOY</span></div>
      </article>

      <article className="card full rv">
        <img className="kl wide" src="./madathon-logo.png" alt="MADATHON"/>
        <h3 className="px">ABOUT MADATHON</h3>
        <p>MADATHON is a 24-hour technical hackathon organized by the Mobile Application Development Club (MADC). It brings together passionate innovators and developers to transform creative ideas into real-world solutions. Participants can compete across three exciting domains: App Development, Web Development, and Generative AI. The event challenges participants to build, innovate, collaborate, and solve problems within an intense 24-hour timeframe. Think beyond limits, code without boundaries, and build something extraordinary at MADATHON!</p>
        <div className="mot px"><span>24-HOUR HACKATHON</span><span>3 DOMAINS</span><span>INNOVATION</span><span>REAL-WORLD IMPACT</span></div>
      </article>
    </div>
    <div className="stats"><div className="card rv"><b className="px">120+</b><span>MEMBERS</span></div><div className="card rv"><b className="px">40+</b><span>OFFICE BEARERS</span></div></div>
  </section>

  <section id="coord"><h2 className="px rv">EVENT COORDINATORS</h2><i className="ul"/><p className="sb rv">Reach out for assistance and queries</p>
    <div className="grid g2 cc">{COORDS.map(c=><article className="card rv" key={c.name}><div className="av px">{c.ini}</div><span className="chip px">{c.role.toUpperCase()}</span><h3 className="px">{c.name}</h3></article>)}</div>
  </section>
  </main>
  <footer><div className="px">MADATHON 2026 · MADC · KEC</div><p>Innovate · Build · Deploy &nbsp;|&nbsp; Powered by NOVA</p></footer>
  <div className={'toast px' + (toast ? ' show' : '')}>{toastMsg}</div>
  </>)
}
