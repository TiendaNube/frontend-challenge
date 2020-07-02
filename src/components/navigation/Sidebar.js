import React, { Component } from "react";
import classname from "classname";

import { ButtonIcon } from "components/button";

class Sidebar extends Component {
  state = {
    sidebarOpen: true,
    userName: "Martín Palombo",
    storeName: "My Store Name",
    storeLink:
      "teste-brasil.lojavirtual.seudominino.lojavirtual.com.br.compremania",
    storeLogo:
      "https://image.ibb.co/dBScXd/Captura_de_Tela_2018_05_31_a_s_14_51_07.png",
    email: null,
    id: null,
  };
  render() {
    const {
      sidebarOpen,
      userName,
      storeName,
      storeLogo,
      storeLink,
    } = this.state;

    const classComponent = classname("sidebar", {
      "sidebar--closed": !sidebarOpen,
    });

    return (
      <div className={classComponent}>
        <div className="sidebar--header">
          <div className="store--info">
            <img src={storeLogo} height="40" />
            <div>
              <div className="title">{storeName}</div>
              <div className="user">{userName}</div>
            </div>
          </div>

          <ButtonIcon clamp outline block icon="external" pos="right">
            {storeLink}
          </ButtonIcon>
        </div>
        <div className="sidebar--content">{this.props.children}</div>
      </div>
    );
  }
}

export default Sidebar;
