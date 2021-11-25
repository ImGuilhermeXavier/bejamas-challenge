import React, { useEffect } from 'react'
const BottomSheetModal = React.lazy(() => import('./BottomSheetModal'))

interface PropsBottomSheetModal {
    children: React.ReactNode
    className: string
    handleClose(): void
    isOpen: boolean
}

const BottomSheet = ({ ...props }: PropsBottomSheetModal) => {
    useEffect(() => {
        document.body.setAttribute('style', 'overflow: hidden')
        return () => document.body.removeAttribute('style')
    }, [])

    return (
        <React.Suspense fallback>
            <BottomSheetModal {...props} />
        </React.Suspense>
    )
}

export default BottomSheet
