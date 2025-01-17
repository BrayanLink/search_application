import React, {Component, ErrorInfo} from 'react';
import {ERROR_MESSAGE} from './tokens/tokensApp';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="home_container">
          <h1>{ERROR_MESSAGE}</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
