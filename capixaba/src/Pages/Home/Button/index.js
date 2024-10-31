import React from "react";
import { Button } from "./style";
import { useNavigate } from "react-router-dom";

const MyButton = ({ children, to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if(onClick){
      onClick();
    }else if(to){
      navigate(to);
    }
  };

  return (
    <Button onClick={handleClick}>
      {children}
    </Button>
  ) 
};

export default MyButton;
