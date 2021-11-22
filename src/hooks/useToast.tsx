import React from 'react'
import ReactDOM from 'react-dom'

const Toast = React.lazy(() => import('../components/Toast/Toast'))

let containerDomNode: HTMLDivElement

const useToast = () => {
    const create = (type: 'success' | 'alert' | 'error', message: string) => {
        if (hasTooltip()) return
        createTooltipOnDOM()
        ReactDOM.render(
            <React.Suspense fallback>
                <Toast type={type} message={message} />
            </React.Suspense>,
            containerDomNode,
        )
    }

    const hasTooltip = () => {
        return document.getElementById('sl-tooltip')
    }

    const createTooltipOnDOM = () => {
        containerDomNode = document.createElement('div')
        containerDomNode.id = 'sl-tooltip'
        document.body.appendChild(containerDomNode)
    }

    const success = (message: string) => {
        create('success', message)
    }

    const alert = (message: string) => {
        create('alert', message)
    }

    const error = (message: string) => {
        create('error', message)
    }

    const remove = () => {
        if (!hasTooltip()) return
        document.body.removeChild(document.getElementById('sl-tooltip') as Node)
    }

    return { success, remove, alert, error }
}

export default useToast
