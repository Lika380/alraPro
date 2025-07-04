import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import './AccommodationPolicy.css';

const AccommodationPolicy = () => {
  // Scroll to the top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle printing the policy
  const handlePrintPolicy = () => {
    window.print();
  };

  return (
    <div className="policy-container">
      <Header />
      
      <main className="policy-main">
        <div className="policy-header">
          <div className="policy-header-overlay">
            <h1 className="policy-title">Политика конфиденциальности</h1>
            <p className="policy-subtitle">ALRA Eco Village ценит вашу конфиденциальность</p>
          </div>
        </div>
        
        <div className="policy-content">
          <div className="policy-actions">
            <button className="policy-print-btn" onClick={handlePrintPolicy}>
              <span className="policy-print-icon">🖨️</span> Распечатать документ
            </button>
            <div className="policy-last-update">Последнее обновление: 15.04.2025</div>
          </div>
          
          <div className="policy-navigation">
            <div className="policy-sections">
              <section id="introduction" className="policy-section">
                <h2 className="policy-section-title">Договор оказания гостиничных услуг</h2>
                <div className="policy-section-content">
                  <p>
                    
                  1.1. По настоящему договору Исполнитель обязуется оказать комплекс услуг по обеспечению временного проживания Заказчика, а Заказчик обязуется оплатить эти услуги.
1.2. Договор публичной оферты заключается в особом порядке: путем акцепта настоящего Договора, т.е. полным и безоговорочным ответом Заказчика о его принятии. Принятие содержащихся в настоящем Договоре существенных условий равносильно заключению договора на оказание гостиничных услуг. Настоящий Договор является равносильным договору, подписанному сторонами.
1.3. Безусловным принятием (акцептом) условий настоящего Договора является факт внесения предоплаты Заказчиком/Гостем стоимости гостиничных услуг.
1.4. Договор считается заключенным в пользу третьих лиц (далее - «Гость») полностью и частично, в следующих случаях:
- в пользу Гостей частично, если они пользуются гостиничными услугами совместно с Заказчиком,
- в пользу Гостей полностью, если предоставление гостиничных услуг осуществляется по просьбе Заказчика исключительно Гостям без присутствия Заказчика.
При этом Заказчик несет ответственность перед Исполнителем за действия своих Гостей.
1.5. Осуществляя акцепт условий настоящего Договора, Заказчик/Гость подтверждает, что он ознакомлен с условиями настоящего Договора и действующими Правилами проживания в гостинице и пользования гостиничными услугами, размещенными на ресепшн гостиницы (далее- «Отель») и на официальном сайте Отеля _________ (далее- «Сайт»), и безусловно с ними соглашаются.
1.6. Совершая действия по акцепту настоящего Договора, Заказчик подтверждает свою правоспособность и дееспособность, достижение 18 лет, а также законное право Заказчика вступать в договорные отношения с Исполнителем.
1.7. Настоящий Договор размещен (опубликован) для публичного доступа на ресепшн Отеля (в месте оказания услуг) и на Сайте Отеля.


                  </p>
                </div>
              </section>
              
              <section id="information-collection" className="policy-section">
                <h2 className="policy-section-title">2. Порядок бронирования гостиничных услуг</h2>
                <div className="policy-section-content">
                  <p>
                  2.1. Информация об объекте размещения:
Гостиница «Alra»,
Адрес месторасположения: РА, Кындыг, ул. Школьная.
2.2. Режим работы гостиницы - круглосуточно.
2.3. Заезд и регистрация Заказчика/Гостя осуществляется круглосуточно.
2.4. Время заезда в гостиницу 12:00, расчетный час выезда 14:00.
2.5. Гостиничные услуги предоставляются по бронированию или без бронирования (при наличии свободных номеров).
2.6. Существенные условия Договора (сведения о стоимости гостиничных услуг, составе и качестве, категории номера, периоде предоставления гостиничных услуг, согласовываются Сторонами:
- при бронировании - путем заполнения Заказчиком/Гостем формы на Сайте Исполнителя, на сайтах агентов, отправление заполненной формы по электронной почте, получения Заказчиком/Гостем Уведомления о бронировании и осуществления предоплаты стоимости гостиничных услуг;
- без бронирования - путем выставления Исполнителем Гостю счета на оплату и осуществления Гостем предоплаты стоимости гостиничных услуг согласно выставленному счету.
2.7. В случае подтверждения Исполнителем бронирования гостиница ожидает его до расчетного часа дня, следующего за днем запланированного заезда. В случае несвоевременного отказа от бронирования, опоздания или незаезда с Заказчика взимается плата за фактический простой номера (места в номере), но не более чем за сутки. При опоздании более чем на сутки бронирование Исполнителем аннулируется/до определенного часа, установленного исполнителем, в день заезда, после чего договор прекращается.
2.8. Исполнитель вправе отказать от бронирования, если на указанную в заявке дату отсутствуют свободные номера.
2.9. Исполнитель имеет право изменить условия бронирования услуг или приостановить бронирование на определенный период времени, но при этом он обязан направить письменное уведомление Заказчику в срок не позднее чем за 2 рабочих дней до момента ввода в действие новых условий бронирования.

                  </p>
                  <h3 className="policy-subsection-title">3. Обязательства сторон</h3>
                  <p>
                  
3.1. Исполнитель обязуется:
3.1.1. Предоставить Заказчику услуги, предусмотренные настоящим договором, в строгом соответствии с условиями настоящего договора.
3.1.2. Предоставить Заказчику полную и достоверную информацию, а именно:
а) сведения о категории номеров гостиницы и цену номеров (места в номере);
б) перечень услуг, входящих в цену номера (места в номере);
в) сведения о форме и порядке оплаты гостиничных услуг;
г) перечень и цену иных платных услуг, оказываемых исполнителем за отдельную плату, условия их приобретения и оплаты;
д) сведения о форме, условиях и порядке бронирования, а также о порядке отмены бронирования;
е) предельный срок проживания в гостинице, если этот срок установлен исполнителем;
ё) сведения об иных платных услугах, оказываемых в гостинице третьими лицами;
ж) сведения о времени заезда и времени выезда из гостиницы;
з) сведения о правилах проживания в гостинице и пользования гостиничными услугами.
3.2. Исполнитель не вправе без согласия Заказчика выполнять дополнительные услуги за плату.
Заказчик вправе отказаться от оплаты таких услуг.
3.2. Заказчик обязан:
3.2.1. Соблюдать установленный Исполнителем порядок проживания и правила противопожарной безопасности.
3.2.2. Принять и оплатить услуги в полном объеме.
3.2.3. Не передавать ключ от номера и не допускать посторонних лиц в корпус Отеля.
3.2.4. При выходе из номера закрыть окна, краны, выключить свет, бытовые приборы, закрыть номер.
3.2.5. В случае утери или порчи имущества Отеля возместить причиненный Исполнителю реальный ущерб.
3.2.6. Своевременно предоставить все необходимые достоверные сведения (ФИО, паспортные данные, адрес регистрации и фактического проживания, телефон, электронная почта и др.), необходимые Исполнителю для оформления заселения и оперативной связи с Заказчиком/Гостем.
3.2.7. По окончании периода проживания освободить номер до расчетного часа, продление периода проживания производится только при отсутствии брони на данный номер. При наличии свободных номеров, в случае необходимости, гостю может быть предоставлен другой номер.
3.3. Исполнитель имеет право:
3.3.1. Требовать у Заказчика/Гостя при заселении документ, удостоверяющий личность.
3.3.2. Требовать от Заказчика/Гостя соблюдения Правил проживания в гостинице и пользования гостиничными услугами.
3.3.3. Требовать от Заказчика/Гостя оплаты стоимости гостиничных услуг согласно условиям настоящего Договора.
3.3.4. В исключительных случаях заменять номера в Отеле, подтвержденные ранее, на номера той же категории или выше без взимания дополнительной платы.
3.3.5. Посещение номера, в котором проживает Заказчик/Гость без согласования с Заказчиком/Гостем в целях проведения в номере уборки или необходимых технических работ, а также в случае нарушения Заказчиком/Гостем настоящего Договора, Правил проживания в гостинице и пользования гостиничными услугами, общественного порядка.
3.3.6. Привлекать третьи лица для исполнения услуг по настоящему Договору.

                  </p>
                 
                  <h3 className="policy-subsection-title">4. Стоимость услуг и порядок расчетов</h3>
                  <p>
                  4.2. Услуги оплачиваются Заказчиком в момент заключения настоящего договора.
