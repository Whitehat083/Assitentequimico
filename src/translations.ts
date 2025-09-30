export type Translation = {
  sidebar: {
    home: string;
    experiments: string;
    search: string;
    calculator: string;
    periodicTable: string;
    reports: string;
    language: string;
  };
  homePage: {
    title: string;
    description: string;
    systemInstruction: string;
    placeholder: string;
  };
  experimentsPage: {
    title: string;
    description: string;
    systemInstruction: string;
    placeholder: string;
  };
  searchPage: {
    title: string;
    description: string;
    systemInstruction: string;
    placeholder: string;
  };
  calculatorPage: {
    title: string;
    description: string;
    systemInstruction: string;
    placeholder: string;
  };
  periodicTablePage: {
    title: string;
    description: string;
    legend: string;
    atomicMass: string;
    density: string;
    phase: string;
    melt: string;
    boil: string;
    discoveredBy: string;
    electronConfig: string;
    categories: { [key: string]: string };
  };
  reportsPage: {
    title: string;
    description: string;
    systemInstruction: string;
    placeholder: string;
  };
};

type Translations = {
  [key: string]: Translation;
};

export const translations: Translations = {
  pt: {
    sidebar: {
      home: 'Home',
      experiments: 'Experimentos',
      search: 'Busca & Descoberta',
      calculator: 'Calculadora',
      periodicTable: 'Tabela Periódica',
      reports: 'Relatórios',
      language: 'Idioma'
    },
    homePage: {
      title: 'Home (Busca Geral)',
      description: 'Faça perguntas amplas sobre história da química, propriedades ou conceitos básicos.',
      systemInstruction: `Você está na página Home de um assistente de IA de Química. Seu objetivo é responder a perguntas gerais de química em Português.
- Aborde tópicos como história (ex: quem descobriu os átomos), propriedades (ex: elétrons de valência de um elemento) ou conceitos básicos.
- Forneça explicações concisas e claras.
- Inclua fontes históricas ou científicas quando relevante.
- Simule a navegação começando sua resposta com "Bem-vindo à Página Home."
- Mantenha o tom educacional, profissional e acessível.`,
      placeholder: 'Ex: Quem descobriu os átomos?'
    },
    experimentsPage: {
      title: 'Experimentos',
      description: 'Descreva um processo experimental para receber um relatório de laboratório detalhado.',
      systemInstruction: `Você está na página de Experimentos de um assistente de IA de Química. Sua tarefa é fornecer um relatório de laboratório completo e seguro para um processo experimental em Português.
- Comece sua resposta com "Bem-vindo à Página 2: Experimentos. Aqui está o relatório para [nome do processo]."
- Estruture o relatório com as seguintes seções claras usando cabeçalhos em negrito: **Objetivo**, **Materiais**, **Metodologia**, **Dados a Registrar** e **Precauções**.
- Para **Precauções**, SEMPRE inclua avisos de segurança críticos, como a necessidade de EPI, trabalho em área ventilada e supervisão profissional. Use itálico para alertas de segurança.`,
      placeholder: 'Ex: Extração de óleo de abacate'
    },
    searchPage: {
      title: 'Busca & Descoberta',
      description: 'Pesquise por químicos por nome, número CAS, fórmula ou propriedades.',
      systemInstruction: `Você está na página de Busca & Descoberta. Sua função é ajudar os usuários a encontrar informações sobre substâncias químicas em Português.
- Comece sua resposta com "Bem-vindo à Página 3: Busca & Descoberta."
- Lide com buscas por nome químico, número CAS, fórmula ou propriedades.
- Para filtros (ex: "encontre todos os solventes com baixo ponto de ebulição"), responda com uma lista filtrada.`,
      placeholder: 'Ex: Encontre solventes com ponto de ebulição abaixo de 50°C'
    },
    calculatorPage: {
      title: 'Calculadora de Química',
      description: 'Realize cálculos de estequiometria, concentrações, leis dos gases e mais.',
      systemInstruction: `Você está na página da Calculadora. Sua função é realizar cálculos químicos complexos em Português.
- Comece sua resposta com "Bem-vindo à Página 4: Calculadora."
- Lide com cálculos de estequiometria, concentrações, etc.
- Mostre a fórmula, os passos do cálculo e o resultado final com unidades.`,
      placeholder: 'Ex: Qual a molaridade de 2 moles de NaCl em 4 litros de água?'
    },
    periodicTablePage: {
        title: 'Tabela Periódica Interativa',
        description: 'Clique em um elemento para ver suas propriedades.',
        legend: 'Legenda',
        atomicMass: 'Massa Atômica',
        density: 'Densidade',
        phase: 'Fase',
        melt: 'Ponto de Fusão',
        boil: 'Ponto de Ebulição',
        discoveredBy: 'Descoberto por',
        electronConfig: 'Config. Eletrônica',
        categories: {
            'diatomic nonmetal': 'Não-metal diatômico',
            'noble gas': 'Gás nobre',
            'alkali metal': 'Metal alcalino',
            'alkaline earth metal': 'Metal alcalinoterroso',
            'metalloid': 'Metaloide',
            'polyatomic nonmetal': 'Não-metal poliatômico',
            'post-transition metal': 'Metal de pós-transição',
            'transition metal': 'Metal de transição',
            'lanthanide': 'Lantanídeo',
            'actinide': 'Actinídeo',
            'unknown': 'Desconhecido',
        }
    },
    reportsPage: {
      title: 'Relatórios & Exportação',
      description: 'Gere e formate relatórios de experimentos ou buscas para fácil cópia.',
      systemInstruction: `Você está na página de Relatórios & Exportação. Seu objetivo é gerar relatórios textuais bem estruturados em Português para que o usuário possa copiar.
- Comece sua resposta com "Bem-vindo à Página 6: Relatórios & Exportação. Aqui está seu relatório gerado."
- Formate o conteúdo fornecido pelo usuário com: **Título**, **Autor** (Opcional), **Data** (data atual), e o **Conteúdo** bem organizado.`,
      placeholder: 'Ex: Gere um relatório para o experimento de extração de óleo de abacate.'
    },
  },
  en: {
    sidebar: {
      home: 'Home',
      experiments: 'Experiments',
      search: 'Search & Discovery',
      calculator: 'Calculator',
      periodicTable: 'Periodic Table',
      reports: 'Reports',
      language: 'Language'
    },
    homePage: {
      title: 'Home (General Search)',
      description: 'Ask broad questions about chemistry history, properties, or basic concepts.',
      systemInstruction: `You are on the Home page of a Chemistry AI assistant. Your goal is to answer broad chemistry questions in English.
- Address topics like history (e.g., who discovered atoms), properties (e.g., valence electrons of an element), or basic concepts.
- Provide concise and clear explanations.
- Include historical or scientific sources when relevant.
- Simulate navigation by starting your response with "Welcome to the Home Page."
- Keep the tone educational, professional, and accessible.`,
      placeholder: 'e.g., Who discovered atoms?'
    },
    experimentsPage: {
      title: 'Experiments',
      description: 'Describe an experimental process to receive a detailed laboratory report.',
      systemInstruction: `You are on the Experiments page of a Chemistry AI assistant. Your task is to provide a complete and safe laboratory report for a given experimental process in English.
- Start your response with "Welcome to Page 2: Experiments. Here is the report for [process name]."
- Structure the report with the following clear sections using bold headers: **Objective**, **Materials**, **Methodology**, **Data to Register**, and **Precautions**.
- For **Precautions**, ALWAYS include critical safety warnings, such as the need for PPE, working in a well-ventilated area, and professional supervision. Use italics for safety alerts.`,
      placeholder: 'e.g., Extraction of oil from avocado'
    },
    searchPage: {
      title: 'Search & Discovery',
      description: 'Search for chemicals by name, CAS number, formula, or properties.',
      systemInstruction: `You are on the Search & Discovery page. Your function is to help users find information about chemical substances in English.
- Start your response with "Welcome to Page 3: Search & Discovery."
- Handle searches by chemical name, CAS number, formula, or properties.
- For filters (e.g., "find all solvents with a low boiling point"), respond with a filtered list.`,
      placeholder: 'e.g., Find solvents with a boiling point below 50°C'
    },
    calculatorPage: {
      title: 'Chemistry Calculator',
      description: 'Perform calculations for stoichiometry, concentrations, gas laws, and more.',
      systemInstruction: `You are on the Calculator page. Your role is to perform complex chemistry calculations in English.
- Start your response with "Welcome to Page 4: Calculator."
- Handle calculations for stoichiometry, concentrations, etc.
- Show the formula, calculation steps, and the final result with units.`,
      placeholder: 'e.g., What is the molarity of 2 moles of NaCl in 4 liters of water?'
    },
    periodicTablePage: {
        title: 'Interactive Periodic Table',
        description: 'Click on an element to see its properties.',
        legend: 'Legend',
        atomicMass: 'Atomic Mass',
        density: 'Density',
        phase: 'Phase',
        melt: 'Melt',
        boil: 'Boil',
        discoveredBy: 'Discovered by',
        electronConfig: 'Electron Config',
        categories: {
            'diatomic nonmetal': 'Diatomic nonmetal',
            'noble gas': 'Noble gas',
            'alkali metal': 'Alkali metal',
            'alkaline earth metal': 'Alkaline earth metal',
            'metalloid': 'Metalloid',
            'polyatomic nonmetal': 'Polyatomic nonmetal',
            'post-transition metal': 'Post-transition metal',
            'transition metal': 'Transition metal',
            'lanthanide': 'Lanthanide',
            'actinide': 'Actinide',
            'unknown': 'Unknown',
        }
    },
    reportsPage: {
      title: 'Reports & Export',
      description: 'Generate and format reports from experiments or searches for easy copying.',
      systemInstruction: `You are on the Reports & Export page. Your purpose is to generate well-structured, text-based reports in English for the user to copy.
- Start your response with "Welcome to Page 6: Reports & Export. Here is your generated report."
- Format the user-provided content with: **Title**, **Author** (Optional), **Date** (current date), and the well-organized **Content**.`,
      placeholder: 'e.g., Generate a report for the avocado oil extraction experiment.'
    },
  },
  es: {
    sidebar: {
      home: 'Inicio',
      experiments: 'Experimentos',
      search: 'Búsqueda y Descubrimiento',
      calculator: 'Calculadora',
      periodicTable: 'Tabla Periódica',
      reports: 'Informes',
      language: 'Idioma'
    },
    homePage: {
      title: 'Inicio (Búsqueda General)',
      description: 'Haga preguntas amplias sobre la historia de la química, propiedades o conceptos básicos.',
      systemInstruction: `Estás en la página de Inicio de un asistente de IA de Química. Tu objetivo es responder preguntas generales de química en Español.
- Aborda temas como historia (ej: quién descubrió los átomos), propiedades o conceptos básicos.
- Proporciona explicaciones concisas y claras.
- Incluye fuentes históricas o científicas cuando sea relevante.
- Simula la navegación comenzando tu respuesta con "Bienvenido a la Página de Inicio."
- Mantén un tono educativo, profesional y accesible.`,
      placeholder: 'Ej: ¿Quién descubrió los átomos?'
    },
    experimentsPage: {
      title: 'Experimentos',
      description: 'Describa un proceso experimental para recibir un informe de laboratorio detallado.',
      systemInstruction: `Estás en la página de Experimentos. Tu tarea es proporcionar un informe de laboratorio completo y seguro para un proceso experimental en Español.
- Comienza tu respuesta con "Bienvenido a la Página 2: Experimentos. Aquí está el informe para [nombre del proceso]."
- Estructura el informe con las secciones: **Objetivo**, **Materiales**, **Metodología**, **Datos a Registrar** y **Precauciones**.
- En **Precauciones**, SIEMPRE incluye advertencias de seguridad críticas.`,
      placeholder: 'Ej: Extracción de aceite de aguacate'
    },
    searchPage: {
      title: 'Búsqueda y Descubrimiento',
      description: 'Busque químicos por nombre, número CAS, fórmula o propiedades.',
      systemInstruction: `Estás en la página de Búsqueda y Descubrimiento. Tu función es ayudar a los usuarios a encontrar información sobre sustancias químicas en Español.
- Comienza tu respuesta con "Bienvenido a la Página 3: Búsqueda y Descubrimiento."
- Maneja búsquedas por nombre, CAS, fórmula, o propiedades.`,
      placeholder: 'Ej: Encontrar disolventes con punto de ebullición inferior a 50°C'
    },
    calculatorPage: {
      title: 'Calculadora de Química',
      description: 'Realice cálculos de estequiometría, concentraciones, leyes de gases y más.',
      systemInstruction: `Estás en la página de la Calculadora. Tu rol es realizar cálculos químicos complejos en Español.
- Comienza tu respuesta con "Bienvenido a la Página 4: Calculadora."
- Muestra la fórmula, los pasos del cálculo y el resultado final con unidades.`,
      placeholder: 'Ej: ¿Cuál es la molaridad de 2 moles de NaCl en 4 litros de agua?'
    },
    periodicTablePage: {
        title: 'Tabla Periódica Interactiva',
        description: 'Haga clic en un elemento para ver sus propiedades.',
        legend: 'Leyenda',
        atomicMass: 'Masa Atómica',
        density: 'Densidad',
        phase: 'Fase',
        melt: 'Punto de Fusíon',
        boil: 'Punto de Ebullición',
        discoveredBy: 'Descubierto por',
        electronConfig: 'Config. Electrónica',
        categories: {
            'diatomic nonmetal': 'No metal diatómico',
            'noble gas': 'Gas noble',
            'alkali metal': 'Metal alcalino',
            'alkaline earth metal': 'Metal alcalinotérreo',
            'metalloid': 'Metaloide',
            'polyatomic nonmetal': 'No metal poliatómico',
            'post-transition metal': 'Metal de post-transición',
            'transition metal': 'Metal de transición',
            'lanthanide': 'Lantánido',
            'actinide': 'Actínido',
            'unknown': 'Desconocido',
        }
    },
    reportsPage: {
      title: 'Informes y Exportación',
      description: 'Genere y formatee informes de experimentos o búsquedas para copiarlos fácilmente.',
      systemInstruction: `Estás en la página de Informes y Exportación. Tu propósito es generar informes de texto bien estructurados en Español para que el usuario los copie.
- Comienza tu respuesta con "Bienvenido a la Página 6: Informes y Exportación. Aquí está su informe generado."
- Formatea el contenido con: **Título**, **Autor** (Opcional), **Fecha** y el **Contenido**.`,
      placeholder: 'Ej: Generar un informe para el experimento de extracción de aceite de aguacate.'
    },
  },
  de: {
    sidebar: {
      home: 'Startseite',
      experiments: 'Experimente',
      search: 'Suche & Entdeckung',
      calculator: 'Rechner',
      periodicTable: 'Periodensystem',
      reports: 'Berichte',
      language: 'Sprache'
    },
    homePage: {
      title: 'Startseite (Allgemeine Suche)',
      description: 'Stellen Sie allgemeine Fragen zur Chemiegeschichte, Eigenschaften oder grundlegenden Konzepten.',
      systemInstruction: `Sie befinden sich auf der Startseite eines Chemie-KI-Assistenten. Ihr Ziel ist es, allgemeine Chemiefragen auf Deutsch zu beantworten.
- Behandeln Sie Themen wie Geschichte (z.B. wer hat Atome entdeckt), Eigenschaften oder grundlegende Konzepte.
- Geben Sie prägnante und klare Erklärungen.
- Fügen Sie relevante historische oder wissenschaftliche Quellen hinzu.
- Simulieren Sie die Navigation, indem Sie Ihre Antwort mit "Willkommen auf der Startseite." beginnen.
- Behalten Sie einen lehrreichen, professionellen und zugänglichen Ton bei.`,
      placeholder: 'Z.B. Wer hat die Atome entdeckt?'
    },
    experimentsPage: {
      title: 'Experimente',
      description: 'Beschreiben Sie einen experimentellen Prozess, um einen detaillierten Laborbericht zu erhalten.',
      systemInstruction: `Sie sind auf der Seite "Experimente". Ihre Aufgabe ist es, einen vollständigen und sicheren Laborbericht für einen gegebenen experimentellen Prozess auf Deutsch zu erstellen.
- Beginnen Sie Ihre Antwort mit "Willkommen auf Seite 2: Experimente. Hier ist der Bericht für [Prozessname]."
- Strukturieren Sie den Bericht mit den Abschnitten: **Ziel**, **Materialien**, **Methodik**, **Zu registrierende Daten** und **Vorsichtsmaßnahmen**.
- Bei **Vorsichtsmaßnahmen** IMMER kritische Sicherheitshinweise angeben.`,
      placeholder: 'Z.B. Extraktion von Öl aus Avocado'
    },
    searchPage: {
      title: 'Suche & Entdeckung',
      description: 'Suchen Sie nach Chemikalien nach Name, CAS-Nummer, Formel oder Eigenschaften.',
      systemInstruction: `Sie sind auf der Seite "Suche & Entdeckung". Ihre Funktion ist es, Benutzern zu helfen, Informationen über chemische Substanzen auf Deutsch zu finden.
- Beginnen Sie Ihre Antwort mit "Willkommen auf Seite 3: Suche & Entdeckung."
- Bearbeiten Sie Suchen nach Name, CAS, Formel oder Eigenschaften.`,
      placeholder: 'Z.B. Finden Sie Lösungsmittel mit einem Siedepunkt unter 50°C'
    },
    calculatorPage: {
      title: 'Chemie-Rechner',
      description: 'Führen Sie Berechnungen zur Stöchiometrie, Konzentrationen, Gasgesetzen und mehr durch.',
      systemInstruction: `Sie sind auf der Rechner-Seite. Ihre Rolle ist es, komplexe chemische Berechnungen auf Deutsch durchzuführen.
- Beginnen Sie Ihre Antwort mit "Willkommen auf Seite 4: Rechner."
- Zeigen Sie die Formel, die Rechenschritte und das Endergebnis mit Einheiten.`,
      placeholder: 'Z.B. Was ist die Molarität von 2 Mol NaCl in 4 Litern Wasser?'
    },
    periodicTablePage: {
        title: 'Interaktives Periodensystem',
        description: 'Klicken Sie auf ein Element, um seine Eigenschaften anzuzeigen.',
        legend: 'Legende',
        atomicMass: 'Atommasse',
        density: 'Dichte',
        phase: 'Phase',
        melt: 'Schmelzpunkt',
        boil: 'Siedepunkt',
        discoveredBy: 'Entdeckt von',
        electronConfig: 'Elektronenkonfig.',
        categories: {
            'diatomic nonmetal': 'Diatomares Nichtmetall',
            'noble gas': 'Edelgas',
            'alkali metal': 'Alkalimetall',
            'alkaline earth metal': 'Erdalkalimetall',
            'metalloid': 'Halbmetall',
            'polyatomic nonmetal': 'Polyatomares Nichtmetall',
            'post-transition metal': 'Übergangsmetall',
            'transition metal': 'Übergangsmetall',
            'lanthanide': 'Lanthanoid',
            'actinide': 'Actinoid',
            'unknown': 'Unbekannt',
        }
    },
    reportsPage: {
      title: 'Berichte & Export',
      description: 'Erstellen und formatieren Sie Berichte aus Experimenten oder Suchen zum einfachen Kopieren.',
      systemInstruction: `Sie sind auf der Seite "Berichte & Export". Ihr Zweck ist es, gut strukturierte, textbasierte Berichte auf Deutsch zu erstellen, die der Benutzer kopieren kann.
- Beginnen Sie Ihre Antwort mit "Willkommen auf Seite 6: Berichte & Export. Hier ist Ihr generierter Bericht."
- Formatieren Sie den Inhalt mit: **Titel**, **Autor** (Optional), **Datum** und dem **Inhalt**.`,
      placeholder: 'Z.B. Erstellen Sie einen Bericht für das Avocadoöl-Extraktionsexperiment.'
    },
  },
  fr: {
    sidebar: {
      home: 'Accueil',
      experiments: 'Expériences',
      search: 'Recherche & Découverte',
      calculator: 'Calculatrice',
      periodicTable: 'Tableau Périodique',
      reports: 'Rapports',
      language: 'Langue'
    },
    homePage: {
      title: 'Accueil (Recherche Générale)',
      description: 'Posez des questions générales sur l\'histoire de la chimie, les propriétés ou les concepts de base.',
      systemInstruction: `Vous êtes sur la page d'accueil d'un assistant IA de chimie. Votre objectif est de répondre à des questions générales sur la chimie en Français.
- Abordez des sujets comme l'histoire (par exemple, qui a découvert les atomes), les propriétés ou les concepts de base.
- Fournissez des explications concises et claires.
- Incluez des sources historiques ou scientifiques pertinentes.
- Simulez la navigation en commençant votre réponse par "Bienvenue sur la page d'accueil."
- Maintenez un ton éducatif, professionnel et accessible.`,
      placeholder: 'Ex: Qui a découvert les atomes ?'
    },
    experimentsPage: {
      title: 'Expériences',
      description: 'Décrivez un processus expérimental pour recevoir un rapport de laboratoire détaillé.',
      systemInstruction: `Vous êtes sur la page "Expériences". Votre tâche est de fournir un rapport de laboratoire complet et sûr pour un processus expérimental donné en Français.
- Commencez votre réponse par "Bienvenue à la Page 2 : Expériences. Voici le rapport pour [nom du processus]."
- Structurez le rapport avec les sections : **Objectif**, **Matériaux**, **Méthodologie**, **Données à enregistrer** et **Précautions**.
- Pour les **Précautions**, incluez TOUJOURS des avertissements de sécurité critiques.`,
      placeholder: 'Ex: Extraction de l\'huile d\'avocat'
    },
    searchPage: {
      title: 'Recherche & Découverte',
      description: 'Recherchez des produits chimiques par nom, numéro CAS, formule ou propriétés.',
      systemInstruction: `Vous êtes sur la page "Recherche & Découverte". Votre fonction est d'aider les utilisateurs à trouver des informations sur les substances chimiques en Français.
- Commencez votre réponse par "Bienvenue à la Page 3 : Recherche & Découverte."
- Gérez les recherches par nom, CAS, formule ou propriétés.`,
      placeholder: 'Ex: Trouver des solvants avec un point d\'ébullition inférieur à 50°C'
    },
    calculatorPage: {
      title: 'Calculatrice de Chimie',
      description: 'Effectuez des calculs de stœchiométrie, de concentrations, de lois des gaz et plus encore.',
      systemInstruction: `Vous êtes sur la page de la calculatrice. Votre rôle est d'effectuer des calculs de chimie complexes en Français.
- Commencez votre réponse par "Bienvenue à la Page 4 : Calculatrice."
- Montrez la formule, les étapes de calcul et le résultat final avec les unités.`,
      placeholder: 'Ex: Quelle est la molarité de 2 moles de NaCl dans 4 litres d\'eau ?'
    },
    periodicTablePage: {
        title: 'Tableau Périodique Interactif',
        description: 'Cliquez sur un élément pour voir ses propriétés.',
        legend: 'Légende',
        atomicMass: 'Masse Atomique',
        density: 'Densité',
        phase: 'Phase',
        melt: 'Point de Fusion',
        boil: 'Point d\'Ébullition',
        discoveredBy: 'Découvert par',
        electronConfig: 'Config. Électronique',
        categories: {
            'diatomic nonmetal': 'Non-métal diatomique',
            'noble gas': 'Gaz noble',
            'alkali metal': 'Métal alcalin',
            'alkaline earth metal': 'Métal alcalino-terreux',
            'metalloid': 'Métalloïde',
            'polyatomic nonmetal': 'Non-métal polyatomique',
            'post-transition metal': 'Métal de post-transition',
            'transition metal': 'Métal de transition',
            'lanthanide': 'Lanthanide',
            'actinide': 'Actinide',
            'unknown': 'Inconnu',
        }
    },
    reportsPage: {
      title: 'Rapports & Exportation',
      description: 'Générez et formatez des rapports d\'expériences ou de recherches pour une copie facile.',
      systemInstruction: `Vous êtes sur la page "Rapports & Exportation". Votre but est de générer des rapports textuels bien structurés en Français que l'utilisateur peut copier.
- Commencez votre réponse par "Bienvenue à la Page 6 : Rapports & Exportation. Voici votre rapport généré."
- Formatez le contenu avec : **Titre**, **Auteur** (Optionnel), **Date** et le **Contenu**.`,
      placeholder: 'Ex: Générer un rapport pour l\'expérience d\'extraction d\'huile d\'avocat.'
    },
  },
};
