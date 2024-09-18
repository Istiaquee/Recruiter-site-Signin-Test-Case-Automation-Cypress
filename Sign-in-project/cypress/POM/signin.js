
class signin{
    SME= ":nth-child(1) > .crd > .pkg > .btnsec > #ser_type"
    sl=  ":nth-child(2) > .crd > .pkg > .btnsec > #ser_type"
    pl =":nth-child(3) > .crd > .pkg > .btnsec > #ser_type"
    pp= ":nth-child(4) > .crd > .pkg > .btnsec > #ser_type"
    hj =":nth-child(5) > .crd > .pkg > .btnsec > #ser_type"
    pnpl = "#ser_type"
    bc= ":nth-child(2) > .crd > .pkg > :nth-child(2) > .btnsec > #ser_type"
    intern = ".bsec > .btnsec > #ser_type"

    urlsl= "https://recruiter.bdjobs.com/?selectedJobType=bc";

    clickPostJob(){
        cy.get('.body > .btn').click()
    }


    clickPackage(pkname){
        
        if(pkname == 'Standard Listing'){
            cy.get(this.sl).click()
        }
        if(pkname === 'Premium Plus'){
            cy.get(this.pp).click()
        }
        if(pkname === 'SME Package'){
            cy.get(this.SME).click()
        }
        // if(pkname === 'Standard Listing'){
        //     cy.get(this.Sl).click()
        // }
        if(pkname === 'Premium Listing'){
            cy.get(this.pl).click()
        }
        // if(pkname === 'Premium Plus'){
        //     cy.get(this.pp).click()
        // }
        if(pkname === 'Hot Job'){
            cy.get(this.hj).click()
        }
        if(pkname === 'PNPL'){
            cy.get('#ngb-nav-1').click()
            cy.wait(8000)
            cy.get(this.pnpl).click()
        }
        if(pkname === 'Selected Blue Collar'){
            cy.get('#ngb-nav-2').click()
            cy.get(this.bc).click()
        }
        if(pkname === 'Internship'){
            cy.get('#ngb-nav-2').click()
            cy.get(this.intern).click()
        }

    }

    clickLoginmodal(){
        cy.get('#modal3 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    }

    clickCreateAccountModal(){
        cy.get('.btn-secondary').click()
    }

    clickClickAccounthm(){
        cy.get('.footer-part2 > a').click()
    }

    clickForgetPass(){
        cy.get('.footer-part1 > a').click()
    }
    
    setUsername(username){
        cy.get('#username').type(username)
    }

    setPassword(password){
        cy.get('#password').type(password)
    }

    clickSigninBtn(){
        cy.get('.form-footer > :nth-child(2) > .btn').click()
    }
    
    clickLoginbtn(){
        cy.get('.btn.btn-primary.btn-login',{timeout: 5000}).click()
    }
    customss(){
        cy.screenshot({ clip: { x: 20, y: 15, width: 1000, height: 550 } });
    }
    

}


export default signin;