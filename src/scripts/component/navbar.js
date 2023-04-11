class Navbar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
            .nav-container{
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 10px 0;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }

            .nav-title{
                font-family: 'Poppins', sans-serif;
                font-size: 2rem;
                font-weight: 700;
                color: #fff;
                margin: 0;
                padding: 0;
            }

            mark {
                color: #BA5799;
                background-color: transparent;
            }

            .nav-menu{
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .nav-menu li{
                margin: 0 10px;
            }

            .nav-menu li a{
                text-decoration: none;
                color: #fff;
                font-size: 1.2rem;
            }

            @media (max-width: 768px) { 
                .nav-container{
                    flex-direction: column;
                    align-items: center;
            }
            
            @media (max-width: 480px) { 
                .nav-container{
                    flex-direction: column;
                    align-items: center;
                }

                .nav-menu li a{
                    font-size: 0.8rem;
                }
            }

            

            </style>
            <div class="nav-container">
                <h2 class="nav-title"><mark>Lo</mark>Film</h2>
                <ul class="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#anime">Anime</a></li>
                    <li><a href="#movie">Movie</a></li>
                    <li><a href="#tvseries">TV Series</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define("nav-bar", Navbar);
