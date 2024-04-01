import styled from 'styled-components'
import { InputHTMLAttributes, useMemo, useState } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  setValue: (value: string) => void
  value: string
  label: string
  placeholder?: string
  type: InputTypes
}

interface IStyleProps {
  isInputFocused?: boolean
  inputHasText?: boolean
  value: string
}

export type InputTypes = 'text' | 'password'

const StyledEventSearchContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const StyledInputHolder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover input {
    outline: 2px solid purple;
  }
  &:hover label {
    top: -20%;
    font-size: 12px;
    width: auto;
  }
  &:hover button {
    display: flex;
  }
  &:hover input[type='date'] {
    outline: 0;
  }
`

const StyledResetSearchButton = styled.button<IStyleProps>`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  position: absolute;
  height: 100%;
  ${(props: IStyleProps) =>
    props.isInputFocused || props.value !== ''
      ? `display: flex;`
      : `display: none;`}
  top: 50%;
  right: 5%;
  transform: translate(0, -50%);
`

const StyledDatePicker = styled.input`
  color: transparent;
  position: absolute;
  height: 60%;
  aspect-ratio: 1/1;
  top: 50%;
  right: 20%;
  transform: translate(0, -50%);
  pointer-events: none;
  cursor: pointer;
  border: none;
  &:hover {
    border: none;
  }
  ::-webkit-calendar-picker-indicator {
    background-color: white;
    pointer-events: all;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`

const StyledInput = styled.input`
  padding: 8px;
  border: none;
  outline: 1px solid black;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 100%;

  &:focus {
    outline: 2px solid purple;
  }
`

const StyledClearIcon = styled.img`
  height: 40%;
`

const StyledLabel = styled.label<IStyleProps>`
  position: absolute;
  background-color: white;
  padding: 0px 8px;
  margin: 0px 4px;
  transform: translate(0%, -50%);
  cursor: text;
  top: 50%;
  transition: 0.25s ease;
  ${(props: IStyleProps) =>
    props.isInputFocused || props.value !== '' ? `top: -20%;` : `top: 50%;`};

  ${(props: IStyleProps) =>
    props.isInputFocused || props.value !== ''
      ? `width: auto;`
      : `width: 80%;`};

  pointer-events: none;
  ${(props: IStyleProps) =>
    props.isInputFocused || props.value !== ''
      ? `font-size: 12px;`
      : `font-size: 12px;`}
  @media screen and (min-width: 600px) {
    ${(props: IStyleProps) =>
      props.isInputFocused || props.value !== ''
        ? `font-size: 12px;`
        : `font-size: 16px;`}
  }
`

const Input: React.FC<IProps> = (props) => {
  const { value, setValue, ...rest } = props

  const [isInputFocused, setInputFocused] = useState<boolean>(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.type === 'text') {
      const inputValue = e.target.value.replace(/[\s/:']+/g, ' ')
      props.setValue(inputValue)
    }
    if (props.type === 'password') {
      const inputValue = e.target.value
      props.setValue(inputValue)
    }
  }

  const resetValue = () => {
    props.setValue('')
  }

  return (
    <StyledEventSearchContainer>
      <StyledInputHolder>
        <StyledLabel
          isInputFocused={isInputFocused}
          value={value}
          htmlFor="date"
        >
          {props.label}
        </StyledLabel>
        <StyledResetSearchButton
          onClick={resetValue}
          isInputFocused={isInputFocused}
          value={value}
        >
          <StyledClearIcon src="/close.png" alt="clear" />
        </StyledResetSearchButton>
        <StyledInput
          {...rest}
          type={props.type === 'password' ? 'password' : 'text'}
          name="date"
          placeholder={props.placeholder}
          maxLength={100}
          value={props.value}
          onChange={onChange}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
      </StyledInputHolder>
    </StyledEventSearchContainer>
  )
}

export default Input
