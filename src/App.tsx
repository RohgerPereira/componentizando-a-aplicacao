import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Provider } from './Context';

export function App() {
  
  return (
    <Provider>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      <Content />

    </div>
    </Provider>
  )
}