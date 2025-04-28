export const PROYECTS = {
    "en": [
        {
            id: 1,
            title: "Ragazzi Board",
            img: "/proyects/ragazzi.webp",
            description: [
                "An application that allows you to manage invoice and service due dates throughout the month in a table. Using a form, invoices are uploaded according to their source, category, amount, and due date. This table, sorted by date, allows you to edit, delete, or confirm the payment (the app is not a wallet that allows payments, it only tracks billing). Another table, used as a history, records the invoices paid throughout each month. A calculator and search filters are included.",
                "The client needed to keep track of due dates from four different sources so they wouldn't forget to make payments. The sources are personal, work, and family. Each one provides different services, so the form must load the corresponding invoices for each source. Each due date in the table is identified by a color based on its source, as is the search filter.",
                "Originally created with vanilla JavaScript and Firebase, then enhanced with Nextjs and Supabase"],
            github: "sd",
            link: "sd"
        },
        {
            id: 2,
            title: "RM Photo",
            img: "/proyects/rodrigo.webp",
            description: [
                "Portfolio for a photographer and content creator client. It includes a gallery of all his work, as well as videos for social media. A description of each of his services. Connection to the Kuula API to view 360º videos.",
                "Astro was used because it is fast for static pages of this style. Each photo was optimized so that its size wouldn't affect page loading. Lazy-loading was also used to load images as they entered the screen. Lenis was used for smooth scrolling in page navigation."],
            github: "sd",
            link: "sd"
        },
        {
            id: 3,
            title: "Punto Alem",
            img: "/proyects/alem.webp",
            description: [
                "Landing page for an event venue. Description of the events and services offered. Photographic display of the venue, various events, as well as details of each dish and drink presented. With a contact form to schedule an interview, as well as shortcuts to all social media channels. Map to find the location.",
                "Astro was used because it's fast for static pages of this style. Each photo was optimized so their size wouldn't affect page loading. Lazy-loading was also used to load images as they appear on the screen. Lenis for smooth scrolling in page navigation."
            ],
            github: "sd",
            link: "sd"
        },
        {
            id: 4,
            title: "DHM Wallet",
            img: "/proyects/dhm.webp",
            description: [
                "Virtual wallet. It simulates only the front-end part. It allows us to load money, make transfers, pay for services, and much more. With a connection to Swagger through its API, we can log in to our account, or sig-in, and monitor transactions and activities. We can load or delete up to 10 credit cards and choose from a list of services to pay for. We will have access to our account, where we can edit our profile.",
                "Using Nextjs and Swagger, we simulate a virtual wallet. It has activity and card filters, as well as a transaction history.",
                "Final project for the DH (Digital House) Frontend Specialist certification."
            ],
            github: "sd",
            link: "sd"
        },
    ],
    "es": [
        {
            id: 1,
            title: "Ragazzi Board",
            img: "/proyects/ragazzi.webp",
            description: [
                "Aplicación que permite gestionar en una tabla los vencimientos de facturas y servicios que se tienen a lo largo del mes. Mediante un formulario, se cargan las facturas según su origen, rubro, monto y vencimiento. Dicha tabla ordenada por fecha, permite editar, eliminar o acentar dicho pago (la app no es una billetera virtual que permite realizar el pago, solo hace seguimiento de la facturación). En otra Tabla, a modo de historial, queda constancia de las facturas pagadas a lo largo de cada mes. Incluidas calculadora y filtros de búsqueda.",
                "El cliente necesitaba mantener el control de los vencimientos de cuatro fuentes distintas para no olvidarse de realizar los pagos. Las fuentes son de ámbito personal, laboral y familiar. Cada una con servicios distintos, por lo que el formulario, debe de cargar los correspondientes a cada fuente. Cada vencimiento en la tabla, se identifica con un color segun su fuente, al igual que el filtro de búsqueda.",
                "Originalmente hecha con vanilla JavaScript y Firebase, luego mejorada con Nextjs y Supabase"
            ],
            github: "sd",
            link: "sd"
        },
        {
            id: 2,
            title: "RM Photo",
            img: "/proyects/rodrigo.webp",
            description: [
                "Portfolio para un cliente fotógrafo y creador de contenido. Incluye una galeria de todos sus trabajos, asi como tambien videos para redes sociales. Una descripción de cada uno de sus servicios. Conexión a la API de de Kuula para visualizar videos 360º",
                "Se utilizó Astro ya que es rápido para páginas estáticas de este estilo. Se optimizaron cada una de las fotos, para que su peso no perjudique la carga de la página. También se utilizó el lazy-loading para la carga de imágenes a medida que ban entrando en pantalla. Lenis para el scroll suave en la navegacion de la página."
            ],
            github: "sd",
            link: "sd"
        },
        {
            id: 3,
            title: "Punto Alem",
            img: "/proyects/alem.webp",
            description: [
                "Landing Page para un salón de eventos. Descripción de los eventos y servicios ofrecidos. Muestra fotográfica del lugar, de distintos eventos, asi como del detalle en cada plato y bebida presentadas. Con un formulario de contacto para agendar una entrevista, asi como accesos directos a todas sus redes sociales. Mapa para ubicar la locación.",
                "Se utilizó Astro ya que es rápido para páginas estáticas de este estilo. Se optimizaron cada una de las fotos, para que su peso no perjudique la carga de la página. También se utilizó el lazy-loading para la carga de imágenes a medida que ban entrando en pantalla. Lenis para el scroll suave en la navegacion de la página."
            ],
            github: "sd",
            link: "sd"
        },
        {
            id: 4,
            title: "DHM Wallet",
            img: "/proyects/dhm.webp",
            description: [
                "Billetera virtual. Simula sólo la parte del frontend. Nos permite cargar dinero, hacer trasnferencias, pagos de servicios, y mucho mas. Con una conexión a Swagger mediante su API, podremos loguearnos en nuestra cuenta, y tener el control de movimientos y actividades. Podremos cargar o eliminar hasta un total de 10 trajetas de crédito y podremos elegir de entre una lista de servicios a pagar. Tendremos acceso a nuestra cuenta, donde podremos editar nuestro perfil",
                "Utilizando Nextjs y Swagger, simulamos una billetera virtual. Cuenta con filtro de actividades y tarjetas. Asi como un historial de movimientos.",
                "Proyecto final para la certificación de Especialista en Frontend de DH(Digital House)."
            ],
            github: "sd",
            link: "sd"
        },
    ]
}