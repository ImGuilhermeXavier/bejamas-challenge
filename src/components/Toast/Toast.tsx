import React from 'react'
import useToast from '../../hooks/useToast'

import styles from './Toast.module.scss'

interface PropsToast {
    type: 'success' | 'alert' | 'error'
    message: string
}

const Toast = ({ type, message }: PropsToast) => {
    const { remove } = useToast()

    const getTimer = React.useCallback(() => {
        return message.trim().length * 0.9
    }, [message])

    React.useEffect(() => {
        progressBar(styles.progressBar, getTimer())
        setTimeout(() => {
            remove()
        }, getTimer() * 100)
    }, [getTimer, remove])

    function progressBar(className: string, timer: number) {
        const id = setInterval(frame, timer)
        let width = 1
        let elem = document.querySelector(className) as HTMLDivElement
        function frame() {
            if (width >= 99) {
                clearInterval(id)
            }
            width++
            elem.style.width = width + '%'
        }
    }

    return (
        <div className={`${styles.tooltip}`} onClick={remove}>
            {message}
            <div className={styles.progressBar}></div>
        </div>
    )
}

export default Toast
