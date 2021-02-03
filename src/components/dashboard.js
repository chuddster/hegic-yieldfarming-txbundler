import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useWeb3React } from '@web3-react/core'
//import { useHegicContract, useWBTCContract, useStakingETHContract, useStakingWBTCContract } from '../contracts/useContract'
import { Container, Row, Col } from 'reactstrap'
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import classnames from 'classnames'

/*
import YourSharesTab from './tabs/yourSharesTab'
import DepositTab from './tabs/depositTab'
import StatsTab from './tabs/statsTab'
import { PoolContext } from '../context/Pool'
*/

function Dashboard() {
  const { account } = useWeb3React()
  /*
  const HEGIC = useHegicContract();
  const stakingETH = useStakingETHContract();
  const stakingWBTC = useStakingWBTCContract();
  const WBTC = useWBTCContract();

  const [lots, setLots] = useState([]);
  const [totalBalance, setTotalBalance] = useState(ethers.BigNumber.from('0'))
  const [lockedBalance, setLockedBalance] = useState(ethers.BigNumber.from('0'))

  const balances = {
    totalBalance: {value: totalBalance, setValue: setTotalBalance},
    lockedBalance: {value: lockedBalance, setValue: setLockedBalance}
  }

  const waitAndUpdate = async (txRequest) => {
    console.log(txRequest.hash)
    await txRequest.wait();
  }

  const mintHegic = async () => {
    const amountToMint = ethers.BigNumber.from("300000000000000000000000");
    const txRequest = await HEGIC.mintTo(account, amountToMint);
    await waitAndUpdate(txRequest)
  }

  const mintWBTC = async () => {
    const amountToMint = ethers.BigNumber.from("10000000000");
    const txRequest = await WBTC.mintTo(account, amountToMint);
    const txRequest2 = await WBTC.approve(stakingWBTC.address, amountToMint);
    await waitAndUpdate(txRequest)
    await waitAndUpdate(txRequest2)
  }
  
  const sendProfit = async () => {
    const txRequest = await stakingETH.sendProfit({ value: ethers.utils.parseEther("0.1") })
    await waitAndUpdate(txRequest)
  }

  const sendProfitWBTC = async () => {
    const txRequest = await stakingWBTC.sendProfit(ethers.utils.parseUnits("0.1", 8))
    await waitAndUpdate(txRequest)
  }
  */
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <Container >
     <Row style={{marginTop:'10vh', minHeight:'50vh', zIndex:'-1', textAlign:'center'}}>
             <Col sm='12' md={{ size: 6, offset: 3}}>
                     <div style={{color: '#defefe', fontFamily:'Exo 2', fontWeight:'500', lineHeight:'150%'}}>
                     <h1>Coming Soon!</h1> 
                     </div>
             </Col>
     </Row>
      <div style={{position:'absolute', bottom: "1%", left: "48.25%"}}>
	 <a href="https://chuddster.medium.com/claim-hegic-rewards-and-start-yield-farming-in-a-single-transaction-7664b6cfafe8"> <img src={require('./medium-brands.svg')} width="50" height="25" /> </a>
      </div>
    </Container>
 );
}

export default Dashboard;
