import { Component, ErrorInfo, ReactNode } from "react";
import { Error } from "../Error/Error";

type Props = {
    children?: ReactNode;
}

type State = {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <Error />
        }

        return this.props.children;
    }
}
