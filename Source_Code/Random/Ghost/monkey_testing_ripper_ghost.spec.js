describe('Wikipedia under monkeys', function() {
    it('visits wikipedia and survives monkeys', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        //Sign in
        cy.get('#ember8').click().type('mpbayonalatorre@gmail.com');
        cy.get('#ember10').click().type('Paola197728');
        cy.get('#ember12>span').click();
        cy.wait(2000);
        randomClick(20,1);
    })
})


function randomClick(monkeysLeft, number) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    function elementExists(element) {
        cy.get('body').then(($body) => {
                var numero = 0;
                if ($body.find(element).length){
                    numero = $body.find(element).length;
                }
                return numero > 0;
            }
        )};


    var aleatorio = getRandomInt(0,3)
    var monkeysLeft = monkeysLeft;

    if(monkeysLeft > 0 && aleatorio === 0) {

       randomClick(monkeysLeft,0)
        randomClick(monkeysLeft,0)
        randomClick(monkeysLeft,0)
    }
    else if (monkeysLeft > 0 && aleatorio === 1){


        if(elementExists('textarea')){
            cy.get('textarea').then($text =>{
                var randomText = $text.get(getRandomInt(0,$text.length));
                if(!Cypress.dom.isHidden(randomText)) {
                    cy.wrap(randomText).click({force: true}).type("Ad");
                    monkeysLeft = monkeysLeft - number;
                }
                cy.wait(1000);
                if(number!==0){


                    randomClick(monkeysLeft,1);
                }

            });
        }
        else{cy.wait(1000)}

    }
    else if(monkeysLeft > 0 && aleatorio === 2)
    {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - number;
            }
            cy.wait(1000);
            if(number!==0){


                randomClick(monkeysLeft,1);
            }
        });
    }
    else if(monkeysLeft > 0 && aleatorio === 3)
    {
        cy.get('button').then($btn =>{
            var randomButton = $btn.get(getRandomInt(0,$btn.length));
            if(!Cypress.dom.isHidden(randomButton)) {
                cy.wrap(randomButton).click({force: true});
                monkeysLeft = monkeysLeft - number;
            }
            cy.wait(1000);
            if(number!==0){
                randomClick(monkeysLeft,1);
            }
        });
    }
}
