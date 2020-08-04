import React from 'react';
import './styles.css'
import whastappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/51543534?s=460&u=67b9d16ade8d7e3c9aabc079f6bc3bc294398e90&v=4" alt="Ismael Elias" />
                <div>
                    <strong>Ismael Elias</strong>
                    <span>Computação</span>
                </div>
            </header>
            <p>
                Entusiasta a computação <br /><br />
                        O melhor de toda região
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 200,00</strong>
                </p>
                <button type="button">
                    <img src={whastappIcon} alt="Whastapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;