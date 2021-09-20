// config.js
module.exports = {
    github: {
        username: 'raymondnkosi', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'raymondnkosi',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://c-mple.com',
        phone: '+27 (0)76 670 3533',
        email: 'raymond@cmplesolutions.com'
    },
    skills: [
        'C++',
        'HTML',
        'CSS',
        'Javascript',
        'React.js',
        'Node.js',
        'Angular',
        'Ionic',
        'MySQL',
        'Bootstrap',
    ],
    experiences: [
        { 
            company: 'Cpeewe Consulting Services',
            position: 'Senior Software Developer & Customer Service Consultant',
            from: 'July 2019',
            to: 'August 2021'
        },
        { 
            company: 'Cmple Solutions',
            position: 'Founder, CEO & Full Stack Developer',
            from: 'June 2017',
            to: 'Present'
        }
    ],
    education: [
        { 
            institution: 'Free Code Camp',
            degree: 'JavaScript Algorithms and Data Structures',
            from: 'April 2020',
            to: 'May 2020'
        },
        { 
            institution: 'Free Code Camp',
            degree: 'Responsive Web Design',
            from: 'March 2020',
            to: 'April 2020',
        },
        { 
            institution: 'Tshwane University of Technology',
            degree: 'National Diploma: Software Development',
            from: '2019',
            to: '2021'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'raymondnkosi',
        limit: 7 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: 'G-WLLB5E14M6' // Please remove this and use your own tag id
    },
    themeConfig: {
        default: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}