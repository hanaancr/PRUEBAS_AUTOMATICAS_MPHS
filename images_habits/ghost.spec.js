context('Login Tests', () => {

    it('Login fallido y login correcto', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('form[id="login"]').find('input[name="identification"]').click().type("hanaancr1@gmail.com")
        cy.get('form[id="login"]').find('input[name="password"]').click().type("xxxxxx")
        cy.get('form[id="login"]').find('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()
        cy.wait(2000)
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('form[id="login"]').find('input[name="identification"]').click().type("hanaancr1@gmail.com")
        cy.get('form[id="login"]').find('input[name="password"]').click().type("hanaancr2020")
        cy.get('form[id="login"]').find('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()

      })
});

context('Creación de un post', () => {

    it('Creación de un post', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('form[id="login"]').find('input[name="identification"]').click().type("hanaancr1@gmail.com")
        cy.get('form[id="login"]').find('input[name="password"]').click().type("hanaancr2020")
        cy.get('form[id="login"]').find('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()

        cy.get('li[class="gh-nav-list-new relative"]').find('a[title="New post"]').click()
        cy.get('textarea[placeholder="Post Title"]').click().type("Five riders on the storm")
        cy.visit('http://localhost:2368/ghost/#/posts?type=draft', {timeout : 50000 } )
        cy.wait(2000)
        cy.get('main[role="main"]').contains('Five riders on the storm').click()
        cy.get('div[data-placeholder="Begin writing your post..."]').type('xx {enter} ')
        cy.get('button[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]').click()
        cy.visit('http://localhost:2368/ghost/#/posts?type=published', {timeout : 50000 } )
        cy.get('main[role="main"]').contains('Five riders on the storm').click()

        
      })

      it('Creación de una página', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('form[id="login"]').find('input[name="identification"]').click().type("hanaancr1@gmail.com")
        cy.get('form[id="login"]').find('input[name="password"]').click().type("hanaancr2020")
        cy.get('form[id="login"]').find('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()

        cy.visit('http://localhost:2368/ghost/#/pages', {timeout : 5000 } )
        cy.get('a[href="#/pages/"]').click()
        cy.get('main[role="main"]').find('section[class="view-action"]').find('a[href="#/editor/page/"]').click()
        cy.get('main[role="main"]').find('textarea[placeholder="Page Title"]').click().type(title)
        cy.get('main[role="main"]').find('div[data-placeholder="Begin writing your page..."]').click()
        cy.visit('http://localhost:2368/ghost/#/pages', {timeout : 5000 } )
        cy.wait(2000)
        cy.get('main[role="main"]').contains(title).click({force:true})
        cy.get('main[role="main"]').contains.find('div[data-placeholder="Begin writing your page..."]').click().type("Cocomelon")
        cy.contains('Publish').click()
        cy.get('footer[class="gh-publishmenu-footer"]').find('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.wait(2000)
      })
});