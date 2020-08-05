import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img alt="professor" src="https://scontent.fthe12-1.fna.fbcdn.net/v/t1.0-9/10610643_10152745958228604_2645424344977063553_n.png?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=z8NJHPIPEtoAX8ETCwr&_nc_ht=scontent.fthe12-1.fna&oh=ba7bb7cc7b64dea7a79396715257c2eb&oe=5F4DE002"/>
                <div>
                    <strong>Albert Einstein</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada
                <br/><br/>
                Aqui tem mais um bucado de texto referente a química e tals.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )

}

export default TeacherItem;