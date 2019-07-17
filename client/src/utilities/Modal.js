import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from './Portal';
import Icon from './Icon';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    console.log("Modal: children: ", children)
    return (
      <Portal>
        {on &&
          <ModalWrapper>
            <ModalCard>
            <div>
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <div>{children}</div>
            </div>
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        }      
      </Portal> 
    )
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: absolute;
  top:200px;
  border-radius: 5px;
  box-shadow: 5px 10px 10px #888888;
  background: #eceeb4;
  z-index: 10;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 26px;
  height: 26px;
  z-index: 15;
  background: red;
  color: black;
  padding: 5px;
  margin: 0px;
  border: 1px solid blue;
  border-radius: 5px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height 100%;
  top: 0;
  left: 0;
  background: blue;
  opacity: 0.2;
`