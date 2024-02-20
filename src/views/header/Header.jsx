function Header() {
    return (
        <div className="header">
            <nav class=" container navbar navbar-expand-sm navbar-dark">
              <div class="container-fluid">
                <div className="title">
                  <a class="navbar-brand fs-2" href="#">Darlison Silva</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                  <ul class="navbar-nav fs-4">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Projeto</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Jornada</a>
                    </li> 
                    
                  </ul>
                </div>
              </div>
            </nav>


        </div>
    )
}

export default Header;