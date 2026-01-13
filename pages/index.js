// --- 1. CONFIGURAÇÃO DOS DADOS (Edite aqui!) ---
const portfolioData = {
    name: "Seu Nome",
    role: "Fullstack Developer",
    bio: "Apaixonado por JavaScript e interfaces modernas. Criando soluções escaláveis.",
    photo: "https://via.placeholder.com/150", // Coloque o link da sua foto
    links: [
        { 
            title: "LinkedIn",  
            url: "https://www.linkedin.com/in/davi-moreira-11b639196/", 
            icon: "fa-brands fa-linkedin", 
            color: "#ffffff" 
        },
        { 
            title: "GitHub", 
            url: "https://github.com/DaviMoreira58", 
            icon: "fa-brands fa-github", 
            color: "#ffffff" 
        },
    ]
};

// --- 2. INJEÇÃO DE DEPENDÊNCIAS E ESTILOS ---

function loadStyles() {
    // A. Carregar FontAwesome (Ícones)
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);

    // B. Carregar Google Fonts
    const fonts = document.createElement('link');
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap';
    document.head.appendChild(fonts);

    // C. Injetar CSS na página
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        :root {
            --bg-color: #0f172a;
            --card-bg: #1e293b;
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --accent: #38bdf8;
            --hover-bg: #334155;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-primary);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
            line-height: 1.6;
        }
        .container {
            max-width: 480px;
            width: 100%;
            text-align: center;
            animation: fadeIn 1s ease-in-out;
        }
        .profile-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid var(--accent);
            margin-bottom: 1rem;
            padding: 3px;
            background: var(--bg-color);
        }
        h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }
        .role { color: var(--accent); font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; font-size: 0.9rem;}
        .bio { color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 2rem; }
        .social-links { display: flex; flex-direction: column; gap: 15px; }
        .link-card {
            background-color: var(--card-bg);
            color: var(--text-primary);
            text-decoration: none;
            padding: 16px 24px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .link-card:hover {
            transform: translateY(-3px);
            background-color: var(--hover-bg);
            border-color: var(--accent);
            box-shadow: 0 10px 20px -10px rgba(56, 189, 248, 0.3);
        }
        .link-content { display: flex; align-items: center; gap: 15px; font-weight: 500; }
        .link-icon { font-size: 1.2rem; width: 24px; text-align: center; }
        footer { margin-top: 3rem; color: var(--text-secondary); font-size: 0.8rem; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    `;
    document.head.appendChild(styleSheet);
}

// --- 3. LÓGICA DE RENDERIZAÇÃO (DOM) ---

function renderPortfolio() {
    loadStyles();

    const app = document.createElement('div');
    app.className = 'container';

    // Criação dos Botões (Mapeando o Array)
    const linksHTML = portfolioData.links.map(link => `
        <a href="${link.url}" target="_blank" class="link-card">
            <div class="link-content">
                <i class="${link.icon} link-icon" style="color: ${link.color}"></i>
                <span>${link.title}</span>
            </div>
            <i class="fa-solid fa-arrow-right"></i>
        </a>
    `).join('');

    // Montagem do HTML Final
    app.innerHTML = `
        <img src="${portfolioData.photo}" alt="${portfolioData.name}" class="profile-img">
        <h1>${portfolioData.name}</h1>
        <p class="role">${portfolioData.role}</p>
        <p class="bio">${portfolioData.bio}</p>
        
        <div class="social-links">
            ${linksHTML}
        </div>

        <footer>
            <p>&copy; ${new Date().getFullYear()} ${portfolioData.name}. Todos os direitos reservados.</p>
        </footer>
    `;

    document.body.appendChild(app);
}

// Inicializa quando a página carregar
document.addEventListener('DOMContentLoaded', renderPortfolio);







import Head from 'next/head';

export default function Home() {
  
  // Dados do Portfólio
  const portfolioData = {
    name: "Davi Moreira",
    role: "Backend Developer",
    bio: "Criando soluções escaláveis.",
    photo: "https://via.placeholder.com/150", 
    links: [
        { title: "LinkedIn", url: "https://www.linkedin.com/in/davi-moreira-11b639196/", icon: "fa-brands fa-linkedin", color: "#ffffff" },
        { title: "GitHub", url: "https://github.com/DaviMoreira58", icon: "fa-brands fa-github", color: "#ffffff" },
    ]
  };

  return (
    <>
      <Head>
        <title>Portfólio | {portfolioData.name}</title>
        {/* Importando FontAwesome e Fonte Inter direto no Head do Next */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="container">
        <img src={portfolioData.photo} alt={portfolioData.name} className="profile-img" />
        <h1>{portfolioData.name}</h1>
        <p className="role">{portfolioData.role}</p>
        <p className="bio">{portfolioData.bio}</p>

        <div className="social-links">
          {portfolioData.links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link-card">
              <div className="link-content">
                <i className={`${link.icon} link-icon`} style={{ color: link.color }}></i>
                <span>{link.title}</span>
              </div>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          ))}
        </div>

        <footer>
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Todos os direitos reservados.</p>
        </footer>
      </div>

      {/* Estilos CSS usando styled-jsx (Nativo do Next.js) */}
      <style jsx global>{`
        :root {
            --bg-color: #0f172a;
            --card-bg: #1e293b;
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --accent: #38bdf8;
            --hover-bg: #334155;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-primary);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
            line-height: 1.6;
        }
      `}</style>

      <style jsx>{`
        .container {
            max-width: 480px;
            width: 100%;
            text-align: center;
            animation: fadeIn 1s ease-in-out;
        }
        .profile-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid var(--accent);
            margin-bottom: 1rem;
            padding: 3px;
            background: var(--bg-color);
        }
        h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }
        .role { color: var(--accent); font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; font-size: 0.9rem;}
        .bio { color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 2rem; }
        .social-links { display: flex; flex-direction: column; gap: 15px; }
        
        .link-card {
            background-color: var(--card-bg);
            color: var(--text-primary);
            text-decoration: none;
            padding: 16px 24px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .link-card:hover {
            transform: translateY(-3px);
            background-color: var(--hover-bg);
            border-color: var(--accent);
            box-shadow: 0 10px 20px -10px rgba(56, 189, 248, 0.3);
        }
        .link-content { display: flex; align-items: center; gap: 15px; font-weight: 500; }
        .link-icon { font-size: 1.2rem; width: 24px; text-align: center; }
        footer { margin-top: 3rem; color: var(--text-secondary); font-size: 0.8rem; }
        
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}
