import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    buttonType: 'primary' | 'aux'
    size: 'sm' | 'md' | 'lg'
}

function Button({
    children,
    className,
    buttonType,
    size,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={`${styles.button} ${styles[buttonType]} ${
                styles[size]
            } ${className ? className : ''}`}
        >
            {children}
        </button>
    )
}

export default React.memo(Button)
