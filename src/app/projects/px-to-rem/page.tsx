'use client'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import styles from './page.module.css'
import ControlledInput from './ControlledInput'

const Inline = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
}
`

const StyledInput = styled(ControlledInput)`
    text-decoration: none;
    text-align: center;
    border: none;
        outline: none;

    focus {
        outline: none;
    }
`

const CenteredH1 = styled.h1`
    text-align: center;
    padding-bottom: 1rem;
`
export default function Page() {
    const [pixels, setPixels] = useState(64);
    const [rem, setRem] = useState(4);

    useEffect(() => {
        setRem(pixels / 16)
    }, [pixels])

    useEffect(() => {
        setPixels(rem * 16)
    }, [rem])

    return (
        <div className={styles.project}>
            <CenteredH1>Pixel to rem</CenteredH1>
            <Inline>
                <StyledInput value={pixels + "px"} onChange={e => setPixels(parseInt(e.target.value))} />
                <p>is equal to </p>
                <StyledInput value={rem + "rem"} onChange={e => setRem(parseFloat(e.target.value))} />
            </Inline>
        </div>
    )
}