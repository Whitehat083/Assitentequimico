export interface Translation {
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
  periodicTable: {
    title: string;
    description: string;
    atomicNumber: string;
    atomicMass: string;
    category: string;
    phase: string;
    density: string;
    boilingPoint: string;
    meltingPoint: string;
    molarHeat: string;
    electronConfig: string;
    electronegativity: string;
    discoveredBy: string;
  };
  reportsPage: {
    title: string;
    description: string;
    systemInstruction: string;
    placeholder: string;
  };
  elements: { [key: string]: string };
  periodicTableCategories: { [key: string]: string };
}

const en: Translation = {
  sidebar: {
    home: "General Inquiry",
    experiments: "Experiment Simulator",
    search: "Research Search",
    calculator: "Chemistry Calculator",
    periodicTable: "Periodic Table",
    reports: "Report Generator",
    language: "Language"
  },
  homePage: {
    title: "General Chemistry Inquiry",
    description: "Ask any question about chemistry concepts, history, or terminology.",
    systemInstruction: "You are an expert chemist. Answer the user's questions about general chemistry in a clear and concise way. Use markdown for formatting.",
    placeholder: "e.g., What is a covalent bond?"
  },
  experimentsPage: {
    title: "Experiment Simulator",
    description: "Describe a chemical experiment and get the expected outcome, procedure, and safety precautions.",
    systemInstruction: "You are a lab assistant AI. Given an experiment, describe the step-by-step procedure, list necessary materials, detail safety warnings, and predict the outcome. Use markdown for formatting with bold headers for each section.",
    placeholder: "e.g., Simulate the reaction between vinegar and baking soda."
  },
  searchPage: {
    title: "Chemistry Research Search",
    description: "Find information on chemical compounds, reactions, or scientific papers.",
    systemInstruction: "You are a research assistant AI. The user will ask about chemical compounds, reactions, or research topics. Provide a detailed summary, properties, and common uses. If asked for papers, suggest relevant fields of study or notable publications. Use markdown formatting.",
    placeholder: "e.g., Information on benzene"
  },
  calculatorPage: {
    title: "Chemistry Calculator",
    description: "Solve stoichiometry, molar mass, and other chemical calculations.",
    systemInstruction: "You are a chemistry calculation expert. Solve the user's problem, showing the step-by-step solution. Clearly state the final answer. Use markdown for formatting, especially for formulas.",
    placeholder: "e.g., Calculate the molar mass of H₂SO₄"
  },
  periodicTable: {
    title: "Interactive Periodic Table",
    description: "Explore the elements of the periodic table. Click on an element to see its details.",
    atomicNumber: "Atomic Number",
    atomicMass: "Atomic Mass (u)",
    category: "Category",
    phase: "Phase",
    density: "Density",
    boilingPoint: "Boiling Point",
    meltingPoint: "Melting Point",
    molarHeat: "Molar Heat",
    electronConfig: "Electron Config.",
    electronegativity: "Electronegativity",
    discoveredBy: "Discovered By",
  },
  reportsPage: {
    title: "Lab Report Generator",
    description: "Generate a structured lab report based on your experiment data.",
    systemInstruction: "You are a lab report writing assistant. The user will provide data and a topic for a lab experiment. Generate a structured report with sections like: Title, Abstract, Introduction, Materials and Methods, Results, Discussion, and Conclusion. Use markdown for formatting.",
    placeholder: "e.g., Generate a report on titrating HCl with NaOH..."
  },
  elements: {
    H: "Hydrogen", He: "Helium", Li: "Lithium", Be: "Beryllium", B: "Boron", C: "Carbon", N: "Nitrogen", O: "Oxygen", F: "Fluorine", Ne: "Neon",
    Na: "Sodium", Mg: "Magnesium", Al: "Aluminium", Si: "Silicon", P: "Phosphorus", S: "Sulfur", Cl: "Chlorine", Ar: "Argon",
    K: "Potassium", Ca: "Calcium", Sc: "Scandium", Ti: "Titanium", V: "Vanadium", Cr: "Chromium", Mn: "Manganese", Fe: "Iron", Co: "Cobalt", Ni: "Nickel", Cu: "Copper", Zn: "Zinc", Ga: "Gallium", Ge: "Germanium", As: "Arsenic", Se: "Selenium", Br: "Bromine", Kr: "Krypton",
    Rb: "Rubidium", Sr: "Strontium", Y: "Yttrium", Zr: "Zirconium", Nb: "Niobium", Mo: "Molybdenum", Tc: "Technetium", Ru: "Ruthenium", Rh: "Rhodium", Pd: "Palladium", Ag: "Silver", Cd: "Cadmium", In: "Indium", Sn: "Tin", Sb: "Antimony", Te: "Tellurium", I: "Iodine", Xe: "Xenon",
    Cs: "Cesium", Ba: "Barium", La: "Lanthanum", Ce: "Cerium", Pr: "Praseodymium", Nd: "Neodymium", Pm: "Promethium", Sm: "Samarium", Eu: "Europium", Gd: "Gadolinium", Tb: "Terbium", Dy: "Dysprosium", Ho: "Holmium", Er: "Erbium", Tm: "Thulium", Yb: "Ytterbium", Lu: "Lutetium",
    Hf: "Hafnium", Ta: "Tantalum", W: "Tungsten", Re: "Rhenium", Os: "Osmium", Ir: "Iridium", Pt: "Platinum", Au: "Gold", Hg: "Mercury", Tl: "Thallium", Pb: "Lead", Bi: "Bismuth", Po: "Polonium", At: "Astatine", Rn: "Radon",
    Fr: "Francium", Ra: "Radium", Ac: "Actinium", Th: "Thorium", Pa: "Protactinium", U: "Uranium", Np: "Neptunium", Pu: "Plutonium", Am: "Americium", Cm: "Curium", Bk: "Berkelium", Cf: "Californium", Es: "Einsteinium", Fm: "Fermium", Md: "Mendelevium", No: "Nobelium", Lr: "Lawrencium",
    Rf: "Rutherfordium", Db: "Dubnium", Sg: "Seaborgium", Bh: "Bohrium", Hs: "Hassium", Mt: "Meitnerium", Ds: "Darmstadtium", Rg: "Roentgenium", Cn: "Copernicium", Nh: "Nihonium", Fl: "Flerovium", Mc: "Moscovium", Lv: "Livermorium", Ts: "Tennessine", Og: "Oganesson"
  },
  periodicTableCategories: {
    'diatomic nonmetal': "Diatomic Nonmetal",
    'noble gas': "Noble Gas",
    'alkali metal': "Alkali Metal",
    'alkaline earth metal': "Alkaline Earth Metal",
    'metalloid': "Metalloid",
    'polyatomic nonmetal': "Polyatomic Nonmetal",
    'post-transition metal': "Post-Transition Metal",
    'transition metal': "Transition Metal",
    'lanthanide': "Lanthanide",
    'actinide': "Actinide",
    'unknown, probably transition metal': 'Unknown',
    'unknown, probably post-transition metal': 'Unknown',
    'unknown, probably metalloid': 'Unknown',
    'unknown, predicted to be noble gas': 'Unknown',
    'unknown': "Unknown"
  },
};

