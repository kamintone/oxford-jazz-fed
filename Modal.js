import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from './Portal';
import Icon from './Icon';

export default class Modal extends Component {
  render() {
    const { children, toggle, on, position } = this.props;
    return (
      <Portal>
        {on &&
          <ModalWrapper>
            <ModalCard>
            <div style={{left: position}}>
              <CloseButton>
                <Icon name="close" />
              </CloseButton>
              <div>{children}</div>
            </div>
            </ModalCard>
            <Background onClick={toggle}/>
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
  position: relative;
  border-radius: 5px;
  background: beige;
  box-shadow: 5px 5px 10px rgba(0, 0, 128, 0.3);
  padding: 15px;
  z-index: 10;
  min-width: 200px;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: red;
  color: white;
  margin: 5px;
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