import React, { Component } from 'react';
import './styles.css';

export default class Footer extends Component {
    render() {
        return (
            <footer class="container-fluid py-5 footerbg">
                <div class="row">
                    <div class="col-12 col-md">
                        {/* <img logo aqui> */}
                        <small class="d-block mb-3 text-muted">&copy; 2020-2020</small>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Serviços</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Cadastro</a></li>
                            <li><a class="text-muted" href="#">Empresas</a></li>
                            <li><a class="text-muted" href="#"></a></li>
                            <li><a class="text-muted" href="#">Stuff for developers</a></li>
                            <li><a class="text-muted" href="#">Another one</a></li>
                            <li><a class="text-muted" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Contato</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Resource</a></li>
                            <li><a class="text-muted" href="#">Resource name</a></li>
                            <li><a class="text-muted" href="#">Another resource</a></li>
                            <li><a class="text-muted" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Duvidas</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Business</a></li>
                            <li><a class="text-muted" href="#">Education</a></li>
                            <li><a class="text-muted" href="#">Government</a></li>
                            <li><a class="text-muted" href="#">Gaming</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Sobre Nós</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Equipe</a></li>
                            <li><a class="text-muted" href="#">Localização</a></li>
                            <li><a class="text-muted" href="#">Privacidade</a></li>
                            <li><a class="text-muted" href="#">Termos</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}