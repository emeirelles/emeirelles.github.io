// ==========================================
//  3fase laguage selector
// ==========================================

// ------------------------------------------
//  Dicionário de tradução
// ------------------------------------------
const translations = {
  titulo: "3fase | Consulting",
  
  // header/mainnav
  hdmn1: "what we do",
  hdmn2: "about us",
  hdmn3: "how we work",
  hdmn4: "technologies",
  hdmn5: "partners",
  hdmn6: "contact us",
  // hero
  hrtt1: "Solutions beyond technology",
  hrsb1: "We address challenges and turn opportunities into innovations.",
  hrsb2: "Using integrated approaches to processes and technologies, we expand possibilities for operational improvements and developments of new business models.",
  // nossa-atuação
  natt1: "What we do",
  nasb1: "At 3fase, we go beyond technical delivery. Our team integrates innovative processes, advanced technologies, and specialized consulting.",
  nasb2: "We offer customized solutions that promote efficiency, productivity and safety in your operations, even enabling new business development opportunities.",
  // nossa-atuação/lista
  latt1: "SYSTEMS AND INFRASCTRUCTURE",
  ladc1: "IT/TO environment analysis to identify opportunities for resources optimization.",
  latt2: "FUNCTIONAL REQUIREMENTS",
  ladc2: "Survey, analysis, and selection of ERP, CRM, TMS, WMS, and EPM systems.",
  latt3: "PROCESS IMPROVEMENT",
  ladc3: "Process analysis, diagnosis, recommendations and redesign.",
  latt4: "PROCESS TRANSFORMATION",
  ladc4: "Discovering and deployment of technologies that power disruptive innovation.",
  latt5: "PROCESS PERFORMANCE",
  ladc5: "Designing, deploying, and tracking of operational and strategic KPIs.",
  // quem-somos
  qstt1: "About us",
  qssb1: "We are a process and technology integrator focused on customized solutions aligned to our clients' businesses.",
  qssb2: "Our professionals have experience in management, business models, processes, operations, IT and innovation, with expertise in various market segments and their specific dynamics.",
  // como-trablahamos
  cttt1: "How we do",
  ctsb1: "Our focus goes beyond technical implementation.",
  ctdc1: "Tailoring our solutions to clients' businesses and profiles, we contribute to people, processes and technologies improvement.",
  ctdc2: "We structure our workflow into four stages, from identifying needs and opportunities to sustainable operation.",
  // como-trabalhamos/etapas
  ctds1: "Based on our understanding of your business, we conduct a detailed diagnosis to identify needs, opportunities, and challenges, from which we propose a solution that combines and customizes the most appropriate products and services with the necessary level of adherence.",
  ctds2: "With the whole solution defined, we detail every aspect to ensure an adherent execution plan, aligning resources, setting schedules and addressing potential risks, ensuring everything will be ready for implementation.",
  ctds3: "We execute the plan with precision, enabling technologies and services according to the predefined specifications and deadlines, minimizing disruptions, thus ensuring an efficient and smooth transition.",
  ctds4: "After implementation, we will be by your side to ensure solution sustainability, providing continuous technical support, training your team and tracking the necessary evolutions to keep your operation up-to-date and optimized.",
  ctit1: "identification",
  ctid1: "Business analysis, study of opportunities and challenges, solution proposal",
  ctit2: "planning",
  ctid2: "Execution plan development, resource alignment, schedule definition",
  ctit3: "deployment",
  ctid3: "Plan execution, downtime mitigation, smooth and efficient transition to production",
  ctit4: "maintenance",
  ctid4: "Solution maintenance, ongoing technical support, training, and monitoring",
  // tecnologias
  tctt1: "Technologies",
  tcsb1: "We implement innovating technologies focused on complex process management and operation, as well as business intelligence improvement.",
  // tecnologias/lista
  lttt1: "X-REALITY",
  ltdc1: "Immersive experiences that blend real world elements with digital environments.",
  lttt2: "GENERATIVE AI",
  ltdc2: "Advanced learning models designed to create innovative content based on recognized patterns.",
  lttt3: "INTERNET OF THINGS",
  ltdc3: "IoC allows connected devices to collect, share, and real-time data processing.",
  lttt4: "COMPUTER VISION",
  ltdc4: "Advanced techniques for interpreting and analyzing visual information, enhancing efficiency and precision in complex industrial processes.",
  lttt5: "ANALYTICS",
  ltdc5: "Enables decision-making based on forecasts and trends derived from large volumes of data processing.",
  lttt6: "INDUSTRIAL SENSING",
  ltdc6: "Predictive monitoring solutions for machines and processes, designed to minimize downtime and maximize production efficiency.",
  // parceiros
  pett1: "Strategic partners",
  // footer
  fttt1: "Contact:",
  ftsb1: "info@3fase.com.br"
};

document.addEventListener("DOMContentLoaded", function () {

  // ------------------------------------------
  //  Armazenamento dos textos em português 
  // (somente depois de todo o DOM estar carregado)
  // ------------------------------------------
  const originalTexts = {};
  document.querySelectorAll("[seletor]").forEach(el => {
    const key = el.getAttribute("seletor");
    originalTexts[key] = el.textContent;
  });

  // ------------------------------------------
  //  Detecção do idioma PT/EN do navegador 
  // ------------------------------------------
  let currentLang = navigator.language.startsWith("en") ? "en" : "pt";
  applyTranslations(currentLang);

  // ------------------------------------------
  //  Aplicação dos elementos na língua selecionada
  // ------------------------------------------
  function applyTranslations(lang) {
    
    // Texto
    document.querySelectorAll("[seletor]").forEach(el => {
      const key = el.getAttribute("seletor");

      if (lang === "en") {
        if (translations[key]) {
          el.textContent = translations[key];
        }
      } else {
        el.textContent = originalTexts[key];
      }
    });

    // Imagem do fluxo 
    document.querySelectorAll(".lang-pt, .lang-en").forEach(img => {
      if (lang === "en") {
        img.classList.toggle("hidden", img.classList.contains("lang-pt"));
      } else {
        img.classList.toggle("hidden", img.classList.contains("lang-en"));
    }
    });
        
    // Caption da opção de menu 'English'/'Português'
    const btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = lang === "en" ? "Português" : "English";

    currentLang = lang;
  }

  // ------------------------------------------
  //  Receptor do evento de seleção do idioma 
  //  (opção de menu 'English'/'Português' 
  // ------------------------------------------
  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    const newLang = currentLang === "pt" ? "en" : "pt";
    applyTranslations(newLang);
  });
});