const pt: Translation = {
  sidebar: {
    home: "Consulta Geral",
    experiments: "Simulador de Experimentos",
    search: "Pesquisa de Artigos",
    calculator: "Calculadora de Química",
    periodicTable: "Tabela Periódica",
    reports: "Gerador de Relatórios",
    language: "Idioma"
  },
  homePage: {
    title: "Consulta Geral de Química",
    description: "Faça qualquer pergunta sobre conceitos, história ou terminologia da química.",
    systemInstruction: "Você é um químico especialista. Responda às perguntas do usuário sobre química geral de forma clara e concisa. Use markdown para formatação.",
    placeholder: "ex: O que é uma ligação covalente?"
  },
  experimentsPage: {
    title: "Simulador de Experimentos",
    description: "Descreva um experimento químico e obtenha o resultado esperado, procedimento e precauções de segurança.",
    systemInstruction: "Você é um assistente de laboratório AI. Dado um experimento, descreva o procedimento passo a passo, liste os materiais necessários, detalhe os avisos de segurança e preveja o resultado. Use markdown para formatação com cabeçalhos em negrito para cada seção.",
    placeholder: "ex: Simule a reação entre vinagre e bicarbonato de sódio."
  },
  searchPage: {
    title: "Pesquisa de Química",
    description: "Encontre informações sobre compostos químicos, reações ou artigos científicos.",
    systemInstruction: "Você é um assistente de pesquisa AI. O usuário perguntará sobre compostos químicos, reações ou tópicos de pesquisa. Forneça um resumo detalhado, propriedades e usos comuns. Se pedirem artigos, sugira campos de estudo relevantes ou publicações notáveis. Use formatação markdown.",
    placeholder: "ex: Informações sobre benzeno"
  },
  calculatorPage: {
    title: "Calculadora de Química",
    description: "Resolva estequiometria, massa molar e outros cálculos químicos.",
    systemInstruction: "Você é um especialista em cálculos químicos. Resolva o problema do usuário, mostrando a solução passo a passo. Declare claramente a resposta final. Use markdown para formatação, especialmente para fórmulas.",
    placeholder: "ex: Calcule a massa molar de H₂SO₄"
  },
  periodicTable: {
    title: "Tabela Periódica Interativa",
    description: "Explore os elementos da tabela periódica. Clique em um elemento para ver seus detalhes.",
    atomicNumber: "Número Atômico",
    atomicMass: "Massa Atômica (u)",
    category: "Categoria",
    phase: "Fase",
    density: "Densidade",
    boilingPoint: "Ponto de Ebulição",
    meltingPoint: "Ponto de Fusão",
    molarHeat: "Calor Molar",
    electronConfig: "Config. Eletrônica",
    electronegativity: "Eletronegatividade",
    discoveredBy: "Descoberto por",
  },
  reportsPage: {
    title: "Gerador de Relatórios de Laboratório",
    description: "Gere um relatório de laboratório estruturado com base nos dados do seu experimento.",
    systemInstruction: "Você é um assistente de redação de relatórios de laboratório. O usuário fornecerá dados e um tópico para um experimento de laboratório. Gere um relatório estruturado com seções como: Título, Resumo, Introdução, Materiais e Métodos, Resultados, Discussão e Conclusão. Use markdown para formatação.",
    placeholder: "ex: Gerar um relatório sobre a titulação de HCl com NaOH..."
  },
  elements: {
    H: "Hidrogênio", He: "Hélio", Li: "Lítio", Be: "Berílio", B: "Boro", C: "Carbono", N: "Nitrogênio", O: "Oxigênio", F: "Flúor", Ne: "Neônio",
    Na: "Sódio", Mg: "Magnésio", Al: "Alumínio", Si: "Silício", P: "Fósforo", S: "Enxofre", Cl: "Cloro", Ar: "Argônio",
    K: "Potássio", Ca: "Cálcio", Sc: "Escândio", Ti: "Titânio", V: "Vanádio", Cr: "Cromo", Mn: "Manganês", Fe: "Ferro", Co: "Cobalto", Ni: "Níquel", Cu: "Cobre", Zn: "Zinco", Ga: "Gálio", Ge: "Germânio", As: "Arsênio", Se: "Selênio", Br: "Bromo", Kr: "Criptônio",
    Rb: "Rubídio", Sr: "Estrôncio", Y: "Ítrio", Zr: "Zircônio", Nb: "Nióbio", Mo: "Molibdênio", Tc: "Tecnécio", Ru: "Rutênio", Rh: "Ródio", Pd: "Paládio", Ag: "Prata", Cd: "Cádmio", In: "Índio", Sn: "Estanho", Sb: "Antimônio", Te: "Telúrio", I: "Iodo", Xe: "Xenônio",
    Cs: "Césio", Ba: "Bário", La: "Lantânio", Ce: "Cério", Pr: "Praseodímio", Nd: "Neodímio", Pm: "Promécio", Sm: "Samário", Eu: "Európio", Gd: "Gadolínio", Tb: "Térbio", Dy: "Disprósio", Ho: "Hólmio", Er: "Érbio", Tm: "Túlio", Yb: "Itérbio", Lu: "Lutécio",
    Hf: "Háfnio", Ta: "Tântalo", W: "Tungstênio", Re: "Rênio", Os: "Ósmio", Ir: "Irídio", Pt: "Platina", Au: "Ouro", Hg: "Mercúrio", Tl: "Tálio", Pb: "Chumbo", Bi: "Bismuto", Po: "Polônio", At: "Astato", Rn: "Radônio",
    Fr: "Frâncio", Ra: "Rádio", Ac: "Actínio", Th: "Tório", Pa: "Protactínio", U: "Urânio", Np: "Neptúnio", Pu: "Plutônio", Am: "Amerício", Cm: "Cúrio", Bk: "Berquélio", Cf: "Califórnio", Es: "Einsténio", Fm: "Férmio", Md: "Mendelévio", No: "Nobélio", Lr: "Laurêncio",
    Rf: "Rutherfórdio", Db: "Dúbnio", Sg: "Seabórgio", Bh: "Bóhrio", Hs: "Hássio", Mt: "Meitnério", Ds: "Darmstádio", Rg: "Roentgênio", Cn: "Copernício", Nh: "Nihônio", Fl: "Fleróvio", Mc: "Moscóvio", Lv: "Livermório", Ts: "Tenessino", Og: "Oganessônio"
  },
   periodicTableCategories: {
    'diatomic nonmetal': "Não Metal Diatômico",
    'noble gas': "Gás Nobre",
    'alkali metal': "Metal Alcalino",
    'alkaline earth metal': "Metal Alcalinoterroso",
    'metalloid': "Metaloide",
    'polyatomic nonmetal': "Não Metal Poliatômico",
    'post-transition metal': "Metal Pós-Transição",
    'transition metal': "Metal de Transição",
    'lanthanide': "Lantanídeo",
    'actinide': "Actinídeo",
    'unknown, probably transition metal': 'Desconhecido',
    'unknown, probably post-transition metal': 'Desconhecido',
    'unknown, probably metalloid': 'Desconhecido',
    'unknown, predicted to be noble gas': 'Desconhecido',
    'unknown': "Desconhecido"
  },
};

