import "./about.scss"
import { CiMap } from "react-icons/ci";
import { MdOutlineSocialDistance } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { MdOutlineAnnouncement } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";





const About = () => {
  return (
    <div className='about'>
        <div class="about-wrapper">
            <div className="about-title">
                <h1>Что такое Tbilink?</h1>
            </div>
        <div class="grid-container">
            <div class="grid-item">
            <CiMap size={40}/>
                <h2>Интерактивная карта</h2>
                <p>Находите заведения и услуги, где говорят по-русски, с помощью нашей удобной карты.</p>
            </div>
            <div class="grid-item">
            <MdOutlineSocialDistance size={40}/>
                <h2>Социальная сеть</h2>
                <p>Общайтесь с другими русскоязычными жителями Грузии, находите новых друзей и поддерживайте контакты.</p>
            </div>
            
            <div class="grid-item">
            <MdEvent size={40}/>
                <h2>Мероприятия и события</h2>
                <p>Будьте в курсе всех русскоязычных мероприятий и событий в Грузии.</p>
            </div>
            <div class="grid-item">
            <MdOutlineAnnouncement size={40}/>

                <h2>Объявления</h2>
                <p>Узнавайте о новых вакансиях, услугах и предложениях от русскоязычных жителей.</p>
            </div>
            <div class="grid-item">
            <MdOutlineContactSupport size={40} />

                <h2>Помощь и поддержка</h2>
                <p>Получайте советы и помощь от более опытных жителей.</p>
            </div>
            <div class="grid-item">
            <MdLibraryBooks size={40}/>

                <h2>Полезные ресурсы</h2>
                <p>Получите доступ к важной информации и справочникам для жизни в Грузии.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
