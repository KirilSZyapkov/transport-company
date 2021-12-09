import './AirTransport.css';

function AirTransport() {
    return (
        <section className='air-tranport-container'>
            <article className='air-tranport-banner'>
                <img className='air-tranport-banner-img' src='/static/transport-banner-two.jpg' alt='sea-banner' />
            </article>
            <article className='air-tranport-section-one'>
                <h1 className='air-tranport-section-one-h1'>Висока скорост при доставките</h1>
                <p className='air-tranport-section-one-p'>Очакванията на дългогодишните ни партньори за по-бързи и нестандартни транспортни решения, изпълнени по нашите стандарти ни убеди да стартираме най-новия сервиз в портфолиото Ни – ВЪЗДУШЕН ТРАНСПОРТ.</p>
                <p className='air-tranport-section-one-p'>Като събрахме в едно стремежа си към усъвършенстване, страстта към иновации и професионализма на утвърдени в бранша специалисти създадохме своето Въздушно звено.</p>
                <p className='air-tranport-section-one-p'>За нас е професионална гордост да предоставим нови решения за ускоряване на бизнеса на нашите клиенти, съобразени с всички изисквания, като започнем от тези за минимално транзитно време и завършим с глобално покритие без времеви и географски ограничения.</p>
                <p className='air-tranport-section-one-p'>Към всички наши въздушни решения можем да добавим и митническо представителство и консултации, складиране и складови операции, стандартен и транспорт под митнически контрол, карго застраховка и всички допълващи международния транспорт услуги, с което пестим ценно за вас време.</p>
            </article>
            <article className='air-tranport-section-two'>
                <h1 className='air-tranport-section-two-h1'>Предимства от работата с нас:</h1>
                <ul className='air-tranport-section-two-ul'>
                    <li>Солидна експертиза екип от професионалисти с 10 и повече години опит в сферата на въздушите превози;</li>
                    <li>Конкурентни цени
                        по износ и внос, базирани на утвърдени партньорства с водещи въздушни превозвачи и надеждни агенти в цял свят;</li>
                    <li>Прозрачност на разходите
                        без необявени разходи и допълнителни такси;</li>
                    <li>Богат избор
                        на сервизи и транспортни решения за всяка конкретна пратка;</li>
                    <li>Обхват на въздушните услуги
                        от стандартен вариант летище-летище до експресна доставка врата-врата без географски и времеви ограничения.</li>
                </ul>

            </article>
            <article className='air-tranport-section-three'>
                <h1 className='air-tranport-section-three-h1'>Покритие на сервиза</h1>
                <div className='air-tranport-section-three-div-container'>
                    <div className='air-tranport-section-three-div-container-div'>
                        <h2 className='air-tranport-section-three-div-container-div-h2 first'>193/195</h2>
                        <p className='air-tranport-section-three-div-container-div-p'>ДЪРЖАВИ</p>
                    </div>
                    <div className='air-tranport-section-three-div-container-div'>
                        <h2 className='air-tranport-section-three-div-container-div-h2 second'>920+</h2>
                        <p className='air-tranport-section-three-div-container-div-p'>ЛЕТИЩА</p>
                    </div>
                    <div className='air-tranport-section-three-div-container-div'>
                        <h2 className='air-tranport-section-three-div-container-div-h2 third'>6500+</h2>
                        <p className='air-tranport-section-three-div-container-div-p'>ПАРТНЬОРИ ПО СВЕТА</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default AirTransport;