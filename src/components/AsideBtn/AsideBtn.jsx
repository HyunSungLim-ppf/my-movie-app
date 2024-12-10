import React from 'react'
import "./asidebtn.css"
import styled from "@emotion/styled";

const Container = styled.div``;
export const AsideBtn = () => {
    const gotoTop = () =>{
        window.scrollTo(0,0)
    }
  return (
    <div className='aside' onClick={gotoTop}>TOP</div>
  )
}
