import { useEffect, useState } from 'react'
import styled from 'styled-components'
import supabase from '../../../supabase'
import { profileEnd } from 'console'

interface IProps {
  text: string
  name: string
  image: string
  link: string
  fullImage?: boolean
  category: string
  price: number
}

const StyledCard = styled.div`
  width: 300px;
  box-shadow: 10px 10px 10px #101010;
  background-color: #404040;
  padding: 8px;
  border-radius: 16px;
  a {
    height: 100%;
    display: flex;
    gap: 16px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`
const StyledImageSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledImage = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const StyledButton = styled.button`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 8px;
  color: #202020;
  width: 100%;
  border-radius: 16px;
  background-color: white;
  font-weight: 500;
`

const StyledText = styled.p`
  color: white;
  padding: 16px;
  text-align: center;
`

const StyledHeader = styled.div`
  padding-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gainsboro;
`

const StyledName = styled.h1`
  color: white;
  font-size: 20px;
  text-align: center;
  padding-top: 16px;
`

const Card = (props: IProps) => {
  return (
    <StyledCard>
      <StyledHeader>
        <p>{props.category}</p>
      </StyledHeader>
      <a href={`${props.link}`}>
        <StyledImageSection>
          <StyledImage src={props.image} />
        </StyledImageSection>
        <StyledButton>{`Buy Now (Amazon) $${props.price}`}</StyledButton>
      </a>
      <StyledName>{props.name}</StyledName>
      <StyledText>{props.text}</StyledText>
    </StyledCard>
  )
}

export default Card