const es: Translation = {
    sidebar: {
    home: "Consulta General",
    experiments: "Simulador de Experimentos",
    search: "Búsqueda de Investigación",
    calculator: "Calculadora de Química",
    periodicTable: "Tabla Periódica",
    reports: "Generador de Informes",
    language: "Idioma"
  },
  homePage: {
    title: "Consulta General de Química",
    description: "Haga cualquier pregunta sobre conceptos, historia o terminología de la química.",
    systemInstruction: "Eres un químico experto. Responde a las preguntas del usuario sobre química general de forma clara y concisa. Usa markdown para el formato.",
    placeholder: "p. ej., ¿Qué es un enlace covalente?"
  },
  experimentsPage: {
    title: "Simulador de Experimentos",
    description: "Describe un experimento químico y obtén el resultado esperado, el procedimiento y las precauciones de seguridad.",
    systemInstruction: "Eres un asistente de laboratorio de IA. Dado un experimento, describe el procedimiento paso a paso, enumera los materiales necesarios, detalla las advertencias de seguridad y predice el resultado. Usa markdown para el formato con encabezados en negrita para cada sección.",
    placeholder: "p. ej., Simular la reacción entre vinagre y bicarbonato de sodio."
  },
  searchPage: {
    title: "Búsqueda de Investigación Química",
    description: "Encuentra información sobre compuestos químicos, reacciones o artículos científicos.",
    systemInstruction: "Eres un asistente de investigación de IA. El usuario preguntará sobre compuestos químicos, reacciones o temas de investigación. Proporciona un resumen detallado, propiedades y usos comunes. Si te piden artículos, sugiere campos de estudio relevantes o publicaciones notables. Usa formato markdown.",
    placeholder: "p. ej., Información sobre el benceno"
  },
  calculatorPage: {
    title: "Calculadora de Química",
    description: "Resuelve estequiometría, masa molar y otros cálculos químicos.",
    systemInstruction: "Eres un experto en cálculos químicos. Resuelve el problema del usuario, mostrando la solución paso a paso. Indica claramente la respuesta final. Usa markdown para el formato, especialmente para las fórmulas.",
    placeholder: "p. ej., Calcula la masa molar de H₂SO₄"
  },
  periodicTable: {
    title: "Tabla Periódica Interactiva",
    description: "Explora los elementos de la tabla periódica. Haz clic en un elemento para ver sus detalles.",
    atomicNumber: "Número Atómico",
    atomicMass: "Masa Atómica (u)",
    category: "Categoría",
    phase: "Fase",
    density: "Densidad",
    boilingPoint: "Punto de Ebullición",
    meltingPoint: "Punto de Fusión",
    molarHeat: "Calor Molar",
    electronConfig: "Config. Electrónica",
    electronegativity: "Electronegatividad",
    discoveredBy: "Descubierto por",
  },
  reportsPage: {
    title: "Generador de Informes de Laboratorio",
    description: "Genera un informe de laboratorio estructurado basado en los datos de tu experimento.",
    systemInstruction: "Eres un asistente de redacción de informes de laboratorio. El usuario proporcionará datos y un tema para un experimento de laboratorio. Genera un informe estructurado con secciones como: Título, Resumen, Introducción, Materiales y Métodos, Resultados, Discusión y Conclusión. Usa markdown para el formato.",
    placeholder: "p. ej., Generar un informe sobre la titulación de HCl con NaOH..."
  },
  elements: {
    H: "Hidrógeno", He: "Helio", Li: "Litio", Be: "Berilio", B: "Boro", C: "Carbono", N: "Nitrógeno", O: "Oxígeno", F: "Flúor", Ne: "Neón",
    Na: "Sodio", Mg: "Magnesio", Al: "Aluminio", Si: "Silicio", P: "Fósforo", S: "Azufre", Cl: "Cloro", Ar: "Argón",
    K: "Potasio", Ca: "Calcio", Sc: "Escandio", Ti: "Titanio", V: "Vanadio", Cr: "Cromo", Mn: "Manganeso", Fe: "Hierro", Co: "Cobalto", Ni: "Níquel", Cu: "Cobre", Zn: "Zinc", Ga: "Galio", Ge: "Germanio", As: "Arsénico", Se: "Selenio", Br: "Bromo", Kr: "Kriptón",
    Rb: "Rubidio", Sr: "Estroncio", Y: "Itrio", Zr: "Zirconio", Nb: "Niobio", Mo: "Molibdeno", Tc: "Tecnecio", Ru: "Rutenio", Rh: "Rodio", Pd: "Paladio", Ag: "Plata", Cd: "Cadmio", In: "Indio", Sn: "Estaño", Sb: "Antimonio", Te: "Telurio", I: "Yodo", Xe: "Xenón",
    Cs: "Cesio", Ba: "Bario", La: "Lantano", Ce: "Cerio", Pr: "Praseodimio", Nd: "Neodimio", Pm: "Prometio", Sm: "Samario", Eu: "Europio", Gd: "Gadolinio", Tb: "Terbio", Dy: "Disprosio", Ho: "Holmio", Er: "Erbio", Tm: "Tulio", Yb: "Iterbio", Lu: "Lutecio",
    Hf: "Hafnio", Ta: "Tántalo", W: "Tungsteno", Re: "Renio", Os: "Osmio", Ir: "Iridio", Pt: "Platino", Au: "Oro", Hg: "Mercurio", Tl: "Talio", Pb: "Plomo", Bi: "Bismuto", Po: "Polonio", At: "Astato", Rn: "Radón",
    Fr: "Francio", Ra: "Radio", Ac: "Actinio", Th: "Torio", Pa: "Protactinio", U: "Uranio", Np: "Neptunio", Pu: "Plutonio", Am: "Americio", Cm: "Curio", Bk: "Berkelio", Cf: "Californio", Es: "Einstenio", Fm: "Fermio", Md: "Mendelevio", No: "Nobelio", Lr: "Laurencio",
    Rf: "Rutherfordio", Db: "Dubnio", Sg: "Seaborgio", Bh: "Bohrio", Hs: "Hasio", Mt: "Meitnerio", Ds: "Darmstadtio", Rg: "Roentgenio", Cn: "Copernicio", Nh: "Nihonio", Fl: "Flerovio", Mc: "Moscovio", Lv: "Livermorio", Ts: "Teneso", Og: "Oganesón"
  },
  periodicTableCategories: {
    'diatomic nonmetal': "No Metal Diatómico",
    'noble gas': "Gas Noble",
    'alkali metal': "Metal Alcalino",
    'alkaline earth metal': "Metal Alcalinotérreo",
    'metalloid': "Metaloide",
    'polyatomic nonmetal': "No Metal Poliatómico",
    'post-transition metal': "Metal de Post-Transición",
    'transition metal': "Metal de Transición",
    'lanthanide': "Lantánido",
    'actinide': "Actínido",
    'unknown, probably transition metal': 'Desconocido',
    'unknown, probably post-transition metal': 'Desconocido',
    'unknown, probably metalloid': 'Desconocido',
    'unknown, predicted to be noble gas': 'Desconocido',
    'unknown': "Desconocido"
  },
};