4.3. Оплата производится [наличными денежными средствами Исполнителю/путем перечисления денежных средств на расчетный счет Исполнителя].
4.4. Моментом оплаты считается [момент поступления денежных средств на расчетный счет/в кассу Исполнителя].
4.5. Дополнительные услуги оказываются Исполнителем Заказчику в соответствии с прейскурантом цен и оплачиваются в момент выезда Заказчика из гостиницы.

                  </p>
                </div>
              </section>
              
              <section id="information-usage" className="policy-section">
                <h2 className="policy-section-title">5. Порядок предоставления услуг</h2>
                <div className="policy-section-content">
                  <p>
                  5.1. Качество предоставляемых услуг должно соответствовать условиям настоящего договора и требованиям, обычно предъявляемым к этим услугам.
5.2. Порядок проживания в гостинице устанавливается Исполнителем.
5.3. Исполнитель не отвечает за сохранность вещей Заказчика. В случае обнаружения забытых вещей Исполнитель обязан немедленно уведомить об этом владельца вещей.

                  </p>
                 
                </div>
              </section>
              
              <section id="information-sharing" className="policy-section">
                <h2 className="policy-section-title">6. Ответственность сторон</h2>
                <div className="policy-section-content">
                  <p>
                  6.1. В случае неисполнения или ненадлежащего исполнения своих обязательств по настоящему договору Стороны несут ответственность в соответствии с действующим законодательством Республики Абхазия.
