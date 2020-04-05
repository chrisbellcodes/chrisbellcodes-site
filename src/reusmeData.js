const resumeData = {
    skills: {
        proficient: ['JavaScript', 'React.JS', 'Redux', 'Node.JS', 'Express', 'MongoDB', 'Mongoose' ,'Ruby', 'Rails', 'Git', 'HTML', 'CSS', 'SASS', 'PostgreSQL'],
        exposure: ['Docker', 'Java', 'Jest']
    },
    projects: [
        {
            name: 'Give it Up App',
            description: 'Users give up a vice (1x per month) and donate cost to arts education',
            details: [
                'Integrated REST API using Rails to handle requests for user profiles, subscriptions, and vice list',
                'Created custom single-factor authentication using BCyrpt’s hashing function to store encrypted passwords',
                'Used JSON Web Token to authorize API endpoints for individual user information',
                'Built dynamic UI with React / Redux to allow users to select vices to donate, add and remove vices from cart, and view past subscriptions'
            ],
            tech: [
                'Rails',
                'React',
                'Bootstrap'
            ]
        },
        {
            name: 'DiNet App',
            description: 'The “Meetup” app for dinner parties',
            details: [
                'Built responsive design using Bootstrap to display parties user is hosting or attending', 
                'Used Rails’ self-joining association feature to store all users in a single database model, but differentiate users who are hosting a party from users who are attending a party',
                'Implemented combination of Bcrypt and sessions to create secure login for users to view their unique party information'
            ],
            tech: [
                'Rails'
            ]
        }
    ],
    education: [{
        school: 'The Flatiron School',
        location: 'New York, NY',
        endDate: '2019',
        studies: 'Full Stack Web Development, Ruby on Rails and JavaScript Immersive Program'
    },
    {
        school: 'Valdosta State University',
        location: 'Valdosta, GA',
        endDate: '2006',
        studies: 'Bachelor of Fine Arts, Theatre'
    }],
    work: [{
        company: 'Stamboulie Consulting',
        location: 'New York, NY',
        startDate: '2017',
        endDate: '2020',
        roles: [
            {
                title: 'Technology / Operations Manager',
                startDate: '2017',
                endDate: '2020',
                tasks: ['Strategized and executed overhaul of company website. Debugged source code of pre-existing site to access and migrate content', 'Automated workflows between website, CMS, appointment, payment, bookkeeping, and email marketing systems']
            }
        ]
    },
    {
        company: 'Developing Artists Theater Company',
        location: 'New York, NY',
        startDate: '2015',
        endDate: '2017',
        roles: [
            {
                title: 'Business Manager',
                startDate: '2015',
                endDate: '2017',
                tasks: ['Redesigned company logo and revamped mission statement with executive team to improve brand communication', 'Generated approximately 15% of overall annual budget through orchestration of annual gala']
            }
        ]
    },
    {
        company: 'The One Club for Creativity (Advertising and design industry association)',
        location: 'New York, NY',
        startDate: '2009',
        endDate: '2015',
        roles: [
            {
                title: 'Executive Producer',
                startDate: '2014',
                endDate: '2015',
                tasks: ['Oversaw production of signature advertising and design industry events One Show Awards and Creative Week. Managed budgets of $1.5 million', 'Led tech and creative teams in developing entry submission website, entry processing, and judging software, improving user experience and reducing contractor overtime costs']
            },
            {
                title: 'Senior Producer',
                startDate: '2012',
                endDate: '2014',
                tasks: ['Secured sponsorship through pitches and relationship building that covered 80-100% of event expenses']
            },
            {
                title: 'Producer / Community Manager',
                startDate: '2009',
                endDate: '2012',
                tasks: ['Developed and deployed social media strategy across all lines of business, resulting in 40,000+ new followers']
            },
        ]
    }],
    freelance: [{
        company: 'Grey Advertising',
        location: 'New York, NY',
        startDate: '2017',
        endDate: '2020',
        roles: [
            {
                title: '',
                startDate: '2017',
                endDate: '2020',
                tasks: []
            }
        ]
    }],
    affiliations: [{
        name: 'Out in Tech',
        startDate: '2017',
        endDate: 'Present'
    },{
        name: 'StartOut',
        startDate: '2017',
        endDate: 'Present'
    }]
}

export default resumeData