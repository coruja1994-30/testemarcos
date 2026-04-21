let currentLanguage = 'pt';
let expanded = false;

const vlibrasLabels = {
    pt: {
        label: 'VLibras',
        aria: 'Abrir VLibras'
    },
    en: {
        label: 'VLibras',
        aria: 'Open VLibras'
    },
    es: {
        label: 'VLibras',
        aria: 'Abrir VLibras'
    }
};

const translations = {
    pt: {
        langLabel: 'PT',
        themeLightLabel: 'Tema claro',
        themeDarkLabel: 'Tema escuro',
        themeLightAria: 'Ativar tema claro',
        themeDarkAria: 'Ativar tema escuro',
        'nav-home': 'Home',
        'nav-about': 'Sobre',
        'nav-gallery': 'Galeria',
        'nav-services': 'Servicos',
        'nav-mentorship': 'Mentoria',
        'nav-testimonials': 'Depoimentos',
        'nav-events': 'Eventos',
        'nav-contact': 'Contato',
        'preloader-text': 'Carregando...',
        'hero-desc': 'Arte na pele com personalidade. Tatuagens exclusivas e mentoria para novos tatuadores.',
        'hero-btn1': 'Agendar Sessao',
        'hero-btn2': 'Conhecer Mentoria',
        'about-title': 'Sobre <span class="text-rose-600">Marcos</span>',
        'about-desc': 'Sou tatuador ha <strong>6 anos</strong> e comecei minha trajetoria na arte da tatuagem aos 16 anos. Antes disso, mergulhei no universo do grafite e das artes plasticas, participando inclusive de exposicoes e fomentando a cultura das artes plasticas na regiao de Sao Francisco do Sul/SC. Essa trajetoria foi fundamental para desenvolver meu estilo e meu dominio no desenho. Hoje, levo toda essa bagagem para as tatuagens, sempre buscando criar algo unico e significativo para meus clientes. Criativo por natureza, sempre procuro pensar fora da caixa, trazendo solucoes inovadoras para cada projeto. Hoje ja somo mais de 10 premiacoes em competicoes de tatuagem, principalmente nos estilos onde venho me especializando: Blackwork, Geek e Neotradicional. Alem disso, a cultura hip hop faz parte de quem eu sou - o rap e mais que som, e a inspiracao de vida. Minha arte reflete essa essencia: autentica, urbana e cheia de personalidade.',
        'about-award-title': 'Premiado',
        'about-award-desc': 'Reconhecido internacionalmente',
        'about-certified-title': 'Certificado',
        'about-certified-desc': 'Biosseguranca garantida',
        'about-mentor-title': 'Mentor',
        'about-mentor-desc': 'Formacao de tatuadores',
        'gallery-title': 'Nossa <span class="text-rose-600">Galeria</span>',
        'gallery-desc': 'Conheca alguns dos trabalhos mais recentes de Marcos. Cada tatuagem conta uma historia unica e e criada com dedicacao e tecnica apurada.',
        'gallery-btn': 'Ver Mais Trabalhos',
        'gallery-btn-less': 'Mostrar Menos',
        'services-title': 'Nossos <span class="text-rose-600">Servicos</span>',
        'services-desc': 'Oferecemos uma variedade de estilos e servicos para atender as suas necessidades. Cada trabalho e personalizado e executado com o maximo de cuidado e profissionalismo.',
        'service-1-title': 'Tatuagens Personalizadas',
        'service-1-desc': 'Designs exclusivos criados especialmente para voce, respeitando suas ideias e estilo pessoal.',
        'service-1-point-1': 'Consulta de design',
        'service-1-point-2': 'Esbocos preliminares',
        'service-1-point-3': 'Sessao de tatuagem',
        'service-2-title': 'Cobertura e Restauracao',
        'service-2-desc': 'Transformamos tatuagens antigas ou indesejadas em novas obras de arte que voce vai adorar.',
        'service-2-point-1': 'Avaliacao da tatuagem existente',
        'service-2-point-2': 'Opcoes de cobertura',
        'service-2-point-3': 'Restauracao de cores',
        'service-3-title': 'Estilos Especializados',
        'service-3-desc': 'Dominamos diversos estilos de tatuagem, desde o tradicional ate as tecnicas mais modernas.',
        'service-3-point-1': 'Realismo e hiper-realismo',
        'service-3-point-2': 'Aquarela e abstrato',
        'service-3-point-3': 'Blackwork e geometrico',
        'service-4-title': 'Consultoria de Design',
        'service-4-desc': 'Ajudamos a transformar suas ideias em designs incriveis que combinam com seu estilo e personalidade.',
        'service-4-point-1': 'Sessao de brainstorming',
        'service-4-point-2': 'Pesquisa de referencias',
        'service-4-point-3': 'Criacao de conceitos',
        'service-5-title': 'Projetos Especiais',
        'service-5-desc': 'Tatuagens de grande escala como sleeves completas, costas inteiras e projetos corporais extensos.',
        'service-5-point-1': 'Planejamento completo',
        'service-5-point-2': 'Multiplas sessoes',
        'service-5-point-3': 'Precos personalizados',
        'piercing-title': 'Servicos de <span class="text-rose-600">Piercing</span>',
        'piercing-desc': 'Alem das tatuagens, oferecemos aplicacao de piercings com total seguranca, higiene e profissionalismo. Utilizamos materiais de alta qualidade e seguimos rigorosos protocolos de biosseguranca para garantir seu conforto e bem-estar.',
        'piercing-1-title': 'Piercings Faciais',
        'piercing-1-desc': 'Aplicacao de piercings em nariz, sobrancelha, labio, septo e outros locais faciais, com tecnica precisa e materiais esterilizados.',
        'piercing-2-title': 'Piercings Corporais',
        'piercing-2-desc': 'Umbigo, mamilo, orelha (tragus, helix, lobulo) e outros. Atendimento personalizado para cada tipo de piercing.',
        'piercing-3-title': 'Biosseguranca',
        'piercing-3-desc': 'Ambiente esterilizado, uso de materiais descartaveis e acompanhamento das melhores praticas para sua seguranca.',
        'piercing-gallery-title': 'Galeria de Piercings',
        'piercing-btn': 'Agendar Piercing',
        'piercing-insta': 'Instagram Talita Body Art',
        'mentorship-title': 'Programa de <span class="text-rose-600">Mentoria</span>',
        'mentorship-desc': 'Aprenda com um dos melhores tatuadores do mercado. Marcos compartilha seu conhecimento e experiencia para formar a proxima geracao de artistas.',
        'mentorship-why-title': 'Por que escolher nossa mentoria?',
        'mentorship-why-desc': 'Com 06 anos de experiencia, Marcos desenvolveu um metodo unico de ensino que combina teoria e pratica, permitindo que voce desenvolva suas habilidades de forma acelerada e segura.',
        'mentorship-feature-1-title': 'Aprendizado Personalizado',
        'mentorship-feature-1-desc': 'Programa adaptado ao seu nivel de habilidade e objetivos profissionais.',
        'mentorship-feature-2-title': 'Pratica Supervisionada',
        'mentorship-feature-2-desc': 'Sessoes praticas com feedback em tempo real para aprimorar sua tecnica.',
        'mentorship-feature-3-title': '11 Modulos',
        'mentorship-feature-3-desc': 'Mentoria completa dividida em 11 modulos exclusivos, cobrindo todos os temas essenciais para tatuadores iniciantes e avancados.',
        'mentorship-btn': 'Quero ser Mentorado',
        'testimonials-title': 'O que nossos <span class="text-rose-600">Clientes</span> dizem',
        'testimonials-desc': 'A satisfacao dos nossos clientes e alunos e nossa maior recompensa. Confira alguns depoimentos de pessoas que confiaram em nosso trabalho.',
        'testimonial-1-quote': '"Minha jornada na tatuagem comecou no dia 28 de janeiro, com a primeira aula da mentoria do Marcos - e em menos de dez dias, no dia 6 de fevereiro, eu ja estava fazendo minha primeira tattoo na pele. Desde o inicio, o Marcos foi um apoio fundamental. Ele nao so forneceu os materiais e direcionamentos certos (como o e-book sobre os pilares da tattoo, feito por ele mesmo), mas tambem esteve presente em cada passo do meu processo. Nas minhas primeiras tatuagens, ele me acompanhava de perto. E mesmo quando comecei a caminhar sozinha, ele continuou presente, sempre disponivel pelo celular para tirar duvidas e me dar suporte. Hoje, ja sao quase 7 meses de mentoria, e sigo tendo o acompanhamento dele - inclusive com aulas que vao alem da tatuagem, como fundamentos do desenho. Atualmente, ja tenho meu proprio perfil, estudio e clientes. E sei que tudo isso foi possivel gracas a base que construi na mentoria com o Marcos."',
        'testimonial-1-author': 'Herika - Tatuadora | Aluna da Mentoria',
        'feedback-title': 'Sua Opiniao e <span class="text-rose-600">Importante</span>',
        'feedback-desc': 'Ajude-nos a melhorar nossos servicos. Sua opiniao e fundamental para continuarmos oferecendo a melhor experiencia em tatuagem e piercing.',
        'feedback-form-title': 'Pesquisa de Satisfacao',
        'feedback-form-desc': 'Compartilhe sua experiencia conosco e nos ajude a crescer. Sua avaliacao leva apenas 2 minutos e e muito valiosa para nos.',
        'feedback-btn': 'Responder Pesquisa',
        'feedback-note1': '✓ Anonimo e seguro',
        'feedback-note2': '✓ Apenas 2 minutos',
        'feedback-note3': '✓ Sua privacidade protegida',
        'events-title': 'Eventos e <span class="text-rose-600">Competicoes</span>',
        'events-desc': 'Participe dos nossos eventos especiais e competicoes de tatuagem. Uma oportunidade unica para conectar com outros artistas, mostrar seu talento e fazer parte da comunidade artistica local.',
        'events-card-desc': 'No dia 23 de agosto, das 14h as 23h, o Mercado Publico Municipal vai ser palco de uma verdadeira celebracao a arte. Ocupando o centro com muita arte, musica, poesia, feira criativa, exposicao, grafite, gastronomia e encontros especiais. Tudo isso de graca e com aquele clima unico do Salada que a gente ama!',
        'events-location-label': 'Local',
        'events-location': 'Mercado Publico Municipal',
        'events-date-label': 'Data',
        'events-date': '23 de agosto',
        'events-time-label': 'Horario',
        'events-time': '14h as 23h',
        'contact-title': 'Entre em <span class="text-rose-600">Contato</span>',
        'contact-desc': 'Estamos ansiosos para transformar suas ideias em arte ou ajudar em sua jornada como tatuador. Entre em contato para agendar uma consulta ou tirar suas duvidas.',
        'contact-name-label': 'Nome Completo',
        'contact-email-label': 'Email',
        'contact-phone-label': 'Telefone',
        'contact-interest-label': 'Interesse',
        'contact-message-label': 'Mensagem',
        'contact-name-placeholder': 'Seu nome',
        'contact-email-placeholder': 'seu@email.com',
        'contact-phone-placeholder': '(00) 00000-0000',
        'contact-message-placeholder': 'Descreva sua ideia ou duvida...',
        'contact-option-placeholder': 'Selecione uma opcao',
        'contact-option-custom': 'Tatuagem Personalizada',
        'contact-option-cover': 'Cobertura/Restauracao',
        'contact-option-mentorship': 'Mentoria',
        'contact-option-other': 'Outro',
        'contact-send-btn': 'Enviar Mensagem',
        'contact-info-title': 'Informacoes de Contato',
        'contact-address-title': 'Endereco',
        'contact-address-value': 'Rua Corupa, 119 - Ubatuba, Sao Francisco do Sul, SC',
        'contact-phone-title': 'Telefone',
        'contact-email-title': 'Email',
        'contact-hours-title': 'Horario de Funcionamento',
        'contact-hours-value': 'Segunda a Sexta: 10h as 20h<br>Sabado: 10h as 18h<br>Domingo: Fechado',
        'contact-follow-title': 'Siga-nos',
        'footer-copy': '&copy; 2025 Marcos Tattoo Studio. Todos os direitos reservados.',
        'success-title': 'Mensagem Enviada!',
        'success-desc': 'Obrigado pelo seu contato. Retornaremos em breve para agendar sua consulta ou tirar suas duvidas.',
        'success-close': 'Fechar',
        close: 'Fechar'
    },
    en: {
        langLabel: 'EN',
        themeLightLabel: 'Light theme',
        themeDarkLabel: 'Dark theme',
        themeLightAria: 'Enable light theme',
        themeDarkAria: 'Enable dark theme',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-gallery': 'Gallery',
        'nav-services': 'Services',
        'nav-mentorship': 'Mentorship',
        'nav-testimonials': 'Testimonials',
        'nav-events': 'Events',
        'nav-contact': 'Contact',
        'preloader-text': 'Loading...',
        'hero-desc': 'Art on skin with personality. Exclusive tattoos and mentorship for new tattoo artists.',
        'hero-btn1': 'Book Session',
        'hero-btn2': 'Explore Mentorship',
        'about-title': 'About <span class="text-rose-600">Marcos</span>',
        'about-desc': 'I have been a tattoo artist for <strong>6 years</strong> and started my path in tattoo art at 16. Before that, I immersed myself in graffiti and fine arts, taking part in exhibitions and helping foster visual arts culture in Sao Francisco do Sul, SC. That journey was essential to developing my style and drawing skills. Today, I bring all of that experience into my tattoos, always aiming to create something unique and meaningful for each client. Creative by nature, I look for ideas outside the obvious and bring innovative solutions to every project. I have already earned more than 10 awards in tattoo competitions, especially in the styles I specialize in: Blackwork, Geek, and Neotraditional. Hip hop culture is also part of who I am - rap is more than music, it is a life influence. My art reflects that essence: authentic, urban, and full of personality.',
        'about-award-title': 'Awarded',
        'about-award-desc': 'Internationally recognized',
        'about-certified-title': 'Certified',
        'about-certified-desc': 'Guaranteed biosafety',
        'about-mentor-title': 'Mentor',
        'about-mentor-desc': 'Tattoo artist training',
        'gallery-title': 'Our <span class="text-rose-600">Gallery</span>',
        'gallery-desc': 'Take a look at some of Marcos latest work. Each tattoo tells a unique story and is created with dedication and refined technique.',
        'gallery-btn': 'See More Work',
        'gallery-btn-less': 'Show Less',
        'services-title': 'Our <span class="text-rose-600">Services</span>',
        'services-desc': 'We offer a wide range of styles and services to match your needs. Every piece is tailored and executed with great care and professionalism.',
        'service-1-title': 'Custom Tattoos',
        'service-1-desc': 'Exclusive designs created especially for you, respecting your ideas and personal style.',
        'service-1-point-1': 'Design consultation',
        'service-1-point-2': 'Preliminary sketches',
        'service-1-point-3': 'Tattoo session',
        'service-2-title': 'Cover-Ups and Restoration',
        'service-2-desc': 'We transform old or unwanted tattoos into new works of art you will be proud to wear.',
        'service-2-point-1': 'Existing tattoo assessment',
        'service-2-point-2': 'Cover-up options',
        'service-2-point-3': 'Color restoration',
        'service-3-title': 'Specialized Styles',
        'service-3-desc': 'We master multiple tattoo styles, from traditional work to the most modern techniques.',
        'service-3-point-1': 'Realism and hyperrealism',
        'service-3-point-2': 'Watercolor and abstract',
        'service-3-point-3': 'Blackwork and geometric',
        'service-4-title': 'Design Consulting',
        'service-4-desc': 'We help turn your ideas into striking designs that fit your style and personality.',
        'service-4-point-1': 'Brainstorming session',
        'service-4-point-2': 'Reference research',
        'service-4-point-3': 'Concept creation',
        'service-5-title': 'Special Projects',
        'service-5-desc': 'Large-scale tattoos such as full sleeves, full backs, and extensive body projects.',
        'service-5-point-1': 'Complete planning',
        'service-5-point-2': 'Multiple sessions',
        'service-5-point-3': 'Custom pricing',
        'piercing-title': '<span class="text-rose-600">Piercing</span> Services',
        'piercing-desc': 'In addition to tattoos, we offer piercing application with complete safety, hygiene, and professionalism. We use high-quality materials and follow strict biosafety protocols to ensure your comfort and well-being.',
        'piercing-1-title': 'Facial Piercings',
        'piercing-1-desc': 'Piercings for nose, eyebrow, lip, septum, and other facial placements, with precise technique and sterilized materials.',
        'piercing-2-title': 'Body Piercings',
        'piercing-2-desc': 'Navel, nipple, ear (tragus, helix, lobe), and more. Personalized service for each piercing type.',
        'piercing-3-title': 'Biosafety',
        'piercing-3-desc': 'Sterilized environment, disposable materials, and best-practice care for your safety.',
        'piercing-gallery-title': 'Piercing Gallery',
        'piercing-btn': 'Book Piercing',
        'piercing-insta': 'Talita Body Art Instagram',
        'mentorship-title': '<span class="text-rose-600">Mentorship</span> Program',
        'mentorship-desc': 'Learn from one of the best tattoo artists in the market. Marcos shares his knowledge and experience to help shape the next generation of artists.',
        'mentorship-why-title': 'Why choose our mentorship?',
        'mentorship-why-desc': 'With 6 years of experience, Marcos developed a unique teaching method that combines theory and practice so you can build your skills faster and with confidence.',
        'mentorship-feature-1-title': 'Personalized Learning',
        'mentorship-feature-1-desc': 'A program adapted to your skill level and professional goals.',
        'mentorship-feature-2-title': 'Supervised Practice',
        'mentorship-feature-2-desc': 'Hands-on sessions with real-time feedback to improve your technique.',
        'mentorship-feature-3-title': '11 Modules',
        'mentorship-feature-3-desc': 'A complete mentorship divided into 11 exclusive modules, covering essential topics for beginner and advanced tattoo artists.',
        'mentorship-btn': 'I Want Mentorship',
        'testimonials-title': 'What Our <span class="text-rose-600">Clients</span> Say',
        'testimonials-desc': 'The satisfaction of our clients and students is our biggest reward. Read testimonials from people who trusted our work.',
        'testimonial-1-quote': '"My tattoo journey started on January 28 with the first class in Marcos mentorship, and in less than ten days, on February 6, I was already doing my first tattoo on skin. From the start, Marcos was a key support. He not only provided the right materials and guidance, such as the tattoo pillars ebook he created himself, but was also present at every step of my process. During my first tattoos, he followed me closely. Even when I started walking on my own, he remained available by phone to answer questions and support me. Now, after nearly 7 months of mentorship, I still have his guidance, including classes that go beyond tattooing, such as drawing fundamentals. Today I already have my own profile, studio, and clients. I know all of this was possible because of the foundation I built with Marcos mentorship."',
        'testimonial-1-author': 'Herika - Tattoo Artist | Mentorship Student',
        'feedback-title': 'Your Opinion <span class="text-rose-600">Matters</span>',
        'feedback-desc': 'Help us improve our services. Your feedback is essential for us to keep delivering the best tattoo and piercing experience.',
        'feedback-form-title': 'Satisfaction Survey',
        'feedback-form-desc': 'Share your experience with us and help us grow. Your response takes only 2 minutes and is very valuable to us.',
        'feedback-btn': 'Answer Survey',
        'feedback-note1': '✓ Anonymous and secure',
        'feedback-note2': '✓ Only 2 minutes',
        'feedback-note3': '✓ Your privacy is protected',
        'events-title': '<span class="text-rose-600">Events</span> and Competitions',
        'events-desc': 'Join our special events and tattoo competitions. A unique chance to connect with other artists, show your talent, and be part of the local art community.',
        'events-card-desc': 'On August 23, from 2 PM to 11 PM, the Municipal Public Market will become the stage for a true celebration of art. The city center will be filled with art, music, poetry, a creative market, exhibitions, graffiti, food, and special encounters. All of it for free, with the unmistakable Salada atmosphere everyone loves.',
        'events-location-label': 'Location',
        'events-location': 'Municipal Public Market',
        'events-date-label': 'Date',
        'events-date': 'August 23',
        'events-time-label': 'Time',
        'events-time': '2 PM to 11 PM',
        'contact-title': 'Get in <span class="text-rose-600">Touch</span>',
        'contact-desc': 'We are ready to turn your ideas into art or support your path as a tattoo artist. Reach out to book a consultation or ask your questions.',
        'contact-name-label': 'Full Name',
        'contact-email-label': 'Email',
        'contact-phone-label': 'Phone',
        'contact-interest-label': 'Interest',
        'contact-message-label': 'Message',
        'contact-name-placeholder': 'Your name',
        'contact-email-placeholder': 'your@email.com',
        'contact-phone-placeholder': '(00) 00000-0000',
        'contact-message-placeholder': 'Describe your idea or question...',
        'contact-option-placeholder': 'Select an option',
        'contact-option-custom': 'Custom Tattoo',
        'contact-option-cover': 'Cover-Up/Restoration',
        'contact-option-mentorship': 'Mentorship',
        'contact-option-other': 'Other',
        'contact-send-btn': 'Send Message',
        'contact-info-title': 'Contact Information',
        'contact-address-title': 'Address',
        'contact-address-value': 'Rua Corupa, 119 - Ubatuba, Sao Francisco do Sul, SC',
        'contact-phone-title': 'Phone',
        'contact-email-title': 'Email',
        'contact-hours-title': 'Business Hours',
        'contact-hours-value': 'Monday to Friday: 10 AM to 8 PM<br>Saturday: 10 AM to 6 PM<br>Sunday: Closed',
        'contact-follow-title': 'Follow Us',
        'footer-copy': '&copy; 2025 Marcos Tattoo Studio. All rights reserved.',
        'success-title': 'Message Sent!',
        'success-desc': 'Thank you for reaching out. We will get back to you soon to schedule your consultation or answer your questions.',
        'success-close': 'Close',
        close: 'Close'
    },
    es: {
        langLabel: 'ES',
        themeLightLabel: 'Tema claro',
        themeDarkLabel: 'Tema oscuro',
        themeLightAria: 'Activar tema claro',
        themeDarkAria: 'Activar tema oscuro',
        'nav-home': 'Inicio',
        'nav-about': 'Sobre',
        'nav-gallery': 'Galeria',
        'nav-services': 'Servicios',
        'nav-mentorship': 'Mentoria',
        'nav-testimonials': 'Testimonios',
        'nav-events': 'Eventos',
        'nav-contact': 'Contacto',
        'preloader-text': 'Cargando...',
        'hero-desc': 'Arte en la piel con personalidad. Tatuajes exclusivos y mentoria para nuevos tatuadores.',
        'hero-btn1': 'Reservar Sesion',
        'hero-btn2': 'Conocer la Mentoria',
        'about-title': 'Sobre <span class="text-rose-600">Marcos</span>',
        'about-desc': 'Soy tatuador desde hace <strong>6 anos</strong> y comence mi camino en el arte del tatuaje a los 16 anos. Antes de eso, me sumerji en el universo del grafiti y las artes plasticas, participando incluso en exposiciones y fomentando la cultura de las artes visuales en Sao Francisco do Sul, SC. Ese recorrido fue fundamental para desarrollar mi estilo y dominio del dibujo. Hoy llevo toda esa experiencia a los tatuajes, siempre buscando crear algo unico y significativo para cada cliente. Creativo por naturaleza, procuro pensar fuera de lo obvio y aportar soluciones innovadoras a cada proyecto. Ya sumo mas de 10 premios en competiciones de tatuaje, especialmente en los estilos en los que me especializo: Blackwork, Geek y Neotradicional. Ademas, la cultura hip hop forma parte de quien soy: el rap es mas que musica, es una referencia de vida. Mi arte refleja esa esencia: autentica, urbana y llena de personalidad.',
        'about-award-title': 'Premiado',
        'about-award-desc': 'Reconocido internacionalmente',
        'about-certified-title': 'Certificado',
        'about-certified-desc': 'Bioseguridad garantizada',
        'about-mentor-title': 'Mentor',
        'about-mentor-desc': 'Formacion de tatuadores',
        'gallery-title': 'Nuestra <span class="text-rose-600">Galeria</span>',
        'gallery-desc': 'Descubre algunos de los trabajos mas recientes de Marcos. Cada tatuaje cuenta una historia unica y esta creado con dedicacion y tecnica refinada.',
        'gallery-btn': 'Ver Mas Trabajos',
        'gallery-btn-less': 'Mostrar Menos',
        'services-title': 'Nuestros <span class="text-rose-600">Servicios</span>',
        'services-desc': 'Ofrecemos una amplia variedad de estilos y servicios para atender tus necesidades. Cada trabajo es personalizado y ejecutado con mucho cuidado y profesionalismo.',
        'service-1-title': 'Tatuajes Personalizados',
        'service-1-desc': 'Disenos exclusivos creados especialmente para ti, respetando tus ideas y tu estilo personal.',
        'service-1-point-1': 'Consulta de diseno',
        'service-1-point-2': 'Bocetos preliminares',
        'service-1-point-3': 'Sesion de tatuaje',
        'service-2-title': 'Cobertura y Restauracion',
        'service-2-desc': 'Transformamos tatuajes antiguos o no deseados en nuevas obras de arte que te encantara llevar.',
        'service-2-point-1': 'Evaluacion del tatuaje actual',
        'service-2-point-2': 'Opciones de cobertura',
        'service-2-point-3': 'Restauracion de color',
        'service-3-title': 'Estilos Especializados',
        'service-3-desc': 'Dominamos varios estilos de tatuaje, desde lo tradicional hasta las tecnicas mas modernas.',
        'service-3-point-1': 'Realismo e hiperrealismo',
        'service-3-point-2': 'Acuarela y abstracto',
        'service-3-point-3': 'Blackwork y geometrico',
        'service-4-title': 'Consultoria de Diseno',
        'service-4-desc': 'Te ayudamos a convertir tus ideas en disenos impactantes que encajan con tu estilo y personalidad.',
        'service-4-point-1': 'Sesion de brainstorming',
        'service-4-point-2': 'Busqueda de referencias',
        'service-4-point-3': 'Creacion de conceptos',
        'service-5-title': 'Proyectos Especiales',
        'service-5-desc': 'Tatuajes de gran escala como mangas completas, espalda completa y proyectos corporales extensos.',
        'service-5-point-1': 'Planificacion completa',
        'service-5-point-2': 'Multiples sesiones',
        'service-5-point-3': 'Precios personalizados',
        'piercing-title': 'Servicios de <span class="text-rose-600">Piercing</span>',
        'piercing-desc': 'Ademas de tatuajes, ofrecemos aplicacion de piercings con total seguridad, higiene y profesionalismo. Utilizamos materiales de alta calidad y seguimos rigurosos protocolos de bioseguridad para garantizar tu comodidad y bienestar.',
        'piercing-1-title': 'Piercings Faciales',
        'piercing-1-desc': 'Aplicacion de piercings en nariz, ceja, labio, septum y otras zonas faciales, con tecnica precisa y materiales esterilizados.',
        'piercing-2-title': 'Piercings Corporales',
        'piercing-2-desc': 'Ombligo, pezon, oreja (tragus, helix, lobulo) y mas. Atencion personalizada para cada tipo de piercing.',
        'piercing-3-title': 'Bioseguridad',
        'piercing-3-desc': 'Ambiente esterilizado, uso de materiales desechables y acompanamiento con las mejores practicas para tu seguridad.',
        'piercing-gallery-title': 'Galeria de Piercings',
        'piercing-btn': 'Reservar Piercing',
        'piercing-insta': 'Instagram Talita Body Art',
        'mentorship-title': 'Programa de <span class="text-rose-600">Mentoria</span>',
        'mentorship-desc': 'Aprende con uno de los mejores tatuadores del mercado. Marcos comparte su conocimiento y experiencia para formar a la proxima generacion de artistas.',
        'mentorship-why-title': 'Por que elegir nuestra mentoria?',
        'mentorship-why-desc': 'Con 6 anos de experiencia, Marcos desarrollo un metodo unico de ensenanza que combina teoria y practica para que desarrolles tus habilidades de forma mas rapida y segura.',
        'mentorship-feature-1-title': 'Aprendizaje Personalizado',
        'mentorship-feature-1-desc': 'Programa adaptado a tu nivel de habilidad y objetivos profesionales.',
        'mentorship-feature-2-title': 'Practica Supervisada',
        'mentorship-feature-2-desc': 'Sesiones practicas con retroalimentacion en tiempo real para mejorar tu tecnica.',
        'mentorship-feature-3-title': '11 Modulos',
        'mentorship-feature-3-desc': 'Mentoria completa dividida en 11 modulos exclusivos, cubriendo temas esenciales para tatuadores principiantes y avanzados.',
        'mentorship-btn': 'Quiero Mentoria',
        'testimonials-title': 'Lo que dicen nuestros <span class="text-rose-600">Clientes</span>',
        'testimonials-desc': 'La satisfaccion de nuestros clientes y alumnos es nuestra mayor recompensa. Mira algunos testimonios de personas que confiaron en nuestro trabajo.',
        'testimonial-1-quote': '"Mi camino en el tatuaje comenzo el 28 de enero, con la primera clase de la mentoria de Marcos, y en menos de diez dias, el 6 de febrero, ya estaba haciendo mi primer tatuaje en piel. Desde el inicio, Marcos fue un apoyo fundamental. No solo me proporciono los materiales y orientaciones correctas, como el e-book sobre los pilares del tattoo hecho por el mismo, sino que tambien estuvo presente en cada paso de mi proceso. En mis primeros tatuajes me acompanaba de cerca. Incluso cuando empece a caminar sola, siguio presente, siempre disponible por celular para resolver dudas y apoyarme. Hoy, despues de casi 7 meses de mentoria, sigo contando con su acompanamiento, incluso con clases que van mas alla del tatuaje, como fundamentos del dibujo. Actualmente ya tengo mi propio perfil, estudio y clientes. Y se que todo eso fue posible gracias a la base que construi en la mentoria con Marcos."',
        'testimonial-1-author': 'Herika - Tatuadora | Alumna de la Mentoria',
        'feedback-title': 'Tu Opinion <span class="text-rose-600">Importa</span>',
        'feedback-desc': 'Ayudanos a mejorar nuestros servicios. Tu opinion es fundamental para que sigamos ofreciendo la mejor experiencia en tatuaje y piercing.',
        'feedback-form-title': 'Encuesta de Satisfaccion',
        'feedback-form-desc': 'Comparte tu experiencia con nosotros y ayudanos a crecer. Tu respuesta toma solo 2 minutos y es muy valiosa para nosotros.',
        'feedback-btn': 'Responder Encuesta',
        'feedback-note1': '✓ Anonima y segura',
        'feedback-note2': '✓ Solo 2 minutos',
        'feedback-note3': '✓ Tu privacidad esta protegida',
        'events-title': 'Eventos y <span class="text-rose-600">Competiciones</span>',
        'events-desc': 'Participa en nuestros eventos especiales y competiciones de tatuaje. Una oportunidad unica para conectar con otros artistas, mostrar tu talento y formar parte de la comunidad artistica local.',
        'events-card-desc': 'El 23 de agosto, de 14:00 a 23:00, el Mercado Publico Municipal sera el escenario de una verdadera celebracion del arte. El centro se llenara de arte, musica, poesia, feria creativa, exposiciones, grafiti, gastronomia y encuentros especiales. Todo gratis y con ese ambiente unico de Salada que tanto nos gusta.',
        'events-location-label': 'Lugar',
        'events-location': 'Mercado Publico Municipal',
        'events-date-label': 'Fecha',
        'events-date': '23 de agosto',
        'events-time-label': 'Horario',
        'events-time': '14:00 a 23:00',
        'contact-title': 'Ponte en <span class="text-rose-600">Contacto</span>',
        'contact-desc': 'Estamos listos para transformar tus ideas en arte o ayudarte en tu camino como tatuador. Ponte en contacto para reservar una consulta o resolver tus dudas.',
        'contact-name-label': 'Nombre Completo',
        'contact-email-label': 'Email',
        'contact-phone-label': 'Telefono',
        'contact-interest-label': 'Interes',
        'contact-message-label': 'Mensaje',
        'contact-name-placeholder': 'Tu nombre',
        'contact-email-placeholder': 'tu@email.com',
        'contact-phone-placeholder': '(00) 00000-0000',
        'contact-message-placeholder': 'Describe tu idea o duda...',
        'contact-option-placeholder': 'Selecciona una opcion',
        'contact-option-custom': 'Tatuaje Personalizado',
        'contact-option-cover': 'Cobertura/Restauracion',
        'contact-option-mentorship': 'Mentoria',
        'contact-option-other': 'Otro',
        'contact-send-btn': 'Enviar Mensaje',
        'contact-info-title': 'Informacion de Contacto',
        'contact-address-title': 'Direccion',
        'contact-address-value': 'Rua Corupa, 119 - Ubatuba, Sao Francisco do Sul, SC',
        'contact-phone-title': 'Telefono',
        'contact-email-title': 'Email',
        'contact-hours-title': 'Horario de Atencion',
        'contact-hours-value': 'Lunes a Viernes: 10:00 a 20:00<br>Sabado: 10:00 a 18:00<br>Domingo: Cerrado',
        'contact-follow-title': 'Siguenos',
        'footer-copy': '&copy; 2025 Marcos Tattoo Studio. Todos los derechos reservados.',
        'success-title': 'Mensaje Enviado!',
        'success-desc': 'Gracias por tu contacto. Te responderemos pronto para agendar tu consulta o resolver tus dudas.',
        'success-close': 'Cerrar',
        close: 'Cerrar'
    }
};

