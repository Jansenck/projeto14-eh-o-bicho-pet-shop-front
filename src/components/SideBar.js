import styled from "styled-components";
import { Link } from "react-router-dom";

function Session({ route, classCss, type }) {
  return (
    <Link to={route}>
      <div className={classCss}>
        <p>{type}</p>
      </div>
    </Link>
  );
}

export default function SideBar({
  display,
  animation,
  setAnimation,
  animation2,
  setAnimation2,
  setDisplay,
}) {
  function reverseAnimation() {
    setAnimation("animation-reverse 0.5s");
    setAnimation2("animation2-reverse 0.5s");
    setTimeout(() => setDisplay("none"), 500);
  }

  return (
    <>
      <MenuBar show={display} animation={animation}>
        <Close>
          <ion-icon
            name="close-circle-sharp"
            onClick={reverseAnimation}
          ></ion-icon>
        </Close>
        <List>
          <TextList>
            <Session route={"/products"} type={"Todos"} classCss={""} />
            <Session
              route={"/products?category=dog"}
              type={"Cães"}
              classCss={""}
            />
            <Session
              route={"/products?category=cat"}
              type={"Gatos"}
              classCss={""}
            />
            <Session route={"/fish"} type={"Peixes"} classCss={"last"} />
          </TextList>
          <IconsList>
            <Link to={"/cart"}>
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </Link>
            <Link to={"/signin"}>
              <ion-icon name="person-outline"></ion-icon>
            </Link>
          </IconsList>
        </List>
      </MenuBar>
      <HalfScreen
        show={display}
        onClick={reverseAnimation}
        animation2={animation2}
      />
    </>
  );
}

const MenuBar = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #05668d;
  display: ${(props) => props.show};
  flex-direction: column;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 200;
  position: fixed;
  text-align: left;
  opacity: 0.8;
  top: 0;
  animation: ${(props) => props.animation};

  @keyframes animation {
    from {
      margin-left: -1000px;
    }
    to {
      margin-left: 0px;
    }
  }

  @keyframes animation-reverse {
    from {
      margin-left: 0px;
    }
    to {
      margin-left: -1000px;
    }
  }
`;
const Close = styled.div`
  font-size: 20px;
  margin: 10px;
`;
const List = styled.div`
  margin-top: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TextList = styled.div`
  && p {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
  }

  && div {
    display: flex;
    align-items: center;
    border-top: 1px solid white;
  }

  && div:hover {
    background-color: white;
    color: #02c39a;
  }

  && .last {
    border-bottom: 1px solid white;
  }
`;
const IconsList = styled.div`
  width: 100%;

  && ion-icon {
    margin-left: 5px;
    margin-bottom: 5px;
    font-size: 18px;
  }
`;
const HalfScreen = styled.div`
  display: ${(props) => props.show};
  z-index: 200;
  position: fixed;
  background-color: white;
  opacity: 0.4;
  width: 50vw;
  height: 100vh;
  right: 0;
  top: 0;
  animation: ${(props) => props.animation2};

  @keyframes animation2 {
    from {
      margin-right: -1000px;
    }
    to {
      margin-right: 0px;
    }
  }

  @keyframes animation2-reverse {
    from {
      margin-right: 0;
    }
    to {
      margin-right: -1000px;
    }
  }
`;
