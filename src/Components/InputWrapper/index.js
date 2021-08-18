import React from 'react'
import { Form, Input, PrimaryButton } from '../CommonComponents.element'
import { Wrapper, WrapperTitle } from './InputWrapper.element'

const InputWrapper = ({title, placeholder}) => {
    return (
        <Wrapper className="light-bg">
            <div className="container">
                <WrapperTitle>{title}</WrapperTitle>
                <Form className="flex-row">
                    <Input type="text" name="text" placeholder={placeholder} autoComplete="off" />
                    <PrimaryButton className="mx-2"><i class="bi bi-search"></i></PrimaryButton>
                </Form>
            </div>
        </Wrapper>
    )
}

export default InputWrapper