function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element && value !== undefined) {
        element.textContent = value;
    }
}

function setHtml(selector, value) {
    const element = document.querySelector(selector);
    if (element && value !== undefined) {
        element.innerHTML = value;
    }
}

function setPlaceholder(selector, value) {
    const element = document.querySelector(selector);
    if (element && value !== undefined) {
        element.placeholder = value;
    }
}

function updateGalleryButtonLabel() {
    const button = document.getElementById('view-more-btn');
    const copy = translations[currentLanguage] || translations.pt;
    if (button) {
        button.textContent = expanded ? copy['gallery-btn-less'] : copy['gallery-btn'];
    }
}

function toggleGalleryImages() {
    expanded = !expanded;
    for (let index = 10; index <= 40; index += 1) {
        const extraImage = document.getElementById(`extra-img-${index}`);
        if (extraImage) {
            extraImage.classList.toggle('hidden', !expanded);
        }
    }
    updateGalleryButtonLabel();
}

function setLanguage(lang) {
    const copy = translations[lang] || translations.pt;
    currentLanguage = translations[lang] ? lang : 'pt';

    document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : currentLanguage;

    const currentLangLabel = document.getElementById('currentLang');
    if (currentLangLabel) {
        currentLangLabel.textContent = copy.langLabel;
    }
    updateThemeToggleText();

    [
        'nav-home', 'nav-about', 'nav-gallery', 'nav-services',
        'nav-mentorship', 'nav-testimonials', 'nav-events', 'nav-contact'
    ].forEach((key) => {
        setText(`#${key}`, copy[key]);
    });

    [
        'home', 'about', 'gallery', 'services',
        'mentorship', 'testimonials', 'events', 'contact'
    ].forEach((section) => {
        setText(`#mobile-nav-${section}`, copy[`nav-${section}`]);
        setText(`#footer-${section}`, copy[`nav-${section}`]);
    });

    setText('#preloader-text', copy['preloader-text']);
    setText('#hero-desc', copy['hero-desc']);
    setText('#hero-btn1', copy['hero-btn1']);
    setText('#hero-btn2', copy['hero-btn2']);

    setHtml('#about-title', copy['about-title']);
    setHtml('#about-desc', copy['about-desc']);
    const aboutTitles = document.querySelectorAll('#about .flex.flex-wrap.gap-4.justify-center h3');
    if (aboutTitles[0]) aboutTitles[0].textContent = copy['about-award-title'];
    if (aboutTitles[1]) aboutTitles[1].textContent = copy['about-certified-title'];
    if (aboutTitles[2]) aboutTitles[2].textContent = copy['about-mentor-title'];
    setText('#about-premiado-desc', copy['about-award-desc']);
    setText('#about-certificado-desc', copy['about-certified-desc']);
    setText('#about-mentor-desc', copy['about-mentor-desc']);

    setHtml('#gallery-title', copy['gallery-title']);
    setText('#gallery-desc', copy['gallery-desc']);
    updateGalleryButtonLabel();

    setHtml('#services .text-center h2', copy['services-title']);
    setText('#services-desc', copy['services-desc']);
    const servicesSection = document.getElementById('services');
    const serviceCards = servicesSection ? servicesSection.querySelectorAll('.grid > div.bg-zinc-800') : [];
    serviceCards.forEach((card, index) => {
        const number = index + 1;
        const title = card.querySelector('h3');
        const description = card.querySelector('p');
        const items = card.querySelectorAll('li');
        if (title) title.textContent = copy[`service-${number}-title`];
        if (description) description.textContent = copy[`service-${number}-desc`];
        items.forEach((item, itemIndex) => {
            const textNode = item.lastChild;
            if (textNode) {
                textNode.textContent = copy[`service-${number}-point-${itemIndex + 1}`];
            }
        });
    });

    setHtml('#piercing .text-center h2', copy['piercing-title']);
    setText('#piercing-desc', copy['piercing-desc']);
    const piercingSection = document.getElementById('piercing');
    const piercingCards = piercingSection ? piercingSection.querySelectorAll('.grid > div.bg-zinc-800.rounded-lg.p-6.flex.flex-col.items-center') : [];
    piercingCards.forEach((card, index) => {
        const number = index + 1;
        const title = card.querySelector('h3');
        const description = card.querySelector('p');
        if (title) title.textContent = copy[`piercing-${number}-title`];
        if (description) description.textContent = copy[`piercing-${number}-desc`];
    });
    setText('#piercing-gallery-title', copy['piercing-gallery-title']);
    setText('#piercing-btn', copy['piercing-btn']);
    setText('#piercing-insta', copy['piercing-insta']);

    const mentorshipSection = document.getElementById('mentorship');
    setHtml('#mentorship .text-center h2', copy['mentorship-title']);
    setText('#mentorship-desc', copy['mentorship-desc']);
    const mentorshipHeading = mentorshipSection ? mentorshipSection.querySelector('h3') : null;
    const mentorshipParagraphs = mentorshipSection ? mentorshipSection.querySelectorAll('p') : [];
    const mentorshipLead = mentorshipParagraphs[1];
    if (mentorshipHeading) mentorshipHeading.textContent = copy['mentorship-why-title'];
    if (mentorshipLead) mentorshipLead.textContent = copy['mentorship-why-desc'];
    const mentorshipItems = mentorshipSection ? mentorshipSection.querySelectorAll('.space-y-4 > div') : [];
    mentorshipItems.forEach((item, index) => {
        const number = index + 1;
        const title = item.querySelector('h4');
        const description = item.querySelector('p');
        if (title) title.textContent = copy[`mentorship-feature-${number}-title`];
        if (description) description.textContent = copy[`mentorship-feature-${number}-desc`];
    });
    setText('#mentorship-btn', copy['mentorship-btn']);

    setHtml('#testimonials .text-center h2', copy['testimonials-title']);
    setText('#testimonials-desc', copy['testimonials-desc']);
    setText('#testimonials .testimonial-card p', copy['testimonial-1-quote']);
    setText('#testimonials .testimonial-card h4', copy['testimonial-1-author']);

    setHtml('#feedback .text-center h2', copy['feedback-title']);
    setText('#feedback-desc', copy['feedback-desc']);
    setText('#feedback .bg-zinc-800 h3', copy['feedback-form-title']);
    setText('#feedback-form-desc', copy['feedback-form-desc']);
    setText('#feedback-btn', copy['feedback-btn']);
    setText('#feedback-note1', copy['feedback-note1']);
    setText('#feedback-note2', copy['feedback-note2']);
    setText('#feedback-note3', copy['feedback-note3']);

    setHtml('#events .text-center h2', copy['events-title']);
    setText('#events-desc', copy['events-desc']);
    setText('#events .bg-zinc-800 .text-center > p', copy['events-card-desc']);
    const eventsSection = document.getElementById('events');
    const eventCards = eventsSection ? eventsSection.querySelectorAll('.bg-zinc-700.rounded-lg') : [];
    if (eventCards[0]) {
        const label = eventCards[0].querySelector('.text-white');
        if (label) label.textContent = copy['events-location-label'];
    }
    if (eventCards[1]) {
        const label = eventCards[1].querySelector('.text-white');
        if (label) label.textContent = copy['events-date-label'];
    }
    if (eventCards[2]) {
        const label = eventCards[2].querySelector('.text-white');
        if (label) label.textContent = copy['events-time-label'];
    }
    setText('#event-location', copy['events-location']);
    setText('#event-date', copy['events-date']);
    setText('#event-time', copy['events-time']);

    setHtml('#contact .text-center h2', copy['contact-title']);
    setText('#contact .text-center p', copy['contact-desc']);
    setText('label[for="name"]', copy['contact-name-label']);
    setText('label[for="email"]', copy['contact-email-label']);
    setText('label[for="phone"]', copy['contact-phone-label']);
    setText('label[for="service"]', copy['contact-interest-label']);
    setText('label[for="message"]', copy['contact-message-label']);
    setPlaceholder('#name', copy['contact-name-placeholder']);
    setPlaceholder('#email', copy['contact-email-placeholder']);
    setPlaceholder('#phone', copy['contact-phone-placeholder']);
    setPlaceholder('#message', copy['contact-message-placeholder']);
    setText('#service option[value=""]', copy['contact-option-placeholder']);
    setText('#service option[value="custom"]', copy['contact-option-custom']);
    setText('#service option[value="cover"]', copy['contact-option-cover']);
    setText('#service option[value="mentorship-basic"]', copy['contact-option-mentorship']);
    setText('#service option[value="other"]', copy['contact-option-other']);
    setText('#contact-form button[type="submit"]', copy['contact-send-btn']);
    setText('#contact .bg-zinc-800 h3', copy['contact-info-title']);
    const contactInfoBlocks = document.querySelectorAll('#contact .space-y-6 > div');
    if (contactInfoBlocks[0]) {
        const title = contactInfoBlocks[0].querySelector('h4');
        const link = contactInfoBlocks[0].querySelector('a');
        if (title) title.textContent = copy['contact-address-title'];
        if (link) link.textContent = copy['contact-address-value'];
    }
    if (contactInfoBlocks[1]) {
        const title = contactInfoBlocks[1].querySelector('h4');
        if (title) title.textContent = copy['contact-phone-title'];
    }
    if (contactInfoBlocks[2]) {
        const title = contactInfoBlocks[2].querySelector('h4');
        if (title) title.textContent = copy['contact-email-title'];
    }
    if (contactInfoBlocks[3]) {
        const title = contactInfoBlocks[3].querySelector('h4');
        const value = contactInfoBlocks[3].querySelector('p');
        if (title) title.textContent = copy['contact-hours-title'];
        if (value) value.innerHTML = copy['contact-hours-value'];
    }
    setText('#contact .mt-8 h4', copy['contact-follow-title']);

    setText('#footer-home', copy['nav-home']);
    setText('#footer-about', copy['nav-about']);
    setText('#footer-gallery', copy['nav-gallery']);
    setText('#footer-services', copy['nav-services']);
    setText('#footer-mentorship', copy['nav-mentorship']);
    setText('#footer-events', copy['nav-events']);
    setText('#footer-contact', copy['nav-contact']);
    setHtml('#footer-copy', copy['footer-copy']);

    setText('#success-modal h3', copy['success-title']);
    setText('#success-modal p', copy['success-desc']);
    setText('#close-modal', copy['success-close']);
    setText('#close-event-img-modal', copy.close);
    const closePiercingButton = document.getElementById('close-piercing-modal');
    if (closePiercingButton) {
        closePiercingButton.setAttribute('aria-label', copy.close);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    setLanguage('pt');
    const galleryToggleButton = document.getElementById('view-more-btn');
    if (galleryToggleButton) {
        galleryToggleButton.addEventListener('click', toggleGalleryImages);
    }
});

