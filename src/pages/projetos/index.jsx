/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef, useState } from 'react';
import Card from './cards';
import './projetos.scss';

export default function Projetos() {
    const pag1 = useRef();
    const pag2 = useRef();
    const pag3 = useRef();

    const removeActive = () => {
        pag1.current.classList.remove('active');
        pag2.current.classList.remove('active');
        pag3.current.classList.remove('active');
    };

    const active = (pag) => {
        removeActive();
        pag.current.classList.add('active');
    };
    const [img, setImg] = useState({
        site1: './img/geral/GeadorDeCancelamento.jpeg',
        site2: './img/geral/EmBrevePort.jpg',
        site3: './img/geral/EmBrevePort.jpg',
        site4: './img/geral/EmBrevePort.jpg',
    });
    const [tittle, setTittle] = useState({
        site1: 'Gerador de cancelamento',
        site2: 'Em breve!',
        site3: 'Em breve!',
        site4: 'Em breve!',
    });
    const [desc, setDesc] = useState({
        site1: 'Bote seu nome e sexo, para assim descobrir como será cancelado!',
        site2: 'Não fique triste, logo mais terei mais trabalhos para por aqui!!',
        site3: 'Não fique triste, logo mais terei mais trabalhos para por aqui!!',
        site4: 'Não fique triste, logo mais terei mais trabalhos para por aqui!!',
    });

    return (
        <section className="projetos">
            <div data-aos="zoomIn" className="list__container">
                <ul  className="projetos__list">
                    <li>
                        <p
                            ref={pag1}
                            onClick={() => {
                                active(pag1);
                                setImg({
                                    site1: './img/geral/GeadorDeCancelamento.jpeg',
                                    site2: './img/geral/EmBrevePort.jpg',
                                    site3: './img/geral/EmBrevePort.jpg',
                                    site4: './img/geral/EmBrevePort.jpg',
                                });
                                setTittle({
                                    site1: 'Gerador de cancelamneto',
                                    site2: 'Em breve!',
                                    site3: 'Em breve!',
                                    site4: 'Em breve!',
                                });
                                setDesc({
                                    site1: 'Bote seu nome e sexo, para assim descobrir como será cancelado!',
                                    site2: 'Não fique triste, logo mais terei mais trabalhos para por aqui!',
                                    site3: 'Não fique triste, logo mais terei mais trabalhos para por aqui!',
                                    site4: 'Não fique triste, logo mais terei mais trabalhos para por aqui!',
                                });
                            }}
                            className="links_pag links__first active"
                        >
                            {' '}
                            Página I{' '}
                        </p>
                    </li>
                    <li>
                        <p
                            ref={pag2}
                            className="links_pag links__second"
                            onClick={() => {
                                active(pag2);
                                setImg({
                                    site1: './img/geral/EmBrevePort.jpg',
                                    site2: './img/geral/EmBrevePort.jpg',
                                    site3: './img/geral/EmBrevePort.jpg',
                                    site4: './img/geral/EmBrevePort.jpg',
                                });
                                setTittle({
                                    site1: 'Em breve!!',
                                    site2: 'Em breve!!',
                                    site3: 'Em breve!!',
                                    site4: 'Em breve!!',
                                });
                                setDesc({
                                    site1: 'Não fique triste, logo mais terei mais trabalhos para por aqui!',
                                    site2: 'Não fique triste, logo mais terei mais trabalhos para por aqui!',
                                    site3: 'Não fique triste, logo mais terei mais trabalhos para por aqui!',
                                    site4: 'Não fique triste, logo mais terei mais trabalhos para por aqui!',
                                });
                            }}
                        >
                            {' '}
                            Página II{' '}
                        </p>
                    </li>
                    <li>
                        <p
                            ref={pag3}
                            onClick={() => {
                                active(pag3);
                                setImg({
                                    site1: './img/geral/EmBrevePort.jpg',
                                    site2: './img/geral/EmBrevePort.jpg',
                                    site3: './img/geral/EmBrevePort.jpg',
                                    site4: './img/geral/EmBrevePort.jpg',
                                });
                                setTittle({
                                    site1: 'Em breve!!!',
                                    site2: 'Em breve!!!',
                                    site3: 'Em breve!!!',
                                    site4: 'Em breve!!!',
                                });
                                setDesc({
                                    site1: 'Não fique triste, logo mais terei mais trabalhos para por aqui!',
                                    site2: 'Não fique triste, logo mais terei mais trabalhos para por aqui!',
                                    site3: 'Não fique triste, logo mais terei mais trabalhos para por aqui!',
                                    site4: 'Não fique triste, logo mais terei mais trabalhos para por aqui!',
                                });
                            }}
                            className="links_pag links__third"
                        >
                            {' '}
                            Página III{' '}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="cards__container">
                <div data-aos="zoomIn" className="cards__content">
                    {/* Site 1 */}
                    <Card img={img.site1} tittle={tittle.site1} txt={<p>{desc.site1}</p>} link='https://gerador-de-cancelamentos.web.app/' />
                    {/* Site 2 */}
                    <Card img={img.site2} tittle={tittle.site2} txt={<p>{desc.site2}</p>} />
                    {/* Site 3 */}
                    <Card img={img.site3} tittle={tittle.site3} txt={<p>{desc.site3}</p>} />
                    {/* Site 4 */}
                    <Card img={img.site4} tittle={tittle.site4} txt={<p>{desc.site4}</p>} />
                </div>
            </div>
        </section>
    );
}
