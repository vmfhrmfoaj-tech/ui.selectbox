import { h, Component } from 'preact';
import { Store } from '@t/store';
import { Dispatch } from '../dispatch/create';
import { Container } from './container';
// import GridEvent from '../event/gridEvent';
// import { getEventBus } from '../event/eventBus';

interface Props {
  rootElement: HTMLElement;
  store: Store;
  dispatch: Dispatch;
}

export class Root extends Component<Props> {
  public getChildContext() {
    return {
      store: this.props.store,
      dispatch: this.props.dispatch,
    };
  }
  public render() {
    // return <Container rootElement={this.props.rootElement} />;
    return <Container rootElement={this.props.rootElement} />;
  }
}