function applyTheme(theme) {
    const isLight = theme === 'light';
    document.body.classList.toggle('light-theme', isLight);

    const toggleIcon = document.getElementById('themeToggleIcon');
    if (toggleIcon) {
        toggleIcon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }

    updateThemeToggleText();

    try {
        localStorage.setItem('site-theme', theme);
    } catch (error) {
        // Ignore storage failures and keep theme only for the session.
    }
}

function initializeTheme() {
    let savedTheme = 'dark';
    try {
        savedTheme = localStorage.getItem('site-theme') || 'dark';
    } catch (error) {
        savedTheme = 'dark';
    }

    applyTheme(savedTheme);

    const themeToggleButton = document.getElementById('themeToggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
            applyTheme(nextTheme);
        });
    }
}

function updateThemeToggleText() {
    const copy = translations[currentLanguage] || translations.pt;
    const isLight = document.body.classList.contains('light-theme');
    const label = isLight ? copy.themeDarkLabel : copy.themeLightLabel;
    const aria = isLight ? copy.themeDarkAria : copy.themeLightAria;

    setText('#themeToggleLabel', label);
    const themeToggleButton = document.getElementById('themeToggle');
    if (themeToggleButton) {
        themeToggleButton.setAttribute('aria-label', aria);
    }

    const vlibrasToggleButton = document.getElementById('vlibrasToggle');
    const vlibrasToggleLabel = document.getElementById('vlibrasToggleLabel');
    const vlibrasCopy = vlibrasLabels[currentLanguage] || vlibrasLabels.pt;

    if (vlibrasToggleLabel) {
        vlibrasToggleLabel.textContent = vlibrasCopy.label;
    }

    if (vlibrasToggleButton) {
        vlibrasToggleButton.setAttribute('aria-label', vlibrasCopy.aria);
    }
}

