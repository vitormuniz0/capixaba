import { Button } from "react-bootstrap";
import { ModalCar } from "./style";

const CustomModal = ({show , handleClose}) =>{

    console.log("show vmodal" , show)

    return(
        <ModalCar show={show} onHide={handleClose}>
            <ModalCar.Header closeButton>
                <ModalCar.Title>Modal</ModalCar.Title>
            </ModalCar.Header>
            <ModalCar.Body>
                Modal exemplo
            </ModalCar.Body>
            <ModalCar.Footer>
                <Button variant="secondary" onClick={handleClose}>Fechar</Button>
            </ModalCar.Footer>
        </ModalCar>
    )
}

export default CustomModal;
