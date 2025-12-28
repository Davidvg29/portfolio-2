import {CHANGE_LANGUAGE} from "./action-types"

let initialStore = {
    language: "SPANISH",
    experiences : [
        {
            name: "Tucumán Water Company",
            nombre: "Sociedad Aguas del Tucumán",
            subtitle: "Fullstack | DevOps",
            github: "",
            demo:['https://aguasdeltucuman.com.ar/'],
            img: [
                'https://res.cloudinary.com/dxxte9caz/image/upload/v1761350923/Macbook-Air-aguasdeltucuman.com.ar_rt2anc.png',
                'https://res.cloudinary.com/dxxte9caz/image/upload/v1761350971/Macbook-Air-aguasdeltucuman.com.ar_1_iix2w7.png',
                'https://res.cloudinary.com/dxxte9caz/image/upload/v1761351003/Macbook-Air-aguasdeltucuman.com.ar_3_gjgvix.png',
                'https://res.cloudinary.com/dxxte9caz/image/upload/v1761351049/Macbook-Air-aguasdeltucuman.com.ar_2_amomni.png',
                'https://res.cloudinary.com/dxxte9caz/image/upload/v1761351072/Macbook-Air-aguasdeltucuman.com.ar_4_w1tpdl.png',
                'https://res.cloudinary.com/dxxte9caz/image/upload/v1761351091/Macbook-Air-aguasdeltucuman.com.ar_5_fdcaek.png',
                'https://res.cloudinary.com/dxxte9caz/image/upload/v1761351106/Macbook-Air-aguasdeltucuman.com.ar_6_nut3pd.png',
                'https://res.cloudinary.com/dxxte9caz/image/upload/v1761351126/Macbook-Air-aguasdeltucuman.com.ar_7_jabqwm.png',
                'https://res.cloudinary.com/dxxte9caz/image/upload/v1761351143/Macbook-Air-aguasdeltucuman.com.ar_8_quvvot.png',
                'https://res.cloudinary.com/dxxte9caz/image/upload/v1761351158/Macbook-Air-aguasdeltucuman.com.ar_9_kf6o3p.png',
                'https://res.cloudinary.com/dxxte9caz/image/upload/v1761351158/Macbook-Air-aguasdeltucuman.com.ar_9_kf6o3p.png',
                'https://res.cloudinary.com/dxxte9caz/image/upload/v1761351189/Macbook-Air-aguasdeltucuman.com.ar_11_liyctm.png'
            ],
            description: "Migration from an old platform to a new web solution for property management and monthly invoice control. It provides support for online payments through three modern methods, management of cash plans, and a secure experience thanks to anti-bot systems, email verification, authentication, authorization, and connections with external servers.",
            descripcion:"Migración de una antigua plataforma a una nueva solución web para la gestión de inmuebles y control de facturas mensuales. Ofrece soporte para pagos online mediante tres métodos modernos, gestión de planes de contado y una experiencia segura gracias a sistemas anti-bot, verificación por correo electrónico, autenticación, autorización y conexiones con servidores externos.",
            technologies: "Node.js | React | PostgreSQL | Nginx |"
        },
        {
            name: "Interactive Totem",
            nombre: "Totem interactivo",
            subtitle: "Fullstack",
            github: "",
            demo:[],
            img: [
                "https://res.cloudinary.com/dxxte9caz/image/upload/v1754529882/WhatsApp_Image_2025-08-06_at_22.23.10_4c207a1c_ql3e0b.jpg",
                "https://res.cloudinary.com/dxxte9caz/image/upload/v1754529914/WhatsApp_Image_2025-08-06_at_22.23.09_cb1a71cc_uarx0q.jpg",
                "https://res.cloudinary.com/dxxte9caz/image/upload/v1754529894/WhatsApp_Image_2025-08-06_at_22.23.09_1140f208_r4otwq.jpg",
                "https://res.cloudinary.com/dxxte9caz/image/upload/v1754529836/WhatsApp_Image_2025-08-06_at_22.23.10_7b297cab_yfagtb.jpg", 
            ],
            description: "Interactive touchscreen kiosk designed to enhance the customer experience. Through this device, users can search for their property using their customer code, view detailed information, and autonomously print their monthly bills. This allows them to quickly access their invoices and go directly to the payment desk without delays, streamlining the service process and improving the flow within the facility.",
            descripcion:"Tótem interactivo con pantalla táctil diseñado para mejorar la experiencia de los clientes. A través de este dispositivo, los clientes pueden buscar su inmueble utilizando el código de cliente, visualizar información detallada e imprimir sus facturas mensuales de forma autónoma. Esto les permite acceder rápidamente a sus comprobantes y dirigirse directamente a caja para realizar el pago sin demoras, agilizando el proceso de atención y optimizando el flujo dentro de las instalaciones.",
            technologies: "React | Node.js | Cobol"
        }, 
        {
            name: "WhatsApp bot",
            nombre: "Bot de WhatsApp",
            subtitle: "Backend",
            github: "",
            demo:[],
            img: [
                "https://res.cloudinary.com/dxxte9caz/image/upload/v1754528851/WhatsApp_Image_2025-08-06_at_22.07.17_133f1350_u2e4zh.jpg",
                "https://res.cloudinary.com/dxxte9caz/image/upload/v1754529055/WhatsApp_Image_2025-08-06_at_22.10.41_2bb320a7_igkizg.jpg",
                "https://res.cloudinary.com/dxxte9caz/image/upload/v1754529071/WhatsApp_Image_2025-08-06_at_22.10.41_53b0983a_fojmu8.jpg",
            ],
            description: "Update of a WhatsApp bot that allows customers to automatically receive their monthly invoices in PDF format. The project included the implementation of connections with external servers to query, retrieve, and send current invoices directly through the chat, streamlining customer service and reducing waiting times.",
            descripcion:"Actualización de un bot de WhatsApp que permite a los clientes obtener sus facturas mensuales en formato PDF de manera automatizada. Incluyó la implementación de conexiones con servidores externos para consultar, recuperar y enviar facturas vigentes directamente a través del chat, optimizando el proceso de atención al cliente y reduciendo tiempos de espera.",
            technologies: "Twilio | Node.js"
        }, 
        {
            name: "Functionality for quick access to customer invoices",
            nombre: "Funcionalidad para acceso rápido a facturas de clientes",
            subtitle: "Fullstack",
            github: "",
            demo:[
                "https://www.aguasdeltucuman.com.ar/",
            ],
            img: [
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/tpr4skquch8dv9mf8vxq",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/vthisdq8wv3hn20hahsc",    
            ],
            description: "Functionality that allows customers to quickly access their invoices without the need to log in. A connection is established with the server to extract and display the corresponding information, offering options to: View the invoice in PDF format, Make payment directly through gateways such as MercadoPago and Click de Pago.",
            descripcion:"Funcionalidad que permite a los clientes acceder rápidamente a sus facturas sin necesidad de iniciar sesión. Se establece conexión con el servidor para extraer y mostrar la información correspondiente, ofreciendo opciones para: Ver la factura en formato PDF, Realizar el pago directamente mediante pasarelas como MercadoPago y Click de Pago.",
            technologies: "HTML5 | CSS3"
        }, 
        {
            name: "Landing page 3 Sportsbet",
            nombre: "Pagina de aterrizaje 3 de Sportsbet",
            subtitle: "Frontend",
            github: "",
            demo:[
                "https://landing-sportsbet-3.netlify.app/",
            ],
            img: [
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/haajk6ywsdh1rjbwmskh",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/ee3nsrlujbovn0urv6pr",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/s9btrvllhmn3jqclxuhx",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/povfv2gsmluessyftuqy",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/p0q2x5txykjfdovgcxpp",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/kr9vqx36ckiiji6iyh1r",
            ],
            description: "Development of landing page aligned with the brand identity, ensuring an optimized structure and an attractive design.",
            descripcion:"Desarrollo de landing page alineada con la identidad de la marca, asegurando una estructura optimizada y un diseño atractivo.",
            technologies: "HTML5 | CSS3"
        }, 
        {
            name: "Landings page Sportsbet ",
            nombre: "Paginas de aterrizaje de Sportsbet",
            subtitle: "Frontend",
            github: "",
            demo:[
                "https://landing-sportsbet.netlify.app/",
                "https://landing-sportsbet-2.netlify.app/",
            ],
            img: [
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/ewdxcpktelqciv8wqroc",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/hloaokzr8i4pckkkmj1n"
            //    "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/fbrwdh9xzsaldufsiviv",
            //    "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/wb98szbdqhtkozu8pnab",
            //    "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/bxxfmswpiydfm9rfkpvn"
            ],
            description: "Development of landings page aligned with the brand identity, ensuring an optimized structure and an attractive design.",
            descripcion:"Desarrollo de landings page alineada con la identidad de la marca, asegurando una estructura optimizada y un diseño atractivo.",
            technologies: "HTML5 | CSS3"
        }, 
        // {
        //     name: "Ecommerce Munchies Drugstore ",
        //     nombre: "Comercio electronico Munchies Drugstore",
        //     subtitle: "Fullstack",
        //     github: "",
        //     demo:"",
        //     img: [
        //        "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/ypeg1jze0xylwizwj1cf"
        //     ],
        //     description: "In development...",
        //     descripcion:"En desarrollo...",
        //     technologies: ""
        // }, 
    {
        name: "SwaplyAr",
        nombre: "SwaplyAr",
        subtitle: "Frontend",
        github: "",
        demo:"https://swaplyar.com/",
        img: [
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/dhkmtvtwxgnnwk4suzbk",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/czztcmfz16anisq7watm"
        ],
        description: "I integrated various APIs to provide real-time currency quotes, which increased the accuracy and efficiency of transactions. The web application allows users to select between different wallets with various currencies, and choose which ones they want to send and receive, using current prices. I developed an intuitive and interactive user interface, significantly improving the user experience on the platform.",
        descripcion:"Integré diversas APIs para proporcionar cotizaciones de divisas en tiempo real, lo que aumentó la precisión y eficiencia de las transacciones. La aplicación web permite a los usuarios seleccionar entre diferentes billeteras con diversas divisas, y elegir cuáles quieren enviar y recibir, utilizando los precios actuales. Desarrollé una interfaz de usuario intuitiva e interactiva, mejorando notablemente la experiencia del usuario en la plataforma.",
        technologies: "Javascript | RESTfull api | HTML | CSS"
    }, 
    {
        name: "PDF Generator API",
        nombre: "API generador de PDF",
        subtitle: "Backend",
        github: "https://github.com/Davidvg29/generador-comprobantes-PDF",
        demo:"",
        img: [
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/wkz4rgtrt9tumqzs5pbi",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/vkwzgzqedst1k5m2tic0"
        ],
        description: "API developed and designed to generate and deliver receipts in PDF format to customers after completing a purchase. The solution enables automated creation of PDF documents, integrating transaction data such as product details, total amount, date and time of purchase, and customer information.",
        descripcion:"Api desarrollado y diseñado para generar y entregar comprobantes en formato PDF a los clientes tras la finalización de una compra. La solución permite la creación automatizada de documentos PDF, integrando datos de la transacción, como detalles del producto, monto total, fecha y hora de la compra, y la información del cliente.",
        technologies: "Node.js | Express | PDFkit"
    }, 
     {
        name:"Ecommerce E-GYM",
        nombre:"Comercio electronico E-GYM",
        subtitle:"Fullstack",
        github:"",
        demo:"https://frontend-pf-three.vercel.app/",
        img:[
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/vx9sdahh1cs8gzkn2oqp",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/qakmrwz9wzug4otxjfsb",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/kzteixyifvixrjly5ebf",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/dl3shoj87nagzrqwzdnc",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/ue4c4xkrxoo6vikimvjz",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/xgr9uggtjfk6434bvltq",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/hr1sdty5a1etxxtzmwaw",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/piqhtxnmnptnpbhgtl9j",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/yejhadvi5835ylnh7kqb",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/muzyfjw9lsapgvo2bbfy",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/zfx98zbowa9hgrmed80j",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/et3hkblk2idqse4q5gwv",
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/yl1qz03y9wbpr9wdndpf",
            "",
        ],
        description:"This website offers a complete experience for different roles: clients and administrators. For customers, a safe and simple purchasing process has been designed. After registering and entering their data, users can make purchases through Mercado Pago, ensuring secure transactions thanks to password encryption.The site includes a best-selling products section and detailed details of each item. Additionally, customers can add products to cart, leave reviews and recommendations, and take advantage of discounts with coupons before completing their purchases. On the other hand, for administrators, a complete administrative panel has been created. From here, they have full control over products and users. They can manage products, coupons and registered user roles, as well as access a sales section that provides a detailed view of each transaction.",
        descripcion:"Este sitio web ofrece una experiencia completa para diferentes roles: clientes y administradores. Para los clientes se ha diseñado un proceso de compra seguro y sencillo. Luego de registrarse e ingresar sus datos, los usuarios pueden realizar compras a través de Mercado Pago, garantizando transacciones seguras gracias al cifrado de contraseña. El sitio incluye una sección de productos más vendidos y detalles detallados de cada artículo. Además, los clientes pueden agregar productos al carrito, dejar reseñas y recomendaciones y aprovechar descuentos con cupones antes de completar sus compras. Por otro lado, para los administradores se ha creado un completo panel administrativo. Desde aquí, tienen control total sobre los productos y los usuarios. Pueden gestionar productos, cupones y roles de usuarios registrados, así como acceder a una sección de ventas que proporciona una vista detallada de cada transacción.",
        technologies:"React, Cloudinary, Formik, Toastify, Tailwind CSS, Daisy UI JWT, Mercado Pago api, Express, Mongoose, Nodemailer, Javascript",    
     },
     {
        name: "CMS-Content management server with user authentication",
        nombre: "CMS-Servidor de gestión de contenidos con autenticación de usuario",
        subtitle: "Backend",
        github: "https://github.com/Davidvg29/portfolio-backend",
        demo:"",
        img: [
            "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/amhaewje6izcfysf5bxq",
        ],
        description: "Administration panel with user authentication and password, which allows you to upload data and images to be read from the frontend (client) making requests from different routes (url). The server saves information and then takes it to a news blog, which was a developer web section. He himself can add technologies, works carried out. It is also connected to Firebase for authentication through Google for people who want to leave a comment as a testimonial.",
        descripcion:"Panel de administración con autenticación de usuario y contraseña, que permite subir datos e imágenes para ser leídos desde el frontend (cliente) realizando solicitudes desde diferentes rutas (url). El servidor guarda la información y luego la lleva a un blog de noticias, que era una sección web para desarrolladores. Él mismo puede añadir tecnologías, trabajos realizados. También está conectado a Firebase para la autenticación a través de Google para las personas que quieran dejar un comentario a modo de testimonio.",
        technologies: "Javascript | Sequelize | Express | Node | PostgreSQL | SQL | Cloudinary | Multer | Firebase"
    },   
     {
            name: "Banderactivity",
            nombre:"Banderactividad",
            subtitle: "fullstack",
            github: "https://github.com/Davidvg29/countries-frontend",
            demo:"",
            img: [
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/ul8jtqfpkxxfb93g2zsb",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/rcm44dukvjbj0c2gj1j0",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/cgrnuopyilr4o0zbo8fv",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/otax9ha4vj1eejcs8tzl",
            ],
            description: "Website with introductory landing page when upon entering it shows the countries with their name, continent and flag, it contains search by name and filters by inhabitants, continent, population and alphabetically. It also has a form to create a tourism activity with its specifications for one or more countries. When entering a country you will be able to view even more information along with the activities that have been created for it.",
            descripcion: "Sitio web con landing page introductoria al ingresar muestra los países con su nombre, continente y bandera, contiene búsqueda por nombre y filtros por habitantes, continente, población y alfabéticamente. También cuenta con un formulario para crear una actividad turística con sus especificaciones para uno o más países. Al ingresar a un país podrás visualizar aún más información junto con las actividades que se han creado para el mismo.",
            technologies: "Javascript | React | CSS | Sequelize | Express | Node | PostgreSQL | SQL | Axios"
        },
        {
            name: "Aide Store",
            nombre: "Aide Tienda",
            subtitle: "frontend",
            github: "https://github.com/Davidvg29/Aide-Tienda",
            demo: "https://aide-tienda.netlify.app/",
            img: [
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/ejloclrgujl0fpvhwuxl",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/cubmeumssimetxi25yas",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/iets89yiviknrzokbeyz"],
            description: "Entrepreneurship website which shows seasonal products with their respective prices, contains sections that were enabled by seasons with their different categories to make an easier selection. When you want to buy a product, redirect to WhatsApp with the name of the selected product to finalize your purchase and agree on payment and shipping.",
            descripcion:"Sitio web de emprendimiento que muestra productos de temporada con sus respectivos precios, contiene secciones que se habilitaron por temporadas con sus diferentes categorías para hacer una selección más fácil. Cuando quieras comprar un producto redirige a WhatsApp con el nombre del producto seleccionado para finalizar tu compra y acordar el pago y envío.",
            technologies: "Javascript | HTML | CSS"
        },
        {
            name: "BienveniDOG",
            nombre:"BienveniDOG",
            subtitle: "fullstack",
            github: "https://github.com/Davidvg29/pidogs-backend",
            demo: "https://pidgos-frontend.vercel.app/",
            img: [
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/wkh88nejuqm04eqcvmrb",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/fxp91zbcao76qiq1mdbq",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/lessvfxlihafgb3hhvto",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/rdsqgkt40d4wispvdh4b",
            ],
            description: "Website specialized in being able to show different breeds of dogs and characteristics with options to filter and a search field by breed name, when selecting one you will be able to see different special characteristics of it. Option to create a new breed with its characteristics through a controlled form and entering a URL for the image.",
            descripcion:"Sitio web especializado en poder mostrar diferentes razas de perros y características con opciones para filtrar y un campo de búsqueda por nombre de raza, al seleccionar una podrás ver diferentes características especiales de la misma. Opción de crear una nueva raza con sus características a través de un formulario controlado e ingresando una URL para la imagen.",
            technologies: "Javascript | React | CSS | Sequelize | Express | Node | PostgreSQL | SQL | Axios"
        },
        {
            name: "Valgra Indumentaria",
            nombre:"Valgra Indumentaria",
            subtitle: "Frontend",
            github: "https://github.com/Davidvg29/Valgra-indumentaria",
            demo: "https://valgra-indumentaria.netlify.app/",
            img: [
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/qjvq0ogjnqgln1o6mbqa",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/id0akglgvethubl3ocqy",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/fmjzjifpqfynnqodqhmb",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/hlchpapqhlvdyt4cbopl", 
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/vne8telq6ldgfpmwde6z",
            ],
            description: "Responsive clothing website for the sample of products with a shopping cart, when selecting the product you can choose the quantity, then in the cart you can choose the size. When you want to finalize the purchase, redirect directly to WhatsApp with a personalized message with the description of the purchase, so you can discuss the method of payment and delivery of the product.",
            descripcion:"Sitio web de ropa responsive para la muestra de productos con carrito de compras, al seleccionar el producto puedes elegir la cantidad, luego en el carrito puedes elegir la talla. Cuando quieras finalizar la compra redirige directamente a WhatsApp con un mensaje personalizado con la descripción de la compra, para que puedas discutir la forma de pago y entrega del producto.",
            technologies: "Javascript | HTML | CSS"
        },
        {
            name: "Login Loan System",
            nombre:"Login para Sistema de Prestamos",
            subtitle: "Web layout",
            github: "https://github.com/Davidvg29/Login-sistema-de-prestamos",
            demo: "https://davidvg29.github.io/Login-sistema-de-prestamos/",
            img: [
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/rsl8fg1uyeozk4ppjnhf",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/pl9bd2cg3ejhhlqcwa99"],
            description: "Responsively designed web layout for mobile and desktop, login to log into a loan system.",
            descripcion:"Diseño web con diseño responsivo para dispositivos móviles y de escritorio, inicie sesión para iniciar sesión en un sistema de préstamos.",
            technologies: "HMTL | CSS"
        },
        {
            name: "Rick and Morty",
            nombre:"Rick and Morty",
            subtitle: "fullstack",
            github: "https://github.com/Davidvg29/rickandmorty-back",
            demo: "https://rick-and-morty-pi-henry.netlify.app/",
            img: [
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/hnj2w3jvhd2eyyxkwxgk",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/fxnfbnsr6ya1ml0hvfwp",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/dg5kvdzopivihvyvg9ms",
                "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/venbgaodekzsrhbzul7k",
            ],
            description: "Project inspired and based on Rick and Morty, the website shows the characters with the option of bringing them randomly, being able to see details of that selected character and with the option of being able to select them as a favorite and then be displayed in the favorites section. You can test the website with the username: admin and the password: admin",
            descripcion:"Proyecto inspirado y basado en Rick y Morty, el sitio web muestra los personajes con la opción de traerlos aleatoriamente, pudiendo ver detalles de ese personaje seleccionado y con la opción de poder seleccionarlos como favoritos para luego mostrarse en el sección de favoritos. Puede probar el sitio web con el nombre de usuario: admin y la contraseña: admin",
            technologies: "Javascript | React | CSS | Sequelize | Express | Node | PostgreSQL | SQL | Axios"
        },
        
        
    ],
    currentJob: [
        {
            name: "SAT. Tucumán Water Company",
            nombre: "SAT. Sociedad Aguas del Tucumán ",
            subtitle: "Software Developer | DevOps",
            link:"https://aguasdeltucuman.com.ar/",
            img: "https://res.cloudinary.com/dxxte9caz/image/upload/v1761350923/Macbook-Air-aguasdeltucuman.com.ar_rt2anc.png",
            description: "Maintenance and optimization of the web platform, integration of new systems to automate and streamline internal tasks, and implementation of DevOps practices that ensure the efficiency, stability, and security of digital services.",
            descripcion:"Mantenimiento y optimización de la plataforma web, integración de nuevos sistemas para automatizar y agilizar tareas internas, e implementación de prácticas DevOps que garantizan la eficiencia, estabilidad y seguridad de los servicios digitales.",
        },
        {
            name: "Freelancer Developer",
            nombre: "Desarrollador Freelancer",
            subtitle: "Fullstack",
            link:"https://www.davidvaldezgramajo.com.ar/#form",
            img: "https://res.cloudinary.com/dxxte9caz/image/upload/f_auto,q_auto/v1/images%20portfolio%20dev/ewnsfc3osxehq06c6jwh",
            description: "Independent Web Developer with experience in both frontend and backend. I specialize in building custom platforms, performance optimization, and agile development using modern technologies.",
            descripcion:"Desarrollador de software independiente con experiencia en frontend y backend. Me especializo en la creación de plataformas personalizadas, optimización de rendimiento y desarrollo ágil con tecnologías modernas.",
        }, 
    ],
    technologies: [
        // DevOps y entornos
        [{ name: "Linux" },
        { name: "Cloud deployment" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "Jira" },
        { name: "Trello" }],
      
        // Lenguajes de programación
        [{ name: "JavaScript" },
        { name: "Java" },
        { name: "SQL" },
        { name: "Python" }],
      
        // Frontend
        [{ name: "React" },
        { name: "Redux" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Tailwind" },
        { name: "DaisyUI" },
        { name: "Bootstrap" }],
      
        // Backend
        [{ name: "Node" },
        { name: "Express" },
        { name: "Spring_Boot" }],
      
        // Bases de Datos
        [{ name: "PostgreSQL" },
        // { name: "MySQL" },
        { name: "Sequelize" },
        { name: "MongoDB" }],
      
        // Testing y QA
        [{ name: "Jest" },
        { name: "Testing automatizado" }],
      
        // Servicios y Herramientas
        [{ name: "RESTfull_api" },
        { name: "Firebase" },
        { name: "Multer" },
        { name: "Cloudinary" }],
      
        // Diseño y UI/UX
        [{ name: "Illustrator" },
        { name: "Photoshop" }],
      
        // Metodologías Ágiles
        [{ name: "Scrum" }],
      ]
      
} 

const reducer = (state = initialStore, action) => {
          switch (action.type) {
              case CHANGE_LANGUAGE:
                  return {...state, language: action.payload}
              default:
                return {...state};
                  
          }
}
export default reducer;
