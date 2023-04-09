import React from 'react'
import Navbar from './GovernanceComponents/Navbar/Navbar'
import Footer from './GovernanceComponents/Footer/Footer'
import ProposalHero from './ProposalComponent/ProposalHero'

const Proposal = () => {
  return (
    <div>
        <Navbar />
        <div className="absolute top-48 w-full">
        <ProposalHero />
        <Footer />
        </div>
    </div>
  )
}

export default Proposal