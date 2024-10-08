import Twitter from "../../assets/Twitter.svg"
import Instagram from "../../assets/Instagram.svg"
import Discord from "../../assets/Discord.svg"

function ConteudoContato() {
    return ( <>
        <div className="container container-contato">
            <div className="titulo-contato">
                <h1>Dúvidas e suporte, entre em contato:</h1>
                <div>
                    <img src={Twitter} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Discord} alt="" />
                </div>
            </div>
            <div className="forms">
                <form action="#">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name"/>

                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email"/>

                    <label htmlFor="email">Mensagem:</label>
                    <textarea name="message" id="message" rows="6"></textarea>

                    <input type="submit" value="Enviar" className="button-forms"/>
                </form>
            </div>
        </div>
            </> );
}

export default ConteudoContato;