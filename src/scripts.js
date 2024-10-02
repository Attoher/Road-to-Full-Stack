window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.style.display = 'none';
    }, 500);
});

const app = new Vue({
    el: '#app',
    data: {
        editIndex: null,
        editedItem: '',
        filter: 'all',
        basicConcepts: [
            { name: 'Internet & Web Protocols (HTTP/ HTTPS, DNS)', checked: false ,isEditing: false },
            { name: 'Version Control (Git, GitHub/ GitLab)', checked: false ,isEditing: false },
            { name: 'Terminal Commands (Unix/ Linux/ Windows)', checked: false ,isEditing: false },
            { name: 'Code Editors (VSCode, Sublime, etc.)', checked: false ,isEditing: false },
            { name: 'Basic Networking Concepts', checked: false ,isEditing: false },
            { name: 'RESTful Services Basics', checked: false ,isEditing: false },
            { name: 'APIs Overview', checked: false ,isEditing: false },
            { name: 'Data Structures (Arrays, Objects, etc.)', checked: false ,isEditing: false },
            { name: 'Algorithms Basics (Sorting, Searching)', checked: false ,isEditing: false }
        ],
        frontendDevelopment: [
            { name: 'HTML5 (Semantic Tags, Forms, Multimedia)', checked: false ,isEditing: false },
            { name: 'CSS3 (Flexbox, Grid, Animations)', checked: false ,isEditing: false },
            { name: 'JavaScript Basics (ES6+ Features)', checked: false ,isEditing: false },
            { name: 'DOM Manipulation', checked: false ,isEditing: false },
            { name: 'JavaScript Frameworks (React.js, Vue.js, Angular)', checked: false ,isEditing: false },
            { name: 'CSS Preprocessors (Sass, LESS)', checked: false ,isEditing: false },
            { name: 'State Management (Redux, Vuex)', checked: false ,isEditing: false },
            { name: 'Responsive Design (Media Queries)', checked: false ,isEditing: false },
            { name: 'Web Accessibility (WCAG)', checked: false ,isEditing: false },
            { name: 'Performance Optimization (Lazy Loading, Code Splitting)', checked: false ,isEditing: false },
            { name: 'Frontend Testing (Jest, Mocha, Cypress)', checked: false ,isEditing: false },
            { name: 'Static Site Generators (Gatsby, Next.js)', checked: false ,isEditing: false },
            { name: 'Progressive Enhancement', checked: false ,isEditing: false }
        ],
        backendDevelopment: [
            { name: 'Node.js & Express', checked: false ,isEditing: false },
            { name: 'RESTful APIs & CRUD Operations', checked: false ,isEditing: false },
            { name: 'GraphQL Basics', checked: false ,isEditing: false },
            { name: 'Authentication & Authorization (JWT, OAuth)', checked: false ,isEditing: false },
            { name: 'Databases (SQL, NoSQL)', checked: false ,isEditing: false },
            { name: 'NoSQL Databases (MongoDB)', checked: false ,isEditing: false },
            { name: 'ORM/ ODM (Sequelize, Mongoose)', checked: false ,isEditing: false },
            { name: 'Server-side Rendering (SSR)', checked: false ,isEditing: false },
            { name: 'Microservices Architecture', checked: false ,isEditing: false },
            { name: 'Caching Strategies (Redis, Memcached)', checked: false ,isEditing: false },
            { name: 'Message Queues (RabbitMQ, Kafka)', checked: false ,isEditing: false }
        ],
        devopsDeployment: [
            { name: 'Web Hosting Platforms (Heroku, Netlify, Vercel)', checked: false ,isEditing: false },
            { name: 'Cloud Services (AWS, GCP, Azure)', checked: false ,isEditing: false },
            { name: 'CI/ CD Tools (Jenkins, CircleCI, GitHub Actions)', checked: false ,isEditing: false },
            { name: 'Docker & Containerization', checked: false ,isEditing: false },
            { name: 'Nginx/ Apache Configuration', checked: false ,isEditing: false },
            { name: 'SSL/ TLS & HTTPS', checked: false ,isEditing: false },
            { name: 'Monitoring Tools (Prometheus, Grafana)', checked: false ,isEditing: false },
            { name: 'Infrastructure as Code (Terraform, Ansible)', checked: false ,isEditing: false },
            { name: 'Serverless Architectures (AWS Lambda, GCP Functions)', checked: false ,isEditing: false },
            { name: 'Logging (ELK Stack)', checked: false ,isEditing: false }
        ],
        testing: [
            { name: 'Frontend Testing (Jest, Cypress)', checked: false ,isEditing: false },
            { name: 'Backend Testing (Mocha, Chai, Postman)', checked: false ,isEditing: false },
            { name: 'End-to-End Testing (Selenium, Cypress)', checked: false ,isEditing: false },
            { name: 'Unit Testing Basics', checked: false ,isEditing: false },
            { name: 'Integration Testing Basics', checked: false ,isEditing: false },
            { name: 'Test-Driven Development (TDD)', checked: false ,isEditing: false },
            { name: 'Behavior-Driven Development (BDD)', checked: false ,isEditing: false },
            { name: 'Performance Testing (JMeter, LoadRunner)', checked: false ,isEditing: false }
        ],
        advancedConcepts: [
            { name: 'Web Sockets (Socket.io)', checked: false ,isEditing: false },
            { name: 'Progressive Web Apps (PWA)', checked: false ,isEditing: false },
            { name: 'WebAssembly Basics', checked: false ,isEditing: false },
            { name: 'Machine Learning Basics for Developers', checked: false ,isEditing: false },
            { name: 'Blockchain Basics', checked: false ,isEditing: false },
            { name: 'Artificial Intelligence Basics', checked: false ,isEditing: false },
            { name: 'Internet of Things (IoT) Basics', checked: false ,isEditing: false },
            { name: 'Mobile App Development Basics (React Native, Flutter)', checked: false ,isEditing: false }
        ],
        buildingProjects: [
            { name: 'Simple Static Websites (HTML/ CSS)', checked: false ,isEditing: false },
            { name: 'Full-stack Web Applications (MERN Stack)', checked: false ,isEditing: false },
            { name: 'Real-time Applications (e.g., Chat App)', checked: false ,isEditing: false },
            { name: 'Deploy Your Projects (Heroku, Netlify)', checked: false ,isEditing: false },
            { name: 'Single Page Applications (SPA)', checked: false ,isEditing: false },
            { name: 'Portfolio Website', checked: false ,isEditing: false },
            { name: 'Personal Projects (Blog, To-Do List)', checked: false ,isEditing: false },
            { name: 'Contribute to Open Source Projects', checked: false ,isEditing: false }
        ],
        continuousLearning: [
            { name: 'Follow Online Communities and Documentation', checked: false ,isEditing: false },
            { name: 'Keep up with New Technologies and Trends', checked: false ,isEditing: false },
            { name: 'Attend Webinars and Meetups', checked: false ,isEditing: false },
            { name: 'Read Tech Blogs and Books', checked: false ,isEditing: false },
            { name: 'Contribute to Open Source', checked: false ,isEditing: false },
            { name: 'Online Courses and Certifications (Udemy, Coursera)', checked: false ,isEditing: false },
            { name: 'Tech Podcasts and YouTube Channels', checked: false ,isEditing: false }
        ]
    },
    computed: {
        filteredBasicConcepts() {
            return this.getFilteredItems(this.basicConcepts);
        },
        filteredFrontendDevelopment() {
            return this.getFilteredItems(this.frontendDevelopment);
        },
        filteredBackendDevelopment() {
            return this.getFilteredItems(this.backendDevelopment);
        },
        filteredDevopsDeployment() {
            return this.getFilteredItems(this.devopsDeployment);
        },
        filteredTesting() {
            return this.getFilteredItems(this.testing);
        },
        filteredAdvancedConcepts() {
            return this.getFilteredItems(this.advancedConcepts);
        },
        filteredBuildingProjects() {
            return this.getFilteredItems(this.buildingProjects);
        },
        filteredContinuousLearning() {
            return this.getFilteredItems(this.continuousLearning);
        }
    },
    methods: {
        addItem(category) {
        const newItem = this[`new${category.charAt(0).toUpperCase() + category.slice(1)}`].trim();
        if (newItem === '') return;
    
        this[`${category}`].push({ name: newItem, checked: false });
        this[`new${category.charAt(0).toUpperCase() + category.slice(1)}`] = '';
        this.saveChecklist();
        },
        deleteItem(category, index) {
            this[category].splice(index, 1);
            this.saveChecklist();
        },
        
        toggleEdit(listName, index) {
            const item = this[listName][index];
            if (item.isEditing) {
                this.saveEdit(listName, index);
            } else {
                this.editedItem = item.name; 
                item.isEditing = true;
                this.editIndex = index;
                this.editingCategory = listName;

                // Fokus pada input
                this.$nextTick(() => {
                    this.$refs[`editInput_${listName}_${index}`].focus();
                });
            }
        },
        cancelEdit(category, index) {
            const item = this[category][index];
            item.isEditing = false;
            this.editedItem = '';
            this.editIndex = null;
            this.editingCategory = '';
        },
        saveEdit(category, index) {
            if (this.editedItem.trim()) {
                this[category][index].name = this.editedItem;
                this[category][index].isEditing = false;
                this.editedItem = '';
                this.editIndex = null;
                this.editingCategory = '';
                this.saveChecklist();
            }
        },
        loadChecklist() {
            const savedChecklist = JSON.parse(localStorage.getItem('checklist'));
            if (savedChecklist) {
                this.basicConcepts = savedChecklist;
            }
        },
        getFilteredItems(list) {
            if (this.filter === 'completed') {
                return list.filter(item => item.checked);
            } else if (this.filter === 'incomplete') {
                return list.filter(item => !item.checked);
            } else {
                return list;
            }
        },
        saveChecklist() {
            localStorage.setItem('checklist', JSON.stringify({
                basicConcepts: this.basicConcepts,
                frontendDevelopment: this.frontendDevelopment,
                backendDevelopment: this.backendDevelopment,
                devopsDeployment: this.devopsDeployment,
                testing: this.testing,
                advancedConcepts: this.advancedConcepts,
                buildingProjects: this.buildingProjects,
                continuousLearning: this.continuousLearning
            }));
            this.updateProgressBars();
        },
        loadChecklist() {
            const checklist = JSON.parse(localStorage.getItem('checklist'));
            if (checklist) {
                this.loadList(this.basicConcepts, checklist.basicConcepts);
                this.loadList(this.frontendDevelopment, checklist.frontendDevelopment);
                this.loadList(this.backendDevelopment, checklist.backendDevelopment);
                this.loadList(this.devopsDeployment, checklist.devopsDeployment);
                this.loadList(this.testing, checklist.testing);
                this.loadList(this.advancedConcepts, checklist.advancedConcepts);
                this.loadList(this.buildingProjects, checklist.buildingProjects);
                this.loadList(this.continuousLearning, checklist.continuousLearning);
            }
            this.updateProgressBars();
        },
        loadList(localList, savedList) {
            if (savedList) {
                localList.forEach((item, index) => {
                    if (savedList[index]) {
                        item.checked = savedList[index].checked;
                    }
                });
            }
        },
        updateProgressBars() {
            this.updateProgressBarForSubMateri(this.basicConcepts, 'basicConceptsProgress');
            this.updateProgressBarForSubMateri(this.frontendDevelopment, 'frontendDevelopmentProgress');
            this.updateProgressBarForSubMateri(this.backendDevelopment, 'backendDevelopmentProgress');
            this.updateProgressBarForSubMateri(this.devopsDeployment, 'devopsDeploymentProgress');
            this.updateProgressBarForSubMateri(this.testing, 'testingProgress');
            this.updateProgressBarForSubMateri(this.advancedConcepts, 'advancedConceptsProgress');
            this.updateProgressBarForSubMateri(this.buildingProjects, 'buildingProjectsProgress');
            this.updateProgressBarForSubMateri(this.continuousLearning, 'continuousLearningProgress');
        },
        updateProgressBarForSubMateri(subMateri, progressBarId) {
            const totalItems = subMateri.length;
            const completedItems = subMateri.filter(item => item.checked).length;
            const progress = (completedItems / totalItems) * 100;
            document.getElementById(progressBarId).style.width = progress + '%';
        }
    },
    created() {
        this.loadChecklist();
    }
});
