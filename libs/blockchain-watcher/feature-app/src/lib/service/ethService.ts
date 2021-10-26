import { ethers } from 'ethers'
import { mailService } from './mailService'
import { envStore } from '../store/envStore'
import { SlmFactory, SlmFactory__factory } from '@solomon/shared/util-contract'
import { Provider } from '@ethersproject/providers'

export class EthService {
  provider: Provider | null = null
  contract: SlmFactory | null = null

  async onChargebackCreated() {
    // TODO: Process event
    await mailService.sendChargebackCreatedEmail('A')
    await mailService.sendChargebackCreatedEmail('B')
  }

  async onPreorderCreated() {
    // TODO: Process event
    await mailService.sendPreorderCreatedEmail('A')
    await mailService.sendPreorderCreatedEmail('B')
  }

  async onEscrowCreated() {
    // TODO: Process event
    await mailService.sendEscrowCreatedEmail('A')
    await mailService.sendEscrowCreatedEmail('B')
  }

  async getChargebackCreatedLogs() {
    if (!this.contract) {
      return
    }

    let eventFilter = this.contract.filters.ChargebackCreated()
    let events = this.contract.queryFilter(eventFilter)

    // TODO: save last event block hash

    return events
  }

  async getPreorderCreatedLogs() {
    if (!this.contract) {
      return
    }

    let eventFilter = this.contract.filters.PreorderCreated()
    let events = this.contract.queryFilter(eventFilter)

    // TODO: save last event block hash

    return events
  }

  async getEscrowCreatedLogs() {
    if (!this.contract) {
      return
    }

    let eventFilter = this.contract.filters.EscrowCreated()
    let events = this.contract.queryFilter(eventFilter)

    // TODO: save last event block hash

    return events
  }

  async init() {
    let provider = new ethers.providers.JsonRpcProvider(envStore.ethChainUrl)
    let contract = SlmFactory__factory.connect(envStore.contractAddress, provider)

    this.provider = provider
    this.contract = contract

    this.contract.connect(this.provider)
    this.contract.on('ChargebackCreated', this.onChargebackCreated)
    this.contract.on('PreorderCreated', this.onPreorderCreated)
    this.contract.on('EscrowCreated', this.onEscrowCreated)
  }
}

export const ethService = new EthService()
