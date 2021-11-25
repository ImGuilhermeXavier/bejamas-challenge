import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './BottomSheet.module.scss'

interface PropsBottomSheetModal {
    children: React.ReactNode
    className: string
    handleClose(): void
    isOpen: boolean
}

function BottomSheetModal({
    children,
    className,
    handleClose,
    isOpen,
}: PropsBottomSheetModal) {
    const [openModal, setOpenModal] = React.useState(isOpen)

    const clickOnBackDrop = (e: any) => {
        if (e.target.className === styles.overlay) handleClose()
    }

    const onDragEnd = (e: any) => {
        if (e.offsetY > 100 && openModal === true) {
            handleClose()
        }
    }

    React.useEffect(() => {
        setOpenModal(isOpen)
    }, [isOpen])

    return (
        <div className={styles.bottomSheet}>
            {openModal && (
                <AnimatePresence>
                    <motion.div
                        className={styles.overlay}
                        initial={'initial'}
                        animate={'isOpen'}
                        exit={'exit'}
                        variants={modalVariant}
                        onTap={(e) => clickOnBackDrop(e)}
                    >
                        <motion.div
                            className={`${styles.inside} ${className}`}
                            drag="y"
                            dragConstraints={dragConstraints}
                            dragTransition={dragTransition}
                            whileTap={{ cursor: 'grabbing' }}
                            onDragEnd={onDragEnd}
                            dragElastic={0.5}
                            variants={containerVariant}
                        >
                            <div className={styles.dragDash}></div>
                            {children}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    )
}

const modalVariant = {
    initial: { opacity: 0, zIndex: 1 },
    isOpen: { opacity: 1, zIndex: 200 },
    exit: { opacity: 0, zIndex: 200 },
}

const containerVariant = {
    initial: {
        bottom: '-50%',
        transition: { type: 'fade' },
    },
    isOpen: { bottom: '0%' },
    exit: { bottom: '-100%', duration: 2 },
}

const dragTransition = {
    bounceStiffness: 500,
    bounceDamping: 20,
}

const dragConstraints = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
}

export default React.memo(BottomSheetModal)
