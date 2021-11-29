import './RoadTransport.css';

function RoadTransport() {
    return (
        <section className='road-transport'>
            <div className='road-transport-banner'>
                <img className='road-transport-img' src='/static/road-transport-banner.jpg' alt='banner' />
            </div>
            <div className='road-transport-h1-h1'>
                <h1 className='road-transport-h1'>Сухопътни автомобилни транспортни решения съобразно нуждите на Вашия бизнес</h1>
            </div>
            <div className='road-transport-list'>
                <div className='road-transport-card'>
                    <div className='road-transport-i'>
                        <i className="far fa-clock"></i>
                    </div>
                    <h2 className='road-transport-card-h2'>Навременна доставка</h2>
                    <p className='road-transport-card-p'>
                        Веригите на доставка изпитват натиска на крайния потребител – да получи необходимия продукт в точния момент и нито минута по-късно.
                    </p>
                    <p className='road-transport-card-p'>Разбираме това и търсим решения за нашите клиенти, в предизвикателството да намерят ефективни начини за доставка на продуктите си на пазара.</p>
                    <p className='road-transport-card-p'>Дългогодишната ни експертиза и гъвкавост ни позволяват да оперираме успешно на множество различни пазари. Приоритет за нас са нуждите на нашите клиенти.</p>
                </div>
                <div className='road-transport-card'>
                    <div className='road-transport-i'>
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <h2 className='road-transport-card-h2'>Сигурност и надеждност</h2>
                    <p className='road-transport-card-p'>
                        Доверието на нашите клиенти е в основата на нашия начин на работа. Ключът към спечелването на това доверие е в осигуряването на невредими, сигурни и съобразени с изискванията доставки.
                    </p>
                    <p className='road-transport-card-p'>Независимо от вида на стоките (конвенционални или опасни товари), от местните или международните разпоредби (на ЕС или извън него), ние съчетаваме разбирането на изискванията с професионалния опит и екологичната ориентация, за да осигурим подходящи сухопътни автомобилни транспортни решения.</p>
                </div>
                <div className='road-transport-card'>
                    <div className='road-transport-i'>
                    <i className="fas fa-percent"></i>
                    </div>
                    <h2 className='road-transport-card-h2'>Намаляване на разходите</h2>
                    <p className='road-transport-card-p'>
                        За нас е важно да развиваме устойчив бизнес,да намираме решения за по-добро използване на нашите ресурси и за оптимизиране на разходите по цялата верига на доставка: използване на икономически ефективно оборудване, подобряване на маршрутното планиране, интегриране на нови форми на превоз, опростени вътрешни процеси и иновации.
                    </p>

                </div>
                <div className='road-transport-card'>
                    <div className='road-transport-i'>
                    <i className="far fa-thumbs-up"></i>
                    </div>
                    <h2 className='road-transport-card-h2'>Просто и лесно</h2>
                    <p className='road-transport-card-p'>
                        Целта ни е да помагаме на нашите клиентите да опростят логистичните си дейности, разчитайки на:
                    </p>
                    <p className='road-transport-card-p'>Интегриран сухопътен транспорт, възможност за избор и съчетание на различни видове услуги за превоз.</p>
                    <p className='road-transport-card-p'>Една точка за контакт при превоз в малки, по-големи или контитентални райони.</p>
                    <p className='road-transport-card-p'>Teхнология, конфигурирана към пригодност за уникални или специфични клиентски изисквания и интеграция със съществуващи системи.</p>
                </div>
            </div>
        </section>
    );
}

export default RoadTransport;