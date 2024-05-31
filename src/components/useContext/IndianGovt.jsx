import React from 'react'
import StateGovt from './StateGovt'

const IndianGovt = () => {
const yojna = {
    money : 1000,
    rashan: true,
    penstion: 500

}

  return (
    <>
    <div>IndianGovt</div>
    <StateGovt yojna={yojna}/>
    </>
  )
}

export default IndianGovt