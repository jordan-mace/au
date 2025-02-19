'use client'
import { useState } from 'react'
import styled from 'styled-components'
import styles from './page.module.css'

const Inline = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledInput = styled.input`
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
`
export default function Page() {
    const [pixels, setPixels] = useState(0)
    return (
        <div className={styles.project}>
            <CenteredH1>Pixel to rem</CenteredH1>
            <Inline>
                <StyledInput type="number" value={pixels} onChange={e => setPixels(parseInt(e.target.value))} /> px is equal to <StyledInput type="number" value={pixels / 16} onChange={e => setPixels(parseFloat(e.target.value) * 16)} />rem
            </Inline>
        </div>
    )
}