// Floating Controls Menu
const controlMenuBtn = document.getElementById('controlMenuBtn');
const controlMenuPanel = document.getElementById('controlMenuPanel');
const langOptions = document.getElementById('langOptions');
const currentLang = document.getElementById('currentLang');

if (controlMenuBtn && controlMenuPanel && langOptions && currentLang) {
    controlMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        controlMenuPanel.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        const clickedInsideMenu = controlMenuBtn.contains(e.target) || controlMenuPanel.contains(e.target);
        if (!clickedInsideMenu) {
            controlMenuPanel.classList.remove('active');
        }
    });

    langOptions.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            if (lang === 'en') {
                setLanguage('en');
            } else if (lang === 'es') {
                setLanguage('es');
            } else {
                setLanguage('pt');
            }
            controlMenuPanel.classList.remove('active');
        });
    });

    const vlibrasToggleButton = document.getElementById('vlibrasToggle');
    if (vlibrasToggleButton) {
        vlibrasToggleButton.addEventListener('click', () => {
            const vlibrasAccessButton = document.querySelector('div[vw-access-button]');
            if (vlibrasAccessButton) {
                vlibrasAccessButton.click();
            }
            controlMenuPanel.classList.remove('active');
        });
    }
}

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

if (menuToggle && mobileMenu) {
    const closeMobileMenu = () => {
        mobileMenu.classList.remove('active');
        mobileMenu.setAttribute('aria-hidden', 'true');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('modal-open', 'mobile-menu-open');
    };

    const openMobileMenu = () => {
        mobileMenu.classList.add('active');
        mobileMenu.setAttribute('aria-hidden', 'false');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.classList.add('modal-open', 'mobile-menu-open');
    };

    menuToggle.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    mobileMenu.querySelectorAll('.mobile-menu__link').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
    });

    mobileMenu.addEventListener('click', (event) => {
        if (event.target === mobileMenu) {
            closeMobileMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// FAQ Toggles
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const targetId = toggle.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        const icon = toggle.querySelector('svg');
        // Close all other FAQs
        document.querySelectorAll('.faq-content').forEach(content => {
            if (content.id !== targetId) {
                content.classList.add('hidden');
                if (content.previousElementSibling) {
                    const otherIcon = content.previousElementSibling.querySelector('svg');
                    if (otherIcon) otherIcon.classList.remove('rotate-180');
                }
            }
        });
        // Toggle current FAQ
        if (targetContent) {
            targetContent.classList.toggle('hidden');
        }
        if (icon) {
            icon.classList.toggle('rotate-180');
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const successModal = document.getElementById('success-modal');
const closeModal = document.getElementById('close-modal');

if (contactForm && successModal && closeModal) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const copy = translations[currentLanguage] || translations.pt;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        const selectedService = document.querySelector(`#service option[value="${service}"]`);
        const serviceLabel = selectedService ? selectedService.textContent : service;

        const whatsappNumber = '5547996447482';
        const whatsappMessage = [
            `${copy['contact-name-label']}: ${name}`,
            `${copy['contact-email-label']}: ${email}`,
            `${copy['contact-phone-label']}: ${phone}`,
            `${copy['contact-interest-label']}: ${serviceLabel}`,
            `${copy['contact-message-label']}: ${message}`
        ].join('\n');

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');

        successModal.classList.remove('opacity-0', 'pointer-events-none');
        contactForm.reset();
    });

    closeModal.addEventListener('click', () => {
        successModal.classList.add('opacity-0', 'pointer-events-none');
    });
}

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        backToTopButton.classList.add('opacity-0', 'pointer-events-none');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Gallery Modal Functionality
const galleryImages = document.querySelectorAll('.gallery-img'); // Adicione a classe .gallery-img nas imagens da galeria
let currentImgIndex = 0;

// Cria o modal dinamicamente se não existir
let galleryModal = document.getElementById('gallery-modal');
if (!galleryModal) {
galleryModal = document.createElement('div');
galleryModal.id = 'gallery-modal';
galleryModal.innerHTML = `
<div class="gallery-modal-backdrop"></div>
<div class="gallery-modal-content">
<button id="gallery-close" class="gallery-modal-close">&times;</button>
<button id="gallery-prev" class="gallery-modal-nav gallery-modal-prev">&#8592;</button>
<img id="gallery-modal-img" src="" alt="Imagem" />
<button id="gallery-next" class="gallery-modal-nav gallery-modal-next">&#8594;</button>
</div>
`;
document.body.appendChild(galleryModal);
}

const modalBackdrop = galleryModal.querySelector('.gallery-modal-backdrop');
const modalContent = galleryModal.querySelector('.gallery-modal-content');
const modalImg = galleryModal.querySelector('#gallery-modal-img');
const closeBtn = galleryModal.querySelector('#gallery-close');
const prevBtn = galleryModal.querySelector('#gallery-prev');
const nextBtn = galleryModal.querySelector('#gallery-next');

function openGalleryModal(index) {
    // Re-obter todas as imagens para garantir que inclui as recém-carregadas
    const allGalleryImages = document.querySelectorAll('.gallery-img');
    
    if (index >= 0 && index < allGalleryImages.length) {
        currentImgIndex = index;
        modalImg.src = allGalleryImages[currentImgIndex].src;
        modalImg.alt = allGalleryImages[currentImgIndex].alt || 'Imagem da galeria';
        galleryModal.classList.add('active');
        document.body.classList.add('modal-open');
        
        // Focar no modal para acessibilidade
        galleryModal.focus();
    }
}

function closeGalleryModal() {
galleryModal.classList.remove('active');
document.body.classList.remove('modal-open');
}

function showPrevImg() {
    const allGalleryImages = document.querySelectorAll('.gallery-img');
    currentImgIndex = (currentImgIndex - 1 + allGalleryImages.length) % allGalleryImages.length;
    modalImg.src = allGalleryImages[currentImgIndex].src;
    modalImg.alt = allGalleryImages[currentImgIndex].alt || 'Imagem da galeria';
}

function showNextImg() {
    const allGalleryImages = document.querySelectorAll('.gallery-img');
    currentImgIndex = (currentImgIndex + 1) % allGalleryImages.length;
    modalImg.src = allGalleryImages[currentImgIndex].src;
    modalImg.alt = allGalleryImages[currentImgIndex].alt || 'Imagem da galeria';
}

// Função para adicionar event listeners às imagens da galeria
function addGalleryImageListeners() {
    const galleryImages = document.querySelectorAll('.gallery-img');
    galleryImages.forEach((img, idx) => {
        img.addEventListener('click', () => openGalleryModal(idx));
    });
}

// Adicionar listeners iniciais
addGalleryImageListeners();

    // Re-adicionar listeners quando novas imagens são carregadas (botão "Ver Mais")
    const viewMoreBtnGallery = document.getElementById('view-more-btn');
    if (viewMoreBtnGallery) {
        viewMoreBtnGallery.addEventListener('click', () => {
            // Aguardar um pouco para as imagens serem exibidas
            setTimeout(() => {
                addGalleryImageListeners();
            }, 100);
        });
    }

    // Event Carousel Functionality
    const eventImages = document.getElementById('event-images');
    const eventPrev = document.getElementById('event-prev');
    const eventNext = document.getElementById('event-next');
    const eventDots = document.querySelectorAll('.event-dot');
    let currentEventIndex = 0;
    const totalEvents = 2;

    function showEventImage(index) {
        currentEventIndex = index;
        eventImages.style.transform = `translateX(-${index * 100}%)`;
        
        // Update dots
        eventDots.forEach((dot, i) => {
            dot.classList.toggle('bg-opacity-100', i === index);
            dot.classList.toggle('bg-opacity-50', i !== index);
        });
    }

    if (eventPrev && eventNext) {
        eventPrev.addEventListener('click', () => {
            currentEventIndex = (currentEventIndex - 1 + totalEvents) % totalEvents;
            showEventImage(currentEventIndex);
        });

        eventNext.addEventListener('click', () => {
            currentEventIndex = (currentEventIndex + 1) % totalEvents;
            showEventImage(currentEventIndex);
        });

        // Dot navigation
        eventDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showEventImage(index);
            });
        });

        // Auto-play carousel
        setInterval(() => {
            currentEventIndex = (currentEventIndex + 1) % totalEvents;
            showEventImage(currentEventIndex);
        }, 5000);
    }

