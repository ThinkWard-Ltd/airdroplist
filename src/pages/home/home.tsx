import {useState} from 'react'
import Header from './components/header'
import Tip from './components/tip'

export default () => {
  const [isShow, toggle] = useState<boolean>(true)
  return (
    <>
      {isShow && <Tip close={() => {
        toggle(false)
      }} />}
      <Header />
    </>
  );
}

