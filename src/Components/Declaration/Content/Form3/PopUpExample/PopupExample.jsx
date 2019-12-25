import React from 'react';
import { FaQuestionCircle } from "react-icons/fa";
import { Button, Popup } from 'semantic-ui-react'

const PopupExample = () => (
  <Popup content='Add users to your feed' trigger={<FaQuestionCircle color='black' />} />
)

export default PopupExample