const de: Translation = {
  ...en,
  sidebar: {
    home: "Allgemeine Anfrage",
    experiments: "Experiment-Simulator",
    search: "Forschungssuche",
    calculator: "Chemie-Rechner",
    periodicTable: "Periodensystem",
    reports: "Berichtsgenerator",
    language: "Sprache"
  },
  homePage: {
    ...en.homePage,
    title: "Allgemeine Chemie-Anfrage",
    description: "Stellen Sie Fragen zu Chemiekonzepten, Geschichte oder Terminologie.",
    placeholder: "z.B. Was ist eine kovalente Bindung?"
  },
  experimentsPage: {
    ...en.experimentsPage,
    title: "Experiment-Simulator",
    description: "Beschreiben Sie ein chemisches Experiment und erhalten Sie das erwartete Ergebnis, das Verfahren und die Sicherheitsvorkehrungen.",
    placeholder: "z.B. Simulieren Sie die Reaktion zwischen Essig und Backpulver."
  },
  searchPage: {
    ...en.searchPage,
    title: "Chemische Forschungssuche",
    description: "Finden Sie Informationen zu chemischen Verbindungen, Reaktionen oder wissenschaftlichen Arbeiten.",
    placeholder: "z.B. Informationen über Benzol"
  },
  calculatorPage: {
    ...en.calculatorPage,
    title: "Chemie-Rechner",
    description: "Lösen Sie Stöchiometrie-, Molmassen- und andere chemische Berechnungen.",
    placeholder: "z.B. Berechnen Sie die Molmasse von H₂SO₄"
  },
  periodicTable: {
    title: "Interaktives Periodensystem",
    description: "Erkunden Sie die Elemente des Periodensystems. Klicken Sie auf ein Element, um dessen Details anzuzeigen.",
    atomicNumber: "Ordnungszahl",
    atomicMass: "Atommasse (u)",
    category: "Kategorie",
    phase: "Phase",
    density: "Dichte",
    boilingPoint: "Siedepunkt",
    meltingPoint: "Schmelzpunkt",
    molarHeat: "Molare Wärme",
    electronConfig: "Elektronenkonfig.",
    electronegativity: "Elektronegativität",
    discoveredBy: "Entdeckt von",
  },
  reportsPage: {
    ...en.reportsPage,
    title: "Laborberichtsgenerator",
    description: "Erstellen Sie einen strukturierten Laborbericht basierend auf Ihren Versuchsdaten.",
    placeholder: "z.B. Erstellen Sie einen Bericht über die Titration von HCl mit NaOH..."
  },
  elements: {
    H: "Wasserstoff", He: "Helium", Li: "Lithium", Be: "Beryllium", B: "Bor", C: "Kohlenstoff", N: "Stickstoff", O: "Sauerstoff", F: "Fluor", Ne: "Neon",
    Na: "Natrium", Mg: "Magnesium", Al: "Aluminium", Si: "Silizium", P: "Phosphor", S: "Schwefel", Cl: "Chlor", Ar: "Argon",
    K: "Kalium", Ca: "Calcium", Sc: "Scandium", Ti: "Titan", V: "Vanadium", Cr: "Chrom", Mn: "Mangan", Fe: "Eisen", Co: "Cobalt", Ni: "Nickel", Cu: "Kupfer", Zn: "Zink", Ga: "Gallium", Ge: "Germanium", As: "Arsen", Se: "Selen", Br: "Brom", Kr: "Krypton",
    Rb: "Rubidium", Sr: "Strontium", Y: "Yttrium", Zr: "Zirconium", Nb: "Niob", Mo: "Molybdän", Tc: "Technetium", Ru: "Ruthenium", Rh: "Rhodium", Pd: "Palladium", Ag: "Silber", Cd: "Cadmium", In: "Indium", Sn: "Zinn", Sb: "Antimon", Te: "Tellur", I: "Iod", Xe: "Xenon",
    Cs: "Cäsium", Ba: "Barium", La: "Lanthan", Ce: "Cer", Pr: "Praseodym", Nd: "Neodym", Pm: "Promethium", Sm: "Samarium", Eu: "Europium", Gd: "Gadolinium", Tb: "Terbium", Dy: "Dysprosium", Ho: "Holmium", Er: "Erbium", Tm: "Thulium", Yb: "Ytterbium", Lu: "Lutetium",
    Hf: "Hafnium", Ta: "Tantal", W: "Wolfram", Re: "Rhenium", Os: "Osmium", Ir: "Iridium", Pt: "Platin", Au: "Gold", Hg: "Quecksilber", Tl: "Thallium", Pb: "Blei", Bi: "Bismut", Po: "Polonium", At: "Astat", Rn: "Radon",
    Fr: "Francium", Ra: "Radium", Ac: "Actinium", Th: "Thorium", Pa: "Protactinium", U: "Uran", Np: "Neptunium", Pu: "Plutonium", Am: "Americium", Cm: "Curium", Bk: "Berkelium", Cf: "Californium", Es: "Einsteinium", Fm: "Fermium", Md: "Mendelevium", No: "Nobelium", Lr: "Lawrencium",
    Rf: "Rutherfordium", Db: "Dubnium", Sg: "Seaborgium", Bh: "Bohrium", Hs: "Hassium", Mt: "Meitnerium", Ds: "Darmstadtium", Rg: "Roentgenium", Cn: "Copernicium", Nh: "Nihonium", Fl: "Flerovium", Mc: "Moscovium", Lv: "Livermorium", Ts: "Tenness", Og: "Oganesson"
  },
  periodicTableCategories: {
    'diatomic nonmetal': "Diatomisches Nichtmetall",
    'noble gas': "Edelgas",
    'alkali metal': "Alkalimetall",
    'alkaline earth metal': "Erdalkalimetall",
    'metalloid': "Halbmetall",
    'polyatomic nonmetal': "Polyatomisches Nichtmetall",
    'post-transition metal': "Post-Übergangsmetall",
    'transition metal': "Übergangsmetall",
    'lanthanide': "Lanthanoid",
    'actinide': "Actinoid",
    'unknown, probably transition metal': 'Unbekannt',
    'unknown, probably post-transition metal': 'Unbekannt',
    'unknown, probably metalloid': 'Unbekannt',
    'unknown, predicted to be noble gas': 'Unbekannt',
    'unknown': "Unbekannt"
  },
};

