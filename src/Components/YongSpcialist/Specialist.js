import './Specialist.css'

function Specialist() {
    return (
        <section className='spetsialist'>

            <article className='spetsialist-img'>
                <img className='spetsialist-img-image' src='/static/young-manager.jpg' alt='img' />
            </article>
            <article className='spetsialist-question'>
                <ul className='spetsialist-question-ul'>
                    <li className='spetsialist-question-li'><i className="fas fa-question"></i><div><h3>Вие имате идеи и искате да бъдат чути?</h3><p>Споделете ги с нас и ние ще се опитаме да съберем всички ресурси за превръщането им в реалност.</p></div></li>
                    <li className='spetsialist-question-li'><i className="fas fa-question"></i><div><h3>Вратите на кабинета на мениджъра Ви плашат?</h3><p>Те не са предвидени да блокират комуникацията. Изкажете се открито в правилния момент и отстояването на мнението Ви ще бъде истински оценено.</p></div></li>
                    <li className='spetsialist-question-li'><i className="fas fa-question"></i><div><h3>Вие не искате да станете просто брънка от веригата?</h3><p>Страхотно! Ние също не искаме това. Дайте израз на страстта си в ежедневната работа. Различието е онова, което ни прави силни. Различните хора, различните хобита, различните личности ни позволяват да бъдем уникални като екип и по-силни като компания.</p></div></li>
                    <li className='spetsialist-question-li'><i className="fas fa-question"></i><div><h3>Не се задоволявате с по-малко? Искате ли да се учите и развивате?</h3><p>Израствайте заедно с нас! Вие се присъединявате към силна компания в една модерна индустрия. Ние ще Ви помогнем да създадете свой собствен професионален път и ще Ви подкрепяме по него.</p></div></li>
                    <li className='spetsialist-question-li'><i className="fas fa-question"></i><div><h3>Искате ли да оставите следа в компанията</h3><p>Предприемаческите Ви нагласи са ценни за нас. Не е нужно да имате голям план – нужни са мечта, желание и искра.</p></div></li>
                </ul>
            </article>
            <article className='specialist-belive'>
                <h1 className='specialist-belive-h1'>Както казахме, става дума за самите Вас.</h1>
                <p className='specialist-belive-p'>Във всеки момент Вие имате възможност да промените своя професионален път вътре в компанията и да придобиете опит в различните бизнес екипи, или да се присъедините към нашите търговски и административни отдели.</p>
                <h3 className='specialist-belive-h3'>Ние растем и имаме нужда от нови колеги.</h3>
                <p className='specialist-belive-p'>Изпратете ни автобиографията си и в случай, че отговаряте на търсения профил, ще се свържем с вас.</p>
            </article>
        </section>
    );
}

export default Specialist;