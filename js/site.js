const NAV = [
  ['Experience', 'experience'],
  ['Campaigns', 'campaigns'],
  ['AI Agents', 'agents'],
  ['Tools', 'tools'],
  ['Writing', 'writing'],
  ['Kind words', 'words'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
];

const EXPERIENCE = [
  {
    dates: 'Apr 2024 to Present',
    title: 'Sr. Growth Marketing Specialist, Enterprise',
    company: 'CrowdStrike',
    tags: ['Enterprise', 'ABM', 'Field Events', 'AI'],
    desc: 'I lead full-funnel, multi-channel demand generation for Enterprise and Strategic accounts across North America, working with 12+ regional marketers across paid media, ABM and field events. I own a 7-figure annual budget and run a weekly pipeline review with senior marketing and sales leadership, turning funnel and channel data into budget decisions in real time. With SDR leadership I design and run 1:1, 1:Few and 1:Many ABM plays, which improved our lead-to-meeting-booked ratio by 20%. I’m also the AI adoption champion for the Global Growth Marketing team, building agent workflows and prompt libraries.',
  },
  {
    dates: 'Mar 2022 to Apr 2024',
    title: 'Demand Generation Manager',
    company: 'Vibes',
    tags: ['ABM', 'Demand Gen', 'Paid Media', 'Marketing Ops'],
    desc: 'Promoted from BDR. I launched and grew an ABM strategy that produced $2.3M in closed-won opportunities in its first year, and built and scaled the marketing strategy for Vibes Connect, a new business unit that reached 25% of company ARR. I managed 7 figures in ad spend across Google, LinkedIn and display, contributing an average of 35% of overall pipeline. I also oversaw all marketing operations and saved 6 figures in 2023 by consolidating the tech stack.',
  },
  {
    dates: 'Sep 2020 to Feb 2022',
    title: 'Business Development Representative',
    company: 'Vibes',
    tags: ['Outbound', 'Sales Development'],
    desc: 'I generated $4M+ in qualified pipeline through inbound and outbound engagement and booked the most outbound discovery meetings on a team of 4 BDRs in 2021. I averaged 110% of quota for 6 consecutive quarters.',
  },
];

const CAMPAIGNS = [
  {
    num: '01',
    tag: 'Field Events at CrowdStrike',
    title: 'CrowdTour',
    impact: 'Generated 8-figures in pipeline',
    overview: 'A 60-event global roadshow series. I was picked for the launch team to help orchestrate the Americas rollout — landing page builds, promotional targeting, and reporting dashboards — across 25+ regional field events a year.',
    role: [
      'City selection: I used data on where target accounts and contacts were located, plus open opportunities and pipeline by city, to find the regions with the most white space.',
      'Owned all Americas operations, including building registration pages and managing registration.',
      'Built dynamic dashboards for regional marketers showing registrations by rep, by team and by source, including email performance.',
      'Ran Marketo email promotion and partnered with SDRs on outreach.',
      'Owned post-event follow-up emails and sequences, and helped on-site from time to time.',
    ],
  },
  {
    num: '02',
    tag: 'Net New Logos at CrowdStrike',
    title: 'Gifting Campaign',
    impact: '$1M+ in opportunities touched',
    overview: 'A gifting campaign built around branded Away suitcases, designed to bring net new logos on-site at Falcon, CrowdStrike’s user conference.',
    role: [
      'Worked with sales to decide how many accounts and how many personas per account to target, then pulled the key personas and built the Salesforce reports.',
      'Owned campaign reporting.',
      'Found and fixed an attribution gap in Tableau caused by a timing mismatch between when opportunities were opened and when campaign members were added in Salesforce.',
    ],
  },
  {
    num: '03',
    tag: 'ABM at Vibes',
    title: '1:1 Account-Based Marketing',
    impact: '$2.3M in closed-won revenue in year one',
    overview: 'A 1:1 ABM program for top accounts, built with sales. Each account got a custom landing page and custom content made with our own platform.',
    role: [
      'Built custom SMS flows, digital wallet coupons and loyalty cards branded for each target account. Prospects could text the brand name to a short code and try the flow live, all embedded on the landing page.',
      'Ran custom display and paid ads aimed at the target accounts and key personas.',
      'Partnered with sales to book meetings with top accounts.',
    ],
  },
];

const AGENTS = [
  {
    title: 'Slackbot Asset Follow-Up Agent',
    desc: 'Built for BDRs and SDRs. Connects to Gmail, pulls the lead’s journey from Salesforce, and surfaces campaign context plus the next best action, right in Slack.',
  },
  {
    title: 'AI Digest',
    desc: 'Reads my email threads with media partners, flags action items so nothing slips, and sends an end-of-day digest of follow-ups.',
  },
  {
    title: 'Anatomy of a Deal Agent',
    desc: 'Give it a closed-won opportunity and it runs a Salesforce lookup, pulls every touchpoint and influencing campaign, and tells the story of the deal: the opportunity journey and each contact’s journey within the account. It outputs a single summary slide.',
  },
].map((a, i) => ({ ...a, num: '0' + (i + 1), top: 88 + i * 28 }));

const fav = (d) => `https://www.google.com/s2/favicons?domain=${d}&sz=64`;
const tool = (name, slug, dom) => ({
  name,
  init: name.charAt(0),
  logo: slug ? `https://cdn.simpleicons.org/${slug}` : fav(dom),
  fb: slug ? fav(dom) : '',
});

const TOOLS = [
  tool('ChatGPT', 'openai', 'chatgpt.com'),
  tool('Claude', 'claude', 'claude.ai'),
  tool('Claude Code', 'claude', 'claude.com'),
  tool('Gemini', 'googlegemini', 'gemini.google.com'),
  tool('Glean', '', 'glean.com'),
  tool('Slack AI', 'slack', 'slack.com'),
  tool('Cursor', 'cursor', 'cursor.com'),
  tool('Salesforce', 'salesforce', 'salesforce.com'),
  tool('Marketo', '', 'marketo.com'),
  tool('Knak', '', 'knak.com'),
  tool('Demandbase', '', 'demandbase.com'),
  tool('6sense', '', '6sense.com'),
  tool('LinkedIn Campaign Manager', 'linkedin', 'linkedin.com'),
  tool('ZoomInfo', 'zoominfo', 'zoominfo.com'),
  tool('Outreach', '', 'outreach.io'),
  tool('Salesloft', '', 'salesloft.com'),
  tool('Sales Navigator', 'linkedin', 'linkedin.com'),
  tool('Webflow', 'webflow', 'webflow.com'),
  tool('Tableau', 'tableau', 'tableau.com'),
  tool('Google Analytics', 'googleanalytics', 'analytics.google.com'),
  tool('Excel', 'microsoftexcel', 'microsoft.com'),
  tool('Google Sheets', 'googlesheets', 'sheets.google.com'),
  tool('Vercel', 'vercel', 'vercel.com'),
  tool('GitHub', 'github', 'github.com'),
];

const reaction = (label, sel) => ({
  label,
  bg: sel ? '#e5f5fd' : '#f8f8f8',
  border: sel ? '#1d9bd1' : '#e8e8e8',
  color: sel ? '#0b4c8c' : '#1d1c1d',
});

const QUOTES = [
  {
    letter: 'J',
    avBg: '#1264a3',
    role: 'Marketing Director, CrowdStrike',
    time: '1:22 PM',
    text: 'our fearless growth leader and pod lead, who has carried us through continual pod optimization, and introduced new ways to think about what we do',
    reactions: [reaction('🙌 4'), reaction('❤️ 6', true)],
  },
  {
    letter: 'K',
    avBg: '#2b7a4b',
    role: 'Sr. Director, CrowdStrike',
    time: '12:52 PM',
    text: 'ping me whenever you’re free! i could use your brain',
    reactions: [],
  },
  {
    letter: 'N',
    avBg: '#b4235a',
    role: 'Sr. Marketing Manager, CrowdStrike',
    time: 'Just now',
    text: 'Thank you Ty!! You are an amazing partner!',
    reactions: [reaction('🙌 2')],
  },
  {
    letter: 'L',
    avBg: '#9a5b00',
    role: 'Manager, Marketing Analytics, CrowdStrike',
    time: '4:09 PM',
    text: 'Major kudos to @ty.seager for crushing CrowdTour today with all of the template edits, adhoc calls, updates, and pushing live. CrowdTour is off to a really strong start 🚀',
    reactions: [reaction('🙌 3'), reaction('🔥 5', true)],
  },
  {
    letter: 'M',
    avBg: '#6b3fa0',
    role: 'Sr. Manager, SDRs, CrowdStrike',
    time: '11:32 AM',
    text: 'Thank you, Ty! Awesome dashboards, excited to dig in and will look to utilize the data to enhance outreach for CrowdTours!',
    reactions: [],
  },
];

const SIDES = [
  {
    name: 'Foreshadow',
    kind: 'AI sales intelligence',
    img: 'assets/foreshadow.png',
    alt: 'Foreshadow landing page',
    logo: 'assets/foreshadow-logo.png',
    logoLeft: '-13px',
    overview:
      'A SaaS tool that analyzes open job postings at your ICP accounts in real time, uncovering why companies are hiring, what they’re funding, and the tech stacks they use.',
    results: ['50 people on the waitlist ahead of launch'],
    stack: [],
    url: 'https://foreshadow.io',
    urlLabel: 'foreshadow.io',
  },
  {
    name: 'CarryClass',
    kind: 'Two-sided marketplace',
    img: 'assets/carryclass.png',
    alt: 'CarryClass platform',
    logo: 'assets/carryclass-logo.png',
    logoLeft: '-36px',
    overview:
      'A two-sided marketplace connecting students with instructors, built end to end with AI coding tools, including the payments and vertical SaaS layer on the backend.',
    results: [
      '500+ monthly website visits within two months of launch',
      '700+ active listing pages built from data I scraped',
      'Payments and a vertical SaaS layer built on the backend',
    ],
    stack: ['Claude Code', 'Cursor', 'Vercel', 'GitHub', 'Google Analytics'],
    url: 'https://getcarryclass.com',
    urlLabel: 'getcarryclass.com',
  },
];

const POSTS = [
  {
    title: 'SMS Short Codes',
    img: 'assets/blog-short-codes.jpg',
    url: 'https://www.vibes.com/blog/sms-short-code',
  },
  {
    title: 'Mobile Marketing Platforms',
    img: 'assets/blog-mobile-platform.jpg',
    url: 'https://www.vibes.com/blog/mobile-marketing-platform',
  },
  {
    title: 'Tier 1 Aggregators',
    img: 'assets/blog-tier-one.jpg',
    url: 'https://www.vibes.com/blog/tier-1-aggregator',
  },
];

const icon = {
  download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>`,
  menu: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M4 12h16"></path><path d="M4 6h16"></path><path d="M4 18h16"></path></svg>`,
  linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
  pin: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  ext: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>`,
  prev: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>`,
  next: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`,
  slack: `<svg width="20" height="20" viewBox="0 0 24 24"><rect x="9.5" y="1" width="4.5" height="10" rx="2.25" fill="#36c5f0"></rect><rect x="13" y="9.5" width="10" height="4.5" rx="2.25" fill="#2eb67d"></rect><rect x="10" y="13" width="4.5" height="10" rx="2.25" fill="#ecb22e"></rect><rect x="1" y="10" width="10" height="4.5" rx="2.25" fill="#e01e5a"></rect></svg>`,
};

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function roleList(items) {
  return `<ul class="role-list">${items
    .map((r) => `<li><span></span><span>${r}</span></li>`)
    .join('')}</ul>`;
}

function render() {
  const root = document.getElementById('app');
  root.innerHTML = `
    <nav class="site-nav" aria-label="Primary">
      <div class="site-nav-inner">
        <a class="site-brand" href="#top">Ty Seager</a>
        <div class="site-nav-links" id="nav-links">
          ${NAV.map(
            ([label, id]) =>
              `<a href="#${id}" data-nav="${id}">${label}</a>`
          ).join('')}
        </div>
        <div class="site-nav-actions">
          <a class="btn btn-primary btn-inline" href="Ty-Seager-Resume.pdf" download>
            ${icon.download}<span class="nav-cta-label">Download Resume</span>
          </a>
          <button type="button" class="btn btn-secondary btn-icon menu-btn" id="menu-btn" aria-label="Menu" aria-expanded="false">
            ${icon.menu}
          </button>
        </div>
      </div>
      <div class="site-menu" id="site-menu">
        ${NAV.map(
          ([label, id]) => `<a href="#${id}" data-menu-link>${label}</a>`
        ).join('')}
      </div>
    </nav>

    <main class="site-main" id="top">
      <section class="hero">
        <div data-reveal>
          <span class="hero-kicker">Portfolio &amp; Resume</span>
          <h1>Ty Seager</h1>
          <div class="hero-pill">
            <span class="hero-pill-role">Sr. Growth Marketing Specialist, Enterprise</span>
            <span class="hero-pill-sep"></span>
            <span class="hero-pill-co">CrowdStrike</span>
          </div>
          <p class="hero-bio">Growth and demand generation marketer with 6+ years of B2B SaaS experience building full-funnel demand engines for enterprise audiences. I run ABM at scale, own seven-figure budgets, and build AI agents that make sales and marketing teams faster.</p>
          <div class="hero-ctas">
            <a class="btn btn-secondary btn-inline" href="https://www.linkedin.com/in/ty-seager/" target="_blank" rel="noopener noreferrer">${icon.linkedin}LinkedIn</a>
            <a class="btn btn-secondary btn-inline" href="mailto:Matthiasseager@gmail.com">${icon.mail}Email</a>
            <span class="hero-loc">${icon.pin}San Diego, CA</span>
          </div>
        </div>
        <figure class="hero-fig" data-reveal>
          <div class="hero-orbit">
            <div class="hero-dots"></div>
            <div class="hero-ring hero-ring-a"></div>
            <div class="hero-ring hero-ring-b"></div>
            <div class="hero-photo">
              <img src="assets/ty-headshot.png" alt="Ty Seager on a beach in San Diego at dusk" width="480" height="480">
            </div>
            <span class="hero-chip hero-chip-1">Demand Gen</span>
            <span class="hero-chip hero-chip-2">ABM</span>
            <span class="hero-chip hero-chip-3">Marketing Ops</span>
            <span class="hero-chip hero-chip-4">Field Events</span>
            <span class="hero-chip hero-chip-5">AI Agents</span>
          </div>
        </figure>
      </section>

      <section class="section" id="experience">
        <span class="kicker">Experience</span>
        <h2 class="section-title">Enterprise Demand Generation Experience</h2>
        <div class="exp-list">
          ${EXPERIENCE.map(
            (e) => `
            <article class="exp-card card-hover" data-reveal>
              <p class="exp-dates">${e.dates}</p>
              <div>
                <h3>${e.title}</h3>
                <em class="exp-co">at ${e.company}</em>
              </div>
              <div>
                <p class="exp-desc">${e.desc}</p>
                <div class="tag-row">${e.tags
                  .map((t) => `<span class="tag tag-outline">${t}</span>`)
                  .join('')}</div>
              </div>
            </article>`
          ).join('')}
        </div>
      </section>

      <section class="section" id="campaigns">
        <span class="kicker">Campaigns</span>
        <h2 class="section-title">Campaigns I'm Proud Of</h2>
        <div class="camp-list">
          ${CAMPAIGNS.map(
            (c) => `
            <article class="camp-card card-hover" data-reveal>
              <div class="camp-left">
                <span class="camp-num">${c.num}</span>
                <h3>${c.title}</h3>
                <p class="camp-tag">${c.tag}</p>
                <p class="camp-overview">${c.overview}</p>
                <div class="camp-impact-wrap">
                  <div class="camp-impact">
                    <span class="camp-impact-label">Impact</span>
                    <p>${c.impact}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="camp-role-title">My Role</h4>
                ${roleList(c.role)}
              </div>
            </article>`
          ).join('')}
        </div>
      </section>

      <section class="section" id="agents">
        <span class="kicker">AI agents &amp; workflows</span>
        <h2 class="section-title">Workflows I've Automated &amp; Agents I've Built</h2>
        <div class="agent-list">
          ${AGENTS.map(
            (a) => `
            <article class="agent-card" style="top:${a.top}px">
              <span class="agent-num">${a.num}</span>
              <h3>${a.title}</h3>
              <p>${a.desc}</p>
            </article>`
          ).join('')}
        </div>
      </section>

      <section class="section" id="tools">
        <span class="kicker">AI tooling &amp; ops backbone</span>
        <h2 class="section-title">The Software &amp; Tools I Know Best</h2>
        <p class="section-lede">Fluent in applying AI tools and AI-powered GTM features to speed up workflows and automate marketing ops, with hands-on experience across the full marketing and sales technology stack.</p>
        <div class="tools-grid" id="tools-grid">
          ${TOOLS.map(
            (t) => `
            <div class="tool-chip">
              <img src="${t.logo}" data-logo data-fb="${t.fb}" alt="" width="24" height="24">
              <span class="tool-mono">${t.init}</span>
              <span>${t.name}</span>
            </div>`
          ).join('')}
        </div>
      </section>

      <section class="section" id="writing">
        <span class="kicker">Writing</span>
        <h2 class="section-title">Content I've Written</h2>
        <p class="section-lede">Blog posts I wrote at Vibes, published on vibes.com.</p>
        <div class="posts-grid">
          ${POSTS.map(
            (p) => `
            <a class="post-card" data-reveal href="${p.url}" target="_blank" rel="noopener noreferrer">
              <img src="${p.img}" alt="${p.title}" width="640" height="400">
              <div class="post-body">
                <p>Vibes Blog</p>
                <h3>${p.title}</h3>
                <span class="post-cta">Read on vibes.com${icon.ext}</span>
              </div>
            </a>`
          ).join('')}
        </div>
      </section>

      <section class="section" id="words">
        <div class="words-head">
          <div>
            <span class="kicker">Kind words</span>
            <h2 class="section-title">What my Colleagues have to say</h2>
          </div>
          <div class="words-nav">
            <button type="button" class="btn btn-secondary btn-icon" id="car-prev" aria-label="Previous">${icon.prev}</button>
            <button type="button" class="btn btn-secondary btn-icon" id="car-next" aria-label="Next">${icon.next}</button>
          </div>
        </div>
        <div class="carousel" id="carousel">
          ${QUOTES.map(
            (q) => `
            <article class="slack-card" data-card>
              <div class="slack-bar">${icon.slack}Slack</div>
              <div class="slack-body">
                <span class="slack-av" style="background:${q.avBg}">${q.letter}</span>
                <div>
                  <p class="slack-meta"><strong>${q.role}</strong><span>${q.time}</span></p>
                  <p class="slack-text">${q.text}</p>
                  <div class="slack-rx">
                    ${q.reactions
                      .map(
                        (rx) =>
                          `<span style="background:${rx.bg};border:1px solid ${rx.border};color:${rx.color}">${rx.label}</span>`
                      )
                      .join('')}
                  </div>
                </div>
              </div>
            </article>`
          ).join('')}
        </div>
        <div class="dots" id="car-dots">
          ${QUOTES.map(
            (_, i) =>
              `<button type="button" aria-label="Go to message ${i + 1}" data-dot="${i}"></button>`
          ).join('')}
        </div>
      </section>

      <section class="section" id="projects">
        <span class="kicker">AI side projects</span>
        <h2 class="section-title">Things I've Built After Hours</h2>
        <div class="side-list">
          ${SIDES.map(
            (p) => `
            <article class="side-card card-hover" data-reveal>
              <a class="side-shot" href="${p.url}" target="_blank" rel="noopener noreferrer">
                <img src="${p.img}" alt="${p.alt}" width="800" height="600">
              </a>
              <div>
                <a class="side-logo" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="${p.name}">
                  <img src="${p.logo}" alt="${p.name}" style="left:${p.logoLeft}">
                </a>
                <p class="side-kind">${p.kind}</p>
                <p class="side-overview">${p.overview}</p>
                <ul class="side-results">
                  ${p.results
                    .map((r) => `<li><span></span><span>${r}</span></li>`)
                    .join('')}
                </ul>
                ${
                  p.stack.length
                    ? `<div class="side-stack">${p.stack
                        .map((t) => `<span class="tag tag-outline">${t}</span>`)
                        .join('')}</div>`
                    : ''
                }
                <a class="btn btn-secondary side-link" href="${p.url}" target="_blank" rel="noopener noreferrer">${p.urlLabel}${icon.ext}</a>
              </div>
            </article>`
          ).join('')}
        </div>
      </section>

      <section class="section" id="education">
        <span class="kicker">Education</span>
        <article class="edu-card" data-reveal>
          <img src="assets/northwestern.jpg" alt="Northwestern University" width="140" height="140">
          <div>
            <h3>Northwestern University</h3>
            <p>B.S. Communication Studies</p>
          </div>
          <dl class="edu-dl">
            <dt>Honors</dt><dd>Graduated early with high honors</dd>
            <dt>Minor</dt><dd>Business Institutions</dd>
            <dt>Certificate</dt><dd>Integrated Marketing Communications</dd>
            <dt>Athletics</dt><dd>Men's Varsity Soccer, team captain for the 2019 season</dd>
          </dl>
        </article>
      </section>

      <section class="section contact" id="contact">
        <span class="kicker">Contact</span>
        <h2 class="section-title">Let's Get in Touch.</h2>
        <div class="contact-list">
          <a href="mailto:Matthiasseager@gmail.com">
            <span class="contact-label">Email</span>
            <span class="contact-value">Matthiasseager@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/ty-seager/" target="_blank" rel="noopener noreferrer">
            <span class="contact-label">LinkedIn</span>
            <span class="contact-value">linkedin.com/in/ty-seager</span>
          </a>
          <div>
            <span class="contact-label">Based in</span>
            <span class="contact-value">San Diego, CA</span>
          </div>
        </div>
        <a class="btn btn-primary btn-inline" href="Ty-Seager-Resume.pdf" download>${icon.download}Download Resume</a>
      </section>

      <footer class="site-footer">
        <span>© 2026 Ty Seager · San Diego</span>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  `;
}

function setupInteractivity() {
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('site-menu');
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('[data-menu-link]').forEach((a) => {
    a.addEventListener('click', () => {
      menu.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener(
    'error',
    (e) => {
      const img = e.target;
      if (!(img instanceof HTMLImageElement) || !img.matches('img[data-logo]')) return;
      if (img.dataset.fb && !img.dataset.tried) {
        img.dataset.tried = '1';
        img.src = img.dataset.fb;
        return;
      }
      img.style.display = 'none';
      const mono = img.nextElementSibling;
      if (mono) mono.classList.add('is-fallback');
    },
    true
  );

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    const check = () => {
      document.querySelectorAll('[data-reveal]').forEach((node) => {
        if (node.dataset.rv) return;
        if (node.getBoundingClientRect().top < window.innerHeight * 0.92) {
          node.dataset.rv = '1';
          return;
        }
        node.dataset.rv = '0';
        node.style.opacity = '0';
        node.style.transform = 'translateY(24px)';
      });
      document.querySelectorAll('[data-reveal][data-rv="0"]').forEach((node) => {
        if (node.getBoundingClientRect().top < window.innerHeight * 0.92) {
          node.dataset.rv = '1';
          node.style.opacity = '1';
          node.style.transform = 'none';
        }
      });
    };
    let raf = 0;
    const onScr = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(check);
    };
    window.addEventListener('scroll', onScr, { passive: true });
    window.addEventListener('resize', onScr);
    [0, 150, 600, 1500].forEach((ms) => setTimeout(check, ms));
  }

  const ids = NAV.map(([, id]) => id);
  const navLinks = document.querySelectorAll('[data-nav]');
  const navObs = new IntersectionObserver(
    (ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        navLinks.forEach((a) => {
          a.classList.toggle('is-active', a.dataset.nav === en.target.id);
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  ids.forEach((id) => {
    const node = document.getElementById(id);
    if (node) navObs.observe(node);
  });

  const car = document.getElementById('carousel');
  const dots = document.getElementById('car-dots');
  let carIndex = 0;

  const setDot = (i) => {
    carIndex = i;
    dots.querySelectorAll('button').forEach((b, idx) => {
      b.classList.toggle('is-active', idx === i);
    });
  };

  const scrollCar = (i) => {
    const cards = car.querySelectorAll('[data-card]');
    const n = Math.max(0, Math.min(cards.length - 1, i));
    if (cards[n]) {
      car.scrollTo({ left: cards[n].offsetLeft - car.offsetLeft, behavior: 'smooth' });
    }
    setDot(n);
  };

  document.getElementById('car-prev').addEventListener('click', () => scrollCar(carIndex - 1));
  document.getElementById('car-next').addEventListener('click', () => scrollCar(carIndex + 1));
  dots.querySelectorAll('button').forEach((b) => {
    b.addEventListener('click', () => scrollCar(Number(b.dataset.dot)));
  });
  setDot(0);

  car.addEventListener('scroll', () => {
    const cards = car.querySelectorAll('[data-card]');
    let best = 0;
    let bd = 1e9;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - car.offsetLeft - car.scrollLeft);
      if (d < bd) {
        bd = d;
        best = i;
      }
    });
    if (car.scrollLeft + car.clientWidth >= car.scrollWidth - 4) best = cards.length - 1;
    if (best !== carIndex) setDot(best);
  });
}

render();
setupInteractivity();