6.2. Заказчик несет ответственность и возмещает реальный ущерб в случае нарушения обязательств по договору, а также утраты или повреждения по его вине имущества Исполнителя в соответствии с законодательством Республики Абхазия.
6.3. За просрочку оплаты услуг Заказчик уплачивает Исполнителю неустойку в размере 30% от стоимости услуг.
6.4. Стороны освобождаются от ответственности в случае, если неисполнение или ненадлежащее исполнение ими своих обязательств по настоящему договору будет связано с обстоятельствами, не зависящими от их воли: природных явлений (землетрясений, наводнений, эпидемий), действий государственных органов, актов террора, войн и т. д.
6.5. Сторона обязана незамедлительно после наступления указанных в п.6.5 настоящего договора обстоятельств уведомить другую Сторону о невозможности исполнения договора и подтвердить документально факт наступления указанных обстоятельств.
Неисполнение условий настоящего пункта влечет для Сторон обязанность по возмещению убытков, связанных с неисполнением условий настоящего договора.

                  </p>
                </div>
              </section>
              
              <section id="cookies" className="policy-section">
                <h2 className="policy-section-title">7. Заключительные положения</h2>
                <div className="policy-section-content">
                  <p>
                  7.1. Настоящий договор составлен и подписан в двух аутентичных экземплярах, по одному для каждой из Сторон.
7.2. Договор вступает в силу с момента его акцепта Заказчиком и действует до полного исполнения обязательств Сторонами.
7.3 Все изменения и дополнения к настоящему договору оформляются дополнительными соглашениями Сторон в письменной форме, которые являются неотъемлемой частью настоящего договора.
7.4 Все споры и разногласия, которые могут возникнуть при исполнении настоящего Договора, разрешаются путем переговоров между Сторонами. Стороны предусматривают обязательный претензионный порядок рассмотрения споров по Договору. Стороны установили, что срок ответа на претензию составляет 10 календарных дней с даты ее получения другой Стороной. В случае не разрешения спора путем переговоров спор передается на рассмотрение в суд по месту нахождения Исполнителя в соответствии с действующим законодательством Республики Абхазия.
7.5. Исполнитель вправе отказаться от договора в следующих случаях:
- если состояние здоровья Заказчика/ Гостя угрожает безопасности его самого или других лиц, а равно создает беспорядок и неустранимые неудобства для других лиц;
- если Заказчик/Гость отказывается оплатить услуги в порядке и сроки, установленные Договором и/или принять условия настоящего Договора;
- если Заказчик/Гость нарушает Правила проживания в гостинице и пользования гостиничными услугами, санитарные правила, правила противопожарной и общественной безопасности, создает угрозу жизни и здоровью других лиц;
- если в вещах (имуществе), находящихся при Заказчике/Госте есть предметы или вещества, создающие (способные создать) угрозу жизни и здоровью других лиц.
В случае отказа Исполнителя от Договора Заказчику/Гостю возвращается уплаченная стоимость гостиничных услуг, за вычетом стоимости фактически предоставленных услуг.
7.6. Исполнитель оставляет за собой право в любое время вносить изменения и дополнения в условия настоящего Договора без согласования с Заказчиком/Гостем с уведомлением Заказчика/Гостя посредством размещения новой редакции измененного документа на Сайте Отеля. Если время вступления изменений в силу дополнительно не оговорено, они вступают в силу с момента опубликования на Сайте Отеля.
7.7. Все уведомления/сообщения, связанные с заключением, исполнением и расторжением настоящего Договора, подлежат направлению по адресу электронной почты Исполнителя, указанной в Договоре, и по адресу Заказчика/Гостя, указанной Заказчиком/Гостем при бронировании или ином заказе гостиничных услуг. Документы, переданные по электронной почте, имеют юридическую силу. Заказчик/Гость обязуется извещать Исполнителя об изменении адреса регистрации, электронной почты, номеров телефонов, в течения 3 календарных дней с момента изменений.
7.8. Гость предоставляет согласие на получение от Исполнителя информационно-рекламных сообщений, в том числе путем SMS и e-mail рассылки, в целях оповещения Гостя о мероприятиях, проводимых на территории Отеля, специальных предложениях, услугах Исполнителя.
7.9. Исполнитель имеет право на отзыв оферты в любой момент по усмотрению Исполнителя путем размещения соответствующей информации на Сайте. В случае отзыва оферты Договор считается прекращенным с момента отзыва.
7.10. Акцептуя настоящий Договор, Заказчик/Гость дает свое согласие на сбор, обработку и хранение персональных данных в целях исполнения настоящего Договора.
7.11. Во всем остальном, что не предусмотрено настоящим договором, Стороны руководствуются действующим законодательством Республики Абхазия.

                  </p>
                </div>
              </section>
              
            </div>
          </div>
          
          <div className="policy-back-link">
            <Link to="/contacts" className="policy-back-button">
              <span>←</span> Вернуться к контактам
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccommodationPolicy; 