closeBtn.addEventListener('click', closeGalleryModal);
modalBackdrop.addEventListener('click', closeGalleryModal);
prevBtn.addEventListener('click', showPrevImg);
nextBtn.addEventListener('click', showNextImg);

document.addEventListener('keydown', (e) => {
    if (!galleryModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeGalleryModal();
    if (e.key === 'ArrowLeft') showPrevImg();
    if (e.key === 'ArrowRight') showNextImg();
});

// Touch gestures para mobile
let touchStartX = 0;
let touchEndX = 0;

galleryModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

galleryModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next image
            showNextImg();
        } else {
            // Swipe right - previous image
            showPrevImg();
        }
    }
}

// Function to open Google Maps
function openGoogleMaps() {
    const url = 'https://www.google.com/maps?q=Mercado+Público+Municipal+São+Francisco+do+Sul+SC';
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Preloader hide on load
    (function() {
        var preloader = document.getElementById('preloader');
        var start = Date.now();
        function hidePreloader() {
            var elapsed = Date.now() - start;
            var wait = Math.max(0, 5000 - elapsed);
            setTimeout(function() {
                if (preloader) {
                    preloader.style.opacity = '0';
                    setTimeout(function(){ preloader.style.display = 'none'; }, 600);
                }
            }, wait);
        }
        window.addEventListener('load', hidePreloader);
        setTimeout(hidePreloader, 5000);
    })();
 
    // Abrir modal ao clicar na imagem
    document.getElementById('open-event-img-modal').onclick = function() {
        var modal = document.getElementById('event-img-modal');
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
        modal.style.pointerEvents = 'auto';
    };
    // Fechar modal ao clicar no botão
    document.getElementById('close-event-img-modal').onclick = function() {
        var modal = document.getElementById('event-img-modal');
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('opacity-100');
        modal.style.pointerEvents = 'none';
    };
    // Fechar modal ao clicar fora da imagem
    document.getElementById('event-img-modal').onclick = function(e) {
        if (e.target === this) {
            this.classList.add('opacity-0', 'pointer-events-none');
            this.classList.remove('opacity-100');
            this.style.pointerEvents = 'none';
        }
    };