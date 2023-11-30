import passo0 from "../../assets/alimentacao-saudavel/0.png";
import passo1 from "../../assets/alimentacao-saudavel/1.png";
import passo2 from "../../assets/alimentacao-saudavel/2.png";
import passo3 from "../../assets/alimentacao-saudavel/3.png";
import passo4 from "../../assets/alimentacao-saudavel/4.png";
import passo5 from "../../assets/alimentacao-saudavel/5.png";
import passo6 from "../../assets/alimentacao-saudavel/6.png";
import passo7 from "../../assets/alimentacao-saudavel/7.png";
import passo8 from "../../assets/alimentacao-saudavel/8.png";
import passo9 from "../../assets/alimentacao-saudavel/9.png";
import "./style.scss";

export default function DezPassos() {
  return (
    <div className="container">
      <h1 className="text-center">10 PASSOS PARA UMA ALIMENTAÇÃO SAUDÁVEL</h1>

      <div className="lista container">
        <div className="passo">
          <img src={passo1} alt="primeiro passo" className="passos-img" />
          <strong>
            Utilize na sua alimentação alimentos in natura ou minimamente
            processados.
          </strong>
          <p>
            Usar uma variedade de alimentos: grãos, raízes, tubérculos,
            farinhas, legumes, verduras, frutas, castanhas, leite, ovos, carnes
            entre outros.
          </p>
        </div>
        <div className="passo">
          <img src={passo2} alt="segundo passo" className="passos-img" />
          <strong>
            Use gorduras, sal e açúcar em pequenas quantidades ao temperar e
            cozinhas seus alimentos.
          </strong>
          <p>
            Quando utilizados com moderação esses alimentos contribuem para
            tornar sua preparação mais saborosa.
          </p>
        </div>
        <div className="passo">
          <img src={passo3} alt="terceiro passo" className="passos-img" />
          <strong>Limite o consumo de alimentos processados</strong>
          <p>
            Em pequenas quantidades podem ser consumidos como ingredientes de
            preparações culinárias ou parte das refeições. São exemplos de
            alimentos processados: conservas de legumes, compotas de frutas,
            pães e queijos.
          </p>
        </div>
        <div className="passo">
          <img src={passo4} alt="quarto passo" className="passos-img" />
          <strong>Evite o consumo de alimentos ultraprocessados</strong>
          <p>
            Por conta de suas apresentações tendem a serem consumidos em
            excesso, sendo utilizado como substituição de alimentos in natura ou
            minimamente processados. São exemplos desses alimentos: biscoito
            recheado, salgadinhos de pacote, refrigerantes, macarrão instantâneo
            entre outros.
          </p>
        </div>
        <div className="passo">
          <img src={passo5} alt="quinto passo" className="passos-img" />
          <strong>
            Comer com regularidade e atenção em ambientes apropriados e se
            possível em companhia
          </strong>
          <p>
            Faça suas refeições em horários semelhantes todos os dias, evite
            “beliscar” entre as refeições, coma devagar, mastigue bem os
            alimentos. Sempre que possível faça a refeição em família.
          </p>
        </div>
        <div className="passo">
          <img src={passo6} alt="sexto passo" className="passos-img" />
          <strong>
            Faça suas compras em locais que ofertem variedades de alimentos in
            natura ou minimamente processados.
          </strong>
          <p>
            Procure fazer suas compras em mercados, feiras livres de produtores
            locais. Prefira legumes, verduras e frutas da estação. Sempre que
            possível opte por alimentos orgânicos diretamente de pequenos
            produtores.
          </p>
        </div>
        <div className="passo">
          <img src={passo7} alt="sétimo passo" className="passos-img" />
          <strong>
            Desenvolva, exercite e compartilhe habilidades culinárias.
          </strong>
          <p>
            Converse com pessoas que saibam cozinhar, peça receitas a
            familiares, amigos e colegas, consulte a internet e teste novas
            receitas.
          </p>
        </div>
        <div className="passo">
          <img src={passo8} alt="oitavo passo" className="passos-img" />
          <strong>
            Planeje o uso do tempo para dar a alimentação o espaço que ela
            merece.
          </strong>
          <p>
            Planeje suas compras, organize sua dispensa, defina com antecedência
            o cardápio da sua semana. Compartilhe com sua família a
            responsabilidade relacionadas ao preparo das refeições.
          </p>
        </div>
        <div className="passo">
          <img src={passo9} alt="nono passo" className="passos-img" />
          <strong>
            Dê preferência quando fora de casa a locais que servem refeições
            feitas na hora.
          </strong>
          <p>
            Procure locais com refeições feitas na hora e com preço justo como
            restaurantes de comida a quilo.
          </p>
        </div>
        <div className="passo">
          <img src={passo1} alt="décimo passo" className="passos-img" />
          <img src={passo0} alt="décimo passo" className="passos-img" />
          <strong>
            Seja crítico quanto a informações, orientações e mensagens sobre
            alimentação veiculadas em propagandas comerciais.
          </strong>
          <p>
            Lembre-se que a função essencial da publicidade é aumentar a venda
            de produtos. Avalie com crítica o que você lê sobre a alimentação.
            Sempre que possível leia e avalie os rótulos dos alimentos.
          </p>
        </div>
      </div>
    </div>
  );
}
