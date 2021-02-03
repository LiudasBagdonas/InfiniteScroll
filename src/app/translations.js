const translations = {
    en: {
        header: {
            profession: { title: 'PROGRAMMER' }
        },
        main: {
            links: {
                title: 'LINKS',
                text: ''
            },
            about: {
                title: 'ABOUT ME',
                text: "After graduating university in 2013 I started working as bartender and I did that till the beginning of last year. But few years ago I got interested in web development and decided to change my qualification. I started learning HTML/CSS languages, later JavaScript and Git version control system. After two years of self-teaching, I signed up for intensive Full-Stack studies at CodeAcademy. Now, six months later, I am looking for my first job as a programmer and opportunity to take roots in IT industry. Also this January I started React.js framework course and on parallel I haven't left behind self-teaching by using most popular programing tools."

            },
            education: {
                title: 'EDUCATION',
                schools: [
                    { school: 'CodeAcademy', year: '2021-present', degree: 'React.js' },
                    { school: 'CodeAcademy', year: '2020-2020', degree: 'Full-Stack(PHP & JavaScript)' },
                    { school: 'Lithuanian University of Educological Science', year: '2015-2017', degree: 'Master of Philosophy' },
                    { school: 'Lithuanian University of Educological Science', year: '2009-2013', degree: 'Bachelor of Philosophy' },
                ]
            },
            personalSkills: {
                title: 'PERSONAL SKILLS',
                pills: [
                    { title: 'TEAMWORK', color: 'green' },
                    { title: 'ORGANIZATION', color: 'green' },
                    { title: 'RESPONSIBILITY', color: 'green' },
                    { title: 'COMMUNICATION', color: 'yellow' },
                ]
            },
            technicalSkills: {
                title: 'TECHNICAL SKILLS',
                pills: [
                    { title: 'HTML', color: 'green' },
                    { title: 'CSS', color: 'green' },
                    { title: 'JAVASCRIPT', color: 'yellow' },
                    { title: 'PHP', color: 'yellow' },
                    { title: 'MySQL', color: 'red' },
                    { title: 'REACT.JS', color: 'red' }
                ]
            },
            workExperience: {
                title: 'WORK EXPERIENCE',
                positions: [
                    {
                        title: 'BARMAN/ADMINISTRATOR',
                        company: 'Mr. Pub',
                        year: '2014-2020',
                        text: 'When Muzikos Rūsys owners opened new pub, I was asked to become its administrator. New responsibilities were added to existing ones, such as – ordering and receiving supplies, accepting registrations, solving technical problems, and selecting new employees.',
                        list: []
                    },
                    {
                        title: 'BARMAN',
                        company: 'Muzikos Rūsys/Variokas',
                        year: '2013-2018',
                        text: "In Muzikos Rūsys I was responsible for keeping bar clean, solving conflicts and unexpected problems, instructing, and training new employees and of course – serving customers. Few years later bar changed name to “Variokas“, where I continued to work with same responsibilities.",
                        list: []
                    }
                ]
            }
        },
        footer: [
            {
                title: 'ADDRESS',
                values: [
                    {
                        text: "",
                        link: []
                    },
                    {
                        text: "Vilnius, Lithuania",
                        link: []
                    }
                ]
            },
            {
                title: 'CONTACTS',
                values: [
                    {
                        text: '',
                        link: [{
                            text: '+37062940195',
                            href: "tel:+3762940195",
                            target: "",
                            className: "contact-phone"
                        }]
                    },
                    {
                        text: '',
                        link: [{
                            text: 'liudasbagd@gmail.com',
                            href: "mailto:liudasbagd@gmail.com",
                            target: "",
                            className: "contact-email"
                        }]
                    }
                ]
            },
            {
                title: "SOCIAL",
                values: [
                    {
                        text: '',
                        link: [{
                            text: 'LINKEDIN/liudas-bagdonas',
                            href: "http://linkedin.com/in/liudas-bagdonas",
                            target: "_blank",
                            className: "social-link"
                        }]
                    },
                    {
                        text: '',
                        link: [{
                                text: 'GITHUB/LiudasBagdonas',
                            href: "https://github.com/LiudasBagdonas",
                            target: "_blank",
                            className: "social-link"
                        }]
                    }
                ]
            }

        ]
    },
    lt: {
        header: {
            profession: { title: 'PROGRAMUOTOJAS' }
        },
        main: {
            links: {
                title: 'NUORODOS',
                text: ''
            },
            about: {
                title: 'APIE MANE',
                text: "Iš kart po bakalauro studijų baigimo 2013 metais pradėjau dirbti barmenu ir juo dirbau iki pernai metų pradžios. Tačiau prieš keletą metų susidomėjau internetinių puslapių kūrimu ir nusprendžiau keisti profesiją, taigi pradėjau mokintis HTML/CSS kalbų, vėliau ir JavaScript bei Git versijų kontrolės metodų. Po dvejų savarankiško mokymosi metų įstojau į CodeAcademį, kur baigiau Full-Stack kursus. Dabar, po šešių mėnesių intensyvių studijų, ieškau savo pirmojo programuotojo darbo ir galimybės įsitvirtinti IT srityje. Taip pat nesenai pradėjau mokintis React.js karkaso, toliau savarankiškai mokausi naudotis populiariais programavimo įrankiais, bei gilinu jau turimas žinias."

            },
            education: {
                title: 'IŠSILAVINIMAS',
                schools: [
                    { school: 'CodeAcademy', year: '2021-dabar', degree: 'React.js' },
                    { school: 'CodeAcademy', year: '2020-2020', degree: 'Full-Stack(PHP & JavaScript)' },
                    { school: 'Lietuvos Edukologijos Universitetas', year: '2015-2017', degree: 'Filosofijos magistras' },
                    { school: 'Lietuvos Edukologijos Universitetas', year: '2009-2013', degree: 'Filosofijos bakalauras' },
                ]
            },
            personalSkills: {
                title: 'ASMENINIAI ĮGŪDŽIAI',
                pills: [
                    { title: 'KOMANDIŠKUMAS', color: 'green' },
                    { title: 'ORGANIZUOTUMAS', color: 'green' },
                    {title: 'ATSAKINGUMAS', color: 'green'},
                    { title: 'BENDRAVIMAS', color: 'yellow' },
                ]
            },
            technicalSkills: {
                title: 'TECHNINIAI ĮGŪDŽIAI',
                pills: [
                    { title: 'HTML', color: 'green' },
                    { title: 'CSS', color: 'green' },
                    { title: 'JAVASCRIPT', color: 'yellow' },
                    { title: 'PHP', color: 'yellow' },
                    { title: 'MySQL', color: 'red' },
                    { title: 'REACT.JS', color: 'red' }
                ]
            },
            workExperience: {
                title: 'PATIRTIS',
                positions: [
                    {
                        title: 'BARMENAS/ADMINISTRATORIUS',
                        company: 'Mr. Pub',
                        year: '2014-2020',
                        text: 'Muzikos Rūsio savininkams atidarius naują barą man buvo pasiūlyta jį prižiūrėti. Prie buvusių atsakomybių prisidėjo prekių užsakymas ir priėmimas, registracijų priėmimas, techninių problemų sprendimas ir naujokų atranka.',
                        list: []
                    },
                    {
                        title: 'BARMENAS',
                        company: 'Muzikos Rūsys/Variokas',
                        year: '2013-2018',
                        text: "Muzikos Rūsyje buvau atsakingas už švarą ir tvarką baro patalpose, konfliktinių situacijų ir nenumatytų problemų sprendimą, naujokų apmokymą ir žinoma – klientų aptarnavimą. Po keleto metų, baras pakeitė koncepciją ir persivadino į „Variokas“, kuriame ir toliau buvau atsakingas už tuos pačius dalykus.",
                        list: []
                    }
                ]
            }
        },
        footer: [
            {
                title: 'ADRESAS',
                values: [
                    {
                        text: '',
                        link: []
                    },
                    {
                        text: 'Vilnius, Lithuania',
                        link: []
                    }
                ]
            },
            {
                title: 'KONTAKTAI',
                values: [
                    {
                        text: '',
                        link: [{
                            text: '+37062940195',
                            href: "tel:+3762940195",
                            target: "",
                            className: "contact-phone"
                        }]
                    },
                    {
                        text: '',
                        link: [{
                            text: 'liudasbagd@gmail.com',
                            href: "mailto:liudasbagd@gmail.com",
                            target: "",
                            className: "contact-email"
                        }]
                    }
                ]
            },
            {
                title: "NUORODOS",
                values: [
                    {
                        text: '',
                        link: [{
                            text: 'LINKEDIN/liudas-bagdonas',
                            href: "http://linkedin.com/in/liudas-bagdonas",
                            target: "_blank",
                            className: "social-link"
                        }]
                    },
                    {
                        text: '',
                        link: [{
                            text: 'GITHUB/LiudasBagdonas',
                            href: "https://github.com/LiudasBagdonas",
                            target: "_blank",
                            className: "social-link"
                        }]
                    }
                ]
            }

        ]
    },
}

export default translations;