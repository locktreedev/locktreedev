const languagesContainer = document.getElementById('languages');
const languagesHamburgerContainer = document.getElementById('languages-hamburger-menu');
const dynamicLanguageContainers = document.querySelectorAll('[data-translate-key]');

languagesContainer.addEventListener('change', () => {
    translate();
});

languagesHamburgerContainer.addEventListener('change', () => {
    translate();
});

const setLocale = () => {
    let userLocale = new Intl.DateTimeFormat().resolvedOptions().locale;

    if(!userLocale.startsWith('nl')) {
        userLocale = 'eng';
    }

    localStorage.setItem('locale', userLocale);

    return userLocale;
};

const toggleLocale = () => {
    locale = locale === 'eng' ? 'nl' : 'eng';
    localStorage.setItem('locale', locale);
};

const translate = (initialCall = false) => {
    if(!initialCall) {
        toggleLocale();
    }

    languagesContainer.value = locale;
    languagesHamburgerContainer.value = locale;

    dynamicLanguageContainers.forEach(element => {
        element.innerHTML = translations[locale][element.dataset.translateKey];
    });
};

let locale = localStorage.getItem('locale') ?? setLocale();

const translations = {
    nl: {
        aboutTheCompanyLink: 'over het bedrijf',
        ourProjectsLink: 'projecten',
        contactAndFeedbackLink: 'contact',
        selectLanguage: 'selecteer taal:',
        aboutTheCompanyHamburgerLink: 'over het bedrijf',
        ourProjectsHamburgerLink: 'projecten',
        contactAndFeedbackHamburgerLink: 'contact',
        aboutTheCompany: 'over het bedrijf',
        contactAndFeedbackHamburgerLink: 'contact',
        aboutTheCompanyDescription: `<b>LocktreeDev</b> is een <b>eenmanszaak</b> opgericht door <b>Edwin Asselman (Slotboom)</b> 
        en richt zich op het ontwikkelen van <b>websites</b> die bestaande <b>producten en processen verbeteren</b>. 
        Het begon in <b>2021</b> als een <b>concept</b>, onder de naam <b>Locktree JavaScript</b>, waarbij het eerste 
        <b>product</b> werd ontwikkeld: een oplossing om <b>standaard JavaScript-alerts aan te passen</b>.
        Pas in <b>september van 2024</b> is <b>LocktreeDev</b> officieel van start gegaan, tegelijkertijd met de 
        ontwikkeling van LocktreeDev's <b>woningaanbodwebsite</b>, die later dit jaar wordt gelanceerd. 
        Met een solide achtergrond in <b>softwareontwikkeling</b> - inclusief een <b>afgeronde opleiding</b> en 
        <b>diploma</b> behaald in <b>2024</b> - combineert <b>Edwin</b> technische <b>expertise</b> 
        met een passie voor <b>innovatie</b>.`,
        ourProjects: 'projecten',
        firstProjectTitle: 'woningaanbodwebsite',
        firstProjectDescription: `<b>Ons efficiënte woningaanbodplatform</b> matcht <b>huurders</b> en <b>verhuurders</b> 
        op basis van <b>woonwensen</b> en <b>profielvoorkeuren</b>, zodat de <b>beste woning</b> bij de 
        <b>juiste huurder</b> terechtkomt.`,
        firstProjectReleaseDate: 'Verwachte uitbrengdatum: april 2025',
        moreComingSoon: 'binnenkort meer...',
        contactAndFeedback: 'contact & feedback',
        contactAndFeedbackDescription: 'Vul het formulier in en we nemen zo snel mogelijk contact met je op via het door jou opgegeven e-mailadres.',
        contactAndFeedbackName: 'Volledige naam:',
        contactAndFeedbackEmail: 'Emailadres:',
        contactAndFeedbackMessage: 'Bericht:',
        contactAndFeedbackSend: 'Versturen'
    },
    eng: {
        aboutTheCompanyLink: 'about the company',
        ourProjectsLink: 'projects',
        contactAndFeedbackLink: 'contact',
        selectLanguage: 'select language:',
        aboutTheCompanyHamburgerLink: 'about the company',
        ourProjectsHamburgerLink: 'projects',
        contactAndFeedbackHamburgerLink: 'contact',
        aboutTheCompany: 'about the company',
        aboutTheCompanyDescription: `<b>LocktreeDev</b> is a <b>sole proprietorship</b> founded by <b>Edwin Asselman (Slotboom)</b>  
        and focuses on developing <b>websites</b> that improve existing <b>products and processes</b>.  
        It started in <b>2021</b> as a <b>concept</b> under the name <b>Locktree JavaScript</b>,  
        where the first <b>product</b> was developed: a solution to <b>customize standard JavaScript alerts</b>.  
        It wasn't until <b>September 2024</b> that <b>LocktreeDev</b> officially launched, coinciding with the  
        development of LocktreeDev's <b>housing listing website</b>, which will be released later this year.  
        With a solid background in <b>software development</b> - including a <b>completed education</b> and  
        <b>degree</b> obtained in <b>2024</b> - <b>Edwin</b> combines technical <b>expertise</b>  
        with a passion for <b>innovation</b>.`,
        ourProjects: 'projects',
        firstProjectTitle: 'housing listing website',
        firstProjectDescription: `<b>LocktreeDev's efficient housing listing platform</b> matches <b>tenants</b> and <b>landlords</b>  
        based on <b>housing preferences</b> and <b>profile criteria</b>, ensuring the <b>best home</b>  
        reaches the <b>right tenant</b>.`,
        firstProjectReleaseDate: 'Expected release date: April 2025',
        moreComingSoon: 'more coming soon...',
        contactAndFeedback: 'contact & feedback',
        contactAndFeedbackDescription: 'Fill out the form, and we will get in touch with you as soon as possible via the email address you provided.',
        contactAndFeedbackName: 'Full name:',
        contactAndFeedbackEmail: 'Email address:',
        contactAndFeedbackMessage: 'Message:',
        contactAndFeedbackSend: 'Send'
    }
};

translate(true);