const fr: Translation = {
  ...en,
  sidebar: {
    home: "Requête Générale",
    experiments: "Simulateur d'Expériences",
    search: "Recherche Documentaire",
    calculator: "Calculatrice de Chimie",
    periodicTable: "Tableau Périodique",
    reports: "Générateur de Rapports",
    language: "Langue"
  },
  homePage: {
    ...en.homePage,
    title: "Requête Générale de Chimie",
    description: "Posez toute question sur les concepts, l'histoire ou la terminologie de la chimie.",
    placeholder: "ex: Qu'est-ce qu'une liaison covalente ?"
  },
  experimentsPage: {
    ...en.experimentsPage,
    title: "Simulateur d'Expériences",
    description: "Décrivez une expérience chimique et obtenez le résultat attendu, la procédure et les précautions de sécurité.",
    placeholder: "ex: Simuler la réaction entre le vinaigre et le bicarbonate de soude."
  },
  searchPage: {
    ...en.searchPage,
    title: "Recherche en Chimie",
    description: "Trouvez des informations sur les composés chimiques, les réactions ou les articles scientifiques.",
    placeholder: "ex: Informations sur le benzène"
  },
  calculatorPage: {
    ...en.calculatorPage,
    title: "Calculatrice de Chimie",
    description: "Résolvez la stœchiométrie, la masse molaire et d'autres calculs chimiques.",
    placeholder: "ex: Calculez la masse molaire de H₂SO₄"
  },
  periodicTable: {
    title: "Tableau Périodique Interactif",
    description: "Explorez les éléments du tableau périodique. Cliquez sur un élément pour voir ses détails.",
    atomicNumber: "Numéro Atomique",
    atomicMass: "Masse Atomique (u)",
    category: "Catégorie",
    phase: "Phase",
    density: "Densité",
    boilingPoint: "Point d'Ébullition",
    meltingPoint: "Point de Fusion",
    molarHeat: "Chaleur Molaire",
    electronConfig: "Config. Électronique",
    electronegativity: "Électronégativité",
    discoveredBy: "Découvert par",
  },
  reportsPage: {
    ...en.reportsPage,
    title: "Générateur de Rapports de Laboratoire",
    description: "Générez un rapport de laboratoire structuré à partir des données de votre expérience.",
    placeholder: "ex: Générer un rapport sur le titrage de HCl avec NaOH..."
  },
  elements: {
    H: "Hydrogène", He: "Hélium", Li: "Lithium", Be: "Béryllium", B: "Bore", C: "Carbone", N: "Azote", O: "Oxygène", F: "Fluor", Ne: "Néon",
    Na: "Sodium", Mg: "Magnésium", Al: "Aluminium", Si: "Silicium", P: "Phosphore", S: "Soufre", Cl: "Chlore", Ar: "Argon",
    K: "Potassium", Ca: "Calcium", Sc: "Scandium", Ti: "Titane", V: "Vanadium", Cr: "Chrome", Mn: "Manganèse", Fe: "Fer", Co: "Cobalt", Ni: "Nickel", Cu: "Cuivre", Zn: "Zinc", Ga: "Gallium", Ge: "Germanium", As: "Arsenic", Se: "Sélénium", Br: "Brome", Kr: "Krypton",
    Rb: "Rubidium", Sr: "Strontium", Y: "Yttrium", Zr: "Zirconium", Nb: "Niobium", Mo: "Molybdène", Tc: "Technétium", Ru: "Ruthénium", Rh: "Rhodium", Pd: "Palladium", Ag: "Argent", Cd: "Cadmium", In: "Indium", Sn: "Étain", Sb: "Antimoine", Te: "Tellure", I: "Iode", Xe: "Xénon",
    Cs: "Césium", Ba: "Baryum", La: "Lanthane", Ce: "Cérium", Pr: "Praséodyme", Nd: "Néodyme", Pm: "Prométhium", Sm: "Samarium", Eu: "Europium", Gd: "Gadolinium", Tb: "Terbium", Dy: "Dysprosium", Ho: "Holmium", Er: "Erbium", Tm: "Thulium", Yb: "Ytterbium", Lu: "Lutécium",
    Hf: "Hafnium", Ta: "Tantale", W: "Tungstène", Re: "Rhénium", Os: "Osmium", Ir: "Iridium", Pt: "Platine", Au: "Or", Hg: "Mercure", Tl: "Thallium", Pb: "Plomb", Bi: "Bismuth", Po: "Polonium", At: "Astate", Rn: "Radon",
    Fr: "Francium", Ra: "Radium", Ac: "Actinium", Th: "Thorium", Pa: "Protactinium", U: "Uranium", Np: "Neptunium", Pu: "Plutonium", Am: "Américium", Cm: "Curium", Bk: "Berkélium", Cf: "Californium", Es: "Einsteinium", Fm: "Fermium", Md: "Mendélévium", No: "Nobélium", Lr: "Lawrencium",
    Rf: "Rutherfordium", Db: "Dubnium", Sg: "Seaborgium", Bh: "Bohrium", Hs: "Hassium", Mt: "Meitnérium", Ds: "Darmstadtium", Rg: "Roentgenium", Cn: "Copernicium", Nh: "Nihonium", Fl: "Flerovium", Mc: "Moscovium", Lv: "Livermorium", Ts: "Tennesse", Og: "Oganesson"
  },
  periodicTableCategories: {
    'diatomic nonmetal': "Non-métal diatomique",
    'noble gas': "Gaz Noble",
    'alkali metal': "Métal Alcalin",
    'alkaline earth metal': "Métal Alcalino-terreux",
    'metalloid': "Métalloïde",
    'polyatomic nonmetal': "Non-métal polyatomique",
    'post-transition metal': "Métal de post-transition",
    'transition metal': "Métal de transition",
    'lanthanide': "Lanthanide",
    'actinide': "Actinide",
    'unknown, probably transition metal': 'Inconnu',
    'unknown, probably post-transition metal': 'Inconnu',
    'unknown, probably metalloid': 'Inconnu',
    'unknown, predicted to be noble gas': 'Inconnu',
    'unknown': "Inconnu"
  },
};


export const translations = {
  en,
  pt,
  es,
  de,
  fr,
};