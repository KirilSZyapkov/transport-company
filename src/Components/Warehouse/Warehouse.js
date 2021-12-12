import './Warehouse.css';

function Warehouse() {
    return (
        <section className='warehouse'>
            <article className='warehouse-banner'>
                <img className='warehouse-banner-img' src='/static/logistics.jpg' alt='banner' />
            </article>
            <article className='warehouse-content'>
                <h2 className='warehouse-content-h2'>С повече от 25 години опит в областта на логистиката, Ние сме най-голямата частна, компания в България. Нашата философия винаги е била да се осигури най-високо качество на предлаганите услуги и стремеж да надхвърлим и посрещнем специфичните изисквания на нашите клиенти.</h2>
                <p className='warehouse-content-p'>Всички служители в нашия екип са посветени и отдадени на създаване на дългосрочни взаимоотношения с нашите клиенти. Предлагаме широк обхват от услуги – договорна логистика, услуги с добавена стойност, крос докинг, складиране, стоков контрол, индивидуални IT решения, качествен контрол, и дистрибуция.</p>
                <h1 className='warehouse-content-h1'>Вие можете да се възползвате от:</h1>
                <ul className='warehouse-content-ul'>
                    <li>
                        <h3  className='warehouse-content-ul-h3'>Единствен партньор</h3>
                        <p className='warehouse-content-ul-p'>за всички логистични решения.</p>
                    </li>
                    <li>
                        <h3 className='warehouse-content-ul-h3'>Индивидуални услуги</h3>
                        <p>с разработени по поръчка на клиента и икономически изгодни решения в области като складиране, услуги с добавена стойност и управление на верига за доставка.</p>
                    </li>

                    <li> className='warehouse-content-ul-p'
                        <h3 className='warehouse-content-ul-h3'>Лесен достъп</h3>
                        <p className='warehouse-content-ul-p'>със стратегическо позициониране на логистичните ни центрове около главни пътни артерии.</p>
                    </li>
                    <li>
                        <h3 className='warehouse-content-ul-h3'>Експертни и гъвкави екипи,</h3>
                        <p className='warehouse-content-ul-p'>благодарение на които ще намалите вътрешните си разходи като ни възложите логистичните си операции.</p>
                    </li>
                    <li>
                        <h3 className='warehouse-content-ul-h3'>Пълна проследяемост</h3>
                        <p className='warehouse-content-ul-p'>с високотехнологични системи за складово управление, позволяващи детайлна проследяемост и движение на стоките и гарантиран пълен контрол върху всички дейности.</p>
                    </li>
                    <li>
                        <h3 className='warehouse-content-ul-h3'>IT интеграция</h3>
                        <p className='warehouse-content-ul-p'>между Вашите вътрешни IT-системи и нашата система за складово управление / ERP / (EDI – обмен на електронни данни).</p>
                    </li>
                    <li>
                        <h3 className='warehouse-content-ul-h3'>IT решения</h3>
                        <p className='warehouse-content-ul-p'>позволяващи индивидуални анализи, web базирани (онлайн) справки, измерване и отчитане на ключови показатели за ефективност (KPI).</p>
                    </li>
                    <li>
                        <h3 className='warehouse-content-ul-h3'>Помагаме за повишаване</h3>
                        <p className='warehouse-content-ul-p'>на ефективността върху процесите на нашите клиенти като използваме програми за управление на качеството.</p>
                    </li>

                </ul>
                <h2 className='warehouse-content-h2'>Ние сме надежден партньор на фирми в следните индустрии: онлайн търговия, търговия на едро и дребно, бързо оборотни стоки, мода и електроника.</h2>
            </article>
        </section>
    );
}

export default Warehouse;