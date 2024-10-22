import styled from "styled-components";
import { Modal} from 'react-bootstrap';

export const ModalCar = styled(Modal)`
     .modal-content {
    border-radius: 10px;  /* Borda arredondada */
  }
  
  .modal-header {
    border-bottom: none;  /* Remove a borda inferior */
  }
  
  .modal-footer {
    border-top: none;  /* Remove a borda superior */
  }
`




