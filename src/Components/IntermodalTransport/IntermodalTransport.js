import './IntermodalTransport.css';

function IntermodalTransport() {
    return (
        <section>
            <article className='intermodal-tranport-green'>
                <div className='intermodal-tranport-green-text-container'>
                    <h1 className='intermodal-tranport-green-text-container-h1'>Нашия стремеж към зелена логистика</h1>
                    <p className='intermodal-tranport-green-text-container-p' >Ние осъзнаваме и разбираме своята отговорност към обществото по отношение на експлоатацията на тежкотоварен автомобилен транспорт. В тази връзка ние предприехме решение, относно развитието на интермодални услуги с цел намаляването на вредното въздействие на сухопътните превози. Стартирайки от нула нашата цел е за срок от 5 години да прехвърлим 20% от текущия ни сухопътен трафик на интермодален такъв.</p>
                    <p className='intermodal-tranport-green-text-container-p'>За тази цел от 2013 г. започнахме да осъществяваме програма за развитие на интермодални услуги от България и Румъния за Западна Европа, като първият ни приложен проект бе за доставка на стоки до Великобритания. Проекта бе осъществен с подкрепата на INEA по програма Марк О‘Поло.</p>
                    <p className='intermodal-tranport-green-text-container-p'>В последствие обхвата на интермодалните ни услуги бе разширен ,като включихме и трафика от и до Белгия, Холандия, Рурската област на Германия, а също и големи части от северна Франция.</p>
                </div>
                <img className='intermodal-tranport-green-img' src='/static/green_intermodal.jpg' alt='green-intermodal' />
            </article>
            <article className='intermodal-tranport-benefits'>
                <div className='intermodal-tranport-benefits-head'>
                    <h1 className='intermodal-tranport-benefits-head-h1'>Интермодалните предимства</h1>
                    <p className='intermodal-tranport-benefits-head-p'>Освен екологичен ефект Интермодалните услуги предоставят и други предимства при ползването им като:</p>
                </div>
                <div className='intermodal-tranport-benefits-body'>
                    <div className='intermodal-tranport-benefits-body-stamp'>
                        <img className='intermodal-tranport-benefits-body-img' src='/static/stamp.png' alt='stamp' />
                    </div>
                    <div className='intermodal-tranport-benefits-body-content'>
                        <div className='intermodal-tranport-benefits-body-content-token'>
                            <h2>Ценова стабилност</h2>
                            <p>което дава възможност за по-добро планиране на разходите на ползващите интермодални услуги.</p>
                        </div>
                        <div className='intermodal-tranport-benefits-body-content-token'>
                            <h2>По-добра товароносимост</h2>
                            <p>и съответно възможност за превоз на по-тежки товари в сравнение с автомобилния транспорт.</p>
                        </div>
                        <div className='intermodal-tranport-benefits-body-content-token'>
                            <h2>Сигурни и надеждни</h2>
                        </div>
                    </div>
                    <div className='intermodal-tranport-benefits-body-content'>
                        <div className='intermodal-tranport-benefits-body-content-token'>
                            <h2>По-добра възможност</h2>
                            <p>за планиране на доставките, поради факта че се работи по разписaние за движение на влаковете.</p>
                        </div>
                        <div className='intermodal-tranport-benefits-body-content-token'>
                            <h2>Улеснение за ADR превозите</h2>
                            <p>(опростяване на транспортната документация)</p>
                        </div>
                        <div className='intermodal-tranport-benefits-body-content-token'>
                            <h2>Щадяща околната среда алтернатива</h2>
                        </div>
                    </div>
                    <div></div>
                </div>

            </article>
        </section>
    );
}

export default IntermodalTransport;