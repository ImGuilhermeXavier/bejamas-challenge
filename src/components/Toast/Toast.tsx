import React, { useRef } from 'react'
import useToast from '../../hooks/useToast'

import styles from './Toast.module.scss'

interface PropsToast {
    type: 'success' | 'alert' | 'error'
    message: string
}

const TOAST_TIME = 800

const Toast = ({ type, message }: PropsToast) => {
    const { remove } = useToast()
    const toastRef = useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        progressBar(TOAST_TIME)
        setTimeout(() => {
            remove()
        }, TOAST_TIME)
    }, [remove])

    function progressBar(timer: number) {
        const id = setInterval(frame, timer)
        let width = 1
        function frame() {
            if (width >= 99) {
                clearInterval(id)
            }
            width++
            if (!toastRef.current) throw Error('Toast is not defined')
            toastRef.current.style.width = width + '%'
        }
    }

    return (
        <div className={`${styles.toast} ${styles[type]}`} onClick={remove}>
            {message}
            <div ref={toastRef} className={styles.progressBar}></div>
        </div>
    )
}

export default Toast
