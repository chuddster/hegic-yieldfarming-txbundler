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
    <h1>COMING SOON!</h1>
    </Container>
  );
}

export default Dashboard;
