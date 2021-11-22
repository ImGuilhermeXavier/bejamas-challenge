import React, { useRef } from 'react'
import useToast from '../../hooks/useToast'

import styles from './Toast.module.scss'

interface PropsToast {
    type: 'success' | 'alert' | 'error'
    message: string
}

const Toast = ({ type, message }: PropsToast) => {
    const { remove } = useToast()
    const toastRef = useRef<HTMLDivElement>(null)

    const getTimer = React.useCallback(() => {
        return message.trim().length * 0.9
    }, [message])

    React.useEffect(() => {
        const timer = getTimer()
        progressBar(timer)
        setTimeout(() => {
            remove()
        }, getTimer() * 100)
    }, [getTimer, remove])

    function progressBar(timer: number) {
        console.log(styles)
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
