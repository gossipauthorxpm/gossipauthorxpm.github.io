import Link from "../struct/Link";

 class DataText {

     getRussiaContent(){
         return this.russia_content;
     }

     getEnglishContent(){
         return this.english_content;
     }


     english_content = {
         first_content_area: {
             text:
                 <p>Programming is an art accessible
                     not every person (every
                     but it is necessary to go through 7 circles of compiler hell,
                     to learn about all the secrets and myths of programming).
                     I can use this skill for your purposes. Basically,
                     everything you want can be described in one of the programming languages
                     (or maybe even several), it is important to know: what do you want from the task and the result,
                     what you want to see is the rest of the technique.<br/><br/>
                     Want a simple Excel fill script?<br/>
                     No problems. Web scraper? No problem.<br/>
                     A complex system of calculating numbers? No problem.<br/>
                     (Won't go down to beats, don't even ask)<br/>
                     Any IT whim for your money =)
                     <br/>
                     <br/>
                     Layout, writing JavaScript scripts. Back-end development.<br/><br/>
                     Do you want something serious in, for example, Java or C#?<br/>
                     Good languages. But the development time will be longer, but
                     fewer bugs and errors in the output (perfect work means it! Even not in these languages)<br/><br/>
                     Give me time and money - and you will have candy in the end!</p>,
             h1_text: 'Python, Java, C#, JavaScript, HTML5, CSS3'
         },
         second_text_area: {
             text: <ul>
                 <li>Website layout - from 5,000 rubles</li>
                 <li>
                     Writing a script in Python - from 3,000 rubles.<br/>
                     If the script is longer than 100 lines
                     (comments, empty lines do not count) - price for every 100 lines of code
                     = principal amount + (code / 100) * 1000 rubles
                     But keep in mind that lines of code are not the main indicator of development cost,
                     I give approximate figures for the cost of an application or script. the total cost
                     development is always negotiable, depending on the complexity of the application you need!
                 </li>
                 <li>
                     Writing dynamics on the page using JavaScript. From 2,000 rubles<br/>
                     I made this point in a separate cost of the application. I don't want to powder your head
                     for the cost of front-end development. In my opinion, everything should be separate
                     from a friend.<br/>
                     According to the same formula for calculating the Python code. Same. The final price adds up
                     from the individual cost of project development.
                 </li>
             </ul>,
             h1_text: "Service cost"
         },

         third_content_area: {
             text: <p>
                 One of my works is a translator of html texts. Translates from
                 one language to 100+ others automatically. Used for translation
                 Google API. Translations work for free. Show version, I'm sorry
                 I can’t, this is a working commercial project, but with the possible order of such a translator,
                 I will hand it over to you. All rights to this translator belong to me.<br/>
                 My second job is GoogleIndexAPI automator. Upload links, ServiceGoogle accounts
                 and index links, (200 links - 1 account)/day.<br/>
                 All work and code is available on GitHub ----->
                 <Link href={'https://github.com/gossipauthorxpm'} text={'Account GitHub'}/>
             </p>,
             h1_text: "Works"
         },

         four_container_area: {
             text: <ul>
                 <li>Telegram -----> <Link href={'https://t.me/gossipauthorxpm01'} text={'gossipauthorxpm01'}/></li>
                 <li>VK -----> <Link href={'https://vk.com/gossipauthorxpm'} text={'gossipauthorxpm'}/></li>
                 <li>Email -----> swyte4@gmail.com</li>
             </ul>,
             h1_text: "Relations"
         }
     }

     russia_content = {
         first_content_area: {
             text:
                 <p>Программирование – это искусство доступное
                     далеко не каждому человеку (каждому
                     но это надо пройти 7 кругов ада компилятора,
                     чтобы прознать о всех тайнах и мифах программирования).
                     Я могу использовать этот навык в ваших целях. В принципе,
                     всё что захотите можно описать на одном из языков программирования
                     (а может даже и нескольких), важно знать: что вы хотите от задачи и результат,
                     которые вы хотите видеть – остальное дело техники.<br/><br/>
                     Хотите простой скрип заполнения Excel?<br/>
                     Нет проблем. Веб-скраппер? Нет проблем.<br/>
                     Сложную систему вычислений чисел? Нет проблем.<br/>
                     (Не буду спускаться до битов, даже не проси)<br/>
                     Любой IT каприз за ваши деньги =)
                     <br/>
                     <br/>
                     Верстка, написание скриптов JavaScript. Разработка back-end.<br/><br/>
                     Хотите что-то серьезное на, например, Java или C#?<br/>
                     Хорошие языки. Но время разработки будет дольше, зато
                     меньше багов и ошибок на выходе (идеальная работа значит это! Даже и не на этих языках)<br/><br/>
                     Дайте мне время и деньги - и у вас на выходе будет конфетка!</p>,
             h1_text: 'Python, Java, C#, JavaScript, HTML5, CSS3'
         },
         second_text_area: {
             text: <ul>
                 <li>Верстка сайта - от 5 000 рублей</li>
                 <li>
                     Написание скрипта на Python - от 3 000 рублей.<br/>
                     Если длинна скрипта выходит больше чем 100 строк
                     (комментарии, пустые строки не учитываются) - цена за каждые 100 строк кода
                     = основная сумма + (код / 100) * 1000 рублей
                     Но учитывайте, что строки кода не основной показатель стоимости разработки,
                     я даю примерные цифры стоимости приложения или скрипта. Итоговая стоимость
                     разработки всегда договорная, смотря какой сложности приложение нужно вам!
                 </li>
                 <li>
                     Написание динамики на странице с помощью JavaScript. От 2 000 рублей <br/>
                     Этот пункт я вынес в отдельную стоимость приложения. Не хочу пудрить вам голову
                     за стоимость front-end разработки. По моему мнению, всё должно быть отдельно друг
                     от друга.<br/>
                     По той же формуле расчета кода Python. То же самое. Итоговая цена складывается
                     от индивидуальной стоимости разработки проекта.
                 </li>
             </ul>,
             h1_text: "Стоимость услуг"
         },

         third_content_area: {
             text: <p>
                 Одна из моих работ - это переводчик html текстов. Переводит с
                 одного языка на 100+ других автоматически. Для перевода используется
                 GoogleAPI. Переводы работают бесплатно. Показать версию, я к сожалению
                 не могу, это рабочий коммерческий проект, но при возможном заказе такого переводчика,
                 передам в пользование вам. Все права на данный переводчик принадлежат мне.<br/>
                 Вторая моя работа, это GoogleIndexAPI автоматизатор. Загружаете ссылки, аккаунты ServiceGoogle
                 и индексируете ссылки, (200 ссылок - 1 аккаунт)/сутки.<br/>
                 Вcе работы и код, доступен на GitHub ----->
                 <Link href={'https://github.com/gossipauthorxpm'} text={' Account GitHub'}/>
             </p>,
             h1_text: "Работы"
         },

         four_container_area: {
             text: <ul>
                 <li>Telegram -----> <Link href={'https://t.me/gossipauthorxpm01'} text={'gossipauthorxpm01'}/></li>
                 <li>VK -----> <Link href={'https://vk.com/gossipauthorxpm'} text={' gossipauthorxpm'}/></li>
                 <li>Email -----> swyte4@gmail.com</li>
             </ul>,
             h1_text: "Связь"
         }
     }
 }
export default DataText;
