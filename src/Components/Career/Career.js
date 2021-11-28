import './Career.css'

function Career() {
    return (
        <section className='career'>
            <article className='career-banner'>
                <img className='career-banner-img' src='/static/career-page-banner.jpg' alt='career banner' />
            </article>
            <article className='career-banner-intro'>
                <h1 className='career-banner-intro-h1' >
                    Да преобърнем Вашата перспектива – Харесваме това, което работим
                </h1>
                <p className='career-banner-intro-p' >Да, и ще Ви приветстваме да бъдете един от нас, защото ние приобщаваме и сме фокусирани върху потенциала. Ние вярваме, че делегирането на отговорности работи по-добре, отколкото микро-управлението. Имаме изградена култура и ясни очаквания. Нашият предприемачески дух ни кара да ценим най-много автентичността и проактивността.</p>
                <p className='career-banner-intro-p' >Нашите екипи са смесица от хора с различни биографии, инициативни личности с творческа нагласа, свързани чрез взаимна подкрепа, позитивно отношение и следващи общи принципи.</p>
            </article>
            <article className='career-banner-offer'>
                <div className='career-banner-offer-container'>
                    <h1 className='career-banner-offer-h1'>Ние съзнаваме, че изискваме много, но сме ангажирани да даваме много повече.</h1>
                    <h1 className='career-banner-offer-h1'>Предлагаме Ви истинска кариера:</h1>
                    <ul className='career-banner-offer-ul'>
                        <li>В която ще се ползвате с доверие, уважение и ще бъдете ценени,</li>
                        <li>В която ще комуникирате свободно и честно с Вашия мениджър,</li>
                        <li>В която ентусиазмът ще бъде движещата Ви сила,</li>
                        <li>В която Вашата инициатива се цени и идеите Ви могат да се превърнат в проекти,</li>
                        <li>Която Ви помага да израствате и да се учите непрестанно,</li>
                        <li>Която Ви помага да дадете своя принос към обществото.</li>
                    </ul>
                </div>
            </article>
            <article className='career-banner-values'>
                <div className='career-banner-values-card-V'>
                    <img src='/static/values-V.png' alt='logo' />
                    <p>Ценим честната, открита и директна комуникация.</p>
                </div>
                <div className='career-banner-values-card-A'>
                    <img src='/static/values-A.png' alt='logo' />
                    <p>Насърчаваме нашите служители да бъдат инициативни.</p>
                </div>
                <div className='career-banner-values-card-L'>
                    <img src='/static/values-L.png' alt='logo' />
                    <p>Ценим доверието, лоялността и уважението между нас и към нашите партньори.</p>
                </div>
                <div className='career-banner-values-card-U'>
                    <img src='/static/values-U.png' alt='logo' />
                    <p>Харесваме това, което работим.</p>
                </div>
                <div className='career-banner-values-card-E'>
                    <img src='/static/values-E.png' alt='logo' />
                    <p>Грижим се за професионалното развитие на нашите служители.</p>
                </div>
                <div className='career-banner-values-card-S'>
                    <img src='/static/values-S.png' alt='logo' />
                    <p>Социално отговорни сме към обществото и околната среда.</p>
                </div>
            </article>
            <article className='career-look-inside'>
                <div>
                    <h1>Поглед отвътре</h1>
                </div>
                <div>
                    <i class="fas fa-user"></i>
                    <p>82500 employees</p>
                </div>
                <div>
                    <i class="fas fa-map-marker-alt"></i>
                    <p>150 countries connected</p>
                </div>
            </article>
        </section>
    );
}

export default Career;