import Experiencia from '../experiencia';
import Home from '../home/index';
import Projetos from '../projetos';
import Sobre from '../Sobre';

export default function Vertical() {
    return (
        <div className="all">
            <Home />
            <Sobre />
            <Projetos />
            <Experiencia />
        </div>
    );
}
