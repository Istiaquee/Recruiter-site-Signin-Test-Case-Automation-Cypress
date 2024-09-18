import { it } from "mocha";
import signin from "../POM/signin"

describe('Sign in page', ()=>{
    Cypress.on("uncaught:exception", (err,runnable)=>{
      return false;
    })
    beforeEach(() => {
      cy.visit("https://recruiter.bdjobs.com/");
    });

    
    const ln =new signin();

    it('CSI6', ()=>{
      cy.log('Expected Result- You will get to see a parameter named selectedJobType=bc, Job posting board selected with subscribed service type will open')
      
      
      ln.clickPostJob();
      ln.clickPackage('Standard Listing');
      ln.clickLoginmodal();

      cy.url().should('eq', 'https://recruiter.bdjobs.com/?selectedJobType=bc').then(() => {
        cy.log("Expected Result 1: https://recruiter.bdjobs.com/?selectedJobType=bc");
      });

      
      cy.screenshotWithUrl();

      ln.setUsername("dilruba")
      ln.setPassword("a")
      ln.clickLoginbtn()
      cy.wait(10000)

      cy.get("select#dropdownBasic1>option").contains('Subscribed').then(()=>{
        cy.log('Expected Result Received')
      })
      ln.customss()
      
      })

    it('CSI7', ()=>{
      cy.log('Expected Result- You will get to see a parameter named selectedJobType=sp, Job posting board selected with subscribed service type will open')
      
      ln.clickPostJob();
      ln.clickPackage('Premium Plus');
      ln.clickLoginmodal();

      cy.url().should('eq', 'https://recruiter.bdjobs.com/?selectedJobType=sp').then(() => {
        cy.log("Expected Result 1: https://recruiter.bdjobs.com/?selectedJobType=sp");
      });

    
      cy.screenshotWithUrl();
      
      ln.setUsername("TestAshik")
      ln.setPassword("a")
      ln.clickLoginbtn()
      cy.wait(10000)

      cy.get("select#dropdownBasic1>option").contains('Subscribed').then(()=>{
        cy.log('Expected Result Received')
      })
      ln.customss()
      
      })

      it('CSI8', ()=>{
        cy.log('You will get to see a parameter named selectedJobType=ud, Job posting board selected with service type Standard listing will open')
        
        ln.clickPostJob();
        ln.clickPackage('SME Package');
        ln.clickLoginmodal();
  
        cy.url().should('eq', 'https://recruiter.bdjobs.com/?selectedJobType=ud').then(() => {
          cy.log("Expected Result 1: https://recruiter.bdjobs.com/?selectedJobType=ud");
        });
  
        
        cy.screenshotWithUrl();
        
        ln.setUsername("bdjobtestaccount")
        ln.setPassword("a")
        ln.clickLoginbtn()
        cy.wait(10000)
        
        cy.get("select#dropdownBasic1>option").contains('Standard Listing').then(()=>{
          cy.log('Expected Result Received')
        })
        ln.customss()
  
        })
      

    it('CSI9', ()=>{
      cy.log('Expected Result- You will get to see a parameter named selectedJobType=ud, Job posting board selected with service type SME listing will open')
      
      ln.clickPostJob();
      ln.clickPackage('SME Package');
      ln.clickLoginmodal();

      cy.url().should('eq', 'https://recruiter.bdjobs.com/?selectedJobType=ud').then(() => {
        cy.log("Expected Result 1: https://recruiter.bdjobs.com/?selectedJobType=ud");
      });

      
      cy.screenshotWithUrl();
      
      ln.setUsername("sadman_test")
      ln.setPassword("12345678")
      ln.clickLoginbtn()
      cy.wait(10000)
      
      cy.get("select#dropdownBasic1>option").contains('SME Listing').then(()=>{
        cy.log('Expected Result Received')
      })
      ln.customss()

      })

    it('CSI10', ()=>{
      cy.log('Expected Result- You will get to see a parameter named selectedJobType=bc, Job posting board selected with service type Standard listing will open')
      
      
      ln.clickPostJob();
      ln.clickPackage('Standard Listing');
      ln.clickLoginmodal();

      cy.url().should('eq', 'https://recruiter.bdjobs.com/?selectedJobType=bc').then(() => {
        cy.log("Expected Result 1: https://recruiter.bdjobs.com/?selectedJobType=bc");
      });
      
      
      cy.screenshotWithUrl();

      ln.setUsername("bdjobtestaccount")
      ln.setPassword("a")
      ln.clickLoginbtn()
      cy.wait(10000)

      cy.get("select#dropdownBasic1>option").contains('Standard Listing').then(()=>{
        cy.log('Expected Result Received')
      })
      ln.customss()

      })

    it('CSI11', ()=>{
      cy.log('Expected Result- You will get to see a parameter named selectedJobType=so, Job posting board selected with service type Premium listing will open')
      
      
      ln.clickPostJob();
      ln.clickPackage('Premium Listing');
      ln.clickLoginmodal();

      cy.url().should('eq', 'https://recruiter.bdjobs.com/?selectedJobType=so').then(() => {
        cy.log("Expected Result 1: https://recruiter.bdjobs.com/?selectedJobType=so");
      });

      
      cy.screenshotWithUrl();

      ln.setUsername("bdjobtestaccount")
      ln.setPassword("a")
      ln.clickLoginbtn()
      cy.wait(10000)
      
      cy.get("select#dropdownBasic1>option").contains('Premium Listing').then(()=>{
        cy.log('Expected Result Received')
      })
      ln.customss()
      
      })

    it('CSI12', ()=>{
        cy.log('Expected Result- You will get to see a parameter named selectedJobType=sp, Job posting board selected with service type Premium plus will open')
        
        
        ln.clickPostJob();
        ln.clickPackage('Premium Plus');
        ln.clickLoginmodal();

        cy.url().should('eq', 'https://recruiter.bdjobs.com/?selectedJobType=sp').then(() => {
          cy.log("Expected Result 1: https://recruiter.bdjobs.com/?selectedJobType=sp");
        });
        
        cy.screenshotWithUrl();

        ln.setUsername("bdjobtestaccount")
        ln.setPassword("a")
        ln.clickLoginbtn()
        cy.wait(10000)

        cy.get("select#dropdownBasic1>option").contains('Premium Plus').then(()=>{
          cy.log('Expected Result Received')
        })
        ln.customss()

      })

        it('CSI13', ()=>{
          cy.log('Expected Result- You will get to see a parameter named selectedJobType=hj, Job posting board selected with service type Hot jobs will open')
          
          const ln =new signin();
          ln.clickPostJob();
          ln.clickPackage('Hot Job');
          ln.clickLoginmodal();

          cy.url().should('eq', 'https://recruiter.bdjobs.com/?selectedJobType=hj').then(() => {
            cy.log("Expected Result 1: https://recruiter.bdjobs.com/?selectedJobType=hj");
          });

          cy.screenshot({ clip: { x: 20, y: 15, width: 1000, height: 550 } });
          ln.setUsername("bdjobtestaccount")
          ln.setPassword("a")
          ln.clickLoginbtn()
          cy.wait(10000)

          cy.get("select#dropdownBasic1>option").contains('Hot Job').then(()=>{
            cy.log('Expected Result Received')
          })
          cy.screenshot({ clip: { x: 20, y: 15, width: 1000, height: 550 } });
        
          })

          it('CSI14', ()=>{
            cy.log('You will get to see a parameter named selectedJobType=pnpl, Job posting board selected with service type PNPL will open')
            
           
            ln.clickPostJob();
            
            ln.clickPackage('PNPL');
            
            ln.clickLoginmodal();
            

            cy.url().should('eq', 'https://recruiter.bdjobs.com/?selectedJobType=pnpl').then(() => {
              cy.log("Expected Result 1: https://recruiter.bdjobs.com/?selectedJobType=pnpl");
            });

            
            cy.screenshotWithUrl();

            ln.setUsername("bdjobtestaccount")
            ln.setPassword("a")
            ln.clickLoginbtn()
            cy.wait(10000)

            cy.get("select#dropdownBasic1>option").contains('Post Now Pay Later').then(()=>{
              cy.log('Expected Result Received')
            })
            ln.customss()

            })

    it('CSI15', ()=>{
      cy.log('Expected Result- You will get to see a parameter named selectedJobType=hj, Job posting board selected with service type Hot jobs will open')
      
            
            ln.clickPostJob();
            ln.clickPackage('Selected Blue Collar');
            ln.clickLoginmodal();

            cy.url().should('eq', 'https://recruiter.bdjobs.com/?selectedJobType=freeBlueCol').then(() => {
              cy.log("Expected Result 1: https://recruiter.bdjobs.com/?selectedJobType=freeBlueCol");
            });
      
            
            cy.screenshotWithUrl();

            ln.setUsername("bdjobtestaccount")
            ln.setPassword("a")
            ln.clickLoginbtn()
            cy.wait(10000)

            cy.get("select#dropdownBasic1>option").contains('Selected Blue Collar Jobs').then(()=>{
              cy.log('Expected Result Received')
            })
            ln.customss()

      })
    
      it('CSI16', ()=>{
        cy.log('Expected Result- You will get to see a parameter named selectedJobType=hj, Job posting board selected with service type Hot jobs will open')
        
        
            ln.clickPostJob();
            ln.clickPackage('Internship');
            ln.clickLoginmodal();

            cy.url().should('eq', 'https://recruiter.bdjobs.com/?selectedJobType=intern').then(() => {
              cy.log("Expected Result 1: https://recruiter.bdjobs.com/?selectedJobType=intern");
            });

            
            cy.screenshotWithUrl();

            ln.setUsername("bdjobtestaccount")
            ln.setPassword("a")
            ln.clickLoginbtn()
            cy.wait(12000)

            cy.get("select#dropdownBasic1>option").contains('Internship Announcement (Free)').then(()=>{
              cy.log('Expected Result Received')
            })

            ln.customss()
        
        })

        it('CSI17', ()=>{
          cy.log('Corporate create account page will open at the same tab ');
          
          
              ln.clickPostJob();
              ln.clickPackage('Internship');
              ln.clickCreateAccountModal();


              cy.url().should('eq', 'https://corporate3.bdjobs.com/Corporate_NewAccount.asp').then(() => {
                cy.log("Expected Result: Corporate create account page open at the same tab");
              });

              ln.customss()
          
          })

          it('CSI18', ()=>{
            cy.log('Corporate create account page will open at the same tab ');
            
            
                ln.clickClickAccounthm();
  
                
                cy.url().should('eq', 'https://corporate3.bdjobs.com/Corporate_NewAccount.asp?from=recruiter').then(() => {
                  cy.log("Expected Result: Corporate create account page open at the same tab");
                });

                ln.customss()
            
            })

            it('CSI19', ()=>{
              cy.log('Password retrieve page for Corporate account will open at the same tab ');
              
              
                  // ln.clickClickAccounthm();
                  ln.clickForgetPass();
    
                  
                  cy.url().should('eq', 'https://corporate3.bdjobs.com/password/?from=recruiter').then(() => {
                    cy.log("Expected Result: Password retrieve page for Corporate account will open at the same tab ");
                  });

                  ln.customss()
              
              })
       
              it('CSI20', ()=>{
                cy.log('A validation message like "Enter a valid username and password" will appear ');
                

                ln.clickSigninBtn();
                
                cy.get('.form-validation',{timeout: 8000}).contains('Enter a valid username and password.').then(() => {
                  cy.log('Expected Result: A validation terxt- Enter a valid username and password. will appear')
                })

                ln.customss();
                })

                it('CSI21', ()=>{
                  cy.log('A validation message like "Enter a valid password." will appear');
                  
                  ln.setUsername('dilruba');
                  ln.clickSigninBtn();
                  
                  cy.get('.form-validation',{timeout: 8000}).contains('Enter a valid password.').then(() => {
                    cy.log('Expected Result: A validation terxt- Enter a valid password. will appear')
                  })
  
                  ln.customss();
                  })

              it('CSI22', ()=>{
                cy.log('A validation message like "Enter a valid username." will appear');
                
                ln.setPassword('12345678')
                ln.clickSigninBtn();
                
                cy.get('.form-validation',{timeout: 8000}).contains('Enter a valid username.').then(() => {
                  cy.log('Expected Result: A validation terxt- Enter a valid username. will appear')
                })

                ln.customss();
                })

              it('CSI23', ()=>{
                cy.log('User will sign in to this account successfully.');
                  
                ln.setUsername('dilruba_special@');
                ln.setPassword('Pass@#$?')
                ln.clickSigninBtn();
                  
                cy.url().should('eq', 'https://recruiter.bdjobs.com/dashboard').then(() => {
                  cy.log("Expected Result: User will sign in to this account successfully. ");
                });
  
                ln.customss();
              })

              it('CSI24', ()=>{
                cy.log('User will sign in to this account successfully. Because Username is not case sensitive. ');
                  
                ln.setUsername('DILRUBA');
                ln.setPassword('a')
                ln.clickSigninBtn();

                cy.wait(8000)
                  
                cy.url().should('eq', 'https://recruiter.bdjobs.com/dashboard').then(() => {
                  cy.log("Expected Result: User will sign in to this account successfully. Because Username is not case sensitive.  ");
                });
  
                ln.customss();
              })

              it('CSI25', ()=>{
                cy.log('1. User will not sign in to this account successfully. Because Password is case sensitive.  2. A validation message like "Invalid Credentials." will appear  ');
                  
                ln.setUsername('dilruba ');
                ln.setPassword('A')
                ln.clickSigninBtn();

                cy.wait(8000)
                  
                cy.get('.form-validation',{timeout: 8000}).contains(' Invalid Credentials.').then(() => {
                  cy.log('Expected Result: 1. User will not sign in to this account successfully. Because Password is case sensitive.  2. A validation message like "Invalid Credentials." will appear  ');
                });
  
                ln.customss();
              })

              it('CSI26', ()=>{
                cy.log('1. If inserted space is not auto truncated (verify it from Dev team.), User will not sign in to this account. 2. A validation message like "Invalid Credentials." will appear ');
                  
                ln.setUsername('      dilruba ');
                ln.setPassword('a')
                ln.clickSigninBtn();

                cy.wait(8000)
                  
                cy.get('.form-validation',{timeout: 8000}).contains(' Invalid Credentials.').then(() => {
                  cy.log('Expected Result: 1. If inserted space is not auto truncated (verify it from Dev team.), User will not sign in to this account. 2. A validation message like "Invalid Credentials." will appear  ');
                });
  
                ln.customss();
              })

              it('CSI27', ()=>{
                cy.log('1. If inserted space is not auto truncated (verify it from Dev team.), User will not sign in to this account. 2. A validation message like "Invalid Credentials." will appear  ');
                  
                ln.setUsername(' dil ruba');
                ln.setPassword('a')
                ln.clickSigninBtn();

                cy.wait(8000)
                  
                cy.get('.form-validation',{timeout: 8000}).contains(' Invalid Credentials.').then(() => {
                  cy.log('1. If inserted space is not auto truncated (verify it from Dev team.), User will not sign in to this account. 2. A validation message like "Invalid Credentials." will appear  ');
                });
  
                ln.customss();
              })

              it('CSI28', ()=>{
                cy.log('1. If inserted space is not auto truncated (verify it from Dev team.), User will not sign in to this account. 2. A validation message like "Invalid Credentials." will appear ');
                  
                ln.setUsername(' dilruba   ');
                ln.setPassword('a')
                ln.clickSigninBtn();

                cy.wait(8000)
                  
                cy.get('.form-validation',{timeout: 8000}).contains(' Invalid Credentials.').then(() => {
                  cy.log('1. If inserted space is not auto truncated (verify it from Dev team.), User will not sign in to this account. 2. A validation message like "Invalid Credentials." will appear ');
                });
  
                ln.customss();
              })

              it('CSI29', ()=>{
                cy.log('1. User will not sign in to this account. 2. A validation message like "Invalid Credentials." will appear ');
                  
                ln.setUsername('sadman_test');
                ln.setPassword('   12345678')
                ln.clickSigninBtn();

                cy.wait(8000)
                  
                cy.get('.form-validation',{timeout: 8000}).contains(' Invalid Credentials.').then(() => {
                  cy.log('1. User will not sign in to this account. 2. A validation message like "Invalid Credentials." will appear ');
                });
  
                ln.customss();
              })

              it('CSI30', ()=>{
                cy.log('1. User will not sign in to this account. 2. A validation message like "Invalid Credentials." will appear ');
                  
                ln.setUsername('sadman_test');
                ln.setPassword('1234  5678')
                ln.clickSigninBtn();

                cy.wait(8000)
                  
                cy.get('.form-validation',{timeout: 8000}).contains(' Invalid Credentials.').then(() => {
                  cy.log('1. User will not sign in to this account. 2. A validation message like "Invalid Credentials." will appear ');
                });
  
                ln.customss();
              })

              it('CSI31', ()=>{
                cy.log('User ');
                  
                ln.setUsername('dilruba');
                ln.setPassword('a     ');
                ln.clickSigninBtn();

                cy.wait(8000)
                  
                cy.get('.form-validation',{timeout: 8000}).contains(' Invalid Credentials.').then(() => {
                  cy.log('1. User will not sign in to this account. 2. A validation message like "Invalid Credentials." will appear ');
                });
  
                ln.customss();
              })
                  

})