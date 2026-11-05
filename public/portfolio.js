document.addEventListener("DOMContentLoaded", () => {
  const removeLegacyBadge = () => {
    document.querySelectorAll('#lovable-badge, [id*="lovable-badge"]').forEach((badge) => badge.remove());
  };
  removeLegacyBadge();
  const badgeObserver = new MutationObserver(removeLegacyBadge);
  badgeObserver.observe(document.body, { childList: true, subtree: true });

  const siteBase = window.location.pathname.startsWith("/Portfolio-") ? "/Portfolio-" : "";
  const assetBase = `${siteBase}/assets`;
  const headerMark = document.querySelector('header a[href="#home"] > span:first-child');
  if (headerMark) {
    headerMark.innerHTML = `<img src="${assetBase}/sm-monogram.png" alt="SM monogram">`;
    headerMark.style.cssText = "width:40px;height:40px;padding:3px;overflow:hidden;background:#0d2142;border:1px solid rgba(39,196,189,.65);border-radius:9px;display:grid;place-items:center";
    const headerMarkImage = headerMark.querySelector("img");
    headerMarkImage.style.cssText = "width:100%;height:100%;object-fit:contain;border-radius:4px";
  }
  const redesignStyles = document.createElement("link");
  redesignStyles.rel = "stylesheet";
  redesignStyles.href = `${siteBase}/about-redesign.css`;
  document.head.appendChild(redesignStyles);
  const educationStyles = document.createElement("link");
  educationStyles.rel = "stylesheet";
  educationStyles.href = `${siteBase}/education-redesign.css?v=20261104-5`;
  document.head.appendChild(educationStyles);
  const experienceStyles = document.createElement("link");
  experienceStyles.rel = "stylesheet";
  experienceStyles.href = `${siteBase}/experience-redesign.css?v=20260821-1`;
  document.head.appendChild(experienceStyles);

  document.querySelectorAll('[style*="opacity:0"]').forEach((element) => {
    element.style.opacity = "1";
    element.style.transform = "none";
  });

  const heroCredentialLabel = [...document.querySelectorAll("*")].find(
    (element) => element.children.length === 0 && element.textContent.trim() === "Certifications · CSM · CSPO · SAFe · Six Sigma",
  );
  if (heroCredentialLabel) {
    heroCredentialLabel.textContent = "Professional credentials · Agile · AI · Six Sigma";
    const heroCredentialNumber = heroCredentialLabel.previousElementSibling;
    if (heroCredentialNumber) heroCredentialNumber.textContent = "7+";
  }

  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
    const credentials = [
      "Certified Scrum Master (CSM)",
      "Certified Scrum Product Owner (CSPO)",
      "SAFe Agilist",
      "ASQ Six Sigma",
      "Stanford · AI for Business Models",
    ];
    aboutSection.className = "about-brief";
    aboutSection.innerHTML = `
      <div class="about-brief__inner">
        <div class="about-brief__eyebrow">About</div>
        <h2 class="about-brief__title">At the intersection of <span>audit, operations</span><br> and <em>digital transformation</em>.</h2>
        <div class="about-brief__rule"><span></span></div>

        <div class="about-brief__body">
          <p class="about-brief__bio">MBA candidate at NYIT Vancouver, with an M.S. in Project Management from Northeastern and a BBA from The NorthCap University. Five years across premium audit, delivery, and operations — including 500+ audits at EXL Service, an operational framework for ONGC, and project planning for Toshiba Water Solutions. Interests span consulting, audit, operations excellence, and AI-enabled transformation, informed by Stanford executive learning in AI and business models.</p>
          <div class="about-brief__credentials">
            <div class="about-brief__credentials-title">Credentials</div>
            <div class="about-brief__credential-grid">
              ${credentials.map((credential) => `<div class="about-brief__credential"><img src="${assetBase}/11cbe220267923c4.svg" alt=""><span>${credential}</span></div>`).join("")}
            </div>
          </div>
        </div>

        <div class="about-brief__pillars">
          <article class="about-brief__pillar">
            <div class="about-brief__icon"><img src="${assetBase}/03dc95de9e74058c.svg" alt=""></div>
            <div><h3>Audit &amp; Assurance</h3><p>500+ audits at EXL Service with a focus on quality, risk, and control effectiveness.</p></div>
          </article>
          <article class="about-brief__pillar">
            <div class="about-brief__icon about-brief__icon--teal"><img src="${assetBase}/1874da7b1d0f6f6f.svg" alt=""></div>
            <div><h3>Operations &amp; Delivery</h3><p>Designed operational frameworks for ONGC and led project planning for Toshiba Water Solutions.</p></div>
          </article>
          <article class="about-brief__pillar">
            <div class="about-brief__icon"><img src="${assetBase}/151a2cc95929fc7a.svg" alt=""></div>
            <div><h3>AI-Enabled Transformation</h3><p>Applying AI and business models to drive efficiency, insight, and sustainable impact across organizations.</p></div>
          </article>
        </div>
      </div>`;
  }

  const experienceSection = document.querySelector("#experience");
  if (experienceSection) {
    const roles = [
      {
        role: "AI Marketing and Sales Intern",
        company: "Nex3 Consulting Inc.",
        location: "North Vancouver, BC",
        period: "Jul 2026 - Present",
        logo: "nex3-v2.png",
        darkLogo: true,
        bullets: [
          "Migrated the company website from a paid AI platform to a cost-effective local GitHub storage solution.",
          "Developed marketing materials and sales messaging strategies to strengthen brand positioning and awareness.",
          "Conducted market research and competitive analysis to identify new sales opportunities.",
          "Executed targeted marketing campaigns aligned with business objectives and company strategy.",
          "Collaborated on AI-powered marketing solutions that supported engagement, lead generation, and sales performance.",
        ],
        tags: ["AI Marketing", "Sales Strategy", "Market Research", "GitHub"],
      },
      {
        role: "Premium Auditor",
        company: "EXL Service",
        location: "San Jose, CA",
        period: "May 2023 - Oct 2025",
        logo: "exl.png",
        darkLogo: true,
        bullets: [
          "Completed 500+ premium audits with a strong record of accuracy and timeliness.",
          "Reviewed 941 filings, profit and loss statements, audit worksheets, and supporting documentation to validate policy charges.",
          "Improved audit efficiency by collaborating with insureds and agents to accelerate data collection.",
          "Produced high-quality audit reports using proprietary platforms and advanced Excel functions.",
          "Built strong client relationships through professional, respectful, and solution-oriented communication.",
        ],
        tags: ["Premium Audit", "Advanced Excel", "941 & P&L Review", "Client Management"],
      },
      {
        role: "Student Proctor",
        company: "Northeastern University",
        location: "San Jose, CA",
        period: "Jan 2022 - Apr 2023",
        logo: "northeastern.png",
        bullets: [
          "Supported 10+ professors conducting live remote classes and resolved technical infrastructure issues.",
          "Monitored virtual presentations and exams to ensure systems remained stable and functional.",
          "Enforced academic integrity standards across 40+ remote exam sessions with detailed documentation.",
          "Tracked student attendance, grades, and records supporting faculty reporting needs.",
          "Resolved technology issues for students and instructors, improving classroom productivity.",
        ],
        tags: ["Operations", "Academic Integrity", "Technical Support", "Coordination"],
      },
      {
        role: "Project Management Intern",
        company: "Oil and Natural Gas Corporation (ONGC)",
        location: "Delhi, India",
        period: "Feb 2021 - Apr 2021",
        logo: "ongc.png",
        bullets: [
          "Helped develop a Systematic Operational Plan for ONGC project management functions aligned with standards.",
          "Documented practices across planning, scheduling, execution, monitoring, and controlling phases.",
          "Reviewed project requirements and identified scope constraints, risks, and resource dependencies.",
          "Analyzed project schedules and identified potential delays affecting critical-path activities.",
          "Coordinated meetings between engineering, operations, and management teams to discuss deliverables.",
        ],
        tags: ["PMO", "Governance", "Risk Management", "Documentation"],
      },
      {
        role: "Project Management Intern",
        company: "Toshiba Water Solutions Pvt Ltd",
        location: "Gurgaon, India",
        period: "May 2020 - Jun 2020",
        logo: "toshiba.png",
        bullets: [
          "Reviewed project requirements and created detailed management documentation for a treatment plant.",
          "Worked with team members to produce detailed progress reports for external clients.",
          "Built project schedules incorporating resource allocations, timing dependencies, and vendor coordination.",
          "Tracked project spending against budgets and flagged cost variances and improvement opportunities.",
          "Documented project processes, decision logs, and lessons learned for future infrastructure projects.",
        ],
        tags: ["Project Planning", "Scheduling", "Budget Tracking", "Client Reporting"],
      },
      {
        role: "Social Media Marketing Intern",
        company: "All Indian Technical and Management Council (AITMC)",
        location: "Gurgaon, India",
        period: "May 2020 - Jul 2020",
        logo: "aitmc.png",
        bullets: [
          "Executed three marketing strategies across Facebook, LinkedIn, and Instagram.",
          "Analyzed social media metrics and engagement data to measure campaign effectiveness.",
          "Created multi-platform content calendars to maintain consistent brand messaging.",
          "Researched competitor strategies to identify positioning gaps and differentiation opportunities.",
          "Built community engagement through comment moderation, customer responses, and follower relationships.",
        ],
        tags: ["Social Media", "Content Strategy", "Marketing Analytics", "Community Engagement"],
      },
    ];

    const experienceCard = (item) => `
      <article class="experience-card">
        <div class="experience-card__header">
          <div class="experience-card__logo${item.darkLogo ? " experience-card__logo--dark" : ""}">
            <img src="${assetBase}/experience/${item.logo}" alt="${item.company} logo">
          </div>
          <div>
            <h3 class="experience-card__title">${item.role}</h3>
            <span class="experience-card__company">${item.company}</span>
            <span class="experience-card__location">${item.location}</span>
          </div>
          <div class="experience-card__period">${item.period}</div>
        </div>
        <ul class="experience-card__bullets">
          ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
        <div class="experience-card__tags">
          ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </article>`;

    experienceSection.className = "experience-section";
    experienceSection.innerHTML = `
      <div class="experience-section__inner">
        <div class="experience-section__eyebrow">Career Timeline</div>
        <h2>Professional <span>Experience</span></h2>
        <div class="experience-timeline">
          ${roles.map(experienceCard).join("")}
        </div>
      </div>`;
  }

  const educationSection = document.querySelector("#education");
  if (educationSection) {
    const logo = (file, school) => `<img class="edu-card__logo" src="${assetBase}/universities/${file}" alt="${school} logo">`;
    const card = ({ file, school, label, title, body, date, context = "", location = "" }) => `
      <article class="edu-card">
        <div class="edu-card__top">
          ${logo(file, school)}
          <span class="edu-card__label">${label}</span>
        </div>
        <h3>${title}</h3>
        <div class="edu-card__body">${body}</div>
        ${context ? `<p class="edu-card__context">${context}</p>` : ""}
        <div class="edu-card__meta"><span>${date}</span>${location ? `<span>${location}</span>` : ""}</div>
      </article>`;

    educationSection.className = "education-section";
    educationSection.innerHTML = `
      <div class="education-section__inner">
        <div class="education-section__header">
          <div><div class="education-section__eyebrow">Education &amp; Credentials</div>
          <h2>Academic foundation and <span>continuous learning</span>.</h2></div>
          <a class="education-section__resume" href="${siteBase}/resume.pdf">Download Resume</a>
        </div>

        <section class="edu-group" aria-labelledby="formal-education-title">
          <h3 id="formal-education-title" class="edu-group__title">Formal Education</h3>
          <div class="edu-grid">
            ${card({file:"nyit.png",school:"New York Institute of Technology",label:"MBA · In Progress",title:"New York Institute of Technology",body:"Master of Business Administration",date:"Jan 2026 – Present",location:"Vancouver, BC"})}
            ${card({file:"northeastern.png",school:"Northeastern University",label:"Master’s Degree",title:"Northeastern University",body:"M.S. in Project Management",date:"Sep 2021 – Apr 2023"})}
            ${card({file:"northcap.png",school:"The NorthCap University",label:"Bachelor’s Degree",title:"The NorthCap University",body:"Bachelor of Business Administration",date:"Jul 2018 – Jun 2021"})}
          </div>
        </section>

        <section class="edu-group" aria-labelledby="exchange-title">
          <h3 id="exchange-title" class="edu-group__title">Student Exchange &amp; Academic Enrichment</h3>
          <div class="edu-grid">
            ${card({file:"berkeley.svg",school:"UC Berkeley",label:"Student Program",title:"UC Berkeley",body:"Marketing, Leadership &amp; Project Management",context:"During The NorthCap University",date:"Jun – Aug 2019"})}
            ${card({file:"sjsu.png",school:"San José State University",label:"Student Exchange",title:"San José State University",body:"Operations and Supply Chain Management",context:"During The NorthCap University",date:"Jan 2020 – Feb 2020"})}
            ${card({file:"stanford.png",school:"Stanford University",label:"Student Program",title:"Stanford University",body:"Digital Media and Social Networks",context:"During Northeastern University",date:"Jun 2022 – Aug 2022"})}
          </div>
        </section>

        <section class="edu-group" aria-labelledby="creative-education-title">
          <h3 id="creative-education-title" class="edu-group__title">Additional Education &amp; Creative Practice</h3>
          <div class="edu-grid edu-grid--featured">
            <article class="edu-card edu-card--trinity">
              <div class="edu-card__top">
                <img class="edu-card__logo edu-card__logo--trinity" src="${assetBase}/universities/trinity-college-london.png" alt="Trinity College London logo">
                <span class="edu-card__label">Level 3 Certificate · Grade 7</span>
              </div>
              <h3>Trinity College London</h3>
              <div class="edu-card__body">Level 3 Certificate in Graded Examination in Rock &amp; Pop: Grade 7 Rock &amp; Pop Guitar.</div>
              <div class="edu-card__skills" aria-label="Skills">
                <span>Electric Guitar</span><span>Acoustic Guitar</span><span>Music Performance</span>
              </div>
              <div class="edu-card__meta edu-card__meta--credential">
                <span>Issued Jan 2017</span>
                <a class="edu-card__certificate" href="${siteBase}/certificates/trinity-grade-7-certificate.pdf" target="_blank" rel="noreferrer">View Certificate <span aria-hidden="true">↗</span></a>
              </div>
            </article>
            <article class="edu-card edu-card--rockschool">
              <div class="edu-card__top">
                <img class="edu-card__logo edu-card__logo--rockschool" src="${assetBase}/universities/rockschool-rsl.png" alt="Rockschool RSL logo">
                <span class="edu-card__label">Level 3 Certificate · Grade 8</span>
              </div>
              <h3>Rockschool</h3>
              <div class="edu-card__body">RSL Level 3 Certificate in Popular Music Performance: Grade 8 Electric Guitar.</div>
              <div class="edu-card__achievement">Passed with Merit</div>
              <div class="edu-card__skills" aria-label="Skills">
                <span>Electric Guitar</span><span>Popular Music</span><span>Performance</span>
              </div>
              <div class="edu-card__meta edu-card__meta--credential">
                <span>Awarded Nov 2017</span>
                <a class="edu-card__certificate" href="${siteBase}/certificates/rockschool-grade-8-certificate.pdf" target="_blank" rel="noreferrer">View Certificate <span aria-hidden="true">↗</span></a>
              </div>
            </article>
            <article class="edu-card edu-card--google-ai">
              <div class="edu-card__top">
                <img class="edu-card__logo edu-card__logo--google" src="${assetBase}/universities/google-g.png" alt="Google logo">
                <span class="edu-card__label">Professional Certificate · 7 Courses</span>
              </div>
              <h3>Google AI Professional Certificate</h3>
              <div class="edu-card__body">Seven-course professional certificate in applied AI, covering research, communication, content creation, data analysis, and AI-powered app building.</div>
              <div class="edu-card__skills" aria-label="Skills">
                <span>Generative AI</span><span>Research &amp; Insights</span><span>Data Analysis</span><span>AI App Building</span>
              </div>
              <div class="edu-card__meta edu-card__meta--credential">
                <span>Google Career Certificates · Coursera · Issued Jul 2026</span>
                <a class="edu-card__certificate" href="${siteBase}/certificates/google-ai-professional-certificate.png" target="_blank" rel="noreferrer">View Certificate <span aria-hidden="true">↗</span></a>
              </div>
            </article>
            <article class="edu-card edu-card--deeplearning-ai">
              <div class="edu-card__top">
                <img class="edu-card__logo edu-card__logo--deeplearning" src="${assetBase}/universities/deeplearning-ai.png" alt="DeepLearning.AI logo">
                <span class="edu-card__label">Course Certificate · 7 Hours</span>
              </div>
              <h3>AI for Everyone</h3>
              <div class="edu-card__body">Introductory course in artificial intelligence, machine learning, responsible AI, and the organizational application of AI.</div>
              <div class="edu-card__skills" aria-label="Skills">
                <span>AI Literacy</span><span>Machine Learning</span><span>Responsible AI</span>
              </div>
              <div class="edu-card__meta edu-card__meta--credential">
                <span>DeepLearning.AI · Coursera · Issued Nov 2025</span>
                <a class="edu-card__certificate" href="${siteBase}/certificates/ai-for-everyone-certificate.png" target="_blank" rel="noreferrer">View Certificate <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          </div>
        </section>

        <section class="edu-group" aria-labelledby="continuous-title">
          <h3 id="continuous-title" class="edu-group__title">Professional &amp; Continuous Learning</h3>
          <div class="edu-grid">
            ${card({file:"stanford.png",school:"Stanford University",label:"Executive Education · 3 Courses",title:"Stanford University",body:"<ul><li>Harnessing AI to Transform Organizations</li><li>Build a Better Business Model</li><li>AI-Powered Go-to-Market Strategies for Business Growth</li></ul>",date:"Jun 2025 – Nov 2025"})}
            ${card({file:"stanford.png",school:"Stanford University",label:"Stanford Programs",title:"Stanford University",body:"<ul><li>Building the Future of Finance</li><li>Introduction to Python Programming</li><li>Building AI Products Through Rapid Prototyping</li></ul>",date:"May 2026 – Dec 2026"})}
            <article class="edu-card edu-card--credentials">
              <div class="edu-card__top"><span class="edu-card__label">Professional Credentials</span></div>
              <div class="credential-grid">
                ${["Certified Scrum Master (CSM)","Certified Scrum Product Owner (CSPO)","SAFe Agilist","ASQ Six Sigma","Stanford · AI for Business Models"].map((item) => `<span>${item}</span>`).join("")}
              </div>
            </article>
          </div>
        </section>
      </div>`;
  }

  const menuButton = document.querySelector('button[aria-label="Toggle menu"]');
  const desktopNav = document.querySelector("header nav");
  if (menuButton && desktopNav) {
    const mobileNav = document.createElement("nav");
    mobileNav.setAttribute("aria-label", "Mobile navigation");
    mobileNav.className = "fixed top-16 inset-x-0 z-40 bg-navy border-t border-white/10 px-6 py-5 lg:hidden";
    mobileNav.style.display = "none";
    mobileNav.innerHTML = `<div class="flex flex-col gap-4">${desktopNav.innerHTML}</div>`;
    document.body.appendChild(mobileNav);

    menuButton.addEventListener("click", () => {
      const isOpen = mobileNav.style.display !== "none";
      mobileNav.style.display = isOpen ? "none" : "block";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
    });

    mobileNav.addEventListener("click", () => {
      mobileNav.style.display = "none";
      menuButton.setAttribute("aria-expanded", "false");
    });
  }

  const personalBrandTitle = [...document.querySelectorAll("h3")].find(
    (heading) => heading.textContent.trim() === "AI-Enabled Personal Brand",
  );
  const fixLoopCard = personalBrandTitle?.closest("article");
  if (fixLoopCard) {
    personalBrandTitle.textContent = "FixLoop";
    const categoryLabel = [...fixLoopCard.querySelectorAll("div")].find(
      (element) => element.textContent.trim() === "Self-initiated",
    );
    if (categoryLabel) categoryLabel.textContent = "NYIT";

    const summaryParagraphs = fixLoopCard.querySelectorAll(":scope > p");
    summaryParagraphs[0].textContent = "Repairable products are often discarded because consumers lack trusted guidance and a simple way to compare local repair options.";
    summaryParagraphs[1].textContent = "Designed and rapidly prototyped an AI-powered marketplace for diagnosis, transparent pricing, shop comparison, and sustainability rewards.";

    const featureTags = fixLoopCard.querySelectorAll(":scope > div:nth-of-type(2) > span");
    ["AI Diagnosis", "Shop Comparison", "Transparent Pricing", "Sustainability"].forEach((label, index) => {
      if (featureTags[index]) featureTags[index].textContent = label;
    });

    const impact = [...fixLoopCard.querySelectorAll("p")].find((paragraph) =>
      paragraph.previousElementSibling?.textContent.includes("Impact"),
    );
    if (impact) impact.textContent = "Delivered a production-ready Vancouver pilot concept that makes repair easier to evaluate before replacement.";

    const capabilityTags = fixLoopCard.querySelectorAll(":scope > div:last-child > span");
    ["Product Strategy", "Marketplace Design", "Rapid Prototyping"].forEach((label, index) => {
      if (capabilityTags[index]) capabilityTags[index].textContent = label;
    });
  }

  const details = [
    ["A high-volume premium audit pipeline spanning the United States and India required improved turnaround without compromising accuracy or regulatory compliance.", "Reduce audit cycle time and improve documentation quality across a multi-geography portfolio.", "Standardized review workflows on proprietary audit platforms, developed Excel models for 941 and P&L reconciliation, and introduced proactive coordination cadences with insureds and agents."],
    ["ONGC's Project Management division required a documented, end-to-end project governance framework spanning planning through closure.", "Codify a reusable operational playbook to standardize project governance across the division.", "Captured leading practices for planning, scheduling, execution, monitoring, control, and closure into a structured framework."],
    ["A new water treatment engagement required clearly defined scope, deliverables, and a unified source of truth for client status reporting.", "Establish a clear project management plan and consolidated reporting cadence.", "Analyzed requirements, defined deliverables, authored the plan, and structured client status reporting."],
    ["Repairable products are often discarded because consumers lack trusted diagnosis, transparent pricing, and a simple way to compare local repair shops.", "Create a repair-before-recycle marketplace that makes repair easier, more transparent, and more rewarding than replacement.", "Defined the positioning and customer journey, then rapidly prototyped an AI-assisted experience for photo-based estimates, shop comparison, booking, sustainability rewards, and partner onboarding."],
    ["AITMC lacked a coordinated digital presence across Facebook, LinkedIn, and Instagram.", "Establish a measurable baseline and improve audience engagement across channels.", "Executed channel-specific strategies and iterated using analytics."],
  ];

  document.querySelectorAll("button").forEach((button) => {
    if (button.textContent.trim() !== "View details") return;
    const buttons = [...document.querySelectorAll("button")].filter((item) => item.textContent.trim() === "View details");
    const index = buttons.indexOf(button);
    const content = details[index];
    if (!content) return;
    const panel = document.createElement("dl");
    panel.className = "mt-5 grid gap-3 border-t border-border pt-5 text-sm";
    panel.hidden = true;
    panel.innerHTML = `<div><dt class="font-semibold text-navy">Context</dt><dd class="mt-1 text-muted-foreground">${content[0]}</dd></div><div><dt class="font-semibold text-navy">Objective</dt><dd class="mt-1 text-muted-foreground">${content[1]}</dd></div><div><dt class="font-semibold text-navy">Approach</dt><dd class="mt-1 text-muted-foreground">${content[2]}</dd></div>`;
    button.insertAdjacentElement("afterend", panel);
    button.addEventListener("click", () => {
      panel.hidden = !panel.hidden;
      button.textContent = panel.hidden ? "View details" : "Hide details";
      button.setAttribute("aria-expanded", String(!panel.hidden));
    });
  });

  document.querySelectorAll('a[href$="/resume.pdf"]').forEach((link) => {
    link.setAttribute("download", "Siddharth-Manchanda-Resume.pdf");
  });
});
